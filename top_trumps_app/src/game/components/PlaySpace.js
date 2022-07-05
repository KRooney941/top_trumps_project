import React from "react";
import PlayerDeck from "./PlayerDeck";
import './PlaySpace.css';

const PlaySpace = ( ) => {

  

  return (

    <>
      <div className="play-space">
          <h3>Player Score:</h3>
          <img className="card-front"
            src="https://i.ibb.co/svx8mwH/card-back.png"
            alt="Back of Card"></img> 
            <img className="card-back"
            src="https://i.ibb.co/svx8mwH/card-back.png"
            alt="Back of Card"></img> 
        </div>

        </>
            

      
  );

};

export default PlaySpace;