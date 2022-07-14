import Image from 'next/image'
import React from 'react'

export const CardBuilding = ({content}) => {

  const { title, text, img } = content



  return (
    <div className='  '>
        <div className='w-[32rem] relative h-[40rem] rounded-2xl overflow-hidden'>
          <Image src={img} layout="fill" />
        </div>

        <div className='pt-5 w-[25rem] '>
            <h3 className='text-3xl font-bold text-white' >{title}</h3>
            <p className='text-zinc-400 font-medium text-lg py-4'>{text}</p>
            <button className='text-white text-lg font-bold border-b-red-50 border-white border-b-[3px]'>Explore More</button>
        </div>

    </div>
  )
}

