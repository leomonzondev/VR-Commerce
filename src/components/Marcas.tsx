import React from 'react'
import avenlogo from '../assets/images/avenlogo.png'
import earthlogo from '../assets/images/earthlogo.png'
import zenitlogo from '../assets/images/zenitlogo.png'
import asgardialogo from '../assets/images/asgardialogo.png'
import hexalablogo from '../assets/images/hexlablogo.png'
import Image from 'next/image'

export const Marcas = () => {

  const marcas = [avenlogo, earthlogo, zenitlogo, asgardialogo, hexalablogo ]




  return (
    <div className='w-full h-96 flex items-center justify-center'>
        <div className='flex text-8xl font-bold gap-10 px-20  '>
            {
              marcas.map(marca => <Image src={marca} className="invert opacity-30"/>)
            }
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    </div>
  )
}
