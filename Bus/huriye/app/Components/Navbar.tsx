/* eslint-disable @next/next/no-img-element */
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Navbar() {
  return (
    <>
      <div className='flex items-center justify-around -mt-[600px]'>
        <div className='flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between gap-4 md:gap-8 lg:gap-20'>
          <img src="logo.png" alt="logo" width={100} height={100} />

          <div className='flex items-center gap-4 md:gap-8 lg:gap-20'>
            <h2>Home</h2>
            <h2>About</h2>
          </div>
        </div>

        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  )
}

export default Navbar
