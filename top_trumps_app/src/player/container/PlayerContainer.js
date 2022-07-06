import React, { useState } from "react";
import PlayerDetails from '../components/PlayerDetails';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';





const PlayerContainer = ({ players, createPlayer, updatePlayer, deletePlayer, onPlayerSelected, selectedPlayer, avatars, onAvatarSelected }) => {



  return (
    <>
      <PlayerForm id="form" createPlayer={createPlayer} 
      avatars={avatars}
      onAvatarSelected={onAvatarSelected}/>
      <PlayerList id="list"
        players={players}
        updatePlayer={updatePlayer}
        deletePlayer={deletePlayer}
        onPlayerSelected={onPlayerSelected}
        selectedPlayer={selectedPlayer}
      />
    </>
  )
};

export default PlayerContainer;
