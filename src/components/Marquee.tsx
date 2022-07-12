import React from 'react'

export const Marquee = () => {

    const words = "EXPLORE NOW  ".repeat(10)


  return (
    <div className='py-10 w-full'>
        <p className='scrolling text-white font-bold space-x-2 text-5xl whitespace-nowrap tracking-[.50rem]'>{words}</p>
    </div>
  )
}
