// eslint-disable-next-line no-unused-vars
import React from 'react'
// import card1 from '../asset/card1.png'
import card2 from '../asset/card2.svg'

const Advertising = () => {
  return (
    <>
     <div className=' justify-center items-center '>
        <h1 className='text-6xl mt-5 text text-center font-medium'>what we do</h1>
        <div className=' text-center  shadow-lg  w-[500px] items-center h-[500px] m-12'>
            <img className=' rounded-lg w-[200px] translate-y-5 translate-x-32 items-center' src={card2} alt="" />
            <p className='mt-6 text-3xl pt-10 font-medium text-left m-3 text-[#cc313D] hover:text-[#fEA4B9] tex-end'>You can look for the trip you want using our advanced search Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repellat </p>
        </div>
     </div> 
    </>
  )
}

export default Advertising
