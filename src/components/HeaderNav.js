import React from 'react';
import '../assets/navcss.css';

function HeaderNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-dark text-center">
        <h4 id="matthewBishop" className="navbar-brand ml-1 text-light">
          Matthew Bishop
        </h4>
        <div className="fixed-top"></div>
      </nav>
    </div>
  );
}

export default HeaderNav;
