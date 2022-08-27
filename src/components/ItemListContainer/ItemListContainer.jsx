import React, { useEffect, useState } from 'react'

import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);

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
                
            }, 500)
        }).then((data)=>{
            
            setItems(data);
        })
    }, [])

    return (
        <div>
            { items.length ?
                <div className="container mt-2">
                <h1>Catalogo de productos</h1>
                <ItemList items={items}/>
                </div>   :
                <div className="spinner-border text-dark container m-5" role="status">
                </div>
            }
        </div>
    )
}

export default ItemListContainer