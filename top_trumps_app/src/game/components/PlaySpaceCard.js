import React from 'react';

const PlaySpaceCard = ({selectedCard, getSkill}) => {

    const handleSkillSelect = (index) => {
      getSkill(index)
    }

    const showSkills = selectedCard.skills.map((skill, index) => {
      return (
        <button onClick={ () => {
            handleSkillSelect(index)
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
