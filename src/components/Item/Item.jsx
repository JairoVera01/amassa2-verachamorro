import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({id,producto,precio,cantidad,imgUrl}) => {
  const onAdd = () =>{
    
  }

  function crearSkuAleatorio(){
    let sku = new Date().getTime();
    return sku;
}

  return (
    <div className="col mt-4">
      <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{producto}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">S/.{precio}</h1>
            <img className='w-75' src={imgUrl} alt="" />
            <br></br>
            <small className="text-muted fw-light">SKU {crearSkuAleatorio()+1}</small>
            <ItemCount stock={cantidad} initial={1} onAdd={onAdd}/>
          </div>
        </div>
    </div>
  )
}

export default Item