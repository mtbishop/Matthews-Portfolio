import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/Skills.css';

function Skills() {
  return (
    <div>
      <div className="container">
        <div className="jumbotron mt-4 bg-info">
          <h1 className="text-light" id="skillsHeader">
            Skills
          </h1>
          <div id="skillIcons">
            <div>
              <Row>
                <Col>
                  <p title="HTML5" className="devicon-html5-plain"></p>
                </Col>
                <Col>
                  <p title="CSS3" className="devicon-css3-plain"></p>
                </Col>
                <Col>
                  <p title="SASS" className="devicon-sass-original"></p>
                </Col>
                <Col>
                  <p
                    title="JavaScript"
                    className="devicon-javascript-plain"
                  ></p>
                </Col>
                <Col>
                  <p title="jQuery" className="devicon-jquery-plain"></p>
                </Col>
                <Col>
                  <p title="React" className="devicon-react-original"></p>
                </Col>
                <Col>
                  <p title="Python" className="devicon-python-plain"></p>
                </Col>
                <Col>
                  <p title="WordPress" className="devicon-wordpress-plain"></p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p title="Vue.js" className="devicon-vuejs-plain"></p>
                </Col>
                <Col>
                  <p title="Node.js" className="devicon-nodejs-plain"></p>
                </Col>
                <Col>
                  <p title="Express" className="devicon-express-original"></p>
                </Col>
                <Col>
                  <p title="mySQL" className="devicon-mysql-plain"></p>
                </Col>
                <Col>
                  <p title="MongoDB" className="devicon-mongodb-plain"></p>
                </Col>
                <Col>
                  <p title="PhP" className="devicon-php-plain"></p>
                </Col>
                <Col>
                  <p title="Git" className="devicon-git-plain"></p>
                </Col>
                <Col>
                  <p title="npm" className="devicon-npm-original-wordmark"></p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
