import React from 'react'
import {mainImages} from '../assets/assets.js';
import { NavLink } from 'react-router-dom';

const CollectionBanner = () => {
  return (
    <div 
        className='flex gap-10 justify-around p-10'>
        <div 
            className='flex-1'>
            <img src={mainImages.collection_1} alt="" />
            <div 
                className='text-center my-6 text-2xl font-semibold'>
                Trending Eyewear
            </div>
            <div 
                className='text-center text-gray-700 leading-7 tracking-wide'
                style={{fontFamily : 'sans-serif'}}>
                Largest collection of genuine quality <br/>
                prescription glasses frames
            </div>
            <div
                className='text-center hover:text-orange-800 underline text-[17px] font-medium mt-5 cursor-pointer'>
                    View Collection
            </div>
        </div>
        <div
            className='flex-1'>
            <img src={mainImages.collection_2} alt="" />
            <div 
                className='text-center my-6 text-2xl font-semibold'>
                Weekend Collective
            </div>
            <div 
                className='text-center text-gray-700 leading-7 tracking-wide'
                style={{fontFamily : 'sans-serif'}}>
                Largest collection of genuine quality <br/>
                prescription glasses frames
            </div>
            <div
                className='text-center hover:text-orange-800 underline text-[17px] font-medium mt-5 cursor-pointer'>
                    Shop Now
            </div>
        </div>
        <div
            className='flex-1'>
                <img src={mainImages.collection_3} alt="" />
            <div 
                className='text-center my-6 text-2xl font-semibold'>
                It’s Cold Outsite
            </div>
            <div 
                className='text-center text-gray-700 leading-7 tracking-wide'
                style={{fontFamily : 'sans-serif'}}>
                Largest collection of genuine quality <br/>
                prescription glasses frames
            </div>
            <div
                className='text-center hover:text-orange-800 underline text-[17px] font-medium  mt-5 cursor-pointer'>
                    Check It Out
            </div>
        </div>
    </div>
  )
}

export default CollectionBanner