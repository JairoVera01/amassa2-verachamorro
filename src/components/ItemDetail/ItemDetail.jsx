import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {

    const {id,nombre,precio,stock,imgUrl,descripcion,categoria } = item;
    const {addItem} = useContext(CartContext);
    const [counter,setCounter]=useState(0);
    
    function onAdd (contador) {
        alert(`Se agregaron ${contador} u. de  ${nombre} `);
        setCounter(contador);
        addItem(item, contador);
    }

    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <img src={imgUrl} alt="" className=" w-75 img-thumbnail rounded "/>
                            { counter ? <Link to="/Cart"> <button>Finalizar Compra</button> </Link> :<ItemCount stock={stock} initial={1} onAdd={onAdd}  />}
                        </div>
                        <div className="col text-start">
                            <p>{nombre}</p>
                            <p>{descripcion}</p>
                            <p>Categoria: {categoria}</p>
                            <p>S/.{precio}</p>
                            <p>Stock {stock} u.</p>
                        </div>
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    )
}

export default ItemDetail