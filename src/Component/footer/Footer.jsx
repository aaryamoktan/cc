import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <h1>Colors Cube</h1>
      <div className='footercontant'>
        <a href=""><FaFacebook/></a>
        <a href=""><FaInstagramSquare/></a>
        <a href=""><FaTwitter/></a>
        <a href=""><FaYoutube/></a>
      </div>
      <div className='footerdown'>
copyright@2024;Design by Aarya moktan
      </div>
    </div>
  )
}

export default Footer