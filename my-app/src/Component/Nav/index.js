import React from 'react';
import { Navbar } from "react-bootstrap";
//import { capitalizeFirstLetter } from "../../utils/helpers";
import {NavLink} from "react-router-dom";

function Nav(props) {
  
  //const {
    //categories = [],
    //setCurrentCategory,
    //contactSelected,
    //currentCategory,
    //setContactSelected,
  //} = props;



  return (
    <div>
      <Navbar expand="lg" bg="primary" sticky="top">
      <NavLink className="nav-link" to="/">
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <NavLink to="/about">
              <div className="nav-font text-light">My Info</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio">
              <div className="nav-font text-light">Projects</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
              <div className="nav-font text-light">Contact</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
       
  );
}

export default Nav;