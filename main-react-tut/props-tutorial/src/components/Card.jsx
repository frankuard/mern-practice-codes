import React from 'react'

const card = (props) => {
  return (

     <div className="card">
            <img src={props.image} alt="" />
            <h1> {props.user}</h1>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sequi, voluptatum repellat non architecto dolorem aperiam ullam! Officiis sapiente suscipit modi adipisci illum.</p>
            <button> View Profile</button>
          </div>
  )
}

export default card
