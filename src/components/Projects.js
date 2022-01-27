import '../styles/components/Projects.scss';
import Dogtionary from '../styles/img/Dogtionary Demo.png';
import CodingQuiz from '../styles/img/Coding Quiz Demo.PNG';
import ISSTracker from '../styles/img/landing-page2.PNG';

function Projects() {
  return (
    <section className="container">
      <h2 className="projectsHeader">Projects</h2>
      <div className="projectBoxes">
        <div className="projectCard">
          <img src={ISSTracker} className="projImage" alt="burger-app-demo" />
          <div className="card-body">
            <h5 className="card-title">ISS Tracker</h5>
            <p className="card-text">
              Track the current location of the International Space Station, as
              well as see a list of all of the current astronauts that are on
              the ISS and the Shenzhou 13 space crafts. Created with React and
              styled with SCSS and tailwind.css
            </p>
            <a
              href="https://github.com/mtbishop/ISS-Tracker"
              target="_blank"
              rel="noreferrer"
              className="projectsButton"
            >
              Go to Project Repository
            </a>
            <a
              href="https://mtb-iss-tracker.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="projectsButton"
            >
              Deployed Link
            </a>
          </div>
        </div>
        <div className="projectCard">
          <div>
            <div>
              <img src={Dogtionary} className="projImage" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Dogtionary</h5>
                <p className="card-text">
                  Written with JavaScript, styled with tailwindcss, and using
                  the Pet Finder API and thedogapi, this was my first group
                  project. Made to help dog lovers search for dogs in their
                  local area and a library of information on any breeds they may
                  be interested in.
                </p>
                <a
                  href="https://github.com/kcnancy/Dogtionary"
                  target="_blank"
                  rel="noreferrer"
                  className="projectsButton"
                >
                  Go to Project Repository
                </a>
                <a
                  href="https://kcnancy.github.io/Dogtionary/"
                  target="_blank"
                  rel="noreferrer"
                  className="projectsButton"
                >
                  Deployed Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projectCard">
          <div>
            <div>
              <img
                src={CodingQuiz}
                className="projImage"
                alt="coding-quiz-demo"
              />
              <div className="card-body">
                <h5 className="card-title">Code Quiz</h5>
                <p className="card-text">
                  A quiz with questions related to coding. Implimented a timer
                  with a scoring system that saves to your local storage.
                </p>
                <a
                  href="https://github.com/mtbishop/04-Code-Quiz"
                  target="_blank"
                  rel="noreferrer"
                  className="projectsButton"
                >
                  Go to Project Repository
                </a>
                <a
                  href="https://mtbishop.github.io/04-Code-Quiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="projectsButton"
                >
                  Deployed Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
