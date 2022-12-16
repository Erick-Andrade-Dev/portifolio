import React from "react";
import "../Css/About.css"
import { HiOutlineMail } from "react-icons/hi";
import { AiFillHtml5 } from "react-icons/ai"
import { SiJavascript, SiTestinglibrary } from "react-icons/si"
import { IoLogoCss3 } from "react-icons/io"
import { FaReact } from "react-icons/fa"

export default function About () {
  return (
    <div className="container-about">
      <main className="container-img">
        <img
          className="my-photo"
          src="https://avatars.githubusercontent.com/u/107261788?v=4"
          alt="foto do Erick Andrade"
        />
      </main>
      <section className="section-about">
        <h2 style={{textAlign: 'center',  color: 'white'}}>Olá! Eu sou o Erick, tenho 21 anos, sou do Rio de Janeiro e amo programar! </h2>
        <br/>      
        <div className="about">          
          <h3 className="title-about">Sobre mim</h3>         
          <p className="text-about">Desenvolvedor Front-end, apaixonado pela programação e desenvolvimento. Venho em constante evolução, desenvolvendo exercícios e projetos referentes aos aprendizados que obtenho. Atualmente estou cursando <strong>JavaScript MasterClass na AgileCode</strong> e <strong>JavaScript Full-Stack na OneBitCode</strong>, buscando sempre aprender novas tecnologias e me aprimorar profissonalmente. </p>
        </div>      
        <div className="tools">
          <h3 className="title-tecnologias">Habilidades</h3>
          <div className="img-tools">
            <div>
              <p style={{textAlign: 'center',  color: 'white'}}> <AiFillHtml5 size="50px"/></p>
              <p style={{textAlign: 'center',  color: 'darkblue'}}>HTML5</p>
            </div>
            <div>
              <p style={{textAlign: 'center',  color: 'white'}}> <IoLogoCss3 size="50px"/></p>
              <p style={{textAlign: 'center',  color: 'darkblue'}}>CSS3</p>
            </div>
            <div>
              <p style={{textAlign: 'center',  color: 'white'}}> <SiJavascript size="50px"/> </p>
              <p style={{textAlign: 'center',  color: 'darkblue'}}>JavaScript</p>
            </div>
            <div>
              <p style={{textAlign: 'center',  color: 'white'}}> <FaReact size="50px"/> </p>
              <p style={{textAlign: 'center',  color: 'darkblue'}}>ReactJS</p>
            </div>
            <div>
              <p style={{textAlign: 'center',  color: 'white'}}> <SiTestinglibrary size="50px"/> </p>
              <p style={{textAlign: 'center',  color: 'darkblue'}}>React Testing</p>
            </div>
          </div>           
        </div>  
      </section>
      <footer className="footer-about">
        <p> <HiOutlineMail size="18px" style={{marginTop: '5px', color: 'white'}}/></p>
        <p className="my-email"> Email para contato: erick.dev07@gmail.com</p>
      </footer>
    </div>
  )
}