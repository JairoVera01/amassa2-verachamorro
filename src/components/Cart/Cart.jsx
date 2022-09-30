import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./cart.css"

const Cart = () => {
    const {items, removeItem, clear} =useContext(CartContext);
    
    return (
    <>
        <div className="container">
            <p className=" tituloCarrito">Carrito de compras</p>
            {!items.length ? 
            <p className="mt-5 fw-bold">
                No hay items en su carrito.
                <Link to="/">
                    <br />
                    <button className="btn btn-dark mt-4 mb-4">Comprar productos</button>
                </Link>
            </p>:
                items.length && <ol className="listaCarrito">
                    <p className="text-start txtResumenCompra pb-3">Resumen de compra: </p>
                    {items.map(((item,indx)=> 
                    <li key={indx} className="listaCarrito">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <img src={item.imgUrl} alt="" className="w-25 img-thumbnail" />
                            </div>
                            <div className="col text-start">
                                <p>Producto:  {item.nombre}</p>
                                <p>Cantidad seleccionada: {item.quantity} unidades</p>
                                <p>Precio por unidad {item.precio}</p>
                                <hr />
                                <p><i> Subtotal: S/.{items.reduce((pv,cv)=> (item.precio)*(item.quantity),0)}</i></p>
                                
                                <br></br>
                                <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>Remover</button>
                                
                            </div>
                        </div>
                        <hr />
                    </li>      
                    ))}
                </ol>
            }
            <p className="precioTotal"> Precio total de la compra = S/. {items.reduce((pv,cv)=> pv + (cv.precio*cv.quantity),0)}</p>
            <div className="mb-5">
                <button className="btn btn-warning m-2" onClick={clear}>Limpiar carrito</button>
                <Link to="/checkout">
                    <button className="btn btn-success m-2">CheckOut - Finalizar Compra </button>
                </Link>
            </div>
        </div>
    </>
    )
}

export default Cart