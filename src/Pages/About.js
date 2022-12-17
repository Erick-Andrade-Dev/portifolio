import React from "react";
import "../Css/About.css"
import { HiOutlineMail } from "react-icons/hi";
import { SiJavascript, SiTestinglibrary, SiHtml5, SiCss3, SiReact } from "react-icons/si"

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
        <h2 style={{textAlign: 'center',  color: 'black', fontStyle: 'italic'}}>Olá! Eu sou o Erick, tenho 21 anos, sou do Rio de Janeiro e amo programar! </h2>
        <br/>     
        <br/> 
        <div className="about">          
          <h3 className="title-about">Sobre mim</h3>         
          <p className="text-about">Desenvolvedor Front-end, apaixonado pela programação e desenvolvimento. Venho em constante evolução, desenvolvendo exercícios e projetos referentes aos aprendizados que obtenho. Atualmente estou cursando <strong>JavaScript MasterClass na AgileCode</strong> e <strong>JavaScript Full-Stack na OneBitCode</strong>, buscando sempre aprender novas tecnologias e me aprimorar profissonalmente. </p>
        </div>      
        <br/>
        <br/>
        <div className="tools">
          <h3 className="title-tecnologias">Habilidades</h3>
          <div className="img-tools">
            <div>
              <p className="hability-img"> <SiHtml5 size="50px"/></p>
              <p className="hability-img">HTML5</p>
            </div>
            <div>
              <p className="hability-img"> <SiCss3 size="50px"/></p>
              <p className="hability-img">CSS3</p>
            </div>
            <div>
              <p className="hability-img"> <SiJavascript size="50px"/> </p>
              <p className="hability-img">JavaScript</p>
            </div>
            <div>
              <p className="hability-img"> <SiReact size="50px"/> </p>
              <p className="hability-img">ReactJS</p>
            </div>
            <div>
              <p className="hability-img"> <SiTestinglibrary size="50px"/> </p>
              <p className="hability-img">React Testing</p>
            </div>
          </div>           
        </div>  
      </section>
      <footer className="footer-about">
        <p> <HiOutlineMail size="18px" style={{marginTop: '5px', color: 'black'}}/></p>
        <p className="my-email"> Email para contato: erick.dev07@gmail.com</p>
      </footer>
    </div>
  )
}