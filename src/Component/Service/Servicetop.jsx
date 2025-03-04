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
    </>
  )
}

export default Servicetop