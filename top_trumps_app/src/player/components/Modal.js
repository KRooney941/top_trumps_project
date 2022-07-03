import React from "react";
import "./Modal.css";
import PlayerContainer from "../container/PlayerContainer"

function Modal({ setOpenModal, deletePlayer, player }) {

  const handleDeletePlayer = () => {
    deletePlayer(player._id);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Update Player Details</h1>
        </div>
        <div className="body">
          <p>Put form in here</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Update</button>
          <button id="deleteBtn" onClick={handleDeletePlayer}>
        <span>❌</span> Delete Player
      </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
