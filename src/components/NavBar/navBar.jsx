import React, {useContext} from 'react'
import "./navBar.css"
import logoAmassa2 from "./amassa2Logo.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const NavBar = () => {
    // const navBarItems = ["Inicio"]
    const categoriaDesglose = ["Alfajores","Chocotejas","Postres"]
    const {items} = useContext(CartContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-amassa2 fixed-top">
                <div className="container">
                    <Link to="/">
                        <span className="navbar-brand" href="/">
                            <img src={logoAmassa2} alt="logo" className="navBarLogo"/>
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fontsBaloo" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* {navBarItems.map((item)=>(
                                <li className="nav-item">
                                    <a className="nav-link mt-1" href="/">{item}</a>
                                </li>
                            ))}  */}
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mt-1" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu"> 
                                    <li><a className="dropdown-item" href="/categoria/Alfajores">Alfajores</a></li>
                                    <li><a className="dropdown-item" href="/categoria/Chocotejas">Chocotejas</a></li>  
                                    <li><a className="dropdown-item" href="/categoria/Postres">Postres</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        {!!items.length &&<CartWidget/>}
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default NavBar

