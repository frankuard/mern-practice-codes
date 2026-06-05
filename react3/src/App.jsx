import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

const handleClick =  () => {
  alert("Hey I am Clicked!")
}

  return (
    <>
     


    <div className="button"> 
      <button onClick={handleClick}>Click Me</button>
    </div>
    </>
  )
}

export default App
