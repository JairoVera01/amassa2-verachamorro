import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';

import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    const onAdd = () =>{
    
    }
    useEffect(() => {
        let productos = [
            {
                id: 1,
                producto: "Alfajores clásicos",
                precio: 20,
                cantidad: 10,
                imgUrl: "https://i.imgur.com/L4JHAKX.jpg"
            },
            {
                id: 2,
                producto: "Alfajores de chocolate",
                precio: 15,
                cantidad: 5,
                imgUrl: "https://i.imgur.com/9oTd2Jc.jpg"
            },
            {
                id: 3,
                producto: "Alfajores marmoleado",
                precio: 30,
                cantidad: 15,
                imgUrl: "https://i.imgur.com/MY4970L.jpg"
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
        <div className="container mt-2">
            <h1>Catalogo de productos</h1>
            <ItemList items={items}/>
            <button className="btn btn-dark">Vaciar carrito</button>
        </div> 
    )
}

export default ItemListContainer