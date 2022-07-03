import React, { useState } from "react";
import PlayerDetails from '../components/PlayerDetails';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';





const PlayerContainer = ({players, createPlayer, updatePlayer, deletePlayer}) => {



  return (
    <>
    <PlayerForm id="form" createPlayer={createPlayer}/>
    <PlayerList id="list"
    players={players}
    updatePlayer={updatePlayer}
    deletePlayer={deletePlayer}
    />
    </>
  )
};

export default PlayerContainer;
