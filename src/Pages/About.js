import React from "react";
import { SiJavascript, SiTestinglibrary, SiHtml5, SiCss3, SiReact } from "react-icons/si"

export default function About () {
  return (
    <div className="flex flex-col w-full">          
      <section>
        <h2 className="text-xl p-5 mb-6 text-green-400 hover:text-white italic bg-slate-600">Olá, Seja bem vindo(a) !</h2>
        <div className="flex flex-col text-center gap-6 items-center justify-center">          
          <h3  className="text-2xl font-semibold text-emerald-500 mx-10">Sobre mim</h3> 
          <div className="flex items-center justify-center">
            <p className="mx-10 mb-20 text-white w-3/6 text-start">Desenvolvedor Front-end, apaixonado pela programação e desenvolvimento. Venho em constante evolução, desenvolvendo exercícios e projetos referentes aos aprendizados que obtenho. Atualmente estou cursando <strong>JavaScript MasterClass na AgileCode</strong> e <strong>JavaScript Full-Stack na OneBitCode</strong>, buscando sempre aprender novas tecnologias e me aprimorar profissonalmente. </p>
            <ul className="mx-10 mb-20 text-white flex flex-col justify-center border-solid border-2 border-emerald-500 text-start p-2 gap-2">
              <li className="text-start">Nome: Erick Andrade</li>
              <li className="text-start">Email: erick.dev07@gmail.com</li>
              <li className="text-start">Idade: 21 anos</li>
              <li className="text-start">Estado: Rio de Janeiro</li>
            </ul>
          </div>        
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