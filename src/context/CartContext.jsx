import React , {Children, useContext, useState}from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export function CartProvider({children}) {

    const [items, setItems ] = useState([]);

    function addItem(item,cantidad) {
        console.log({...item,cantidad});
        if (isInCart(item.id)) {
            console.log('soy duplicado')
            let aux = items;
            console.log(aux)
            let itemIndex = aux.findIndex((element) => element.id == item.id);
            console.log(`Mi index es ${itemIndex}`)
            aux[itemIndex].cantidad += cantidad;
            setItems([...aux])
        } else {
            console.log('soy nuevo')
            setItems([...items, { ...item, cantidad }]);
        }
        
    }

    function removeItem(itemId) {
        
    }

    function clear() {
        setItems([]);
    }

    function isInCart(itemId) {
        if (!!items) {
            return items.some((element) => element.id == itemId);

        }else{
            return false
        }
    }

    return <CartContext.Provider value={{addItem,removeItem, items}}>
        {children}
    </CartContext.Provider>
}
