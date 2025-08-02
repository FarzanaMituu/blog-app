import React from 'react'
import bookImg from "../../images/book3.png";
const Hero = () => {
  return (
    <>
      <div className="hero flex items-center justify-between px-[150px]" style={{ height: "calc(100vh - 100px)" }}>
        <div className="left w-[50%]">
          {/*
          <h3 className='text-[30px]' style={{lineHeight:1}}>Welcome to My <span className='sp-text'> Storytelling</span>Journey.</h3>
          */}
          <h3 className='text-[30px]' style={{ lineHeight: 1 }}>
  <span className='sp-text'>Welcome to My Storytelling Journey</span> — <span className='text-white'>Where Every Word Holds a Memory.</span>
</h3>



          <div className="flex mt-6 item center gap-[15px]">
            <button className='btnNormal'>Get Started</button>
            <button className='btnWhite'>Learn More</button>
          </div>
        </div>
        <div className="right w-[90%]">  
          <img  className='rounded-[20px] w-full' src= {bookImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero