import { addDoc, collection } from 'firebase/firestore';
import React, {useContext, useState} from 'react'
import {CartContext} from "../../context/CartContext";
import db from '../../services/indexFirebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./checkOut.css"

const CheckOut = () => {
    const {items} = useContext(CartContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function validarCorreo(){
        let correoValidacion = email.toString();
        let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let respuesta = patron.test(correoValidacion);
        return respuesta;
    }
    
    function validarNumero(){
        let telefonoVerificacion = phone.toString();
        let patron1 =  /^([0-9])*$/;
        let respuesta1 = patron1.test(telefonoVerificacion);
        return respuesta1;
    }
    
    function validarNombre() {
        let textoVerificacion = name.toString();
        let patron2 = /^[a-zA-Z\s]*$/;
        let respuesta2 = patron2.test(textoVerificacion);
        return respuesta2;
    }

    function finalizarCompra() {
        if (name.trim()==="" || phone.trim()==="" || email.trim()==="") {
            Swal.fire({
                icon: 'error',
                title: 'Complete todos los campos.',
                showConfirmButton: false,
                timer: 1700.
            })
        } else if(validarNumero()===false){
            Swal.fire({ 
                icon: 'error',
                title: 'El teléfono ingresado no es valido',
                showConfirmButton: false,
                timer: 1700
            })
        } else if (validarCorreo()===false){
            Swal.fire({ 
                icon: 'error',
                title: 'El correo ingresado no es valido',
                showConfirmButton: false,
                timer: 1700,
            })
        } else if (validarNombre()===false ) {
            Swal.fire({ 
                icon: 'error',
                title: 'El nombre y/o apellido solo puede contener letras.',
                showConfirmButton: false,
                timer: 1700
            })
        }
        else{
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
        
    }

    return (
        
        <div className="mt-5 pt-5">
            <div>
                <p className="tituloCheckOut">Finalizar compra</p>
                <p className="subtituloCheckOut">Ingrese sus datos personales</p>
            </div>
            <div className="container w-50">
                <input  className="form-control" value={name}  onChange={(e)=> setName(e.target.value)}  type="text" placeholder="Ingrese su nombre"></input>
                <br />
                <input  className="form-control" value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder="Ingrese su teléfono"></input>
                <br />
                <input  className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Ingrese su email"></input>
                <br />
                <button onClick={finalizarCompra} className="btn btnFinalizarCompra">Finalizar Compra</button>
            </div>
                
        </div>
    )
}

export default CheckOut