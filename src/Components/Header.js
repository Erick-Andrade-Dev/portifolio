import React from "react";
import { Link } from "react-router-dom"
import {AiFillInstagram, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
  return(
    <div className="fixed flex flex-col h-screen place-content-between navegator">
      <nav className="flex flex-col mobile-none">
        <img  
          className="border-solid border-4 border-slate-800 rounded-full w-4/6 mx-auto my-1"        
          src="https://avatars.githubusercontent.com/u/107261788?v=4"
          alt="foto do Erick Andrade"
        />
        <h2 
          className="text-lg text-white"
        >
          Erick Andrade
        </h2> 
      </nav>
      <nav className="flex flex-col gap-4 mobile-nav">
        <a href="#/" className="text-lg text-white hover:text-emerald-500">
          <p>Inicio</p>
        </a>
        <Link to="#About" className="text-lg text-white hover:text-emerald-500 none-mobile">
          <p>Sobre mim</p>
        </Link>
        <Link to="#About" className="text-lg text-white hover:text-emerald-500 none-mobile">
          <p>Linguagens</p>
        </Link>
        <Link to="#Projects" className="text-lg text-white hover:text-emerald-500">
          <p>Projetos</p>
        </Link>
      </nav>            
      <nav className="flex justify-center gap-3 mb-5 mobile-contact">
        <a 
          target="_blank" 
          href="https://www.linkedin.com/in/erick-andrade-76a960241/" 
          rel="noreferrer"
        >
          <AiFillLinkedin size={35}  className="text-white hover:text-emerald-500" />
        </a>         
        <a 
          target="_blank" 
          href="https://www.instagram.com/erick_devbr/" 
          rel="noreferrer">
          <AiFillInstagram size={35} className="text-white hover:text-emerald-500"/>
        </a>    
        <a 
          target="_blank" 
          href="https://github.com/erickbrdev?tab=repositories" 
          rel="noreferrer">
          <AiOutlineGithub size={32} className="text-white hover:text-emerald-500"/>
        </a>               
      </nav>
  </div>     
  )
}