import React from 'react'

export const Video = () => {
  return (
    <div className="video-responsive flex justify-center">
    <iframe
        width="1500"
        height="796"
        src="https://www.youtube.com/embed/5_bVkbG1ZCo"
        title="Infinite Office"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />
  </div>
  )
}
