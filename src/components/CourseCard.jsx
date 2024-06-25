import React from 'react'

const CourseCard = (props) => {
  const { image, price, name, type } = props;
  return (
    <div>

      <div class="w-full max-w-sm bg-white border  overflow-hidden  border-gray-200 rounded-lg shadow ">
        <a href="#" className=' overflow-hidden'>
          <img src={image} class="w-full h-36  hover:scale-y-110  transform transition-all ease-in-out  overflow-hidden rounded-t-lg  " alt="product image" />
        </a>
        <div class="px-2 pb-5">
          <p className='text-gray-500 pt-3 text-sm text-light'>{type}</p>
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{name}</h5>
          </a>
        </div>
        <hr />
        <div class="flex w-full   items-center mt-2.5 mb-5">

          <div class="flex gap-36 px-2">
            <p className='text-nowrap '>3 months</p>
            <p>PKR{price}</p>
          </div>

        </div>


      </div>
    </div >
  )
}

export default CourseCard
