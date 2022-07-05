import React from "react";
import Popup from 'reactjs-popup';

const RoundResultPopUp = () => {
  return (
    <>
      <h3>This is the round result pop up!</h3>
      <Popup trigger={<button className="button"> Open Modal </button>} modal nested > {close => (<div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Modal Title </div>
        <div className="content"> {' '} result goes here</div>
        <div className="actions"> <Popup trigger={<button className="button"> Trigger </button>} position="top center" nested > <span> </span>
        </Popup>
          <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div>
      </div>)} </Popup>
    </>
  )
}

export default RoundResultPopUp;

// Potential css code to test

// .modal { font-size: 12px;}
//.modal > .header { width: 100%; border-bottom: 1px solid gray; font-size: 18px; text-align: center; padding: 5px;}
//.modal > .content { width: 100%; padding: 10px 5px;}
//.modal > .actions { width: 100%; padding: 10px 5px; margin: auto; text-align: center;}
//.modal > .close { cursor: pointer; position: absolute; display: block; padding: 2px 5px; line-height: 20px; right: -10px; top: -10px; font-size: 24px; background: #ffffff; border-radius: 18px; border: 1px solid #cfcece;} 