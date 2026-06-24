import React from 'react';
import { Bookmark } from "lucide-react";


const App = () => {
  return (
    <div className='parent'>

      <div className="card">

        <div className="top">
          <img src="https://e7.pngegg.com/pngimages/832/502/png-clipart-amazon-logo-text-brand-amazon-text-service-thumbnail.png" alt="" />
          <button>Save  <Bookmark size={15} /></button>
        </div>
        <div className="center">
          <h3> Amazon <span> 5 days ago</span></h3>
          <h2> Senior UI UX Designer</h2>
          <div className='tag'>
            <h4> Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3> $120 per hour</h3>
            <p> Biratnagar, Nepal</p>
          </div>
          <button> Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default App
