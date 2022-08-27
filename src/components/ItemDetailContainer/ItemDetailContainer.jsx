import React, { useState } from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item,setItem] = useState({});
    useEffect(()=>{
        let productos = [
            {
                id: 1,
                producto: "Alfajores clásicos",
                precio: 20,
                cantidad: 10,
                imgUrl: "https://i.imgur.com/L4JHAKX.jpg",
                detalles: "Los alfajores son un dulce típico de varios países de América Latina y se caracterizan por obtener una forma redondeada y estar rellenos de crema dulce. Los más famosos son los argentinos y los peruanos pero en la actualidad se preparan alfajores caseros en muchos otros países."
            },
            {
                id: 2,
                producto: "Alfajores de chocolate",
                precio: 15,
                cantidad: 5,
                imgUrl: "https://i.imgur.com/9oTd2Jc.jpg",
                detalles: "Los alfajores son un dulce típico de varios países de América Latina y se caracterizan por obtener una forma redondeada y estar rellenos de crema dulce. Los más famosos son los argentinos y los peruanos pero en la actualidad se preparan alfajores caseros en muchos otros países."

            },
            {
                id: 3,
                producto: "Alfajores marmoleado",
                precio: 30,
                cantidad: 15,
                imgUrl: "https://i.imgur.com/MY4970L.jpg",
                detalles: "Los alfajores son un dulce típico de varios países de América Latina y se caracterizan por obtener una forma redondeada y estar rellenos de crema dulce. Los más famosos son los argentinos y los peruanos pero en la actualidad se preparan alfajores caseros en muchos otros países."
            }
        ];
        new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos.find((element)=> element.id == id));
                
            }, 500)
        }).then((data)=>{
            setItem(data);
        })
    },[id])
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer