import React , {useContext}from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {
    const {items} =useContext(CartContext)
  return (
    <>
    <div className="container mt-5 pt-5">
        <div>Cart</div>
        {!items && <span>No hay items</span>}
        {items &&<ol>
            {items.map((item=><li>{item.nombre} - {item.cantidad}</li>))}
        </ol>}
    </div>
    
    </>
  )
}

export default Cart