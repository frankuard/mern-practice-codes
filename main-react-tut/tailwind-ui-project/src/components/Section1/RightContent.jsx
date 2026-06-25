import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div  className='h-full w-3/4 p-6 flex flex-nowrap overflow-x-auto gap-4'>
        {props.users.map((elem, idx) => {
            return <RightCard id= {idx+1} image = {elem.img} intro = {elem.intro} tag = {elem.tag}/>
        })}

    </div>
  )
}

export default RightContent