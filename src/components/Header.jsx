import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { RiYoutubeLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { ImBehance2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
export const Header = () => {
  return (
    <div className='flex items-center md:justify-end flex-wrap pr-3 xs:px-12  justify-between  lg:h-7 font-poppins text-[14px] lg:gap-12 font-normal  bg-blue-500 text-white'>
      <div className='sm:flex hidden items-center  gap-1'>
        <LuPhone /> +92 3175661967
      </div>
      <div className='sm:flex hidden  self-end items-center gap-1'>
        <br className='md:hidden' />
        < MdLocationPin />
        <p>  Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan</p>
      </div>
      <div>
        <p className='sm:flex hidden  items-center gap-1'> < FaClock />  Mon - Fri 8.00 - 20.00</p>
      </div>
      <div className='xs:flex gap-2 hidden 
      '>
        <FaFacebook />
        < ImBehance2
        />
        <FiInstagram />

        < IoLogoLinkedin />
        < RiYoutubeLine />


      </div>
      <div className='flex items-center justify-end gap-2'>
        < FaUserCircle />
        <p>Login</p>
        <p className='font-thin'>|</p>
        <p>Register</p>
      </div>
    </div>
  )
}
