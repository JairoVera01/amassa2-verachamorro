import { addDoc, collection } from 'firebase/firestore';
import React, {useContext, useState} from 'react'
import {CartContext} from "../../context/CartContext";
import db from '../../services/indexFirebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CheckOut = () => {

    const {items} = useContext(CartContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function finalizarCompra() {
        
        let order = {
            buyer: {name,phone,email}, 
            items: items,
            total: items.reduce((pv,cv)=> pv + (cv.quantity* cv.precio),0)
        };
        const orderCollection = collection(db,"orderd");
        addDoc(orderCollection,order).then(({id})=>{
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: <p>Compra Exitosa <br></br> <br></br> Su Id de compra es: {id}</p>,
                icon : "success",
                timer : 6500,
            })
            //Luego limpiar el carrito
        }).catch(error => {
            console.log(error);
        })

        
    }

    return (
        <div className="mt-5 pt-5">
            <div>Formulario - Finalizar Compra</div>
            
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="nombre"></input>
                <br />
                <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder="phone"></input>
                <br />
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email"></input>
                <br />
                <button onClick={finalizarCompra}>Finalizar Compra</button>
            
        </div>
    )
}

export default CheckOut