import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')


  const [Task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();

    let copyTask = [...Task];

    copyTask.push({ title, details })

    setTask(copyTask);

    console.log(Task);
    setDetails("")

    setTitle("")
  };



  return (

    <div className='min-h-screen bg-black text-white'>

      <form onSubmit={submitHandler} className='flex items-start justify-between p-10 gap-10'>

        <div className='flex w-1/2 items-start flex-col gap-4'>
          {/* FIRST INPUT */}
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='font-medium px-5 w-full py-2 border-2 border-zinc-600 rounded outline-none bg-transparent text-white placeholder-zinc-500 focus:border-zinc-400 transition-colors'

            value={title}
            onChange={(e) => {

              setTitle(e.target.value);
            }}
          />
          {/* DETAILED  INPUT PART */}
          <textarea
            className='px-5 w-full h-28 py-2 border-2 border-zinc-600 rounded outline-none bg-transparent text-white placeholder-zinc-500 focus:border-zinc-400 transition-colors resize-none'
            placeholder='Write Details'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />

          <button className='bg-white w-full text-black px-5 py-2 rounded font-medium hover:bg-zinc-200 transition-colors cursor-pointer'>
            Add Notes
          </button>

        </div>

        <img
          className='h-52 hover:scale-105 transition-transform duration-300'
          src="https://png.pngtree.com/png-vector/20230102/ourmid/pngtree-sticky-pastel-notes-aesthetic-smooth-color-paper-png-image_6548936.png"
          alt=""
        />

      </form>

      <div className='lg:w-1/2 flex-wrap border-t bg-gray-900 gap-4 p-10'>
        <h1 className=' text-xl font-bold '> Your Notes</h1>

        <div className=' flex flex-wrap gap-5 h-full mt-5 overflow-auto '>


          {Task.map((elem, idx) => {

            return <div key={idx} className=' h-52 w-40 rounded-xl bg-white text-black p-4'>
              <h3 className=' leading-tight text-xl font-bold'> {elem.title}</h3>
              <p> {elem.details}</p>
              
            </div>
          })}

        </div>

      </div>

    </div>
  )
}

export default App