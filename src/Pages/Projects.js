import React from "react";
import ReactPlayer from "react-player";
import '../Css/Projects.css';

export default function Projects() {

  return (
    <main className="container-main-imgs">
      <div className="container-imgs">
        <div className="redirect">        
          <p className="title-project">Aplicativo de Receitas</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs" style={{border: '1px solid lime'}}/>                
          <a target="_blank" href="https://github.com/erickbrdev/theMeal-theCocktail/tree/main/recipes/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Rick and Morty - API</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs" style={{border: '1px solid lime'}}/>          
          <a target="_blank" href="https://github.com/erickbrdev/api-rickandmorty/tree/main/hooks-api/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Top Games</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs" style={{border: '1px solid lime'}}/>          
          <a target="_blank" href="https://github.com/erickbrdev/Project-Best-Games/tree/main/best-games/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Méliz - API</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs" style={{border: '1px solid lime'}}/>          
          <a target="_blank" href="https://github.com/erickbrdev/Cart_of_meli" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Missões Espaciais</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs" style={{border: '1px solid lime'}}/>
          <a target="_blank" href="https://github.com/erickbrdev/Project-Universe/tree/main/universe-react/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">FOA - Homepage</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=8PC6xeToeRs" style={{border: '1px solid lime'}}/>          
        </div>              
      </div>
    </main>
  )
}