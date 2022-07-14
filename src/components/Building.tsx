import React from 'react'
import { CardBuilding } from './CardBuilding';
import card1 from '../assets/images/card1.jpg'
import card2 from '../assets/images/card2.jpg'
import card3 from '../assets/images/card3.jpg'

export const Building = () => {


    const content = [{title:'Virtual Reality',text:'Virtial REality lry you explore new rlds and shared experience. with quest even if your far apart you can disconer nover',img:card1}, {title:'Smart Glasses',text:'Wearable technology like smart glasses will become gateways in to the metaverse, allowing you to interact with the world...',img:card3}]

    const lateralContent = {title:'Augmented Reality',text:'Through photo and video AR lets you enhance shared experience with playfgul virtual effect at swipe on a screen letting you express',img:card2}

  return (
    <div className=''>
        <div className='flex flex-col items-center '>
            <h1 className='text-center text-white text-7xl font-bold  pt-10 '>Building the <span className='text-[#b901ca]'>Metaverse</span></h1>
            <p className='w-[48rem] text-center pb-20 pt-8 text-2xl text-white '>Were already developing exciting new technologies that will hlp people connect and explore in the metaverse</p>
        </div>
        <div className='flex flex-wrap justify-center gap-72'>
            <div className='flex flex-col gap-20'>
                {
                    content.map((card,idx) => <CardBuilding key={`card-${ idx }`} content={card} />)
                }
            </div>
            <div className='mt-20'>
                <CardBuilding content={lateralContent} />
            </div>
        </div>
    </div>
  )
}
