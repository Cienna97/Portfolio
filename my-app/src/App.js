import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
//import Nav from './Component/Nav';
import About from './Component/About';
//import Contact from "./Component/Contact";
import Project from "./Component/Project";

//import logo from './logo.svg';

function App() {
  return (
   <div>
    <main>
      <Project></Project>
        <About></About>
        <h1>
          <Header></Header>
          <Footer/>
        </h1>
      </main>
      
    </div>
  );
}

export default App;
