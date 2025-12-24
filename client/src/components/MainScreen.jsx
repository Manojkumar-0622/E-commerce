import React from 'react'
import {mainImages} from '../assets/assets.js'

const MainScreen = () => {
  return (
    <div className='bg-cover bg-center min-h-screen relative'
         style={{ backgroundImage: `url(${mainImages.mainbg})` }}
    >
        <div className='absolute top-1/2 left-23 -translate-y-1/2'>
            <div className='text-6xl text-white pb-4'
                 style={{fontFamily : 'Allura , sans-serif'}}>
                be style
            </div>
            <div className='text-6xl font-light leading-[75px] text-white'
                 style={{ fontFamily: 'Poppins, sans-serif' }}>
                Enhancing your <br/>
                Inner beauty
            </div>
            <div className='inline-block text-2xl px-5 py-3 rounded bg-white mt-4 hover:text-orange-600 cursor-pointer'>
                Shop now
            </div>
        </div>

    </div>
  )
}

export default MainScreen