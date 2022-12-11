import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="container-main">
      <div className="navegator">
        <nav className="navegator-logo">
          <img 
            className="logo"
            alt="logotipo"
            src="https://static.vecteezy.com/ti/vetor-gratis/p3/7901432-eba-letter-logo-design-on-black-background-eba-creative-initials-letter-logo-concept-eba-letter-design-vetor.jpg"></img>
        </nav>
        <nav className="navegator-title">
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
      <Footer />
    </div>
  );
}

export default App;
