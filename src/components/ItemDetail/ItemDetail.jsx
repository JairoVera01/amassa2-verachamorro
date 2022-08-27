import React from 'react'

const ItemDetail = ({item}) => {
    const {id,producto,precio,cantidad,imgUrl,detalles} = item;

return (
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <img src={imgUrl} alt="" className=" w-75 img-thumbnail rounded "/>
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