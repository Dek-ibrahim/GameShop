// eslint-disable-next-line no-unused-vars
import React from 'react'
import buss from '../asset/buss.png'

const Hero = () => {
  return (
    <div>
      <div className=''>
      <div className='flex items-center justify-around'>
      <img className='w-[750px] h-' src={buss} alt="" />
      <img className='w-[500px] pt-22 animate-bounce hover:animate-spin' src={logoo} alt="" />
      </div>
        <h1 className='text-white text-7xl text-center hover:text-[#fEA4B9] -translate-y-[100px]'>Let's Treval Togather</h1>
        <button className='text-[#cc313D] bg-white p-4 ps-15 text-center  text-4xl rounded-lg px-16 mt-10 translate-x-[1200px]  -translate-y-[100px]' >Start</button>
     </div>
    </div>
  )
}

export default Hero
