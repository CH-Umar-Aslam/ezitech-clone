import React, { useState } from 'react'
import '../App'
import { CiHeart } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { ReactTyped, Typed } from "react-typed";
import Logo from "../assets/output-onlinepngtools-9.png"
import { TfiSearch } from "react-icons/tfi"
import { FaHeart } from "react-icons/fa6";


import ezipos from "../assets/white-ezipos.png"
import ezicoding from "../assets/white-lgooo-01.png"
import eziblog from "../assets/EZIBLOGS-DG.png"
const Navbar = () => {
  const [childMenu, setChildMenu] = useState(false)
  const backgroundImageUrl = "https://plus.unsplash.com/premium_photo-1663100736612-aa35536f03d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const backgroundImageUrl2 = "https://media.istockphoto.com/id/1359550361/photo/a-scientist-businesswoman-looking-at-the-charts-to-analyze-the-data-she-is-looking-at-the.jpg?s=612x612&w=0&k=20&c=Uf8vIhAnyMYX-ot7p5HBUNcrCNfBLVEJTStaur1BvQM="
  return (

    <main className='2xl:container mx-auto' style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '125vh', // Example: Set height to full viewport height

    }}>


      <nav className="bg-transparent  font-Montserrat font-bold text-[14px]  p-4 flex items-center justify-between">
        <img className='w-40' src={Logo} alt="" />
        <div className=" sm:flex hidden items-center space-x-4 relative">
          <a href="#" className="text-white  border-b-[3px] border-blue-600  hover:text-gray-300">HOME</a>
          <a href="#" className="text-white hover:text-gray-300">ABOUT US</a>
          <a onMouseOver={() => setChildMenu(!childMenu)}

            href="#" className="text-white hover:text-gray-300 ">CERTIFICATIONS</a>
          {
            childMenu && <div className='absolute py-2 font-roboto pl-2 text-lg font-thin  w-48 h-24 right-72 top-14 bg-gray-200   text-black'>
              <p className='leading-24 mb-5   '>Free Courses</p>
              <p>Online Courses</p>
            </div>
          }

          <a href="#" className="text-white hover:text-gray-300">INTERNSHIPS</a>
          <a href="#" className="text-white hover:text-gray-300">SEMINARS</a>
          <a href="#" className="text-white hover:text-gray-300">TECH BLOGS</a>
        </div>

        {/* Right side: Icons */}
        <div className="flex items-center space-x-4">
          <p className='text-white font-thin text-xl  opacity-70 border-r-3 border-white '> |</p>
          <CiHeart className=' h-8 overflow-hidden rounded-full transition-colors ease-out  w-8 hover:bg-green-600  text-white  ' />
          <IoSearchSharp className=' h-10 p-1 border-2 border-white  overflow-hidden transition-colors ease-out  w-8 hover:bg-blue-600  text-white  ' />


        </div>
      </nav>
      <hr className='opacity-45' />
      <div className="h-screen mt-16 flex flex-col space-y-12  items-center font-Montserrat   justify-center bg-transparent text-white">
        <div className="text-left font-bold sm:text-2xl  md:text-5xl">
          <h1>Learn the fundamentals with our <br />
            <span className='pl-8'> Experts in</span>
            {/* <br className='sm:hidden' /> */}
            <ReactTyped className='text-[#53d4ff] sm:pl-20 overflow-hidden'
              strings={[
                'Marketing ',
                'Programming',
                'Web Design',
                'Social Skills'
              ]}
              typeSpeed={50}
              backSpeed={70}
              loop
            />
          </h1>



        </div>
        <div className='flex justify-between  items-center '>


          <input type="text" placeholder='Search Courses' className='p-4 text-black  w-[300px] rounded-lg focus:outline-none' />
          <TfiSearch className='relative -left-8 text-black opacity-50 hover:opacity-100 cursor-pointer' />    </div>
        <div className='space-y-3'>
          <p className='text-center text-wrap text-2xl font-poppins font-semibold'>Explore more Useful Products</p>
          <FaHeart className=' text-white mx-auto  h-5' />
          <div className=' block md:flex h-20 items-center justify-center md:gap-20'>
            <img className='w-56  leading-9  object-fill ' src={eziblog} alt="" />
            <img className='w-56  object-fill ' src={ezipos} alt="" />
            <img className='w-56 px-0 mx-0 md:w-64 object-fill  md:mb-3 ' src={ezicoding} alt="" />
          </div>
        </div>
      </div>

    </main>
  )
}

export default Navbar