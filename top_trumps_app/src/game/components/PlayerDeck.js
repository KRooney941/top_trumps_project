import React from 'react';
import Card from './PlaySpaceCard';
import DeckCard from './DeckCard';
import './PlayerDeck.css'


const PlayerDeck = ({ playerCards, getSelectedPlayerCard }) => {

    const cardsList = playerCards.map((card, index)=>{
        return (
            <>
                <DeckCard card={card} key={index} getSelectedPlayerCard={getSelectedPlayerCard}/>
            </>
        )
    });
    return (
        <>

            <p>Player Deck</p>

            {/* {cardsList}  */}
            <div class="pic-test">
                <img src="https://i.ibb.co/VT4z3ZS/card-front.png" alt="" height="350px"></img>
                </div>
            {/* <div className='player-deck'> */}

            <div class="box1">
                <img src="https://i.ibb.co/02NxzQZ/anon-avatar.png"></img>
                <div class="boxtext">
                    <p>TESTTTTT</p>
                </div>
            </div>

                
                <img src="https://i.ibb.co/VT4z3ZS/card-front.png" alt="" height="350px"></img>
                <img src="https://i.ibb.co/VT4z3ZS/card-front.png" alt="" height="350px"></img>
                <img src="https://i.ibb.co/VT4z3ZS/card-front.png" alt="" height="350px"></img>
                <img src="https://i.ibb.co/VT4z3ZS/card-front.png" alt="" height="350px"></img>
            
        </>
    );


}

export default PlayerDeck;
