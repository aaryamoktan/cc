import React from 'react'
import "./Home.css";
import Sliderimg from './Sliderimg';
import Middle from './Middle';
import Lower from './Lower';
const Home = () => {
  return (
   <div className='HomeContainer'>
    <Sliderimg/>
    <Middle/>
    <Lower/>
   </div>
  )
}

export default Home