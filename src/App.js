import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About'
import Projects from './Pages/Projects'
import './App.css';

function App() {
  return (
    <div className="container-main">
      <div className="navegator">
        <nav>
          <img 
            className="logo"
            alt="logotipo"
            src="https://static.vecteezy.com/ti/fotos-gratis/p2/1325904-natureza-pequena-cachoeira-com-pedra-foto.jpg"></img>
        </nav>
        <nav>
          <h2 className="title-portifolio">Meu portifólio</h2>
        </nav>
        <nav className="container-links">
          <Link className="link" to="/portifolio">Principal</Link>
          <Link className="link" to="/portifolio/sobre">Sobre</Link>
          <Link className="link" to="/portifolio/projetos">Projetos</Link>
        </nav>
      </div>     
      <Switch>  
        <Route exact path="/portifolio" component={ Home }/>
        <Route path="/portifolio/sobre" component={ About }/>
        <Route path="/portifolio" component={ Projects }/>
      </Switch> 
    </div>
  );
}

export default App;
