import { useState,useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [cards, setcards] = useState([])

  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await a.json();


    setcards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()

  }, [])
  
  return (
    <>
      <div className="container">
        {cards.map((card)=>{

        return <div className="card" >
           <h1>{card.title}</h1>
           <p>{card.body}</p>
           <span>By: UserId: {card.userId}</span>
        </div>

       
        })}
      </div>
    </>
  )
}

export default App
