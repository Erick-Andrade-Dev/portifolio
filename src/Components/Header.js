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
        src="https://mir-s3-cdn-cf.behance.net/user/276/346b86526711363.626168cce88e7.jpg"></img>
    </nav>      
    <nav className="container-links">
      <Link className="link" to="/">Sobre</Link>      
      <Link className="link" to="/projetos">Projetos</Link>
    </nav>
  </div>     
  )
}