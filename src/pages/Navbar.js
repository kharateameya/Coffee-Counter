import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

// import Milk from './Milk';
const Navbar = () =>  {
    
  return (
    <div className='nav'> 
    <ul className=''>
      <Link to="/"><li>🏠Home</li></Link>
      <Link to="/milk"><li>Milk</li></Link>
      <Link to="/cream"><li>Cream</li></Link>
      <Link to="/latte"><li>Latte</li></Link>
      
        
      
    </ul>
    </div>
  )
}

export default Navbar