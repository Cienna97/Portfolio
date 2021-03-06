import React, { Component } from "react";
import { Route, HashRouter , Routes} from "react-router-dom";
//import { Redirect } from 'react-router'
import Nav from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from './Contact';



class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <hr/>
          <Nav />
          <hr/>
        </header>

        <div className="content">
          <Routes>
            <Route exact path="/" element={ <About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div> 
      </HashRouter>
     
    );
  }
}


export default Header;

//<Route path="/resume" element={<Resume />} />
