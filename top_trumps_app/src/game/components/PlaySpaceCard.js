import React from 'react';
import './PlaySpaceCard.css';

const PlaySpaceCard = ({selectedCard, getSkill}) => {

    const handleSkillSelect = (skillTopic) => {
      getSkill(skillTopic)
    }

    const showSkills = selectedCard.skills.map((skill, index) => {
      return (
        <button onClick={ () => {
            handleSkillSelect(Object.keys(skill))
        }  }key={index} >{Object.keys(skill)}: {skill[Object.keys(skill)]}</button>
      )
    })

    return (
        <>
            <p class="selected-card-name">{selectedCard.name}</p>
            <img class="player-card-profile" src={selectedCard.sprite} alt={selectedCard.name} height="180px"></img>
            <img class="player-card-front" src="https://i.ibb.co/cLsCZR1/card-front.png" alt="" height="400px"></img>
            {/* {showSkills} */}
        </>
    )
}

export default PlaySpaceCard;
