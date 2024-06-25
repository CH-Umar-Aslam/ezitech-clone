import React from 'react'
import { OppurtunityCard } from './OppurtunityCard'
import mern from "../assets/app-development-511x511.png"
import UI from "../assets/web-design-511x511.png"
import DigitalMarketing from "../assets/What-is-a-digital-marketing-agency.webp"
import HTML from "../assets/vvvv-69x69.png"
import Flutter from "../assets/Flutter-Development-300x225.jpg"
export const InternshipSection = () => {
  return (
    <div >
      <div className="mt-16  text-center -mb-5">
        <h1 className='font-bold md:text-4xl font-poppins'>Perfect Internship's For You</h1>
      </div>
      <div className="flex flex-wrap gap-3  2xl:container mx-auto  sm:gap-24  md:gap-20 justify-center">
        <OppurtunityCard
          title="Graphic Designing"
          employment="Hybrid"
          location="Islamabad"
          Image={UI}
          type="Part-time"
        />
        <OppurtunityCard
          title="Machine Learning"
          employment="On-site"
          location="Rawalpindi"
          Image={mern}
          type="Full-time"
        />
        <OppurtunityCard
          title="Flutter Development"
          employment="Remote"
          location="Islamabad"
          Image={Flutter}
          type="Full-time"
        />
        <OppurtunityCard
          title="HTML/CSS Development"
          employment="Hybrid"
          location="Rawalpindi"
          Image={HTML}
          type="Part-time"
        />
        <OppurtunityCard
          title="Digital Marketing"
          employment="On-site"
          location="Islamabad"
          Image={DigitalMarketing}
          type="Full-time"
        />
        <OppurtunityCard
          title="Backend Development"
          employment="Remote"
          location="Rawalpindi"
          Image={mern}
          type="Part-time"
        />
      </div>
      {/* Additional cards can be added similarly */}
    </div>
  )
}
