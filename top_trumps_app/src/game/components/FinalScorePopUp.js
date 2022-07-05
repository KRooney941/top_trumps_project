import React from "react";

const FinalScorePopUp = () => {
  return (
    <>
      <h3>This is the final score pop up!</h3>
      <Popup trigger={<button className="button"> Open Modal </button>} modal nested > {close => (<div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Modal Title </div>
        <div className="content"> {' '} result goes here </div>
        <div className="actions"> <Popup trigger={<button className="button"> Trigger </button>} position="top center" nested > <span> </span>
        </Popup>
          <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div>
      </div>)} </Popup>
    </>
  )
}

export default FinalScorePopUp;