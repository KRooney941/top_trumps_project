import { useState } from 'react';
import './FormAndList.css';

const PlayerForm = ({createPlayer}) => {
 
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    wins: 0,
    draws: 0,
    losses:0,
    deck: []
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlayer(formData);
  }

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  return  (
    <>
    <form id="form" onSubmit={handleSubmit}>
      <h1 id='form-heading'>Add New Player</h1>
      <div className="group">
        <label htmlFor="name">Player Name:</label>
        <span><input 
          type="text" 
          id="name" 
          name="name"
          required 
          onChange={onChange}
        />
         <input type="submit" name="submit" value="Save" /></span>
      </div>
     
      <option>Choose an avatar:</option>
    </form>

   
    </>
  );
}

export default PlayerForm;