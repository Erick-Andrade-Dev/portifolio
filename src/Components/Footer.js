/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Css/Footer.css"
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return(
    <footer className="footer">          
      <a target="_blank" href="https://github.com/Erick-Andrade-Dev?tab=repositories" rel="noreferrer">
        <DiGithubBadge size={52} color="white"/>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/erick-andrade-76a960241/" rel="noreferrer">
        <FaLinkedin size={42} color="white" style={{borderRadius:"50%"}}/>
      </a>           
    </footer>
  )
}