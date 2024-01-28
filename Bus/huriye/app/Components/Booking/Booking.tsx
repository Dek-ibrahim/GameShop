import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'

function Booking() {
 
  return (
    <div>
        <h2 className='text-xl font-medium'>Booking</h2>
    <div className='border-[1px] p-5 rounded-md '> 
    < AutocompleteAddress />
    {/* < Cars /> */}
    </div>
    </div>
  )
}

export default Booking
