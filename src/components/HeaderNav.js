import GHLogo from '../styles/img/GH logo.png';
import LILogo from '../styles/img/LI logo.png';
import '../styles/components/HeaderNav.scss';

function HeaderNav() {
  return (
    <>
      <nav className="navbar">
        <div className="navTitle">
          <h4 className="matthewBishop">Matthew Bishop</h4>
          <h6 className="FSWD">Full Stack Web Developer</h6>
        </div>
        <div className="navLinks">
          <a
            className="navbar-anchor"
            rel="noreferrer"
            href="https://github.com/mtbishop"
            target="_blank"
          >
            <img alt="Github" src={GHLogo} width="64px" />
          </a>
          <a
            className="navbar-anchor"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matthew-t-bishop/"
            target="_blank"
          >
            <img alt="LinkedIn" src={LILogo} width="64px" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default HeaderNav;
