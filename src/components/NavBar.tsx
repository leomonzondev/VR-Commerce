import React from 'react'

import { AiOutlineUser } from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'
import { BiMenuAltRight } from 'react-icons/bi'


const icons = 'cursor-pointer'

export const NavBar = () => {
  return (
    <nav className='fixed z-50  bg-black w-full h-20 px-10 text-white flex justify-between items-center'>
           
        <h1 className='text-4xl cursor-pointer font-bold'>ZENIT.</h1>
     
        <div className='flex justify-around w-48'>
            <FiShoppingBag className={icons} size={28} />
            <AiOutlineUser className={icons} size={28} />
            <BiMenuAltRight className={icons} size={28} />
        </div>
       
    </nav>
  )
}
