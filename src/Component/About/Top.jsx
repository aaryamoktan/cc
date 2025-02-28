import React from 'react'
import "./Top.css"
import { FaPeopleGroup } from "react-icons/fa6";
import img from "./ill.png"
const Top = () => {
  return (
    <>
    <div className='topContainer'>
        <div className='topLeft'>
            <h3><FaPeopleGroup/></h3>
            <h6>ABOUT OUR COMPANY</h6>
            <h2>We are team of expert people with creativity ideas</h2>
            <h7>As an example, let’s take the content marketing process, It’s a process you’ll find in every Marketing Department out there. There will be writers, designers, SEO experts, and web designers, all working together to create a single piece of content.</h7>
            <div className='topLeftInner'>
                <div className='Experince'>
                    <h5>15+
                    </h5>
                    <h8>Years of Experience</h8>
                </div>
                <div className='Experince'>
                <h5>100+
                    </h5>
                    <h8>Customers</h8>
                </div>
            </div>
        </div>
        <div className='topRight'>
            <img src={img} alt="aboutopimg"/>        </div>
    </div>
    </>
  )
}

export default Top