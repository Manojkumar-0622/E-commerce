import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const ProductDetail = ({products}) => {
    
    // console.log(Object.values(products.images));

    const dummyArray = {
        name : "Manoj kumar",
        age : 21
    }
    if(!products){
        return null;
    }

    const [currentImage,setCurrentImage] = useState(
        Object.values(products.images[0])
    );

    console.log(currentImage);

    const imageValues = products.images.flatMap(item=>(
        Object.values(item)
    ));

    console.log(imageValues);
    console.log(products.price[0].price);
    console.log(products.price.length)

    return (
        <>
            <div className='flex mt-10 gap-2'>
                {/*right side of the product for image*/}
                <div className='flex p-2 w-350'>
                    <div className='w-15'>
                        {imageValues.map(imageUrl => (
                            <img src={imageUrl} alt="" 
                                 className='border mt-2 p-1 cursor-pointer'
                                 onClick={()=> setCurrentImage(imageUrl)}/>
                                 
                        ))}
                    </div>
                    <div className='mt-4 ml-20 w-100 flex items-center justify-center'>
                        <img src={currentImage} 
                             alt=""
                             className='w-250 h-150 p-4 mt-15' />
                    </div>

                </div>

                {/* Left side of the product for product details */}
                <div className='w-full'>
                    <div className='text-3xl text-gray-700 mt-6 font-semibold'>
                        {products.name}
                    </div>
                    <div className='mt-5'>
                        {products.price.length == 2 ? 
                            <div className='flex font-mono gap-2 text-[23px] mt-4 '
                                style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" }}>
                                <div className='text-gray-600 font-sans line-through'>${products.price[1].discount}.00</div>
                                <div>${products.price[0].price}.00</div>
                            </div> : <div>${products.price[0].price}.00</div>
                        }
                    </div> 
                    {products.star > 0 &&
                        <div className='flex items-center mt-5 gap-2'>
                            <div className='flex gap-1.5 text-[20px]'>
                                {Array.from({length : products.star}).map((_,index)=>(
                                    <FaStar className=' fill-amber-300' />
                                ))}
                            </div>
                            <div className='text-gray-600'>( {products.review} customer review)</div>
                        </div>
                    }
                    <div className='mt-10 text-gray-700 leading-7'
                         style={{ wordSpacing: '5px' }}>
                        {products.simple_des}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail