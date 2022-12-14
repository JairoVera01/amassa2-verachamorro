import React from 'react'
import {Link} from 'react-router-dom'
import "./Item.css"

const Item = ({id,nombre,precio,stock,imgUrl,descripcion,categoria}) => {
  return (
    <div className="col mt-4">
      <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{nombre}</h4>
          </div>
          <div className="card-body">
            <Link to={`/item/${id}`}>
              <img className='w-75' src={imgUrl} alt="" />
              
            </Link>
            <br></br>
            <small className="text-muted fw-light">Categoria {categoria}</small>
            <p>Precio: S/.{precio}</p>
            <p>Stock disponible: {stock} u.</p>
            
            <Link to={`/item/${id}`}>
              <button className="btn btnFinalizarCompra mt-2">Ver detalles</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Item