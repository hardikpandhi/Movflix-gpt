import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-80 px-24 absolute text-white bg-gradient-to-r black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black shadow-md p-2 m-2 rounded-sm text-lg px-8'>▶️Play</button>
            <button className='bg-gray-300 text-white shadow-md p-2 m-2 rounded-sm text-lg px-8 '>More info</button>

        </div>
    </div>
  )
}

export default VideoTitle;