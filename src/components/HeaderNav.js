import React from 'react';
import './HeaderNav.css';

function HeaderNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-dark text-center">
        <ul className="navList">
          <li>
            <h4 id="matthewBishop" className="navbar-brand ml-1 text-light">
              Matthew Bishop
            </h4>
          </li>
          <li>
            {/* <h6 id="FSWD" className="navbar-brand ml-1 text-light">
              Full Stack Web Developer
            </h6> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;
