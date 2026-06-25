import React from 'react'
import { useState } from 'react'
const App = () => {

 const [Num, setNum] = useState(10)

 function IncreaseNum() {
  setNum(Num+1)
 }

  function DecreaseNum() {
  setNum(Num-1)
 }
 
  return (
    <div>
      <h1> {Num}</h1>
      <button onClick={IncreaseNum}> Increase </button>
      <button onClick={DecreaseNum}> Decrease </button>
    </div>
  )
}

export default App