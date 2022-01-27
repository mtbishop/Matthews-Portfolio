import React from 'react';
import '../styles/components/Skills.scss';

function Skills() {
  return (
    <section className="container">
      <span className="skillsHeader">Skills</span>
      <div className="skillsGrid">
        <div className="skillsItem">
          <p title="HTML5" className="devicon-html5-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="CSS3" className="devicon-css3-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="SASS" className="devicon-sass-original"></p>
        </div>
        <div className="skillsItem">
          <p title="JavaScript" className="devicon-javascript-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="jQuery" className="devicon-jquery-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="React" className="devicon-react-original"></p>
        </div>
        <div className="skillsItem">
          <p title="Python" className="devicon-python-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="WordPress" className="devicon-wordpress-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="Vue.js" className="devicon-vuejs-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="Node.js" className="devicon-nodejs-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="Express" className="devicon-express-original"></p>
        </div>
        <div className="skillsItem">
          <p title="mySQL" className="devicon-mysql-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="MongoDB" className="devicon-mongodb-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="PhP" className="devicon-php-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="Git" className="devicon-git-plain"></p>
        </div>
        <div className="skillsItem">
          <p title="npm" className="devicon-npm-original-wordmark"></p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
