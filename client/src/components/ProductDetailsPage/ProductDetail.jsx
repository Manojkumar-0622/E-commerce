import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { SlRefresh } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";


const ProductDetail = ({ products }) => {

    // ✅ Hooks MUST be at top
    const [count, setCount] = useState(1);
    const [currentImage, setCurrentImage] = useState(null);

    // ✅ Set image AFTER products load
    useEffect(() => {
        if (products?.images?.length > 0) {
            setCurrentImage(Object.values(products.images[0])[0]);
        }
    }, [products]);

    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };

    // ✅ Safe early return AFTER hooks
    if (!products) {
        return null;
    }

    const imageValues = products.images.flatMap(item =>
        Object.values(item)
    );

    return (
        <div className='flex mt-10 gap-2'>

            {/* Right side - Images */}
            <div className='flex p-2 w-350'>
                <div className='w-15'>
                    {imageValues.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt=""
                            className='border mt-2 p-1 cursor-pointer'
                            onClick={() => setCurrentImage(imageUrl)}
                        />
                    ))}
                </div>

                <div className='mt-4 ml-20 w-100 flex items-center justify-center'>
                    {currentImage && (
                        <img
                            src={currentImage}
                            alt=""
                            className='w-250 h-150 p-4 mt-15'
                        />
                    )}
                </div>
            </div>

            {/* Left side - Product Details */}
            <div className='w-full'>

                {/* Product Name */}
                <div className='text-3xl text-gray-700 mt-6 font-semibold'>
                    {products.name}
                </div>

                {/* Product Price */}
                <div className='mt-5'>
                    {products.price.length === 2 ? (
                        <div className='flex gap-2 text-[23px] mt-4'>
                            <div className='text-gray-600 line-through'>
                                ${products.price[1].discount}.00
                            </div>
                            <div>${products.price[0].price}.00</div>
                        </div>
                    ) : (
                        <div>${products.price[0].price}.00</div>
                    )}
                </div>

                {/* Reviews */}
                {products.star > 0 && (
                    <div className='flex items-center mt-5 gap-2'>
                        <div className='flex gap-1.5 text-[20px]'>
                            {Array.from({ length: products.star }).map((_, index) => (
                                <FaStar key={index} className='fill-amber-300' />
                            ))}
                        </div>
                        <div className='text-gray-600'>
                            ({products.review} customer review)
                        </div>
                    </div>
                )}

                {/* Description */}
                <div className='mt-10 text-gray-700 leading-7'>
                    {products.simple_des}
                </div>

                {/* Color Selector */}
                <div className='mt-8'>
                    <div className='text-[20px] font-semibold'>COLOR</div>
                    <div className='flex items-center'>
                        <select className='border-2 p-2 mt-3 bg-white'>
                            <option>choose option</option>
                            {products.colors.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                        <div className='flex items-center px-3 mt-3 ml-3 bg-white cursor-pointer'>
                            <SlRefresh />
                            <span className='ml-2'>clear</span>
                        </div>
                    </div>
                </div>

                {/* Quantity */}
                <div className='flex items-center mt-5'>
                    {/*Quantity controller button*/}
                    <div className="flex items-center border p-1 bg-white w-fit mt-6">
                    <button
                        onClick={decrease}
                        className="px-3 py-1 font-bold border-r hover:bg-gray-100"
                    >
                        -
                    </button>

                       <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="w-14 text-center outline-none"
                        />

                        <button
                            onClick={increase}
                            className="px-3 py-1 font-bold border-l hover:bg-gray-100"
                        >
                            +
                        </button>
                    </div>

                    {/*Add to cart*/}

                    <div className='border p-2.5 px-4 mt-6 ml-4 bg-orange-600 text-white font-bold cursor-pointer'>
                        <div className='text-[15px]'>ADD TO CARD</div>
                    </div>
                </div>

                {/*Add to your wishlist*/}
                <div className='flex items-center mt-3 text-gray-500 hover:text-gray-700 cursor-pointer'>
                    <CiHeart className='mr-1'/>
                    <div className='text-[15px]'>Add to wishlist</div>
                </div>

                <div className='flex mt-4 font-light'>
                    <div>Categories:</div>
                    <div className='flex ml-2 '>{products.Categories.map(item =>(
                        <div className='hover:text-blue-500 cursor-pointer'
                             onClick={()=>console.log(item)}>{item},</div>
                        
                    ))}</div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
