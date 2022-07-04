import {Link } from "react-router-dom";

const Player = ({player, deletePlayer}) => {



  return (
    <div className="player-info">
      <h3>{player.name}</h3>
      {/* <p>Wins:{player.wins}</p>
      <p>Draws:{player.draws}</p>
      <p>Losses:{player.losses}</p> */}
      <Link to="/playerdetails/" state={{ player: player}}><button>
              Update Player 
            </button>
      </Link>
    </div>
  )
};

export default Player;