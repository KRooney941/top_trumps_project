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

        


      <div className="play-space-wrapper">
            <div class="row">
                <div class="column1">
                    <div class="player-column">
                    <PlaySpaceCard selectedCard={selectedPlayerCard} getSkill={getSkill}/>
                    {selectedSkill ? <p>{Object.keys(selectedSkill)}</p>: <p>Not Selected</p>}
                    </div>
                </div>
                <div class="column2">
                    <div class="skill-column-">
                        PLAYER SCORE
                    </div>
                </div>
                <div class="column3">
                    <div class="computer-column">
                        <img class="card-back" src="https://i.ibb.co/6r9P3fK/card-back.png" alt="" height="400px"></img>
                    </div>
                </div>
            </div>
            
            
            
            
            
          <div class="card-details">
          
          {selectedSkill ? <button onClick={handleClick}>PLAY ROUND</button>: null}
          </div>

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