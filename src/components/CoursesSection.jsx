import React from 'react'
import CourseCard from './CourseCard'

import Flutter from "../assets/Flutter-Development-300x225.jpg"

import ai from "../assets/5167842_cafe-300x225.webp"
const CoursesSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="my-20  text-center -mb-5">
        <h1 className='font-bold md:text-4xl font-poppins'> Recommended Course's</h1>
      </div>
      <div className='flex justify-between gap-28 mx-12 my-12 overflow-x-auto'   >
        <CourseCard
          name="Graphic Designing"
          price="30000"
          image={ai}


          type="Designing"
        />
        <CourseCard
          name="iOS Development"
          price="37000"
          image={Flutter}

          type="Mobile Development"
        />
        <CourseCard
          name="Web Development"
          price="32000"

          image={ai}

          type="Programming"
        />
        <CourseCard
          name="Data Science"
          price="40000"
          image={ai}
          type="Data Analysis"
        />
        <CourseCard
          name="Digital Marketing"
          image={Flutter}
          type="Marketing"
        />

      </div >
    </div >

  )
}

export default CoursesSection