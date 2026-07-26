import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' flex justify-between py-4 px-8 bg-cyan-900 items-center'>
        <h2> BIC</h2>
        <div className=' flex gap-10 text-xl font-medium'> 
            <Link className='text-lg font-medium' to='/'>Home</Link>
            <Link className='text-lg font-medium' to='/about'>About</Link>
            <Link className='text-lg font-medium' to='/product'>Product</Link>
            <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default NavBar