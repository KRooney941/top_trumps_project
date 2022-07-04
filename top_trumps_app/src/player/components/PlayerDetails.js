import React from "react";
import {Link } from "react-router-dom";

const PlayerDetails = ({deletePlayer, player}) => {

  const handleDeletePlayer = () => {
    deletePlayer(player._id);
  }


  return (
    <>
    <p>name here</p>
    <Link to="/player">
      <button id="deleteBtn" onClick={handleDeletePlayer}>
        <span>❌</span> Delete Player
      </button>
      </Link>
    </>
  )
}

export default PlayerDetails;