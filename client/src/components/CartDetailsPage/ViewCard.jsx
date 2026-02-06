import React, { useContext, useEffect, useState } from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import CartContext from '../../context/CartContext';
import dummyImage from '../CartDetailsPage/dummy.jpg'
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const ViewCard = () => {

    const { cart , SetCart } = useContext(CartContext);
    const [ totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    // const dummyData = [];

    // const cartItems = [
    // {
    //     id: 7,
    //     image: "/src/assets/arrivals/Quilted Crossbody Bag_1.jpg",
    //     name: "Quilted Crossbody Bag",
    //     price: 21,
    //     quantity: 2,
    //     stock: 0,
    //     total: 42
    // },
    // {
    //     id: 8,
    //     image: "/src/assets/arrivals/Retro Liner Socks_1.jpg",
    //     name: "Retro Liner Socks",
    //     price: 70,
    //     quantity: 1,
    //     stock: 23,
    //     total: 70
    // }
    // ];

    const [dummyCart,SetdummyCart] = useState(cart);

    const removeItem = (id) =>{
        SetdummyCart(prev => prev.filter(item => item.id !== id));
    }

    useEffect(()=>{
        let total = 0;
        dummyCart.forEach(element => {
            total+=(element.total) * element.quantity;
        });
        
        console.log(total);
        setTotalPrice(total);
    },[dummyCart]);

    const handleIncrement = (id) =>{
        SetdummyCart(prev =>
            prev.map(item =>(
                item.id === id ? {
                    ...item,
                    quantity : item.quantity + 1,
                    total : (item.quantity + 1) * item.price
                } : item
            ) )
        )
    }

    const handleDecrement = (id) =>{
        SetdummyCart(prev =>
            prev.map(item => (
                item.id === id ? {
                    ...item,
                    quantity : item.quantity - 1,
                    total : item.total - item.price
                } : item
            ))
        )
    }


    return (
        <div className='w-full relative'>
            <div className='text-center text-black/70 h-45 text-[28px] pt-15 bg-gray-200'>
                <div>
                    Cart
                </div>
                <div className='text-[19px] pt-2'>haute / cart</div>
            </div>
            <div className='mt-15 mx-10 '>
                <div className='bg-orange-700 text-white flex items-center rounded py-4 pl-5'>
                    <IoIosCheckmarkCircle />
                    <div className='pl-2'>Cart Update</div>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className=''>
                        <div className='flex gap-30 pl-35 justify-between'>
                            <div>Product</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>SubTotal</div>
                        </div>
                        {dummyCart.map(item =>(
                            <div className='mt-10 flex  gap-2  items-center'>
                                <IoIosClose className='cursor-pointer hover:fill-red-600 size-6'
                                            onClick={()=> removeItem(item.id)}/>

                                <hr />

                                <img src={item.image} 
                                     alt=""
                                     className='w-20 h-19' />
                                
                                <div className='pl-5 w-45'>{item.name}</div>

                                <div className='pl-5'>{item.total}</div>

                                <div className="flex ml-25 items-center border rounded-md overflow-hidden">
                                        <button
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                            onClick={() => handleDecrement(item.id)}
                                        >
                                            −
                                        </button>

                                        <input
                                            type="number"
                                            value={item.quantity}
                                            readOnly
                                            className="w-10 text-center outline-none border-x"
                                        />

                                        <button
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                            onClick={() => handleIncrement(item.id)}
                                        >
                                            +
                                        </button>
                                </div>

                                <div className='ml-24 text-orange-600 font-bold'>${item.total}.00</div>
                            </div>
                        ))}
                    </div>
                    <div className='border w-75 h-60 text-[19px] p-4'>
                        <div className='text-center'>Cart totals</div>
                        <div className='flex items-center justify-between text-[17px] mt-5'>
                            <div>Subtotal</div>
                            <div>${totalPrice}</div>
                        </div>
                        <hr className='mt-3'/>
                        <div className='flex justify-between text-[19px] mt-5'>
                            <div className='font-bold'>Total</div>
                            <div className='text-orange-600'>${totalPrice}</div>
                        </div>

                        <div className='border mt-4 text-center py-3 text-white bg-orange-700 cursor-pointer'
                             onClick={()=> navigate('/checkout')}>
                            PROCEED TO CHECKOUT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCard