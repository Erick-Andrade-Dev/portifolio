/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Css/Footer.css"
import { AiFillFacebook, AiFillInstagram, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return(
    <footer className="footer">  
      <div className="container-contacts">       
        <a target="_blank" href="https://www.linkedin.com/in/erick-andrade-76a960241/" rel="noreferrer">
          <AiFillLinkedin size={45} color="white" />
        </a>  
        <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
          <AiFillFacebook size={45} color="white" />
        </a> 
        <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
          <AiFillInstagram size={45} color="white" />
        </a>    
        <a target="_blank" href="https://github.com/erickbrdev?tab=repositories" rel="noreferrer">
          <AiOutlineGithub size={42} color="white"/>
        </a>               
      </div>  
      <div>
        <p className="copyright">© 2022 - Todos os direitos reservados</p>  
      </div>      
    </footer>
  )
}