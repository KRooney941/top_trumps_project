import React, { useState } from 'react';
import PlaySpace from '../components/PlaySpace';
import MenuItem from '../components/MenuItem';
import PlayerDeck from '../components/PlayerDeck';
import { cardSelectorComp, compareSkills, skillSelectorCompFromPlayerSkill, skillSelectorCompRandom } from '../components/GameLogic';


const GameContainer = ({ playerDeck, selectedPlayer, compDeck, removeSelectedCardFromDeck }) => {



  const [selectedPlayerCard, setSelectedPlayerCard] = useState();
  const [selectedSkill, setSelectedSkill] = useState()

  const getSkill = (skillTopic) => {
    setSelectedSkill(skillTopic[0])
  }

  const getSelectedPlayerCard = (card) => {
    setSelectedPlayerCard(card)
    removeSelectedCardFromDeck(card)
  }

  const startGame = () => {
    const compCard = cardSelectorComp(compDeck);
    const compValue = skillSelectorCompFromPlayerSkill(compCard, selectedSkill);
    const playerValue = skillSelectorCompFromPlayerSkill(selectedPlayerCard, selectedSkill);
    compareSkills(playerValue, compValue);
    setSelectedPlayerCard(null);
    setSelectedSkill(null);

  }




  return (
    <>

      <MenuItem />
      <PlaySpace selectedPlayerCard={selectedPlayerCard} getSkill={getSkill} selectedSkill={selectedSkill} startGame={startGame} />
      <PlayerDeck playerDeck={playerDeck} getSelectedPlayerCard={getSelectedPlayerCard} />

    </>
  )
};

export default GameContainer;