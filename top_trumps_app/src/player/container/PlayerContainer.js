import React from 'react';
import PlayerDetails from '../components/PlayerDetails';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';


const PlayerContainer = () => {
  return (
    <>
    <h1>This is the PlayerContainer.</h1>
    <PlayerForm />
    <PlayerList />
    <PlayerDetails />
    </>
  )
};

export default PlayerContainer;
