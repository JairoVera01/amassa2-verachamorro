import React from 'react'
import Item from '../Item/Item'


const ItemList = ({items}) => {
  return (
    <div className="row">
      {items.map((item,index)=>
        <Item key={index} id={item.id} producto={item.producto} precio={item.precio} cantidad={item.cantidad} />
      )}
      
    </div>
    
  )
}

export default ItemList