import React, { useState } from "react";
import Modal from "./Modal";

const Player = ({player, deletePlayer}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeletePlayer = () => {
  
    deletePlayer(player._id);
  }

  return (
    <div className="player-info">
       {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <h3>{player.name}</h3>
      {/* <p>Wins:{player.wins}</p>
      <p>Draws:{player.draws}</p>
      <p>Losses:{player.losses}</p> */}
      <button onClick={handleDeletePlayer}>
        <span>❌</span> Delete Player
      </button>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Update Player
      </button>
    </div>
  )
};

export default Player;