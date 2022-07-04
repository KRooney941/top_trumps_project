import React from "react";
import PlayerDeck from "./PlayerDeck";

const PlaySpace = ({cards}) => {

  const cardsList = cards.map((card, index)=>{
    return (
        <>
            <PlayerDeck card={card} key={card._id} value={index}/>
        </>
    )
});

  return (
      <>
          {cardsList}
      </>
  );

};

export default PlaySpace;