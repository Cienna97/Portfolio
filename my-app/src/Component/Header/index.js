//import from react
import React, {Component} from "react";
import { Route, HashRouter , Routes} from "react-router-dom";
import { Redirect } from 'react-router'
import Navigation from "./Navigation";

class Header extends Component {
    render() {
        return (
            <HashRouter>
        <header>
          <hr/>
          <Navigation />
          <hr/>
        </header>

        <div className="content">
          <Routes>
            <Route exact path="/" element={ <About />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div> 
      </HashRouter>
     

        );

    }



}

export default Header;