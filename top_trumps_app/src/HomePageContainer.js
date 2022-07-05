import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
import './HomePageContainer.css'

const HomePageContainer = () => {
  return (

    <div className='rule-set'>
      <h1 className='home-header'>TOP TRUMPS</h1>
      <h2 className='home-header2'>CODECLAN PING PONG LEAGUE</h2>
      
      <h4>
        <ul>
          <li>
          AIM OF THE GAME: Be the first player to win the most rounds against your opponent.
          </li>
          <li>
          START GAME: Player 1 starts the game by choosing a skill stat from their card which they think is highest.
          </li>
          <li>
          CAN YOU TRUMP IT?: Player 2 then chooses a card from their deck to see if the same stat category can be beaten.
          </li>
          <li>
          HIGHEST WINS: The player at the end with the highest stat on their card wins the round.
          </li>
          <li>
            WINNER!: The player with the most round wins at the end of the game is the champ!
          </li>
        </ul>
      </h4>

      <div class="wrapper">
      <div class="left_wall"></div>
      <div class="ball"></div>
      <div class="right_wall"></div>
      <div class="clear"></div>
      </div>

      

      <Link to="/player">
        <main>
	        <button className='new-game'><span>NEW GAME</span></button>
        </main>
        </Link>
    </div>

    
  )
};

export default HomePageContainer;