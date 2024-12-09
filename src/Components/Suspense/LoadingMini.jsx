import React from 'react'
import loadingGif from "../Assets/loading_no_bg.gif"

const LoadingMini = () => {
  return (
    <div className='flex items-center justify-center'>
      <img src={loadingGif} alt="loading..." className='w-[7rem]'/>
    </div>
  )
}

export default LoadingMini
