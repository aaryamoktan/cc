import React from 'react'
import "./Service.css"
import { MdMessage } from "react-icons/md";
const Servicetop = () => {
  return (
    <>
    <div className='serviceTop'>
        <div className='ServicetopInner'>
            <h5>
            Services and Packages
            </h5>
            <h2>
            OUR SERVICES
            </h2>
            <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut laboreet dolore magna aliqua. Ut enim ad minim veniam.
            </h5>
        </div>
    </div>
    <div className='servicetopmiddle'>
        <div className='servicetop1'>
        <div className='top11'><h7><MdMessage/></h7></div>
        <div className='top12'><h2>Need Custom Service?</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed ...</h6></div>
        </div>
        <div className='servicetop1'>
            <button><a href="/contact">Contact Us</a></button>
        </div>
    </div>
    <div className='bussiness'>
        
        <div className='buss1'>
            <h1>Our business process road</h1>
            <div className='us1'>
                <div className='us11'>
                    <h1>01.</h1>
                </div>
                <div className='us12'>
                    <h3>Create an Idea</h3>
                    <h6>What’s hard is to develop the habits that enable us to come up with great ideas.</h6>
                </div>
            </div>
            <div className='us1'>
                <div className='us11'><h1>02.</h1></div>
                <div className='us12'>
                    <h3>Complete the Project</h3>
                    <h6>You can organize yourself and your team in endless ways.</h6>
                </div>
            </div>
            <div className='us1'>
                <div className='us11'><h1>03.</h1></div>
                <div className='us12'>
                    <h3>	
                    Execution</h3>
                    <h6>When it comes to motivating teams, awarding members for good performance.</h6>
                </div>
            </div>
        </div>
        <div className='buss1'>
           <img src="https://www.shutterstock.com/image-photo/two-business-women-sit-desk-600nw-2299697419.jpg"/> 
        </div>
    </div>
    </>
  )
}

export default Servicetop