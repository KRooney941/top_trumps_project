import React from 'react';
import PlaySpace from '../components/PlaySpace';
import MenuItem from '../components/MenuItem';
import PlayerDeck from '../components/PlayerDeck';


const GameContainer = ({ playerDeck, selectedPlayer, compDeck }) => {

  return (
    <>
      {console.log(compDeck)}
      {console.log(playerDeck)}
      <MenuItem />
      <h1>This is the GameContainer.</h1>
      <PlayerDeck playerDeck={playerDeck} />
    </>
  )
};

export default GameContainer;