import React from 'react'
import invest from "../assets/invest.webp"
const InvestingYourself = () => {
  return (
    <div>
      <div className='pt-12 flex flex-col justify-between font-bold font-Montserrat  px-14 bg-[#0e3383]'>

        <h1 className=' text-2xl md:text-5xl tracking-wider  text-white text-center  mb-3 pb-12 w-5/15 mx-auto object-fill'>
          It’s time to
          <span className='text-blue-700 px-2 '>
            start
          </span>
          investing <br /> in yourself
        </h1>

        <img src={invest} className='w-[100vw] object-contain  px-auto' alt="" />
      </div>
    </div>
  )
}

export default InvestingYourself