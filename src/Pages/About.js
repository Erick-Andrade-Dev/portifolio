import React from "react";
import { SiJavascript, SiTestinglibrary, SiHtml5, SiCss3, SiReact } from "react-icons/si"

export default function About () {
  return (
    <div className="flex flex-col w-full">          
      <section>
        <h2 className="text-xl my-6 text-emerald-500 hover:text-white italic">Olá! Eu sou o Erick, tenho 21 anos, sou do Rio de Janeiro e amo programar! </h2>
        <div className="flex flex-col text-center gap-6">          
          <h3  className="text-2xl font-semibold text-emerald-500 mx-10">Sobre mim</h3>         
          <p className="mx-10 mb-20 text-white ">Desenvolvedor Front-end, apaixonado pela programação e desenvolvimento. Venho em constante evolução, desenvolvendo exercícios e projetos referentes aos aprendizados que obtenho. Atualmente estou cursando <strong>JavaScript MasterClass na AgileCode</strong> e <strong>JavaScript Full-Stack na OneBitCode</strong>, buscando sempre aprender novas tecnologias e me aprimorar profissonalmente. </p>
        </div>         
        <div className="flex flex-col text-center gap-6">
          <h3 className="text-2xl font-semibold text-emerald-500 mx-10">Linguagens</h3>
          <div className="flex justify-center gap-12 text-center mb-20">
            <div className="flex flex-col justify-center items-center">
              <p> <SiHtml5 size="50px" className="text-white hover:text-emerald-500"/></p>
              <p className="text-white hover:text-emerald-500">HTML5</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p> <SiCss3 size="50px" className="text-white hover:text-emerald-500"/></p>
              <p className="text-white hover:text-emerald-500">CSS3</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p> <SiJavascript size="50px" className="text-white hover:text-emerald-500"/> </p>
              <p className="text-white hover:text-emerald-500">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p> <SiReact size="50px" className="text-white hover:text-emerald-500"/> </p>
              <p className="text-white hover:text-emerald-500">ReactJS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p> <SiTestinglibrary size="50px" className="text-white hover:text-emerald-500"/> </p>
              <p className="text-white hover:text-emerald-500">React Testing</p>
            </div>          
          </div>                  
        </div>          
      </section>       
    </div>
  )
}