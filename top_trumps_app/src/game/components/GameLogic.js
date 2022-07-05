// selecting 5 random cards for player and comp- done

// getting a random card from computer deck - done

const cardSelectorComp = (compDeck) => {
    const randomCardIndex = Math.floor(Math.random() * compDeck.length)
    const selectedCard = compDeck[randomCardIndex];
    return selectedCard;
}

//getting a random skill from random card - done

const skillSelectorComp = (compDeck) => {
    const selectedCard = cardSelectorComp(compDeck);
    const skills = selectedCard.skills
    const randomSkillIndex = Math.floor(Math.random() * compDeck.skills.length)
    const selectedSkill = skills[randomSkillIndex];
    return selectedSkill;
}

// comparing random computer skill against player selected skill

const compareSkills = (playerSkill) => {
    const compSkill = skillSelectorComp(compDeck)
    if (playerSkill > compSkill) {
        console.log("Player Wins'")
    } else if (compSkill > playerSkill) {
        console.log("Comp Wins'")
    } else {
        console.log("Draw'")
    }
}

