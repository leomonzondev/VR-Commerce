import Image from 'next/image'
import React from 'react'
import girl from '../assets/images/girlvr3.png'

const sizeCircle = "30rem"

export const Hero = () => {

  return (
    <main className=' flex h-screen '>
 
        <article className=' '>
            <div className={`h-[60rem] w-[60rem] rounded-full absolute md:-left-20 md:top-20 circle`}/>
            <div className=''>
                <Image src={girl} className={`-scale-x-[1]`} width={900} height={750} />
            </div>
        </article>
        <article className='flex flex-col  bg-black text-end justify-center items-center w-[70rem] pr-20'>
            <h1 className='text-[11rem] leading-[10rem] font-black text-white text-end '>The <br/> <span className='text-[#bf1cce]'>Omniverse</span> <br/> is here</h1>
            <p className='text-white text-end'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className='border-2 rounded-full px-3 py-2 text-white '>SHOP NOW</button>
        </article>
  
    </main>
  )
}
