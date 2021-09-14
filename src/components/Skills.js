import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/skills.css';

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
                  <p title="SASS" class="devicon-sass-original"></p>
                </Col>
                <Col>
                  <p title="JavaScript" class="devicon-javascript-plain"></p>
                </Col>
                <Col>
                  <p title="jQuery" class="devicon-jquery-plain"></p>
                </Col>
                <Col>
                  <p title="React" class="devicon-react-original"></p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p title="Vue.js" class="devicon-vuejs-plain"></p>
                </Col>
                <Col>
                  <p title="Node.js" class="devicon-nodejs-plain"></p>
                </Col>
                <Col>
                  <p title="Express" class="devicon-express-original"></p>
                </Col>
                <Col>
                  <p title="mySQL" class="devicon-mysql-plain"></p>
                </Col>
                <Col>
                  <p title="MongoDB" class="devicon-mongodb-plain"></p>
                </Col>
                <Col>
                  <p title="Git" class="devicon-git-plain"></p>
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
