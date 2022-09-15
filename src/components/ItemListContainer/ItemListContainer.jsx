import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../services';

const ItemListContainer = () => {
    useEffect(() => {
        const getColData = async() =>{

            try {
                const data = collection(db,"productos");
                const col = await getDocs(data);
                const res = col.docs.map((doc)=> doc={ id:doc.id,...doc.data() } )
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        } 
        getColData();
        return () => {
        }
    }, [])
    

    const [items,setItems] = useState([]);

    const {categoriaid} = useParams();

    useEffect(() => {
        let productos = [
            {
                id:"AL-CH1",
                nombre:"Alfajor de Chocolate",
                precio:15,
                stock:50,
                imgUrl:"https://i.imgur.com/fE9OYr8.jpg",
                descripcion:"Deliciosos alfajores de chocolate con dulce de leche.",
                categoria:"Alfajores"
            },
            {
                id:"AL-ES1",
                nombre:"Alfajor especial",
                precio:18,
                stock:32,
                imgUrl:"https://i.imgur.com/MF9nDwt.jpg",
                descripcion:"Deliciosos alfajores de maicena rellenos de dulce de lecha, bañados en cacao.",
                categoria:"Alfajores"
            },
            {
                id:"AL-MA1",
                nombre:"Alfajor de maicena",
                precio:14,
                stock:25,
                imgUrl:"https://i.imgur.com/pquhcbx.jpg",
                descripcion:"Deliciosos alfajores clásicos de maicena rellenos de dulce de leche.",
                categoria:"Alfajores"
            },
            {
                id:"AL-MX1",
                nombre:"Alfajores mixtos",
                precio:25,
                stock:14,
                imgUrl:"https://i.imgur.com/QgPtzcx.jpg",
                descripcion:"Deliciosos alfajores mixtos (maicena y chocolate) rellenos de dulce de leche.",
                categoria:"Alfajores"
            },
            {
                id:"AL-RE1",
                nombre:"Alfajores recubiertos",
                precio:16,
                stock:23,
                imgUrl:"https://i.imgur.com/sp4fV4u.jpg",
                descripcion:"Deliciosos alfajores de maicena recubiertos con chocolate.",
                categoria:"Alfajores"
            },
            {
                id:"CH-AL1",
                nombre:"Chocotejas con almendras",
                precio:10,
                stock:10,
                imgUrl:"https://i.imgur.com/Fym0lsE.jpg",
                descripcion:"Chocotejas hechas con el mejor cacao, rellenas con trozos de almendra.s",
                categoria:"Chocotejas"
            },
            {
                id:"CH-MA",
                nombre:"Chocotejas con mani",
                precio:12,
                stock:14,
                imgUrl:"https://i.imgur.com/90aMgmi.jpg",
                descripcion:"Chocotejas hechas con el mejor cacao, rellenas con trozos de mani.",
                categoria:"Chocotejas"
            },
            {
                id:"CH-MA",
                nombre:"Chocotejas con pecana",
                precio:14,
                stock:17,
                imgUrl:"https://i.imgur.com/Kj10PlZ.jpg",
                descripcion:"Chocotejas hechas con el mejor cacao, rellenas con trozos de pecana.",
                categoria:"Chocotejas"
            },
            {
                id:"PO-BN",
                nombre:"Budín",
                precio:6,
                stock:10,
                imgUrl:"https://i.imgur.com/ckMExMR.jpg",
                descripcion:"Tajada budín. Preparado con los mejores ingredientes.",
                categoria:"Postres"
            },
            {
                id:"PO-KV",
                nombre:"Keke de vainilla",
                precio:4,
                stock:45,
                imgUrl:"https://i.imgur.com/faCvNPT.jpg",
                descripcion:"Tajada de keke de vainilla. Preparado con los mejores ingredientes.",
                categoria:"Postres"
            },
            {
                id:"PO-MM",
                nombre:"Mazamorra morada",
                precio:6,
                stock:6,
                imgUrl:"https://i.imgur.com/fJvleKp.jpg",
                descripcion:"Porción de mazamorra morada. Preparado con los mejores ingredientes.",
                categoria:"Postres"
            },
            {
                id:"PO-PM",
                nombre:"Pie de manzana",
                precio:9,
                stock:16,
                imgUrl:"https://i.imgur.com/Iwbl7FK.jpg",
                descripcion:"Porción de pie de manzana. Preparado con los mejores ingredientes.",
                categoria:"Postres"
            },
            {
                id:"PO-AL",
                nombre:"Arroz con leche",
                precio:6,
                stock:7,
                imgUrl:"https://i.imgur.com/sYGrw1K.jpg",
                descripcion:"Porción de arroz con leche. Preparado con los mejores ingredientes.",
                categoria:"Postres"
            },
            {
                id:"PO-TL",
                nombre:"Tres Leches",
                precio:9,
                stock:6,
                imgUrl:"https://i.imgur.com/357S7Cm.jpg",
                descripcion:"Porcion de tres leches. Preparado con los mejores ingredientes",
                categoria:"Postres"
            }
        ];
        new Promise ((resolve)=>{
            let productosFilter = [];
            setTimeout(()=>{
                productosFilter = categoriaid ? productos.filter((element)=>element.categoria == categoriaid) : productos;
                resolve(productosFilter);
            }, 500)
        }).then((data)=>{
            setItems(data);
        })
    }, [categoriaid])
    return (
        <div>
            { items.length ?  
                <div className="">
                <Hero/>
                <div className="container mt-4">
                    <p className="tituloCatalogo">Nuestros productos</p>
                    <ItemList items={items}/>
                </div>
                </div>   :
                <div className="spinner-border text-dark container m-5" role="status">
                </div>
            }
        </div>
    )
}

export default ItemListContainer