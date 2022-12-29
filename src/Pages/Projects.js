import React from "react";
import projetoeba from "../Videos/projetoeba.mp4"
import cep from "../Videos/consultacep.mkv"
import previsaotempo from "../Videos/previsaotempo.mkv"
import rickAPI from "../Videos/rickAPI.mkv"
import appReceita from "../Videos/appReceita.mkv"

export default function Projects() {

  return (    
    <div className=" flex flex-col gap-6 mb-6 w-full justify-center items-center project-mobile">
      <h3 id="projects" className="text-2xl font-semibold text-emerald-500">Projetos</h3> 

      <div className="flex flex-col justify-center items-center">        
        <p className="text-white hover:text-emerald-500 font-bold">Aplicativo de Receitas</p>
        <details>
          <summary className="text-emerald-500">Detalhes do projeto</summary>
          <p className="text-white font-semibold">Ferramenta utilizada: ReactJS</p>
          <br/>
          <p className="text-white font-semibold">Aprendizado: Criação de rotas, ContextApi, React Hooks, localStorage e requisições para API</p>
          <br/>
          <p className="text-white font-semibold">
            Projeto: É um aplicativo de receitas, que tem como conteúdo abordado a criação de rotas,componentização do header e footer e a reutilização de componentes em todas páginas, além do uso do contextAPI para passagem de dados através dos componentes.
          </p>
      </details>
        <video width="700px" height="500px" controls>
          <source src={appReceita} type="video/mp4" />
        </video>             
        <a target="_blank" href="https://github.com/erickbrdev/theMeal-theCocktail/tree/main/recipes/src" rel="noreferrer" style={{marginRight: '1em'}}>
          <button 
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5 hover:bg-emerald-800"
          >
            Ver código
          </button>
        </a>       
      </div>

      <div className="flex flex-col justify-center items-center">       
        <p className="text-white hover:text-emerald-500 font-bold">Consulta CEP</p>
        <details>
          <summary className="text-emerald-500">Detalhes do projeto</summary>
          <p className="text-white  font-semibold">Ferramenta utilizada: ReactJS</p>
          <br/>
          <p className="text-white  font-semibold">Aprendizado: Componentes, Props, React Hooks, localStorage e requisição para API</p>
          <br/>
          <p className="text-white  font-semibold">
            Projeto: Criação de um sistema que tem como objetivo a consulta de cep, ao digitar um cep válido no campo de pesquisa(input) e clicar no botão de consulta, fará uma requisição a uma api externa e retornará os dados do cep digitado caso exista, caso não exista exibirá uma mensagem de erro.
          </p>
        </details>
        <video width="700px" height="500px" controls>
          <source src={cep} type="video/mp4"/>
        </video>        
        <a target="_blank" href="https://github.com/erickbrdev/consulta-cep" rel="noreferrer" style={{marginRight: '1em'}}>
          <button 
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5 hover:bg-emerald-800"
          >
            Ver código
          </button>
        </a>       
      </div>

      <div className="flex flex-col justify-center items-center" >
        <p className="text-white hover:text-emerald-500 font-bold">Previsão do Tempo</p>
        <details>
          <summary className="text-emerald-500">Detalhes do projeto</summary>
          <p className="text-white font-semibold">Ferramentas utilizadas: HTML, CSS e JavaScript</p>
          <br/>
          <p className="text-white  font-semibold">Aprendizado: Requisição para API externa</p>
          <br/>
          <p className="text-white  font-semibold">
            Projeto: Criação de um sistema que tem como objetivo mostrar em tempo real a temperatura do lugar desejado, ao digitar o lugar na barra de pesquisa(input) e clicar no icone de pesquisa ou apertar a tecla "enter", faz uma requisição para uma API externa e retorna a resposta obtida.
          </p>
      </details>
        <video width="700px" height="500px" controls>
          <source src={previsaotempo} type="video/mp4" />
        </video>        
        <a target="_blank" href="https://github.com/erickbrdev/previsao_tempo" rel="noreferrer"  style={{marginRight: '1em'}}  >
          <button             
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5 hover:bg-emerald-800"
          >
            Ver código
          </button>
        </a>        
      </div>  

      <div className="flex flex-col justify-center items-center">
        <p className="text-white hover:text-emerald-500 font-bold">Rick e Morty API</p> 
        <details>
          <summary className="text-emerald-500">Detalhes do projeto</summary>
          <p className="text-white  font-semibold">Ferramenta utilizada: ReactJS</p>
          <br/>
          <p className="text-white font-semibold">Aprendizado: Criação de rotas, ContextAPI, React Hooks e requisição para API</p>
          <br/>
          <p className="text-white  font-semibold">
            Projeto: Armazena os dados da API dentro de um useState, através desse estado faz um filtro da pesquisa do usuário 
          </p>
      </details>       
        <video width="700px" height="500px" controls>
          <source src={rickAPI} type="video/mp4" />
        </video>        
        <a target="_blank" href="https://github.com/erickbrdev/api-rickandmorty" rel="noreferrer"  style={{marginRight: '1em'}}  >
          <button             
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5 hover:bg-emerald-800"
          >
            Ver código
          </button>
        </a>                
      </div>       
      
      <div className="flex flex-col justify-center items-center">        
        <p className="text-white hover:text-emerald-500 font-bold">Eba - Homepage</p> 
        <details>
          <summary className="text-emerald-500">Detalhes do projeto</summary>
          <p className="text-white font-semibold">Ferramenta utilizada: ReactJS</p>
          <br/>
          <p className="text-white font-semibold">Aprendizado: Criação de rotas e Formulário</p>
          <br/>
          <p className="text-white font-semibold">
            Projeto: Criação de uma página com diferentes rotas, como tela de login, cadastro e contato. E através da interação do usuário armazenar os dados digitalizados dentro de um estado.
          </p>
      </details>       
        <video width="700px" height="500px" controls>
          <source src={projetoeba} type="video/mp4" />
        </video>      
        <a target="_blank" href='https://www.youtube.com/watch?v=5HNCvhYmAMw' rel="noreferrer">
          <button             
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5 hover:bg-emerald-800"
          >
            Ver projeto
          </button>
        </a>        
      </div>              
    </div>    
  )
}