import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'

const CheckOut = () => {

    const {cart, setCart} = useContext(CartContext);
    const [total , setTotal] = useState(0);

        const cartItems = [
            {
                id: 7,
                image: "/src/assets/arrivals/Quilted Crossbody Bag_1.jpg",
                name: "Quilted Crossbody Bag",
                price: 21,
                quantity: 2,
                stock: 0,
                total: 42
            },
            {
                id: 8,
                image: "/src/assets/arrivals/Retro Liner Socks_1.jpg",
                name: "Retro Liner Socks",
                price: 70,
                quantity: 1,
                stock: 23,
                total: 70
            }
        ];

        useEffect(()=>{
            let total = 0;
            cartItems.forEach(item =>(
                total+= item.total
            ))

            console.log(total);
            setTotal(total);
        },[]);



        console.log(cart);
    
    return (
        <div>
            <div className='text-center py-6 text-3xl'>haute</div>
            <div className='text-center py-13 bg-gray-300'>
                <div className='text-[30px]'>Checkout</div>
                <div className='text-[19px] font-light'>Home / Checkout</div>
            </div>
            <div className='flex m-8 '>
                <div className='w-[60%]'>
                    <div className='text-center my-5'>Have a coupon? Click here to enter your code</div>
                    <div className='flex gap-5'>
                        <div>
                            <div>First name <span className='text-red-500'>*</span></div>
                            <input type="text"
                                    className='border outline-0 pl-3 mt-2 w-85.5 h-12' />
                        </div>
                        <div>
                            <div>Last name <span className='text-red-500'>*</span></div>
                            <input type="text"
                                    className='border outline-0 pl-3 mt-2 w-85 h-12' />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div>Company name (optional)</div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3' />
                    </div>

                    
                    <div className='mt-5'>
                        <div>Country / Regian <span className='text-red-500'>*</span></div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3'
                               placeholder='India (IN)' />
                    </div>

                    <div className='mt-5'>
                        <div>Street Address <span className='text-red-500'>*</span></div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3'
                               placeholder='House number and street name' />

                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3'
                               placeholder='Apartment, suite, unit, etc.(optional)' />
                    </div>

                    <div className='mt-5'>
                        <div>Town / City <span className='text-red-500'>*</span></div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3'
                               placeholder='India (IN)' />
                    </div>

                    <div className='mt-5'>
                        <div>State <span className='text-red-500'>*</span></div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3' />
                    </div>

                    <div className='mt-5'>
                        <div>ZIP Code <span className='text-red-500'>*</span></div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3' />
                    </div>

                    <div className='mt-5'>
                        <div>Phone <span className='text-red-500'>*</span></div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3' />
                    </div>

                    <div className='mt-5'>
                        <div>Email address <span className='text-red-500'>*</span></div>
                        <input type="text"
                               className='border w-[98%] h-12 outline-0 pl-3 mt-3' />
                    </div>

                    <div className='mt-10'>
                        <div className='text-3xl font-semibold'>Additional information</div>

                        <div className='mt-5'>
                            <div>Order notes (optional)</div>
                            <textarea name=""
                                      id="" 
                                      className='resize-none border outline-0 mt-4 p-2 w-[98%] h-35'></textarea>
                        </div>
                    </div>

                </div>


                
                <div className='border mt-24 w-[35%] p-10'>
                    <div className='flex font-semibold justify-between'>
                        <div>PRODUCT</div>
                        <div>SUBTOTAL</div>
                    </div>
                    <hr className='mt-3'/>
                    {cartItems.map(item => (
                        <div>
                            <div className='flex justify-between mt-5'>
                                <div>
                                    {item.name} <span className='pl-2'> x {item.quantity}</span>
                                </div>
                                <div className='text-orange-600 font-semibold'>${item.total}.00</div>
                            </div>
                            <hr className='mt-3'/>
                        </div>
                    ))}

                    <div className='flex justify-between mt-5'>
                        <div>
                            Subtotal
                        </div>
                        <div className='text-orange-600 font-semibold'>${total}.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut