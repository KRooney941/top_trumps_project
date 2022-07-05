import React, {useState} from 'react';
import PlaySpace from '../components/PlaySpace';
import MenuItem from '../components/MenuItem';
import PlayerDeck from '../components/PlayerDeck';


const GameContainer = ({ playerDeck, selectedPlayer, compDeck }) => {

  const [playerCards, setPlayerCards] = useState([
   {
      name: "Josh",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 20},
      {"top_spin": 20},
      {"back_spin": 50},
      {"smash": 10},
    ]},
    {
      name: "Ken",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 30},
     {"top_spin": 20},
     {"back_spin": 40},
     {"smash": 10},
    ]},
    {
      name: "Kieran",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 10},
     {"smash": 40},
    ]},
    {
      name: "Lou",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 35},
     {"top_spin": 15},
     {"back_spin": 25},
     {"smash": 25},
    ]},
    {
      name: "Michael",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 30},
     {"smash": 20},
    ]},
  ]);

  const [selectedPlayerCard, setSelectedPlayerCard] = useState();
  const [selectedSkill, setSelectedSkill] = useState()

  const getSkill = (skillTopic) => {
    setSelectedSkill(skillTopic[0])
  }

  const getSelectedPlayerCard = (card) => {
    setSelectedPlayerCard(card)
    // removeSelectedCardFromDeck(card)
  }

  const startGame = () => {
    console.log("start-game")
  }

  // const removeSelectedCardFromDeck = (card) => {
  //   let playerCardsCopy = [...playerCards]
  //   // playerCardsCopy.splice(card, 1)
  //   // setPlayerCards(playerCardsCopy)
  //   // console.log(playerCards)
  // }


  return (
    <>

    <MenuItem />
    <PlaySpace selectedPlayerCard={selectedPlayerCard} getSkill={getSkill} selectedSkill={selectedSkill} startGame={startGame}/>
    <PlayerDeck playerCards={playerCards} getSelectedPlayerCard={getSelectedPlayerCard} />

    </>
  )
};

export default GameContainer;