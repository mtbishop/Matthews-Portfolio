import React from 'react';
import GHLogo from '../assets/Images/GH logo.png';
import LILogo from '../assets/Images/LI logo.png';
import './HeaderNav.css';

function HeaderNav() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="navbar-title">
          <h4 id="matthewBishop">Matthew Bishop</h4>
          <h6 id="FSWD">Full Stack Web Developer</h6>
        </div>
        <div>
          <a
            className="navbar-anchor"
            rel="noreferrer"
            href="https://github.com/mtbishop"
            target="_blank"
          >
            <img alt="Github" className="mx-3" src={GHLogo} width="64px" />
          </a>
          <a
            className="navbar-anchor"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matthew-t-bishop/"
            target="_blank"
          >
            <img alt="LinkedIn" className="mx-3" src={LILogo} width="64px" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default HeaderNav;
