import React from 'react'
import { mainImages } from '../assets/assets.js';

const HomeBanner = () => {
  return (
   <div className="mt-45">
        <div
            className="relative w-full h-[750px] bg-cover bg-center"
            style={{ backgroundImage: `url(${mainImages.homeBanner})` }}
        >
            <div className="absolute inset-0 bg-white/10"></div>
            <div 
                className='absolute top-1/2 right-[130px] -translate-y-1/2
                           text-8xl font-bold text-white leading-30'
                style={{fontFamily : 'cursive'}}>
                    
                KEEP <br/>
                CALM & <br/>
                STAY <br/>
                CLASSY <br/>
            </div>
        </div>
    </div>

  )
}

export default HomeBanner