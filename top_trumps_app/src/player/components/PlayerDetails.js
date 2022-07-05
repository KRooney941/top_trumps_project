import React from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"


const PlayerDetails = ({deletePlayer, updatePlayer}) => {
  let navigate = useNavigate();
  const location = useLocation()
  const { player } = location.state

  const handleDeletePlayer = () => {
    deletePlayer(player._id);
  }

  const [formData, setFormData] = useState({ 
    name: "",
    avatar: "",
    wins: 0,
    draws: 0,
    loses:0,
    deck: []
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer(formData);
    navigate("../player", { replace: true });
  }

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
    // console.log(newFormData)
  }

 
  return (
    <>
    <h1>{player.name}</h1>
    <form id="update-form" onSubmit={handleSubmit}>
      <h2>Update Player</h2>
      <p>Wins:{player.wins}</p>
      <p>Losses:{player.losses}</p>
      <p>Draws:{player.draws}</p>
      <img src={player.avatar} alt="avatar"/>
      <div className="group">
        <label htmlFor="name">Player Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required 
          onChange={onChange}
        />
      </div>
      <input type="submit" name="submit" value="Save" />
    </form>
    <Link to="/player">
      <button id="deleteBtn" onClick={handleDeletePlayer}>
        <span>❌</span> Delete Player
      </button>
      </Link>
    </>
  )
}

export default PlayerDetails;