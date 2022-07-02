import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import PlayerContainer from './player/container/PlayerContainer';
import GameContainer from './game/containers/GameContainer';
import HomePageContainer from './HomePageContainer';
import PlayerService from './player/services/PlayerService';
import Player from './player/components/Player';




function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    PlayerService.getPlayers()
      .then(players => setPlayers(players))
  }, [players]);

  const createPlayer = (newPlayer) => {
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
        <Route exact path='/game' element={< GameContainer />} />
        <Route exact path= '/player' element={<PlayerContainer 
        players={players}
        createPlayer={createPlayer}
        updatePlayer={updatePlayer}
        deletePlayer={deletePlayer}
        />} />
      </Routes>
      
    </Router>
  );
};

export default App;
