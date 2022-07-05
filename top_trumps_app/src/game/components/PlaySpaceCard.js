import React from 'react';

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
            <p>{selectedCard.name}</p>
            <img src={selectedCard.sprite} alt={selectedCard.name}></img>
            {showSkills}
        </>
    )
}

export default PlaySpaceCard;
