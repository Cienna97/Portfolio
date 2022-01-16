import React from 'react';

function Nav() {

  return (
    <header>
      <h2>
      <span role="img" aria-label="laptop">💻 </span> Cienna Mortenson
   
  </h2>
  <nav>
    <ul className="flex-row">
        <a href="#about">
          <span>About me</span>
        </a>
      <ul>
        < a href="#contact">
        <span>Contact</span>
        </a>
      </ul>
    </ul>
  </nav>
    </header>
  );
}

export default Nav;