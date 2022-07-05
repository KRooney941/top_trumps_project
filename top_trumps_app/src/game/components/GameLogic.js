// selecting 5 random cards for player and comp- done

// getting a random card from computer deck - done

const compDeck = [
    {
        name: "Ally",
        sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        skills: [{ power: 15 },
        { top_spin: 35 },
        { back_spin: 30 },
        { smash: 20 },
        ]
    },
    {
        name: "Andrew",
        sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        skills: [{ "power": 40 },
        { "top_spin": 10 },
        { "back_spin": 10 },
        { "smash": 40 },
        ]
    },
    {
        name: "Bob",
        sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        skills: [{ "power": 20 },
        { "top_spin": 30 },
        { "back_spin": 30 },
        { "smash": 20 },
        ]
    },
    {
        name: "Cammy",
        sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        skills: [{ "power": 40 },
        { "top_spin": 40 },
        { "back_spin": 10 },
        { "smash": 10 },
        ]
    },
    {
        name: "Chris",
        sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        skills: [{ "power": 25 },
        { "top_spin": 25 },
        { "back_spin": 40 },
        { "smash": 10 },
        ]
    }]

const playerCard = {
    name: "Chris",
    sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
    skills: [{ "power": 25 },
    { "top_spin": 25 },
    { "back_spin": 40 },
    { "smash": 10 },
    ]
};

const topic = "power";


const cardSelectorComp = (compDeck) => {
    const randomCardIndex = Math.floor(Math.random() * compDeck.length)
    const selectedCard = compDeck[randomCardIndex];
    return selectedCard;
}

//getting a random skill from random card - done

const skillSelectorCompRandom = (compDeck) => {
    const selectedCard = cardSelectorComp(compDeck);
    const skills = selectedCard.skills
    const randomSkillIndex = Math.floor(Math.random() * skills.length)
    const selectedSkill = skills[randomSkillIndex];
    return selectedSkill;
}

const skillSelectorCompFromPlayerSkill = (selectedCard) => {
    // console.log(selectedCard.skills)
    const skills = selectedCard.skills;
    let compSkillValue
    for (const skill of skills) {
        // console.log(skill);
        let key = (Object.keys(skill)[0]);
        // console.log(key);
        // console.log(topic);

        if (key === topic) {
            compSkillValue = skill[key];
            // console.log(skill[key]);
        }

    }
    // console.log(compSkillValue)

    return compSkillValue;

}

// comparing random computer skill against player selected skill

const compareSkills = (playerCard, compCard, topic) => {
    const playerValue = skillSelectorCompFromPlayerSkill(playerCard, topic)
    const compValue = skillSelectorCompFromPlayerSkill(compCard, topic)
    if (playerValue > compValue) {
        console.log("Player Wins'")
    } else if (playerValue < compValue) {
        console.log("Comp Wins'")
    } else {
        console.log("Draw")
    }
}



//console.log(skillSelectorCompRandom(compDeck));
//console.log(skillSelectorCompFromPlayerSkill(compDeck, playerSkill));
compareSkills(playerCard, cardSelectorComp(compDeck), topic)



