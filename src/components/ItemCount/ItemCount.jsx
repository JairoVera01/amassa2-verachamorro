import React from 'react'
import {useState} from "react";

const ItemCount = ({stock,initial,onAdd}) => {
    const [contador, setContador] = useState(initial);

    const aumentarUnidades = () =>{
        if(contador < stock){
            setContador(contador+1)
        }
    }

    
    return (
        <div>
            <button disabled={contador === initial} onClick={()=>{ setContador(contador-1)}} >-</button>
            <span>{contador} u.</span>
            <button disabled={stock===0} onClick={aumentarUnidades}>+</button>
            <button>Agregar producto</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default ItemCount