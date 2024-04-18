import React from 'react'
import './css/Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <div className='footer '>
        <div className='copyright'>
           <div className='d-flex justify-content-center'>
            <a className='btn btn-link btn-floating btn-lg text-light m-1' href='https://www.facebook.com/ahamed.harish.39' target='_blank'>
            <FaFacebookF className='social fb'/>
            </a>
            <a className='btn btn-link btn-floating btn-lg text-light m-1' href='https://www.instagram.com/harish_4963/' target='_blank'>
            <FaInstagram className='social ig'/>
            </a>
            <a className='btn btn-link btn-floating btn-lg text-light m-1' href='https://github.com/AhamedHarish' target='_blank'>
            <FiGithub className='social git'/>
            </a>
            <a className='btn btn-link btn-floating btn-lg text-light m-1' href='https://www.linkedin.com/in/ahamed-harish-othman-5ba25b21b/' target='_blank'>
            <AiOutlineLinkedin className='social in'/>
            </a>
           </div>
           <p class="text-center pt-3" >© 2024 Copyright: Ahahmed Harish Othman</p>
        </div>
    </div>
    </> 
  )
}

export default Footer