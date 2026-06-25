import React from 'react'
import { MoveRight } from "lucide-react";

const RightCard = (props) => {
    return (
        <div className='h-full w-80 relative overflow-hidden rounded-4xl shrink-0'>
            <img className='h-full w-full object-cover' src={props.image} alt="" />



            <div className=' absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
                <h2 className=' bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold'>{props.id}</h2>
                <div>
                    <p className=' text-lg leading-normal text-white mb-14'> {props.intro}</p>
                </div>


                <div className=' flex justify-between'>
                    <button className=' bg-blue-600 text-white font-medium px-8 py-2 rounded-full cursor-pointer'>
                        {props.tag}
                    </button>
                    <button className='bg-blue-600 text-white font-medium px-5 py-2 rounded-full cursor-pointer'> <MoveRight size={16} strokeWidth={0.75} /> </button>
                </div>

            </div>

        </div>
    )
}

export default RightCard