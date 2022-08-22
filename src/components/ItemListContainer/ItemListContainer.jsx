import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    
    useEffect(() => {
        let productos = [
            {
                id: 1,
                producto: "Alfajores clásicos",
                precio: 20
            },
            {
                id: 2,
                producto: "Alfajores de chocolate",
                precio: 20
            }
        ];
        new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(productos);
            }, 2000)
        }).then((data)=>{
            setItems(data);
        })
    }, [])

    return (
        <div>
            <ItemList items={items}/>
        </div> 
    )
}

export default ItemListContainer