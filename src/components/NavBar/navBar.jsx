import React from 'react'
import "./navBar.css"
import logoAmassa2 from "./amassa2Logo.png";
import CartWidget from '../CartWidget/cartWidget';

const navBar = () => {
    const navBarItems = ["Inicio", "About Us", "Categorias","Login","Register","Contacto"]
    
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
            
        </div>
    )
}

export default navBar

