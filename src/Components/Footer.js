/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Css/Footer.css"
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return(
    <footer className="footer">          
      <a target="_blank" href="https://github.com/Erick-Andrade-Dev?tab=repositories">
        <DiGithubBadge size={52} color="white"/>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/erick-andrade-76a960241/">
        <FaLinkedin size={42} color="white" style={{borderRadius:"50%"}}/>
      </a>   
      <a target="_blank" href="#">
        <SiGmail size={42} color="white"/> 
      </a>         
    </footer>
  )
}