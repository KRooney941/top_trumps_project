import React from 'react';
import Card from './PlaySpaceCard';
import DeckCard from './DeckCard';


const PlayerDeck = ({ playerCards, getSelectedPlayerCard }) => {

    const cardsList = playerCards.map((card, index)=>{
        return (
            <>
                <DeckCard card={card} key={index} getSelectedPlayerCard={getSelectedPlayerCard}/>
            </>
        )
    });
    return (
        <>

            <p>Player Deck</p>

            {cardsList} 
        </>
    );


}

export default PlayerDeck;
