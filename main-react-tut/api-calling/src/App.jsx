import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  // async function getData() {
  //   // const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   // console.log(res);
  //     

  
  // }

  const [Data, setData] = useState([])

    const getData = async () => {
    //   const res= await fetch('https://jsonplaceholder.typicode.com/users')

    //  const data= await res.json();

    //  console.log(data);

    // NOW AXIOS

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      console.log(response.data);

      setData(response.data)
    };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {Data.map(function(elem) {
          return <h3 key={elem.id}>Hello, {elem.name}</h3>
        })} </div>
    </div>
  )
}

export default App