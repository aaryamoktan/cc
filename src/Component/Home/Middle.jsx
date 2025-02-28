import React from 'react'
import "./Middle.css"
import { SiAdobeindesign } from "react-icons/si";
import { TbTimelineEventFilled } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
const Middle = () => {
  return (
    <>
    <div className='mid'>
        <a href="/about">
        <div className='mid1'>
          <h7>OUR SERVICES</h7>  
          <h2>We Will Help Your Business Growing</h2>
        </div></a>
        <a href="/about">
        <div className='mid2'>
            <h6><TbTimelineEventFilled/></h6><h3>Event</h3>
        <h8>We help to Organize an Event (best event)</h8></div>
        </a>
        <a href="/about">
        <div className='mid2'>
            <h6><AiOutlineProduct/></h6>
            <h3>Merchandise</h3>
        
            <h8>Providing best quality product for you bussiness Promotion</h8></div>
            </a>
        <a href="/about">
        <div className='mid2'>
            <h6><SiAdobeindesign/></h6>
            <h3>Design</h3>
        <h8>best design attract best vesion</h8></div>
        </a>
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

export default Middle