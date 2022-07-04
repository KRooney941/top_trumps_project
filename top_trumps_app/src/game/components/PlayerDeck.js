import React from 'react';

const PlayerDeck = ({card}) => {

    return(
        <>
        <p>{card.name}</p>
        <img className="image" src={card.sprite} alt={card.name} width="100px" />
        {/* <p>{card.skills}</p> */}
        
        </>
    )
    
}

export default PlayerDeck;
