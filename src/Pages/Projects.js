import React from "react";
import ReactPlayer from "react-player";

export default function Projects() {

  return (    
    <div className=" flex flex-col gap-6 mb-6 w-full justify-center items-center">
      <h3 className="text-2xl font-semibold text-emerald-500 mx-10 mb-6">Projetos</h3>  
      <div>        
        <p className="text-white hover:text-emerald-500 font-semibold">Aplicativo de Receitas</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs"/>                
        <a target="_blank" href="https://github.com/erickbrdev/theMeal-theCocktail/tree/main/recipes/src" rel="noreferrer">
          <button 
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5"
          >
            Ver código
          </button>
        </a>
      </div>
      <div>
        <p className="text-white hover:text-emerald-500 font-semibold">Rick and Morty - API</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs"/>          
        <a target="_blank" href="https://github.com/erickbrdev/api-rickandmorty/tree/main/hooks-api/src" rel="noreferrer">
          <button 
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5"
          >
            Ver código
          </button>
        </a>
      </div>
      <div >
        <p className="text-white hover:text-emerald-500 font-semibold">Top Games</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs"/>          
        <a target="_blank" href="https://github.com/erickbrdev/Project-Best-Games/tree/main/best-games/src" rel="noreferrer">
          <button             
            className="text-white mt-1 font-semibold bg-emerald-500 rounded p-1.5"
          >
            Ver código
          </button>
        </a>
      </div>      
      <div>
        <p className="text-white hover:text-emerald-500 font-semibold">FOA - Homepage</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs" />          
      </div>              
    </div>    
  )
}