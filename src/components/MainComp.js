import React from 'react';
import HeaderNav from './HeaderNav';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
// import ParticleBackground from './ParticleBackground';
import '../styles/components/MainComp.scss';

const Main = () => {
  return (
    <div className="main-container">
      <HeaderNav />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <ParticleBackground /> */}
    </div>
  );
};

export default Main;
