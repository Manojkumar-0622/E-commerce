import React, { useState, useRef, useContext } from 'react';
import { FaStar } from "react-icons/fa";
import { SlRefresh } from "react-icons/sl";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import detailsImage from '../ProductDetailsPage/Safecheckout.png';
import CartContext from '../../context/CartContext';

const ProductDetail = ({ products }) => {

    /* =======================
       HOOKS (TOP ONLY)
    ======================== */
    const [count, setCount] = useState(1);
    const [imageIndex, setImageIndex] = useState(0);
    const imgRef = useRef(null);
    const [transform, setTransform] = useState("scale(1)");
    const { cart ,SetCart } = useContext(CartContext);

    /* =======================
       SAFE RETURN
    ======================== */
    if (!products) return null;

    /* =======================
       DERIVED DATA
    ======================== */
    const imageValues = products.images.flatMap(item =>
        Object.values(item)
    );

    const currentImage = imageValues[imageIndex];

    /* =======================
       QUANTITY
    ======================== */
    const decrease = () => {
        setCount(prev => (prev > 1 ? prev - 1 : 1));
    };

    const increase = () => {
        setCount(prev => prev + 1);
    };

    /* =======================
       IMAGE NAVIGATION
    ======================== */
    const nextValue = () => {
        setImageIndex(prev =>
            prev === imageValues.length - 1 ? 0 : prev + 1
        );
    };

    const prevValue = () => {
        setImageIndex(prev =>
            prev === 0 ? imageValues.length - 1 : prev - 1
        );
    };

    /* =======================
       IMAGE ZOOM LOGIC
    ======================== */
    const handleMouseMove = (e) => {
        if (!imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setTransform(
            `scale(2) translate(${-(x - 50) / 2}%, ${-(y - 50) / 2}%)`
        );
    };

    const handleMouseLeave = () => {
        setTransform("scale(1)");
    };

const handleCartProducts = () =>{
        SetCart(PrevItem => {
            const excisting = PrevItem.find(item => item.id === products.id);

            if(excisting){
                return PrevItem.map(item =>(
                    item.id === products.id ?
                    {...item,
                        quantity : item.quantity + 1,
                        total : (item.quantity + 1) * item.price
                    }  :
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
                        total : products.price[0].price,
                        stock: products.stock,
                        quantity: 1
                    }
                ]
            }
        })
    };

    /* =======================
       JSX
    ======================== */
    return (
        <div className='flex mt-10 gap-2'>

            {/* IMAGE SECTION */}
            <div className='flex p-2 relative w-350'>
                <div className='w-15'>
                    {imageValues.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt=""
                            className={`${imageIndex === index ? 'border' : ''} mt-2 p-1 cursor-pointer`}
                            onClick={() => setImageIndex(index)}
                        />
                    ))}
                </div>

                <div
                    className="relative w-120 h-120 top-15 overflow-hidden ml-15"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={currentImage}
                        alt=""
                        ref={imgRef}
                        className="w-full h-full absolute  object-cover transition-transform duration-75"
                        style={{ transform }}
                    />
                </div>

                <div className='flex top-90 left-32 justify-between items-center absolute h-12 w-120'>
                    <FaAngleLeft
                        className='size-11 p-2 rounded-full cursor-pointer bg-white'
                        onClick={prevValue}
                    />
                    <FaAngleRight
                        className='size-11 p-2 rounded-full cursor-pointer bg-white'
                        onClick={nextValue}
                    />
                </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div className='w-full'>
                <div className='text-3xl text-gray-700 mt-6 font-semibold'>
                    {products.name}
                </div>

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

                <div className='mt-10 text-gray-700 leading-7'>
                    {products.simple_des}
                </div>

                {/* QUANTITY */}
                <div className='flex items-center mt-5'>
                    <div className="flex items-center border p-1 bg-white w-fit mt-6">
                        <button onClick={decrease} className="px-3 py-1 font-bold border-r">-</button>
                        <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="w-14 text-center outline-none"
                        />
                        <button onClick={increase} className="px-3 py-1 font-bold border-l">+</button>
                    </div>

                    <div className='border p-2.5 px-4 mt-6 ml-4 bg-orange-600 text-white font-bold cursor-pointer'
                         onClick={()=> handleCartProducts()}>
                        ADD TO CART
                    </div>
                </div>

                <div className='flex items-center mt-3 text-gray-500 hover:text-gray-700 cursor-pointer'>
                    <CiHeart className='mr-1' />
                    Add to wishlist
                </div>

                <div className='mt-10'>
                    <img src={detailsImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
