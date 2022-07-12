import Image from 'next/image'
import React from 'react'

import headset from '../assets/images/vrheadsettransparency.png'
import gif from '../assets/images/GuBZ.gif'
import flare from '../assets/images/flare.png'

export const ShopSection = () => {
  return (
    <div className='w-full  bg-black'>
      
      <div className='relative flex justify-center h-screen'>
          <h1 className='text-[18rem] text-white font-black -top-16  absolute'>METAQUEST</h1>
        <div className='w-[48rem]  relative -scale-x-[1]'>
          
          <div className='absolute z-20'>
            <Image src={headset} className="ml-20"/>
          </div>
          <div className='absolute z-30 flicker'>
            <Image src={flare} />
          </div>
          <div className='absolute overflow-hidden rounded-full w-[25rem]  z-10 left-52 top-80'>
            <Image src={gif} className=" " />
          </div>
        </div>
        <div className='absolute right-0 bottom-0'>
          <p className='text-white'>From $299</p>
          <button className='px-10 bg-pink-400 rounded-lg'>Buy Now</button>
        </div>
      </div>

    <div>
      <h2 className='font-bold text-9xl text-white text-end'>What's included</h2>
      <div className='h-2 w-full bg-pink' />
    </div>

    </div>
  )
}
