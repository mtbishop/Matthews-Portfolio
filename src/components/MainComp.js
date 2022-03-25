import React from 'react';
import HeaderNav from './HeaderNav';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../styles/components/MainComp.scss';

const Main = () => {
  return (
    <div className="main-container">
      <HeaderNav />
      <AnimationOnScroll
        duration={1}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <AboutMe />
      </AnimationOnScroll>
      <AnimationOnScroll
        duration={1}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <Skills />
      </AnimationOnScroll>
      <AnimationOnScroll
        duration={1}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <Projects />
      </AnimationOnScroll>
    </div>
  );
};

export default Main;
