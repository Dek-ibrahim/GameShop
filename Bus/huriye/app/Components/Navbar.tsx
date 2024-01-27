/* eslint-disable @next/next/no-img-element */
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Navbar() {
  return (
    <>
      
      <div className='flex items-center justify-around -mt-[600px]'>
      <div className='flex items-center justify-around gap-20'> 
        <img src="logo.png" alt="logo" width={100} height={100} /> 

        <div className='flex items-center gap-20 text-end'>
            <h2>Home</h2>
            <h2>About</h2>
        </div>
      </div>
      
      <UserButton afterSignOutUrl="/"/>
      </div>
    </>
  )
}

export default Navbar
