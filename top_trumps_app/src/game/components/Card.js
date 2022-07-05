import React from 'react';

const Card = ({ card }) => {

    return (
        <>
            <div className='player-cards'>
            <p>{card.name}</p>
            <img className="image" src={card.sprite} alt={card.name} width="100px" />
            </div>
        </>
    )
}

export default Card;
