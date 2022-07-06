import React, { useState } from "react";
import PlayerDeck from "./PlayerDeck";
import PlaySpaceCard from "./PlaySpaceCard";

import './PlaySpace.css';

const PlaySpace = ({ getSkill, selectedSkill, startGame, selectedPlayerCard }) => {

  const handleClick = () => {
    startGame()
  }

  // const [selectedPlayerCard, setSelectedPlayerCard] = useState(
  //     {
  //         name: "Simona",
  //         sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  //         skills: [ {"power": 40},
  //        {"top_spin": 20},
  //        {"back_spin": 10},
  //        {"smash": 30},
  //       ]}
  // )


  return (

    <>
      <div className="play-space">

        <h3>Player Score:</h3>
        {selectedPlayerCard ? <PlaySpaceCard selectedCard={selectedPlayerCard} getSkill={getSkill} /> : null}
        {selectedPlayerCard ? <h4>{selectedPlayerCard.name}</h4> : null}
        {selectedSkill ? <p>{selectedSkill}</p> : <p>Not Selected</p>}
        {selectedSkill ? <button onClick={handleClick}>PLAY ROUND</button> : null}








      </div>

    </>




  );

};

export default PlaySpace;