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
            src="https://static.vecteezy.com/ti/fotos-gratis/p2/1325904-natureza-pequena-cachoeira-com-pedra-foto.jpg"></img>
        </nav>
        <nav>
          <h2 className="title-portifolio">Meu portifólio</h2>
        </nav>
        <nav className="container-links">
          <Link className="link" to="/">Principal</Link>
          <Link className="link" to="/sobre">Sobre</Link>
          <Link className="link" to="/projetos">Projetos</Link>
        </nav>
      </div>     
      <Switch>  
        <Route exact path="/" component={ Home }/>
        <Route path="/sobre" component={ About }/>
        <Route path="/projetos" component={ Projects }/>
      </Switch> 
    </div>
  );
}

export default App;
