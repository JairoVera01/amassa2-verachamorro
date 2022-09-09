import React , {useContext}from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {
    const {items} =useContext(CartContext)
  return (
    <>
    <div className="container mt-5 pt-5">
        <div className="h1">Carrito de compras</div>
        {!items && <span>No hay items</span>}
        {items &&<div className="container">
            {items.map((item=>
            <div>
                <div className="mt-4 row row-cols-1 row-cols-md-3 ">
                    <div className="col">
                        <img className='w-75 img-thumbnail' src={item.imgUrl} alt="" />
                    </div>
                    <div className="col text-start">
                        <p className="h6">Producto {item.nombre} </p>
                        <p className="h6">Cantidad seleccionada: {item.cantidad}</p>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            ))}
        </div>}
    </div>
    
    </>
  )
}

export default Cart