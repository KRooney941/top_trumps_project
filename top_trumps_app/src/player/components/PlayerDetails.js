import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"



const PlayerDetails = ({ deletePlayer, updatePlayer, avatars, onAvatarSelected, selectedAvatar }) => {
  let navigate = useNavigate();
  const location = useLocation()
  const { player } = location.state

  const handleDeletePlayer = () => {
    deletePlayer(player._id);
  }

  const [formData, setFormData] = useState({
    _id: player._id,
    name: "",
    avatar: player.avatar,
    wins: player.wins,
    draws: player.draws,
    losses: player.losses,
    deck: player.deck
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    updatePlayer(formData);
    navigate("../player", { replace: true });
  }

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
    console.log(newFormData)
  }

  const handleChange = function(event) {
    const chosenAvatar = avatars[event.target.value];
    onAvatarSelected(chosenAvatar);
}

const avatarOptions = avatars.map((avatar, index) => {
  return <option value={index} key={index}>{avatar.name}</option>
})

  return (
    <>
      <h1>{player.name}</h1>
      <form id="update-form" onSubmit={handleSubmit}>
        <h2>Update Player</h2>
        <p>Wins:{player.wins}</p>
        <p>Losses:{player.losses}</p>
        <p>Draws:{player.draws}</p>
        <img src="https://i.ibb.co/Hq9Ftz5/kieran-placeholder.jpgs" alt="avatar" />
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
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Avatar</option>
            {avatarOptions}
        </select>
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