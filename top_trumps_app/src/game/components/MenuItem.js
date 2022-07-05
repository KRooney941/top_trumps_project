import React from 'react';
import { Link } from "react-router-dom";

const MenuItem = () => {
  return (
    <>
    <Link to="/">Home</Link>
    
	    <button className='home-button'><span>HOME</span></button>
    
    </>
  )
}

export default MenuItem;