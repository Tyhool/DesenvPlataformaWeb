import React from 'react';
import { Link } from "react-router-dom";
import './../App.css';



function Header() {
    return (
            <header className="cabecalho">
                <nav className="cabecalho__menu">
                    <Link to="/Home" className="cabecalho__menu__link">Inicio</Link>
                    <Link to="/Cadastro" className="cabecalho__menu__link">Cadastro</Link>
                    <Link to="/Faq"className="cabecalho__menu__link">FAQ</Link>
                </nav>
            </header>
    );
}

export default Header;
