import React from 'react';
import Player from "./Player"
import './FormAndList.css';

const PlayerList = ({players, updatePlayer, deletePlayer, onPlayerClick}) => {
  const playerNodes= players.map(player => {
    return <Player
      key={player.id}
      player={player}
      updatePlayer={updatePlayer}
      deletePlayer={deletePlayer}
      onPlayerClick={onPlayerClick} 
  />
  });
  
  return (
    <section id="players">
      <h2 id='player-list'>Player List</h2>
      <div id="players-wrapper">
        {playerNodes}
      </div>
    </section>
  )
}

export default PlayerList;