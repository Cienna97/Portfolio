import React, { Component } from "react";
import { Route, HashRouter , Routes} from "react-router-dom";
//import { Redirect } from 'react-router'
//import Nav from "./Nav";
//import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <hr/>
                    <Nav/>
                    <hr/>
                </header>

                <div classname="content">
                <Routes>
                <Route exact path="/" element={ <About />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} /> 
                </Routes>

                </div>
            </HashRouter>
        );
    }
}

export default Header;

