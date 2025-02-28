import React from 'react'
import Nevbar from './Component/nevbar/Nevbar'
import Footer from './Component/footer/Footer'
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Service from './Component/Service/Service'
import Contact from './Component/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <>
    <div className='app'>
    <Nevbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App