import React, { useState } from 'react'
import image from "./cool.png"
import "./Nevbar.css"
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Service from '../Service/Service'
import { AiOutlineAlignLeft } from "react-icons/ai";
const Nevbar = () => {
    const [showMenu,setMenu] = useState(true);
  return (
    <>
    <div className='nevbarContainer'>
        <div className='nevbarInside'>
            <div className='logo'>
                <img src={image}/>
            </div>
            <div className={showMenu?"nevigation-mobile":"nevigation-web"}>
                <ul>
                    <li>< a href="/">Home</a></li>
                    <li>< a href="/about">About</a></li>
                    <li>< a href="/service">Service</a></li>
                    <li>< a href="/contact">Contact</a></li>
                </ul>
            </div>
           <p><AiOutlineAlignLeft style={{fontSize:"30px"}} onClick={()=>
            {
                setMenu(!showMenu)
            }
           }/></p> 
        </div>
    </div>
    </>
  )
}

export default Nevbar