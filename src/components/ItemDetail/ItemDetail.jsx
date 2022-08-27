import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    const {id,producto,precio,cantidad,imgUrl,detalles} = item;
    const onAdd = (contador) =>{
        alert("Se agregaron "+ contador)
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <img src={imgUrl} alt="" className=" w-75 img-thumbnail rounded "/>
                            <ItemCount stock={cantidad} initial={1} onAdd={onAdd}/>
                        </div>
                        <div className="col text-start">
                            <p>{producto}</p>
                            <p>{detalles}</p>
                            <p>S/.{precio}</p>
                            <p>Stock {cantidad} u.</p>
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