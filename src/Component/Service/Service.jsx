import React from 'react'
import "./Service.css"
import Servicetop from './Servicetop'
import img from "./cup.png"
import img1 from "./Direy.png"
import img2 from "./hoodue.jpg"
import img3 from "./note.png"
import img4 from "./pen.png"
import img5 from "./2d.jpg"
import img6 from "./idcard.jpg"
import img7 from "./visiting.jpg"
import img8 from "./bussiness.jpg"
const Service = () => {
  return (
    <>
    <Servicetop/>
    <div className='Ourservice'>
      <h1>
      Our Business Services
      </h1>
      <div className='services'>
        <div className='servece1'>
          <h2>Cup</h2>
          <img src={img} alt="img"/>
        </div>
        <div className='servece1'>
          <h2>Note</h2>
          <img src={img1} alt="img"/>
        </div>
        <div className='servece1'>
          <h2>Direy</h2>
          <img src={img3} alt="img"/>
        </div>
        <div className='servece1'>
          <h2>Pen</h2>
          <img src={img4} alt="img"/>
        </div>
        <div className='servece1'>
          <h2>Hoodie</h2>
          <img src={img2} alt="img"/>
        </div>
        <div className='servece1'>
          <h2>2D Board</h2>
          <img src={img5} alt="img"/>
        </div>
        <div className='servece1'>
          <h2>Id-Card</h2>
          <img src={img6} alt="img"/>
        </div>
       
        <div className='servece1'>
          <h2>Visiting-Card</h2>
          <img src={img7} alt="img"/>
        </div>
        <div className='servece1'>
          <h2>Bussiness-Card</h2>
          <img src={img8} alt="img"/>
        </div>
      </div>
    </div>
    </>
  )
}
export default Service