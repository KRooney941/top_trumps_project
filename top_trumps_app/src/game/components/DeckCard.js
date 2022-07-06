import React from 'react';

const DeckCard = ({ card, getSelectedPlayerCard }) => {

    const handleCardSelect = () => {
        getSelectedPlayerCard(card)

    }

    const showSkills = card.skills.map((skill, index) => {
        return (
            <p key={index}>{Object.keys(skill)}: {skill[Object.keys(skill)]}</p>
        )
    })

    return (
        <>
            <h1>{card.name}</h1>
            <img src={card.sprite} alt={card.name} height="100px"></img>
            {showSkills}
            <button onClick={handleCardSelect}>Select Card</button>
        </>
    )
}

export default DeckCard;