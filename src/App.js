import React from 'react';
import About from './Pages/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="flex w-full bg-slate-800 main">    
      <nav 
        className="flex flex-col text-center bg-slate-900 w-1/4 items-center border-r-2 border-l-2 border-emerald-500 sm:flex-col nav-bar">
        <Header/>       
      </nav>       
      <div className="flex flex-col w-screen text-center bg-slate-800 w-full" >         
        <section className='bg-slate-800 flex flex-col items-center w-full '>
          <About />  
          <Projects />                    
          <Footer />
        </section>    
      </div> 
    </div>
  );
}

export default App;
