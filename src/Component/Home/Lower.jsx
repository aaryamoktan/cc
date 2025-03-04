import React from 'react'
import "./Lower.css"
import img from "./2d.jpg"
import img2 from "./cup.png"
import img3 from "./Direy.png"
import img4 from "./hoodue.jpg"
import img5 from "./idcard.jpg"
const Lower = () => {
  return (
    <>
    <div className='OurWork'>
        <div className='work'>
            <h1>Our latest projects</h1>
            <div className='workimg'>
                <div className='img'>
                <img src="https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/Frontlit-Flex-Banner.jpg" alt="workimage"/> 
                </div>
                <div className='img'>
                <img src="https://www.shutterstock.com/image-vector/roll-banner-design-template-vector-260nw-2224147389.jpg" alt="workimage"/>
                
                </div>
                <div className='img'>
                <img src="https://uniformtailor.in/image/cache/catalog/data/polo-t-shirts/UET001/economy-dri-fit-polo-t-shirts-logo-printed-navy-270x360.png" alt="workimage"/>
                
                </div>
                <div className='img'>
                <img src={img}/>
                
                </div>
                <div className='img'>
                <img src={img2}/>
                
                </div>
                <div className='img'>
                <img src={img3}/>
                
                </div>
                <div className='img'>
                <img src={img4}/>
                
                </div>
                <div className='img'>
                <img src={img5}/>
                
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Lower