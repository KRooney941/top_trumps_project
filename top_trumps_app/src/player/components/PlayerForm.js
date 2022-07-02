import { useState } from 'react';


const PlayerForm = ({addPlayer}) => {
 
const [name, setName] = useState("");

const handleNameChange = (ev) => setName(ev.target.value);

const handleSubmit = ev => {
  ev.preventDefault();
  addPlayer({
    name: name,
  });
  setName("");
}

return  (
  <form onSubmit={handleSubmit}>
    <h1>Add a Player</h1>
    <div className="group">
      <label htmlFor="name">Player Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={name} 
        required 
        onChange={handleNameChange}
      />
    </div>
    <input type="submit" name="submit" value="Save" />
  </form>
);
}

export default PlayerForm;