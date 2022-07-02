import React from 'react';
import PlayerDetails from '../components/PlayerDetails';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';


const PlayerContainer = ({players, createPlayer, updatePlayer, deletePlayer}) => {
  return (
    <>
    <h1>This is the PlayerContainer.</h1>
    <PlayerForm addPlayer={createPlayer}/>
    <PlayerList 
    players={players}
    updatePlayer={updatePlayer}
    deletePlayer={deletePlayer}
    />
    <PlayerDetails />
    </>
  )
};

export default PlayerContainer;
