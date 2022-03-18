import { motion } from 'framer-motion';
import GHLogo from '../styles/img/GH logo-white.png';
import LILogo from '../styles/img/LI logo-white.png';
import '../styles/components/HeaderNav.scss';

function HeaderNav() {
  return (
    <>
      <nav className="navbar">
        <div className="navTitle">
          <motion.h4
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0, x: { type: 'spring', stiffness: 50 } }}
            className="matthewBishop"
          >
            Matthew Bishop
          </motion.h4>
          <motion.h6
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, x: { type: 'spring', stiffness: 50 } }}
            className="FSWD"
          >
            Full Stack Web Developer
          </motion.h6>
        </div>
        <div className="navLinks">
          <a
            className="navbar-anchor"
            rel="noreferrer"
            href="https://github.com/mtbishop"
            target="_blank"
          >
            <motion.img
              initial={{ y: '-15vw' }}
              animate={{ y: 0, duration: 0.05 }}
              transition={{ delay: 0, y: { type: 'spring', stiffness: 50 } }}
              alt="Github"
              src={GHLogo}
              width="64px"
            />
          </a>
          <a
            className="navbar-anchor"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matthew-t-bishop/"
            target="_blank"
          >
            <motion.img
              initial={{ y: '-15vw' }}
              animate={{ y: 0, duration: 0.05 }}
              transition={{ delay: 1, y: { type: 'spring', stiffness: 50 } }}
              alt="LinkedIn"
              src={LILogo}
              width="64px"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default HeaderNav;
