import React , {useContext}from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {
    const {items, removeItem, clear} =useContext(CartContext);
    return (
    <>
        <div className="mt-5 pt-5">Carrito de compras</div>
        {!items.length && <p className="mt-5 fw-bold">No hay items</p>}
        {
            
            items.length && <ol>
                {items.map(((item,indx)=> <li key={indx}>{item.nombre} - {item.quantity}
                    <p>Precio por unidad {item.precio}</p>
                    <br></br>
                    <button className="btn btn-dark" onClick={()=>removeItem(item.id)}>Remover</button>
                </li>      
                ))}
            </ol>
        }
        <hr />
        Precio total de la compra = S/.{items.reduce((pv,cv)=> pv + (cv.precio*cv.quantity),0)}
        <div>
            <button onClick={clear}>Limpiar</button>
        </div>
    </>
    )
}

export default Cart