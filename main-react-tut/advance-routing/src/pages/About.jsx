import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  
  let navigate = useNavigate()
  const btnClicked =  () => {
    navigate('/')
  }
  return (
    <div>

      <button onClick={btnClicked} className=' bg-emerald-800 px-5 py2
       rounded m-2 cursor-pointer active:scale-95'> Return to Home Page</button>

       <button onClick={() =>{
        navigate(-1)
       }} className=' bg-emerald-800 px-5 py2
       rounded m-2 cursor-pointer active:scale-95'> Back</button>
       

        <h1> About Page</h1>
    </div>
  )
}

export default About