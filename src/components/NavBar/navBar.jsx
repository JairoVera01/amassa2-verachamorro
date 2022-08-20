import React from 'react'
import "./navBar.css"
import logoAmassa2 from "./amassa2Logo.png";
import CartWidget from '../CartWidget/cartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemCount from "../ItemCount/ItemCount";


const navBar = () => {
    const navBarItems = ["Inicio", "About Us", "Categorias","Login","Register","Contacto"]
    const onAdd = () =>{
        console.log("Soy onAdd");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-amassa2">
                <div className="container">
                    <a className="navbar-brand" href=".">
                        <img src={logoAmassa2} alt="logo" className="navBarLogo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fontsBaloo" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navBarItems.map((item)=>(
                                <li className="nav-item">
                                    <a className="nav-link mt-1" href=".  ">{item}</a>
                                </li>
                            ))} 
                            {/* 
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mt-1" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href=".">Alfajores</a></li>
                                    <li><a className="dropdown-item" href=".">Chocotejas</a></li>
                                    
                                    <li><a className="dropdown-item" href=".">Cheesecake</a></li>
                                </ul>
                            </li> */}
                            
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
            <ItemListContainer greeting="Uso de props para envio de información" usuario="Jairo_Vera"/>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <ItemCount stock={0} initial={1} onAdd={onAdd}/>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default navBar

