import React from "react";

const PlayerForm = () => {
  return (
    <>
     <p>Player Form here</p>
        <form name="player-form" action="" method="GET">
        Enter player name:
        <input type="text" name="input-box" value=""></input>
        <button type="button" name="button" value="">Submit</button>
        </form>
    </>
   
  )
}

export default PlayerForm;