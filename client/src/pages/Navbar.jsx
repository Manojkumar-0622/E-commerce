import { Link, NavLink } from 'react-router-dom'
import { FaSearch,FaUser,FaShoppingCart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { VscClose } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = ({SetSearch , search}) => {

    const navicateLinks = [
        {name : "Home", path : "/"},
        {name : "Shop", path : "/shop"},
        {name : "Pages", path : "/Pages"},
        {name : "Blog", path : "/Blog",
            child : [
                {name : "Blog Page", path : "/blog/blogpage"},
                {name : "Single Blog", path : "/blog/singleblog"}
            ]
        },
        {name : "Contact", path : "/contact"}
    ]



    return (
        <div 
            className='w-full h-23 flex   justify-between items-center '>
            <div 
                className='pl-12 text-3xl opacity-70 flex-1'>
                <div 
                    className='cursor-pointer inline-block'>Blow</div>
            </div>
            <div 
                className='flex flex-1'>
                <ul 
                    className='flex gap-10'>
                    {navicateLinks.map(links =>(
                        <li key={links.name} 
                            className='relative group py-5 px-1 text-[17px]'>
                            <NavLink to={links.path} className={ ({isActive})=> isActive ? 'text-orange-600' : 'text-black hover:text-orange-600' }>
                                {links.name}
                            </NavLink>
                            {links.child && (
                                <ul 
                                    className='min-w-[140px] z-20 bg-white opacity-0 translate-y-6 transition-all duration-300 ease-in-out  absolute rounded right-[-55px] top-[57px] group-hover:opacity-100 group-hover:translate-y-0'>
                                    {links.child.map(ChildLink =>(
                                        <li key={ChildLink.name} 
                                            className='p-1 block whitespace-nowrap'>
                                            <NavLink to={ChildLink.path} 
                                                className={`block ${(isActive) => isActive ? 'text-orange-600  bg-orange-600/30' 
                                                : 'text-black'} hover:text-orange-600  hover:bg-orange-600/30 transition duration-300 text-center text-[15px] text-gray-700 rounded py-2`}>
                                                {ChildLink.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                    ))}
                </ul>
                <div 
                    className='flex-1 flex justify-around items-center ml-10 mr-3'>
                    <FaSearch 
                        className='size-6 cursor-pointer'
                        onClick={()=> SetSearch(true)}
                    />
                        <div 
                            className={`${search ? 'opacity-100 top-1/2' : 'opacity-0 top-0'} transition-all duration-300 ease-in-out absolute rounded -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[550px] z-40 bg-white`}>
                            <div 
                                className='flex justify-between items-center  px-4 py-4'>
                                <div 
                                    className='text-[17px] font-semibold'>
                                    TYPE TO SEARCH
                                </div>
                                <div>
                                    <VscClose onClick={()=> SetSearch(false)} className='size-6 font-light cursor-pointer'/>
                                </div>
                            </div>
                            <div className='flex items-center bg-gray-200'>
                                <div className=''>
                                    <input type="text" className=' px-4 text-[18px] text-gray-700 outline-0 w-[500px] py-3'/>
                                </div>
                                <div>
                                    <GoSearch className='p-2 w-[45px] h-[40px]  mx-2 my-2'/>
                                </div>
                            </div>
                        </div>
                        <div className='relative group  py-5'>
                            <FaUser className='size-6 cursor-pointer relative'/>
                            <NavLink to={'/login'} className='absolute group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 z-20 bg-white opacity-0  min-w-[120px] p-2 flex justify-center items-center top-[57px] rounded whitespace-nowrap right-[-52px]
                                            hover:text-orange-600 text-[15px] cursor-pointer transition-all duration-300 ease-in-out'>
                                Login / register 
                            </NavLink>
                        </div>
                    <FaShoppingCart className='size-6 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar