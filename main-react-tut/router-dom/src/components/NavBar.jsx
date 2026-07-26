import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <div> 
      <h3> Welcome</h3>
      <Link to='/'> 
      Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
     </div>
    </div>
  )
}

export default NavBar