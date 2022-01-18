import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
//import Nav from './Component/Nav';
import About from './Component/About';
//import Contact from "./Component/Contact";
import Project from "./Component/Project";

//import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div>

    <main>
      <Project></Project>
        <About></About>
        <h1>
          <Header />
          <Footer />
        </h1>
      </main>
    </div>
  );
}

export default App;
