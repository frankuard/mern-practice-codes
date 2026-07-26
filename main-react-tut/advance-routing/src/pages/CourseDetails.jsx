import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const parems = useParams()
    console.log(parems);
  return (
    <div>
        <h1> {parems.courseId} Course Detail</h1>
    </div>
  )
}

export default CourseDetails