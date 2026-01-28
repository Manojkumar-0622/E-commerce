import React, { Children, useState } from 'react'
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,SetCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, SetCart}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext