import './Projects.css';
import './portfoliostyle.css';
import Dogtionary from '../assets/Images/Dogtionary Demo.png';
import CodingQuiz from '../assets/Images/Coding Quiz Demo.PNG';
import BurgerApp from '../assets/Images/BurgerApp Demo.png';

function Projects() {
  return (
    <div className="container">
      <div className="jumbotron bg-info">
        <div className="projects">
          <div id="projectsBody">
            <div className="col-md-12 text-light">
              <h1 id="projectsHeader">Projects</h1>
            </div>
            <div id="projectBoxes">
              <div className="row projectCard">
                <div className="col-md-12">
                  <div className="card m-3">
                    <img
                      src={Dogtionary}
                      id="projImage"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Dogtionary</h5>
                      <p className="card-text">
                        Written with JavaScript, styled with tailwindcss, and
                        using the Pet Finder API and thedogapi, this was my
                        first group project. Made to help dog lovers search for
                        dogs in their local area and a library of information on
                        any breeds they may be interested in.
                      </p>
                      <a
                        href="https://github.com/kcnancy/Dogtionary"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        id="projectsButton"
                      >
                        Go to Project Repository
                      </a>
                      <a
                        href="https://kcnancy.github.io/Dogtionary/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        id="projectsButton"
                      >
                        Deployed Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row projectCard">
                <div className="col-md-12">
                  <div className="card m-3">
                    <img
                      src={BurgerApp}
                      id="projImage"
                      className="card-img-top"
                      alt="burger-app-demo"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Eat-Da-Burger</h5>
                      <p className="card-text">
                        With this burger checklist, you can enter a type of
                        burger you'd like to try and make a list of it. When you
                        try the burger you can click the eaten button and the
                        burger that you ate will apear on the right side.
                      </p>
                      <a
                        href="https://github.com/mtbishop/Eat-Da-Burger"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        id="projectsButton"
                      >
                        Go to Project Repository
                      </a>
                      <a
                        href="https://eat-da-burger-mb.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        id="projectsButton"
                      >
                        Deployed Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row projectCard">
                <div className="col-md-12">
                  <div className="card m-3">
                    <img
                      src={CodingQuiz}
                      id="projImage"
                      className="card-img-top"
                      alt="coding-quiz-demo"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Code Quiz</h5>
                      <p className="card-text">
                        A quiz with questions related to coding. Implimented a
                        timer with a scoring system that saves to your local
                        storage.
                      </p>
                      <a
                        href="https://github.com/mtbishop/04-Code-Quiz"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        id="projectsButton"
                      >
                        Go to Project Repository
                      </a>
                      <a
                        href="https://mtbishop.github.io/04-Code-Quiz/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        id="projectsButton"
                      >
                        Deployed Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
