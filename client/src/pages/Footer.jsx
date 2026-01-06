import React from 'react'
import { FaFacebook ,FaYoutube, FaTwitter} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div 
        className='mt-12'>
        <div className='flex bg-gray-200 px-18 gap-3.5 py-15'>
            <div className='flex-1'>
                <div 
                    className='text-3xl mb-5 font-semibold'>haute</div>
                <div 
                    className='text-gray-500 text-[15px] leading-6.5'>Our mission is to offer you the best selection of Nordic design, whether well-established or up-and-coming.</div>
                <div 
                    className='flex gap-3 mt-6'>
                    <FaFacebook className='size-5.5 cursor-pointer'/>
                    <FaYoutube className='size-5.5 cursor-pointer'/>
                    <FaTwitter className='size-5.5 cursor-pointer'/>
                    <FaSquareInstagram className='size-5.5 cursor-pointer'/>
                </div>
            </div>
            <div className='flex-1'>
                <div 
                    className='text-2xl'>Navigate</div>
                <ul 
                    className='mt-5 text-[15px] space-y-4 text-gray-700'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Journal</a></li>
                </ul>
            </div>
            <div className='flex-1'>
                <div 
                    className='text-2xl'>Information</div>
                <ul 
                    className='mt-5 text-[15px] space-y-4 text-gray-700'>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Store Location</a></li>
                    <li><a href="#">F.A.Qs</a></li>
                </ul>
            </div>

            
            <div className='flex-1'>
                <div 
                    className='text-2xl'>Newsletter</div>
                <div 
                    className='mt-8 text-gray-700 text-[15px]'>Subscribe to get notified about product launches, special offers and news.</div>
                <input 
                    className='border-2 border-gray-300 my-4 outline-0 px-2 py-2 rounded bg-white placeholder:text-sm '
                    type="text"
                    placeholder='hi@blow.woostify' />
                <button
                    className='text-[14px] tracking-[2px] py-3 px-4 rounded bg-amber-700 text-white transition duration-300 hover:bg-orange-600 cursor-pointer'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='bg-gray-200 text-[15px] text-gray-700 border-t px-18 gap-3.5 py-5 text-center'>
            © 2025 Blow. Developed by Manojkumar
        </div>
    </div>
  )
}

export default Footer