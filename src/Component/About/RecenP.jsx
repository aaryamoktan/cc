import React from 'react'
import "./Recent.css"
import img1 from "./cc.png"
import img2 from "./cid.png"
import img3 from "./ill.png"
import img4 from "./mk.png"
import img5 from "./pp.png"
import img6 from "./md.png"
import { GiBestialFangs } from "react-icons/gi";
const RecenP = () => {
    return (
        <>
            <div className='Project'>
                <img src={img5} />
                <h5>PROJECTS WE DONE</h5>
                <h2>Our recent creative projects</h2>
                <h6>Let’s check some of our perfect projects.</h6>
                <div className='imgs'>
                    <img src={img6} alt="img" />

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
            <div className='abutme'>
                <div className='aboutin1'>
                    <div className='abouin1'>
                        <h4><GiBestialFangs /></h4>
                    </div>
                    <div className='abouin2'>
                        <h2>
                            Start your project with 30% Off today!
                        </h2>
                        <h6>We have limited time offer on the new projects ...</h6>
                    </div>
                </div>
                <div className='aboutin'>
                    <button>Let’s Start</button>
                </div>
            </div>
            <div className='aboutmodel'>
                <div className='model1'>
                    <img src={img6} alt="img of model"/>
                </div>
                <div className='modeldesc'>
                    <h5><button>WHAT WE DO?</button></h5>
                    <h1>Our Mission,
Values And Goal</h1>
<h7>"I should be incapable of drawing a single stroke at the
present moment; and yet I feel that I never was a greater
artist than now. When, while the love”</h7>
                </div>
            </div>
        </>
    )
}

export default RecenP