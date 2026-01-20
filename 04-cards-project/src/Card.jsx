import React from 'react'
import {Bookmark} from 'lucide-react'

const card = () => {
  return (
       <div className="card">
       <div>
         <div className="top">
          <img src="data:image/png;base64,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" alt="" />
          <button>Save <Bookmark size={10} /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
          
        </div>
       </div>
        <div className="bottom">   
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
          </div>
      </div>
  )
}

export default card
