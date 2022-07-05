import React from 'react';
import Card from './Card';

const PlayerDeck = ({playerCards}) => {

    const cardsList = playerCards.map((card, index)=>{
        return (
            <>
                <Card card={card} key={index}/>
            </>
        )
    });

    return(
        <>
        
        {cardsList}
        </>
    )
    
}

export default PlayerDeck;
