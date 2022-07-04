import React, {useState, useEffect} from 'react';
import PlaySpace from '../components/PlaySpace';
import MenuItem from '../components/MenuItem';
import PlayerDeck from '../components/PlayerDeck';

const GameContainer = ({cards}) => {

  const [playerDeck, setPlayerDeck] = useState([]);

  useEffect(() => {
    addToDeck(cards)
  }, [])

  
  const addToDeck = (cards) => {
    console.log(cards)
    const playerDeckCopy = [...playerDeck, cards[0]]
    // console.log(playerDeckCopy)
    setPlayerDeck(playerDeckCopy);
  }

  const generateRandomCards = () => {

    

    const newDeck = []

    
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * cards.length)
        newDeck.push(cards[randomIndex]);
        console.log(newDeck)}

      return newDeck;
    
  }


  return (
    <>
    <MenuItem />
    <h1>This is the GameContainersdhgsjkdgh.</h1>
    <PlaySpace />
    <PlayerDeck />

    </>
  )
};

export default GameContainer;