import React from 'react'
import { mainImages } from '../assets/assets.js';

const ShopBySection = () => {
  return (
    <div className='mt-22'>
        <div className='text-center text-gray-800 text-4xl'>Shop By Categories</div>
        <div className='flex gap-10 p-10 mt-10'>
            <div className='flex-1 flex flex-col gap-10 '>
                <div className='flex flex-1 gap-15 h-[430px]'>
                    <div className='flex-1 relative'>
                        <img src={mainImages.section_2} 
                         alt=""
                         className='h-full' />
                        <div className='tracking-[0.1em] absolute bottom-15 py-2 px-5 hover:bg-orange-600 hover:text-white cursor-pointer bg-white left-[65px] text-gray-700 transition-all duration-200 '>
                        #backpack
                        </div>
                    </div>
                    <div className='flex-1 relative'>
                        <img src={mainImages.section_3} 
                         alt=""
                         className='h-full' />
                        <div className='tracking-[0.1em] absolute bottom-15 py-2 px-9 hover:bg-orange-600 hover:text-white cursor-pointer bg-white left-[75px] text-gray-700 transition-all duration-200 '>
                            #shoes
                        </div>
                    </div>
                </div>
                  <div className="w-full relative">
                        <img
                        src={mainImages.section_4}
                        alt=""
                        className="w-full h-[220px] object-cover"
                        />
                        <div className='tracking-[0.2em] absolute bottom-10 py-2 px-7 hover:bg-orange-600 hover:text-white cursor-pointer bg-white left-1/2 -translate-x-1/2 text-gray-700 transition-all duration-200 '>
                            #glasses
                        </div>
                    </div>
            </div>

            <div className='flex-1 relative'>
                <img src={mainImages.section_1} alt="" className='h-full' />
                                                              <div className='tracking-[0.2em] absolute bottom-10 py-2 px-10 hover:bg-orange-600 hover:text-white cursor-pointer bg-white left-1/2 -translate-x-1/2 text-gray-700 transition-all duration-200 '>
                            #hats
                        </div>  
            </div>
        </div>
    </div>
  )
}

export default ShopBySection