import React from 'react'

const App = () => {

function inputChange() {
  console.log("User is Typing");  
  }

  return (
    <div>
      <button > Click Here</button>
      <input type="text"  placeholder='Enter your name' onChange={inputChange}/>
    </div>
  )
}

export default App