import React from 'react'
import {mainImages} from '../assets/assets.js'
import { useOutletContext } from 'react-router-dom';
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";


const MainScreen = () => {

  const { search } = useOutletContext();

  return (
    <>
      <div className={`bg-cover bg-center ${search ? 'blur-sm' : '' } transition-all duration-100 ease-in min-h-screen  relative`}
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
      <div className='flex p-6 border bg-gray-800 justify-around'>
          <div className='flex gap-2  items-center text-white'>
            <GiDeliveryDrone className='fill-white size-15'/>
            <div className='text-[20px] '>Flat-rate Delivery</div>
          </div>
          <div className='flex gap-2 items-center text-white'>
            <MdOutlineSupportAgent className='fill-white size-15'/>
            <div className='text-[20px] '>Support 24/7</div>
          </div>
          <div className='flex gap-2 items-center text-white'>
            <RiSecurePaymentFill className='fill-white size-15'/>
            <div className='text-[20px] '>Secure Payment</div>
          </div>
          <div className='flex gap-2 items-center text-white'>
            <TbTruckReturn className='fill-white size-15'/>
            <div className='text-[20px] '>Free Return</div>
          </div>
      </div>
    </>
  )
}

export default MainScreen