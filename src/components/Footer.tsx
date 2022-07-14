import React from 'react'

export const Footer = () => {


    // const socials = [fb,gh,in,tw]


  return (
    <div className='w-full h-96 flex justify-center px-20 bg-blue-900'>
        <div className='flex justify-between  items-center gap-40 text-xl text-white'>
            <div className='w-[22rem] '>
                <p>asfsdfsdf</p>
                <p>Every Tree in the forest knows about creating valkue and about reciprocity and about stewarship</p>
            </div>

            <div>
                <h5 className='font-bold'>Resources</h5>
                <ul className='leading-10'>
                    <li >All Nfts</li>
                    <li>Customize</li>
                    <li>Utility</li>
                    <li>Connect Wallet</li>
                </ul>
            </div>

            <div>
                <h5 className='font-bold'>Company</h5>
                <ul className='leading-10'>
                    <li>Help Center</li>
                    <li>Terms Of Service</li>
                    <li>privacy Policy</li>
                </ul>
            </div>

            <div>
                <h5 className='font-bold'>Suscribe to our Newsletter</h5>
                <label>
                    <input placeholder='Enter your email'/>
                    <button>Send</button>
                </label>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}
