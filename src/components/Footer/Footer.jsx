import React from 'react'
import "./footer.css"
import logoAmassa2 from "./amassa2Logo.png";


const Footer = () => {
    return (
        <div>
            <div className="bg__footer text-center text-lg-start text-white">
                <div className="container pt-4">
                    <div className="row ">
                    <div className="col-lg-3 col-md-6 mb-2 mb-md-0">
                        <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto stilosLogo" >
                        <img src={logoAmassa2}  alt="logo amassa2"
                            className="logo__footer" loading="lazy" />
                        </div>
                        <p className="text-center">¡Bienvenido a Amassa2.pe!</p>
                        <p className="text-center">♥ Productos hechos con amor ♥</p>
                        <ul className="list-unstyled d-flex flex-row justify-content-center">
                        <li>
                            <p className="text-white px-2"  target="_blank">
                            <i className="bi bi-facebook"></i>
                            </p>
                        </li>
                        <li>
                            <p className="text-white px-2 "  target="_blank">
                            <i className="bi bi-instagram"></i>
                            </p>
                        </li>
                        <li>
                            <p className="text-white ps-2" >
                            <i className="bi bi-youtube"></i>
                            </p>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Productos</h5>
                        <ul className="list-unstyled">
                        <li className="mb-2">
                            <p href="#!" className="text-white"><i className="fi fi-rr-cupcake"></i> Alfajores</p>
                        </li>
                        <li class="mb-2">
                            <p href="#!" className="text-white"><i className="fi fi-rr-cupcake"></i> Tortas de alfajor</p>
                        </li>
                        <li className="mb-2">
                            <p href="#!" className="text-white"><i className="fi fi-rr-cupcake"></i> Bocaditos</p>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Sabores</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <p href="#!" className="text-white"><i className="fi fi-rr-cupcake"></i> Tradicional</p>
                            </li>
                            <li className="mb-2">
                                <p href="#!" className="text-white"><i className="fi fi-rr-cupcake"></i> Choco-chip</p>
                            </li>
                            <li className="mb-2">
                                <p href="#!" className="text-white"><i className="fi fi-rr-cupcake"></i> Cacao</p>
                            </li>
                            <li className="mb-2">
                                <p href="#!" className="text-white"><i className="fi fi-rr-cupcake"></i> Marmoleado</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Contacto</h5>
                        <ul className="list-unstyled">
                        <li>
                            <p><i className="fi fi-rr-marker"></i> Lima - La Molina</p>
                        </li>
                        <li>
                            <p><i className="fi fi-rr-phone-call"></i> 965 715 745</p>
                        </li>
                        <li>
                            <p><i className="fi fi-rr-at"></i> fj.verachamorro@gmail.com</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer