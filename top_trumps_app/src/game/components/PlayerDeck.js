import React from 'react';
import Card from './Card';

const PlayerDeck = ({ playerDeck }) => {



    const cardsList = playerDeck.map((card, index) => {
        return (
            <>

                <Card card={card} key={index} />
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
