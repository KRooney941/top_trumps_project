import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import PlayerContainer from './player/container/PlayerContainer';
import GameContainer from './game/containers/GameContainer';
import HomePageContainer from './HomePageContainer';
import PlayerService from './player/services/PlayerService';
import GameService from './game/services/GameService';




function App() {

  const [players, setPlayers] = useState([]);
  const [cards, setCards] = useState([]);
  const [playerDeck, setPlayerDeck] = useState([
//     {
//       name: "Cammy",
//       sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
//       skills: [ {"power": 40},
//     {"top_spin": 40},
//     {"back_spin": 10},
//     {"smash": 10},
// ]},
// {
//       name: "Chris",
//       sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
//       skills: [ {"power": 25},
//     {"top_spin": 25},
//     {"back_spin": 40},
//     {"smash": 10},
// ]},
//     {
//       name: "Nadia",
//       sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
//       skills: [ {"power": 20},
//      {"top_spin": 20},
//      {"back_spin": 30},
//      {"smash": 30},
//     ]},
//     {
//       name: "Nick",
//       sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
//       skills: [ {"power": 20},
//      {"top_spin": 20},
//      {"back_spin": 50},
//      {"smash": 10},
//     ]},
//     {
//       name: "Shuna",
//       sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
//       skills: [ {"power": 25},
//      {"top_spin": 25},
//      {"back_spin": 20},
//      {"smash": 30},
//     ]},
  ]);
  

  // useEffect(() => {
  //   PlayerService.getPlayers()
  //     .then(players => setPlayers(players))
  // }, []);

  useEffect(() => {
    GameService.getCards()
      .then(cards => setCards(cards))
      .then(() => {
        addToDeck()
      })
  }, []);

  const addToDeck = () => {
    // console.log(cards[0])
    const playerDeckCopy = []
    for (let i = 0; i < 5; i++){
      const randomIndex = Math.floor(Math.random() * cards.length) 
      playerDeckCopy.push(cards[randomIndex])
    }
    setPlayerDeck(playerDeckCopy);
  }

  const createPlayer = newPlayer => {
    PlayerService.addPlayer(newPlayer)
      .then(savedPlayer => setPlayers([ ...players, savedPlayer ]));
  };

  const updatePlayer = updatedPlayer => {
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

  
  


  return (

    <Router>
      <Routes>
        <Route exact path='/' element={< HomePageContainer />} />
        <Route exact path='/game' element={< GameContainer 
        playerDeck={playerDeck}/>} />
        <Route exact path= '/player' element={<PlayerContainer 
        players={players}
        addPlayer={createPlayer}
        updatePlayer={updatePlayer}
        deletePlayer={deletePlayer}
        />} />
      </Routes>

      <>
      {console.log(playerDeck)}


    </>
      
    </Router>
    
  );
  
};

export default App;
