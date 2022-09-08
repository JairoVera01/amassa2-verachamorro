import React , {Children, useContext, useState}from 'react';
import { createContext } from 'react';

export const CartContext = createContext();
export function CartProvider() {

    function addItem(item,cantidad) {
        console.log({...item,cantidad});
        
    }

    function removeItem(itemId) {
        
    }

    function clear() {
        
    }

    function isInCart(itemId) {
        return true;
    }

    return <CartContext.Provider value={{addItem,removeItem}}>
        {Children}
    </CartContext.Provider>
}
