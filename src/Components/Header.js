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
        src="https://png.pngtree.com/thumb_back/fh260/background/20191219/pngtree-black-and-green-clouds-background-image_325311.jpg"></img>
    </nav>      
    <nav className="container-links">
      <Link className="link" to="/">Sobre</Link>      
      <Link className="link" to="/projetos">Projetos</Link>
    </nav>
  </div>     
  )
}