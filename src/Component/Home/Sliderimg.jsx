import React from 'react'
import "./Slider.css";
import { SiEventbrite } from "react-icons/si";
import { FaPrint } from "react-icons/fa";
const Sliderimg = () => {
  return (
   <>
   <div className='upperClass'>
    <div className='upperRight'>
        <h1>Grow Your Business & Make More Profit</h1>
        <h5>
        Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet, but also including phones, display advertising, and any other digital medium.
        </h5>
    </div>
    <div className='upperLeft'>
        <div className='img'>
            <img src="https://media.istockphoto.com/id/1917771195/photo/wide-shot-of-multiethnic-business-team-talking-at-meeting-table.jpg?s=612x612&w=0&k=20&c=Y1DHGl9UFD-8SUw00MDMPMtJ4hDEa51WlfM06pV32fA=   " alt="img"/>
        </div>
    </div>
   </div>
   <div className='mim'>
    <div className='event'>
        <h2 className='e'><SiEventbrite/></h2>
        <h2>Event</h2>
        <h5>we organized evet of your brand promotion</h5>
    </div>
    <div className='event2'>
        <h2 className='e'><FaPrint/></h2>
        <h2>Printing</h2>
        <h5>we organized  your brand printed every things like Bags , tshirt etc</h5>
    </div>
   </div>
   </>
  )
}

export default Sliderimg