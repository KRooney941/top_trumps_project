import React from 'react';

const Card = ({ card }) => {



    return (
        <>

            <p>{card.name}</p>
            <img className="image" src={card.sprite} alt={card.name} width="100px" />
        </>
    )

}

export default Card;
