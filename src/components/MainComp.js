import React from 'react';
import HeaderNav from './HeaderNav';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import '../styles/components/MainComp.scss';

const Main = () => {
  return (
    <div className="main-container">
      <HeaderNav />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
