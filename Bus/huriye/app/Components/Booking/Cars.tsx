import React from 'react'
// import Carlis

function Cars() {
  return (
    <div className='mt-3'>
      <h1 className='font-semibold'>select Car</h1>
      <div>
        {CarsList.map((item,index)=>(
            <div key={index}>
                <Image src={item.image}
                alt={item.image}
                with={75}
                height={90}
                />

            </div>
        ))}
      </div>
    </div>
  )
}

export default Cars
