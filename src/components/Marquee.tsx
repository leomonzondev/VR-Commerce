import React from 'react'

export const Marquee = () => {

    const words = "explore now".repeat(8)


  return (
    <div className='h-screen w-full'>
        <p>{words}</p>
    </div>
  )
}
