import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../services';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getColData = async() =>{
            try {
                const data = collection(db,"productos");
                const col = await getDocs(data);
                const res = col.docs.map((doc)=> doc={ id:doc.id,...doc.data() } )
                setProductos(res)
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
                id:"PO-MM",
                nombre:"Mazamorra morada",
                precio:6,
                stock:6,
                imgUrl:"https://i.imgur.com/fJvleKp.jpg",
                descripcion:"Porción de mazamorra morada. Preparado con los mejores ingredientes.",
                categoria:"Postres"
            },
            
            
            
        ];
        new Promise ((resolve)=>{
            let productosFilter = [];
            setTimeout(()=>{
                productosFilter = categoriaid ? productos.filter((element)=>element.categoria == categoriaid) : productos;
                resolve(productosFilter);
            }, 800)
        }).then((data)=>{
            setItems(data);
        })
    }, [categoriaid])
    return (
        <div>
            {/* <div className="container mt-5 pt-5">
                {productos.length > 0 && productos.map((item) => (
                    <p>{item.nombre}</p>
                ))}
            </div> */}
            
            { productos.length ?  
                <div className="">
                <Hero/>
                <div className="container mt-4">
                    <p className="tituloCatalogo">Nuestros productos</p>
                    <ItemList items={productos}/>
                </div>
                </div>   :
                <div className="mt-5 pt-5"><div className="spinner-border text-dark container " role="status"></div>
                

                </div>
            }
        </div>
    )
}

export default ItemListContainer