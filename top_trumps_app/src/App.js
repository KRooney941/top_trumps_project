import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import PlayerContainer from './player/container/PlayerContainer';
import GameContainer from './game/containers/GameContainer';
import HomePageContainer from './HomePageContainer';
import PlayerService from './player/services/PlayerService';

import GameService from './game/services/GameService';


import Player from './player/components/Player';
import PlayerDetails from './player/components/PlayerDetails';




function App() {

  const [players, setPlayers] = useState([]);
  const [cards, setCards] = useState([]);

  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const [playerCards, setPlayerCards] = useState([]);

  

  useEffect(() => {
    PlayerService.getPlayers()
      .then(players => setPlayers(players))
  }, []);


  useEffect(() => {
    GameService.getCards()
      .then(cards => setCards(cards))
      .then(()=>{
        addToDeck();
      })
  }, []);

  const addToDeck =() => {
    const playerCardsCopy =[];
    for (let i = 0; i<5;i++){
      const randomIndex = Math.floor(Math.random() * cards.length)
      playerCardsCopy.push(cards[randomIndex]);
    }
    console.log(playerCardsCopy);
    setPlayerCards(playerCardsCopy);
  }


  const createPlayer = (newPlayer) => {

    PlayerService.addPlayer(newPlayer)
      .then(savedPlayer => setPlayers([ ...players, savedPlayer ]));
  };

  const updatePlayer = (updatedPlayer) => {
    PlayerService.updatePlayer(updatedPlayer);

    const updatedPlayerIndex = players.findIndex(player => player._id === updatedPlayer._id);
    const updatedPlayers = [...players];
    updatedPlayers[updatedPlayerIndex] = updatedPlayer;
    setPlayers(updatedPlayers);
  };

  const deletePlayer = idToDelete => {
    PlayerService.deletePlayer(idToDelete);
    setPlayers(players.filter(player => player._id !== idToDelete));
  }


  // console.log(cards)


  return (

    <Router>
      <Routes>
        <Route exact path='/' element={< HomePageContainer />} />
        <Route exact path='/game' element={< GameContainer 
        playerCards={playerCards}/>} />
        <Route exact path= '/player' element={<PlayerContainer 
        players={players}
        createPlayer={createPlayer}
        updatePlayer={updatePlayer}
        deletePlayer={deletePlayer}
        onPlayerSelected={onPlayerSelected} 
        />} />
        <Route exact path='/playerdetails' element= {<PlayerDetails
        players={players}
        updatePlayer={updatePlayer}
        deletePlayer={deletePlayer}
        selectedPlayer={selectedPlayer}
        onPlayerSelected={onPlayerSelected} 
        />} />
      </Routes>
      
    </Router>
  );
};

export default App;
