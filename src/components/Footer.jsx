import React from 'react'
import "../index.css"
import f1 from '../assets/f1.webp'
import f2 from '../assets/f2.webp'
import { FaFacebook } from 'react-icons/fa'
import { ImBehance2 } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoLinkedin } from 'react-icons/io5'
import { RiYoutubeLine } from 'react-icons/ri'
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="main  pt-24 p-8">
      <div className="footer font-roboto">
        <div className="about">
          <h3 className='font-semibold mb-4 text-xl'>About</h3>
          <p className='font-roboto text-sm text-balance'>
            Ezitech Institute provides a platform for <br /> newcomers to launch their IT and <br /> freelancing
            careers.
            Our emphasis on <br /> practical information technology courses <br />that are career and work oriented
            makes <br /> us the top computer institute in <br /> Rawalpindi, Islamabad, Pakistan.
          </p>
        </div>
        <div className="course">
          <h3 className='font-semibold mb-4 text-xl' >POPULAR COURSES</h3>
          <div className="img  hover:text-blue-500 transition-colors ease-in">
            <img src={f1} alt="Online Arbitrage Mastermind 2.0" />
            <p>Online Arbitrage Mastermind 2.0 [R...<br />
              <span className='text-gray-400 text-sm font-thin'> By Husnain Ali</span></p>
          </div>
          <div className="img hover:text-blue-500 transition-colors ease-in  ">
            <img src={f2} alt="The Complete Bootcamp 2022: Node.js" />
            <p>The Complete Bootcamp 2022: Node.j...<br />
              <span className='text-gray-400 text-sm font-thin'> By Ezitech</span>
            </p>
          </div>

        </div>
        <div className="page font-Montserrat">
          <h3 className='font-semibold mb-4 text-xl'>PAGES</h3>
          <ul className='font-light text-sm '>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">EZICODING</a></li>
            <li><a href="#">INTERNSHIP</a></li>
            <li><a href="#">OUR SERVICES</a></li>
          </ul>
        </div>
        <div className="content font-Montserrat">
          <h3 className='font-semibold mb-4 text-xl' >CONTACT</h3>
          <p>Office #304-B Amna Plaza,<br /> near Radio Pakistan,<br /> Rawalpindi, Punjab 46000</p>
          <p>+923455555396</p>
          <p>info@ezitech.org</p>
        </div>

      </div>
      <div className="footer-bottom   flex justify-between">
        <div className='flex gap-2 justify-center items-center'>
          <RiWhatsappFill className='text-blue-400 text-5xl' />
          <a href="#" className="chat-button">Need Help? Chat with us</a>


        </div>
        <p>&copy; 2024 Ezitech Institute | Design & Develop by Eziline Software House</p>
        <div className='flex gap-2  
      '>
          <FaFacebook />
          < ImBehance2
          />
          < IoLogoLinkedin />



        </div>
      </div>
    </footer>
  )
}

export default Footer