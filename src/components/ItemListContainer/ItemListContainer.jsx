import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs,query, where } from 'firebase/firestore';
import db from '../../services/indexFirebase';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    useEffect(() => {
        const itemCollection = categoria ? query(collection(db, "productos"), where("categoria", "==", categoria)) : collection(db, "productos");
        getDocs(itemCollection).then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
    }, [categoria])
    
    return (
        <div>
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