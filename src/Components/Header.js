import React from "react";
import { Link } from "react-router-dom";
import '../Css/Header.css'

export default function Header() {
  return(
    <div className="navegator">
    <nav className="navegator-logo">
      <img 
        className="logo"
        alt="logotipo"
        src="https://img.freepik.com/fotos-premium/o-codigo-verde-fez-a-programacao-de-fundo-escuro_250994-1553.jpg"></img>
    </nav>      
    <nav className="container-links">
      <Link className="link" to="/">Sobre</Link>      
      <Link className="link" to="/projetos">Projetos</Link>
    </nav>
  </div>     
  )
}