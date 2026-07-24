import React, { useEffect, useState } from 'react'

const App = () => {

//   const [num, setnum] = useState(0)
// const [num2, setnum2] = useState(100)

//   useEffect(function() {
//     console.log("UseEffect is running...");
//   },[num])

  // THIS IS ALSO CALLED MOUNTING 


  const [a, setA] = useState(0)
const [b, setB] = useState(0)
function aChanging() {
  console.log("A ko Value Change Bhayo");
}

function bChanging() {
  console.log("B ko Value Change Bhayo");
}


useEffect(function() {
  aChanging()

},[a])

useEffect(function() {
  bChanging()

},[b])
  return (
    <div>
{/*       
      <h1>Value of num is {num}</h1>
      <h1> Value of num2 is {num2} </h1>
      <button onMouseEnter={() => {
        setnum(num+1)
        
      }} onMouseLeave={ () => {
        setnum2(num2+10)
      }}> Click</button> */}


      <h1> A is {a}</h1>
      <h1> B is {b}</h1>

      <button onClick={() => {
        setA(a+1)
       
      }}> Change A</button>
      <button onClick={() => {
        setB(b-1)
       
      }}> Change B</button>
    </div>
  )
}

export default App