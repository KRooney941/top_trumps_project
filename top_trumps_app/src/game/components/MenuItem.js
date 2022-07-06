import React from 'react';
import { Link } from "react-router-dom";
import './MenuItem.css'

const MenuItem = () => {
  return (
    <div className='menu-item'>
      
      <Link to="/"><button className='home-button'><span>HOME</span></button></Link>
      
    
    </div>
  )
}

export default MenuItem;