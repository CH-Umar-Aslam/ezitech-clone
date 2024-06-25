import React from 'react'
import Cards from './Cards'
import '../App.css'
const HowWorks = () => {
  return (
    <div className="section  my-20 relative overflow-hidden">
      <div className="main2">
        <div className="title">
          <h1 className='font-bold md:text-4xl font-roboto'>How it works?</h1>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3">
          <div className="image-div">
            <img className="img1" src="/src/assets/images/3.svg" alt="" />
          </div>
          <div className="image-div">
            <img className="img1" src="/src/assets/images/2.svg" alt="" />
          </div>
          <div className="image-div">
            <img className="img1" src="/src/assets/images/1.svg" alt="" />
          </div>
        </div>
        <Cards />
      </div>
    </div>
  )
}

export default HowWorks