import React from 'react';
import Player from "./Player"

const PlayerList = ({players, updatePlayer, deletePlayer}) => {
  const playerNodes= players.map(player => {
    return <Player
      key={player.id}
      player={player}
      updatePlayer={updatePlayer}
      deletePlayer={deletePlayer}
  />
  });
  
  return (
    <section id="players">
      <h2>Player List</h2>
      <div id="players-wrapper">
        {playerNodes}
      </div>
    </section>
  )
}

export default PlayerList;