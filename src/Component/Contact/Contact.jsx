import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import "./Contact.css"
import img from "./hello.png"
const Contact = () => {
  return (
    <>
    <div className='contactContainer'>
      <div className='contactinner'>
        <div className='inner1'>
          <img src={img} alt="image"/>
          <h4>SAY HELLO</h4>
          <h1>Get in touch with us</h1>
          <div className='inner11'>
            <h4><FaSquarePhone /></h4> <h4 className='h4'>+977 9803071043</h4>
          </div>
          <div className='inner11'>
           <h4> <FaMessage/> </h4><h4 className='h4'>colourscube@gmail.com</h4>
          </div>
          <div className='inner11'>
           <h4><FaLocationPin/> </h4><h4 className='h4'>Bagbazar Kathmandu</h4> 
          </div>
        </div>
        <div className='inner2'>
          <h1>Contact us</h1>
          <label>Your name</label>
          <input type="text" required/>
          <label>Your Email</label>
          <input type="email" required/>
          <label>Your messege</label>
          <textarea type="text" />
          <button>Send</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact