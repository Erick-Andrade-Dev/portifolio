import React from "react";
import '../Css/Projects.css'

export default function Projects() {

  return (
    <main className="container-main-imgs">
      <div className="container-imgs">
        <div className="redirect">
          <p className="title-project">App de Receitas</p>          
          <img src="https://source.unsplash.com/random/700x500/?beach" alt="Praia" className="project" />          
          <a target="_blank" href="https://github.com/erickbrdev/theMeal-theCocktail/tree/main/recipes/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">API Rick and Morty</p>
          <img src="https://source.unsplash.com/random/700x500/?beach" alt="Praia" className="project" />
          <a target="_blank" href="https://github.com/erickbrdev/api-rickandmorty/tree/main/hooks-api/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Jogos em alta</p>
          <img src="https://source.unsplash.com/random/700x500/?beach" alt="Praia" className="project" />
          <a target="_blank" href="https://github.com/erickbrdev/Project-Best-Games/tree/main/best-games/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Méliz - carrinho de compras</p>
          <img src="https://source.unsplash.com/random/700x500/?beach" alt="Praia" className="project" />
          <a target="_blank" href="https://github.com/erickbrdev/Cart_of_meli" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Missões Espaciais</p>
          <img src="https://source.unsplash.com/random/700x500/?beach" alt="Praia" className="project" />
          <a target="_blank" href="https://github.com/erickbrdev/Project-Universe/tree/main/universe-react/src" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>
        <div className="redirect">
          <p className="title-project">Descubra a cor</p>
          <img src="https://source.unsplash.com/random/700x500/?beach" alt="Praia" className="project" />
          <a target="_blank" href="https://github.com/erickbrdev/Projeto-Qual_cor-" rel="noreferrer" className="see-code" >
            Ver código
          </a>
        </div>              
      </div>
    </main>
  )
}