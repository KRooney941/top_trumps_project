const Player = ({player, deletePlayer}) => {

const handleDeletePlayer = () => {
    deletePlayer(player._id);
  }

  return (
    <div className="player-info">
      <h3>{player.name}</h3>
      {/* <p>Wins:{player.wins}</p>
      <p>Draws:{player.draws}</p>
      <p>Losses:{player.losses}</p> */}
      <button onClick={handleDeletePlayer}>
        <span>❌</span> Delete Player
      </button>
    </div>
  )
};

export default Player;