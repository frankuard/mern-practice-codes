import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {


const [userData, setUserData] = useState([])

const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)

    setUserData(response.data)

    console.log(response.data);
  }

useEffect(function() {
  getData()
},[index])


let printUserData = <h3 className=' text-gray-400  text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> Loading...</h3>


if (userData.length > 0) {
  printUserData = userData.map(function (elem,idx) {


    return <div key={idx}>

     <a href={elem.url} target='_blank'>
       <div className=' h-40 w-44 bg-white rounded-xl overflow-hidden'>
        <img src={elem.download_url} alt="" key={idx} className=' h-full object-cover w-full' />
    </div>
    <h2 className=' font-bold text-lg'> {elem.author}</h2>
    
     </a>
    </div>
  })
}
  return (
    <div className=' bg-black min-h-screen text-white p-4 '>
      
      <h1 className=' fixed bg-red-500 '> {index}</h1>
      <div className=' flex flex-wrap gap-4'> 
          {printUserData}
      </div>

      <div className=' flex justify-center items-center p-4 gap-6'>
        <button className=' bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={() => {
            console.log("Prev Button Clicked");

            if(index > 1){
              setIndex(index-1)
              setUserData([])
            }
        }}
        >Prev</button>
        <button className=' bg-amber-400 text-black rounded px-4 py-2 font-semibold  text-sm cursor-pointer active:scale-95' 
        onClick={() => {
            console.log("Next Button Clicked");

            setIndex(index +1);
        }}
        
        >Next</button>
      </div>
    </div>
  )
}

export default App