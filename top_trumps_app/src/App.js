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
  const [playerDeck, setPlayerDeck] = useState([]);
  const [compDeck, setCompDeck] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [avatars, setAvatars] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState("")

  useEffect(() => {
    getAvatars()
  }, [])

  const getAvatars = function(){
    fetch('http://localhost:9000/api/avatars')
    .then(res => res.json())
    .then(avatars => setAvatars(avatars))
}

const onAvatarSelected = function(avatarUrl){
  setSelectedAvatar(avatarUrl)
}

  useEffect(() => {
    PlayerService.getPlayers()
      .then(players => setPlayers(players))
  }, []);


  useEffect(() => {
    GameService.getCards()
      .then(cards => setCards(cards))
  }, []);



  const addToPlayerDeck = (cards) => {
    const playerDeckCopy = []
    for (let i = 0; i < 5; i++) {
      const randomIndexPlayer = Math.floor(Math.random() * cards.length)
      playerDeckCopy.push(cards[randomIndexPlayer])
    }
    setPlayerDeck(playerDeckCopy);
  }

  const addToCompDeck = (cards) => {
    const compDeckCopy = [];
    for (let i = 0; i < 5; i++) {
      const randomIndexComp = Math.floor(Math.random() * cards.length)
      compDeckCopy.push(cards[randomIndexComp])
    }

    setCompDeck(compDeckCopy);
  }

  const createPlayer = (newPlayer) => {


    PlayerService.addPlayer(newPlayer)
      .then(savedPlayer => setPlayers([...players, savedPlayer]));
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

  const onPlayerSelected = (player) => {
    console.log(player);
    addToCompDeck(cards)
    addToPlayerDeck(cards)
    setSelectedPlayer(player);
  };

  const removeSelectedCardFromDeck = (selectedCard) => {
    // console.log(selectedCard);
    let playerDeckCopy = [...playerDeck]
    let index;
    for (let i = 0; i < playerDeckCopy.length; i++) {
      if (selectedCard._id === playerDeckCopy[i]._id) {
        index = i;
        console.log(index);
        console.log(playerDeckCopy[index]);
        playerDeckCopy.splice(index, 1)
      }
    }
    // console.log(index);

    setPlayerDeck(playerDeckCopy)
    // console.log(playerCards)
  }

  // console.log(cards)


  return (

    <Router>
      <Routes>
        <Route exact path='/' element={< HomePageContainer />} />
        <Route exact path='/game' element={< GameContainer
          compDeck={compDeck}
          selectedPlayer={selectedPlayer}
          playerDeck={playerDeck}
          removeSelectedCardFromDeck={removeSelectedCardFromDeck} />} />
        <Route exact path='/player' element={<PlayerContainer
          players={players}
          createPlayer={createPlayer}
          updatePlayer={updatePlayer}
          deletePlayer={deletePlayer}
          onPlayerSelected={onPlayerSelected}
          avatars={avatars}
          selectedAvatar={selectedAvatar}
          onAvatarSelected={onAvatarSelected}
        />} />
        <Route exact path='/playerdetails' element={<PlayerDetails
          players={players}
          updatePlayer={updatePlayer}
          deletePlayer={deletePlayer}
          selectedPlayer={selectedPlayer}
          playerDeck={playerDeck}
          compDeck={compDeck}   
          avatars={avatars}
          selectedAvatar={selectedAvatar}
          onAvatarSelected={onAvatarSelected}
          />} 
          />
      </Routes>
    </Router>

  );

};

export default App;
