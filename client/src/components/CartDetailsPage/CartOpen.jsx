import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosTrash } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const CartOpen = () => {

    const { cart, SetCart } = useContext(CartContext);

    const [openCart, setOpenCart] = useState(false);
    const [total, SetTotal] = useState(0);
    const navigate = useNavigate();

    // ✅ INCREMENT
    const handleIncrement = (id) => {
        SetCart(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                        total: (item.quantity + 1) * item.price
                    }
                    : item
            )
        );
        console.log(cart);
    };

    // ✅ DECREMENT (minimum 1)
    const handleDecrement = (id) => {
        SetCart(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                        total: (item.quantity - 1) * item.price
                    }
                    : item
            )
        );
    };

    // ✅ REMOVE ITEM
    const handleRemoveItem = (id) => {
        SetCart(prev => prev.filter(item => item.id !== id));
    };

    // ✅ CALCULATE SUBTOTAL (NO SetCart HERE ❗)
    useEffect(() => {
        let allPrice = 0;

        cart.forEach(item => {
            allPrice += item.total;
        });

        SetTotal(allPrice);
    }, [cart]);

    return (
        <div className='relative'>
            {/* CART ICON */}
            <div className='relative'>
                <FaShoppingCart
                    className="size-6 cursor-pointer"
                    onClick={() => setOpenCart(true)}
                />

                <div className="
                    absolute -top-4 left-4 
                    w-5 h-5
                    flex items-center justify-center
                    rounded-full 
                    text-[14px]
                    bg-orange-600
                    text-white
                ">
                    {cart.length}
                </div>
            </div>

            {/* CART DRAWER */}
            <div
                className={`
                    fixed top-0 h-screen w-80 bg-white z-50
                    transition-all duration-300
                    ${openCart ? 'right-0' : '-right-96'}
                `}
            >
                {/* HEADER */}
                <div className='flex items-center justify-between mt-6 mx-5'>
                    <div className='font-light'>
                        SHOPPING CART ({cart.length})
                    </div>
                    <IoClose
                        className='size-7 cursor-pointer'
                        onClick={() => setOpenCart(false)}
                    />
                </div>

                <hr className='mt-4 mx-3' />

                {/* CART ITEMS */}
                <div className='mt-6'>
                    {cart.map(items => (
                        <div key={items.id} className='mx-3 flex mt-4 gap-5'>
                            <div className='w-20 h-24 rounded'>
                                <img
                                    src={items.image}
                                    alt=""
                                    className='w-full h-full rounded object-cover'
                                />
                            </div>

                            <div className='text-[14px] w-48 font-light'>
                                <div className='flex justify-between items-center'>
                                    <div className='text-[15px]'>{items.name}</div>
                                    <IoIosTrash
                                        className='cursor-pointer hover:fill-red-600'
                                        onClick={() => handleRemoveItem(items.id)}
                                    />
                                </div>

                                <div className='flex justify-between mt-4'>
                                    {/* QUANTITY CONTROLLER */}
                                    <div className="flex items-center border rounded-md overflow-hidden">
                                        <button
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                            onClick={() => handleDecrement(items.id)}
                                        >
                                            −
                                        </button>

                                        <input
                                            type="number"
                                            value={items.quantity}
                                            readOnly
                                            className="w-10 text-center outline-none border-x"
                                        />

                                        <button
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                            onClick={() => handleIncrement(items.id)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className='text-[15px]'>
                                        ${items.total}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SUBTOTAL */}
                <div className='absolute bottom-0 w-full'>
                    <hr className='mx-4' />
                    <div className='mx-4 my-2 flex justify-between'>
                        <div>SUBTOTAL</div>
                        <div>${total.toFixed(2)}</div>
                    </div>
                    <div className='text-center cursor-pointer text-[15px] font-semibold'
                         onClick={()=> {
                                            navigate('/cart');
                                            setOpenCart(false)
                                        }}>
                        VIEW CART
                    </div>
                    <div className='text-center text-[15px] py-2 border mx-4 mt-3 mb-2 bg-orange-600 text-white cursor-pointer'>
                        CHECK OUT
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartOpen;
