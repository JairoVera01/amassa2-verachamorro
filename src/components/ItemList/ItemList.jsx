import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <div>
      {items.map((item,index)=>
        <Item key={index} id={item.id} producto={item.producto} precio={item.precio} />
      )}
    </div>
    
  )
}

export default ItemList