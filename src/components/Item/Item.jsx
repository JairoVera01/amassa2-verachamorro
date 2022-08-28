import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const Item = ({id,nombre,precio,stock,imgUrl,descripcion,categoria}) => {
  const onAdd = (contador) =>{
    alert("Se agregaron "+ contador)
  }

  function crearSkuAleatorio(){
    let sku = new Date().getTime();
    return sku;
}

  return (
    <div className="col mt-4">
      <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{nombre}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">S/.{precio}</h1>
            <Link to={`/item/${id}`}>
              <img className='w-75' src={imgUrl} alt="" />
            </Link>
            <br></br>
            <small className="text-muted fw-light">SKU {crearSkuAleatorio()+1}</small>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            <Link to={`/item/${id}`}>
              <button className="btn btn-dark mt-2">Ver detalles</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Item