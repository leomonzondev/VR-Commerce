import Image from 'next/image'
import React from 'react'

import headset from '../assets/images/vrheadsettransparency.png'
import gif from '../assets/images/GuBZ.gif'
import flare from '../assets/images/flare.png'
import { CardProduct } from './CardProduct'
import { CardAccesorie } from './CardAccesorie'

export const ShopSection = () => {

  return (
    <div className='w-full  bg-black pb-20 px-20'>
      
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
        <div className='absolute right-0 bottom-0 flex flex-col items-center gap-6'>
          <p className='text-white text-6xl font-medium'>From $299 USD</p>
          <button className='px-12 text-white bg-pink-400 rounded-full text-2xl font-semibold py-4'>Buy Now</button>
        </div>
      </div>

    <div>
      <h2 className='font-bold text-6xl text-white text-end pb-20'>WHATS INCLUDED</h2>
      <div className='h-2 w-full bg-pink' />
    <div className='flex flex-wrap px-20 justify-center gap-8 pb-20'>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
    </div>


    <div >
      <h2 className='font-bold text-6xl text-white text-start'>ACCESORIES</h2>
      <div className='h-2 w-full bg-pink' />
      <div className='flex flex-wrap gap-4 justify-center pt-20'>
        <CardAccesorie />
        <CardAccesorie />
        <CardAccesorie />
        <CardAccesorie />
      </div>
    </div>

    </div>
  )
}
