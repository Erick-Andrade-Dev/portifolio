import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './Pages/About';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import './App.css';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';

function App() {
  return (
    <div className="container-main">    
      <Header /> 
      <Switch>          
        <Route exact path="/" component={ About }/>
        <Route path="/projetos" component={ Projects }/>
        <Route path="*" component={ NotFound }/>
      </Switch> 
      <Footer />
    </div>
  );
}

export default App;
