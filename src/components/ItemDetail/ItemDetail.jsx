import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    const {id,nombre,precio,stock,imgUrl,descripcion,categoria } = item;
    const onAdd = (contador) =>{
        alert("Se agregaron "+ contador)
    }
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <img src={imgUrl} alt="" className=" w-75 img-thumbnail rounded "/>
                            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
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