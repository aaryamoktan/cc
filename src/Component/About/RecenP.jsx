import React from 'react'
import "./Recent.css"
import img1 from "./cc.png"
import img2 from "./cid.png"
import img3 from "./ill.png"
import img4 from "./mk.png"
import img5 from "./pp.png"
const RecenP = () => {
  return (
    <>
    <div className='Project'>
        <img src={img5} />
        <h5>PROJECTS WE DONE</h5>
        <h2>Our recent creative projects</h2>
        <h6>Let’s check some of our perfect projects.</h6>
        <div className='imgs'>
            <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?cs=srgb&dl=pexels-wendywei-1190297.jpg&fm=jpg" alt="img"/>
            
        </div>
        <div className='divexp'>
            <div className='exp1'>
                <div className='exp11'>
                    <img src={img2} />
                </div>
                <div className='exp12'>
                    <h3>Creative Ideas</h3>
                    <h6>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. duis odio nisl, tinci dunt eturn sed molis velit.</h6>
                </div>
            </div>
            <div className='exp1'>
                <div className='exp11'>
                    <img src={img1} />
                </div>
                <div className='exp12'>
                    <h3>Conversations</h3>
                    <h6>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. duis odio nisl, tinci dunt eturn sed molis velit.</h6>
                </div>
            </div>
            <div className='exp1'>
                <div className='exp11'>
                    <img src={img4} />
                </div>
                <div className='exp12'>
                    <h3>Make it Possible!</h3>
                    <h6>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. duis odio nisl, tinci dunt eturn sed molis velit.</h6>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RecenP