import React from 'react';
import Nav from './Component/Nav';
import About from './Component/About';
import Contact from "./components/Contact";

//import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
    <main>
      <Contact></Contact>
        <About></About>
      </main>
    </div>
  );
}

export default App;
