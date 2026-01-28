import React, { useEffect } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { useContext } from 'react';

const NewArrivals = ({dummayArrival,title}) => {

    const navigater = useNavigate();
    const { cart, SetCart} = useContext(CartContext);

    const handleCartProducts = (products) =>{
        SetCart(PrevItem => {
            const excisting = PrevItem.find(item => item.id === products.id);

            if(excisting){
                return PrevItem.map(item =>(
                    item.id === products.id ?
                    {...item, quantity : item.quantity + 1}  :
                    item
                ));
            }

            else{
                return [
                    ...PrevItem,
                    {
                        id: products.id,
                        name: products.name,
                        image: products.images[0].normal_img,
                        price: products.price[0].price,
                        stock: products.stock,
                        quantity: 1
                    }
                ]
            }
        })
    };

    useEffect(()=>{
        console.log(cart);
    },[cart]);


    return (
        <div className='mt-22 mb-23'>
             <div 
                 className='text-center text-gray-800 text-4xl'>{title}</div>
             <div 
                 className='flex gap-3 mt-20 justify-around mx-6 '>
                {dummayArrival.map(items =>(
                    <div key={items.name}>
                        <div onClick={()=>navigater(`/products/${items.id}`)} className='w-[250px] group cursor-pointer relative h-[250px]'>
                            <img 
                                 src={items.images[0].normal_img}
                                 alt=""
                                 className='absolute inset-0 w-full h-full object-cover
                                            opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out
                                            ' />
                                            
                            <img 
                                 src={items.images[1].hover_img}
                                 alt="" 
                                 className='absolute inset-0 w-full  h-full  object-cover
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'/>
                            <FaRegHeart 
                                        className='w-[40px] opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:-translate-y-0  duration-300  h-[40px] p-2 bg-white absolute top-0 right-0'/>

                            {items.stock == 0 && 
                                                <div 
                                                    className='absolute z-30 border m-2 px-2 py-0.5 text-white bg-red-600 text-[13px] '>
                                                    Sold out
                                                </div>}
                            <div 
                                className='flex absolute z-30 opacity-0 group-hover:opacity-100 top-1/2 left-1/2 items-center 
                                            gap-1.5 text-[14px] py-1.5 px-2.5 transition-opacity duration-300 ease-in-out hover:bg-gray-800
                                            -translate-y-1/2 -translate-x-1/2 bg-orange-800 [word-spacing:3px] text-white'
                                onClick={()=>handleCartProducts(items)}>
                                <IoCartOutline className='size-5.5'/>
                                Add to cart

                            </div>
                        </div>

                        <div 
                            className='text-center my-4 text-gray-700'>{items.name}</div>
                        {items.star && <div className='text-centern flex items-center justify-center mb-4'>
                        {Array.from({ length: items.star }).map((_, index) => (
                            <span key={index} className=''>
                                <FaStar className='fill-amber-300'/>
                            </span>
                        ))}</div>}
                        <div
                            className='flex items-center gap-2 justify-center'>
                            {items.price[1] && <div 
                                                    className='line-through text-gray-400'>${items.price[1].discount}.00</div>}
                            <div 
                                className=' text-gray-700'>${items.price[0].price}.00</div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default NewArrivals