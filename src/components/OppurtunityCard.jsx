import React from 'react'
import mern from "../assets/app-development-511x511.png"
import codeBG from "../assets/code-bg.webp"
import { FaUserTie } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const OppurtunityCard = (props) => {
  const { title, Image, type, location, employment } = props;
  return (
    <div className='max-w-[360px] shadow-xl hover:scale-x-0-[0.2px] rounded-xl mt-20'>
      <div
        style={{
          backgroundImage: `url(${codeBG})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',



        }}




        className='h-20 rounded-t-xl items-center  w-full flex px-4 justify-between  '>
        <div className='flex-1'>
          <h2 className='text-2xl font-semibold text-white w-24'>{title}</h2>
        </div>

        <div className='grid place-items-center'>
          <img className='w-20  h-16  ' src={Image} alt="" />
        </div>
        <hr />
      </div>
      <div className='max-h-[102px] font-roboto space-y-5 mt-16  mx-12'>
        <FaUserTie className='text-[#132e9ce2] text-xl mx-9  bg-[#e6f7ef]' />
        <div className='flex text-xl  gap-4 sm:gap-8 sm:flex-nowrap flex-wrap '>
          <p className='mt-8'>employment-</p>
          <p className=' bg-[#e6f7ef] h-8 rounded-sm text-gray-700 '>{employment}</p>
        </div>
      </div>
      <div className='max-h-[102px] font-roboto space-y-5  mt-7  mx-12'>
        <FaLocationArrow className='text-[#132e9ce2] text-xl mx-9  bg-[#e6f7ef]' />
        <div className='flex text-xl  gap-4 sm:gap-8 sm:flex-nowrap flex-wrap '>
          <p className='mt-8'>Location-</p>
          <p className=' bg-[#e6f7ef] h-8 rounded-sm text-gray-700 '>{location}</p>
        </div>
      </div>
      <div className='max-h-[102px] font-roboto   mx-8 mt-7  space-y-5  '>
        <FaBagShopping className='text-[#132e9ce2] text-xl mx-9  bg-[#e6f7ef]' />
        <div className='flex text-xl   gap-4 sm:gap-6 sm:flex-nowrap flex-wrap '>
          <p className='mt-8'>Job Type-</p>
          <p className=' bg-[#e6f7ef] h-8 rounded-sm text-gray-700 '>{type} <span>full time</span></p>
        </div>
      </div>
      <div className='max-h-55px  pb-12 mx-auto max-w-36 pt-6    '>
        <button className='bg-blue-800    text-white  p-2 px-7 focus:outline-none  rounded '  >Read more</button>
      </div>

    </div>

  )
}
