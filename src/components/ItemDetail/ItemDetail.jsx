import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

    const {id,nombre,precio,stock,imgUrl,descripcion,categoria } = item;
    const {addItem} = useContext(CartContext);
    const [counter,setCounter]=useState(0);
    
    function onAdd (contador) {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>Producto/s agregados correctamente</p>,
            icon : "success",
            timer : 3500,
        })
        setCounter(contador);
        addItem(item, contador);
    }

        
    return (
        <div className="container">
            <div className="row mt-5 pt-5 mb-5">
                <div className="col mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="imgHover "> 
                                <div>
                                    <figure><img src={imgUrl} alt="" className=" w-50 img-thumbnail rounded "/></figure>
                                    
                                </div>
                            </div>
                            
                            <ItemCount stock={stock} initial={1} onAdd={onAdd}  />
                            <Link to="/cart"> <button className="btn btn-success mt-4">Ir al carrito</button> </Link> 
                        </div>
                        <div className="col text-start">
                            <p className="productoComponentes"><u>Producto:</u>  <small>{nombre}</small> </p> 
                            <p className="productoComponentes"><u>Detalles:</u> <small> {descripcion}</small></p>
                            <p className="productoComponentes"><u>Categoria:</u>  <small></small> {categoria}</p>
                            <p className="productoComponentes"><u>Precio por unidad: </u> <small> S/. {precio}</small> </p>
                            <p className="productoComponentes"><u>Stock disponible: </u>  <small>{stock}</small>  u.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail