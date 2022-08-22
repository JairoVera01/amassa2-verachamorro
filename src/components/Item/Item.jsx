import React from 'react'

const Item = ({id,producto,precio}) => {
  return (
    <div >
      {/* Prueba -> luego poner cards */}
      <p>{id}</p>
      <p>Producto= {producto}</p>
      <p>{precio}</p>
      
    </div>
  )
}

export default Item