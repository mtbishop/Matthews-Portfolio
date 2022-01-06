import './AboutMe.css';
import Modal from './ContactModal';
import NonCrossed from '../assets/Images/non crossed.jpg';

function AboutMe() {
  return (
    <div>
      <section className="container">
        <div className="jumbotron mt-4 bg-info">
          <div id="aboutMeBody" className="row">
            <div className="col-md-12 text-light">
              <img
                id="selfImage"
                alt="pic-of-me"
                src={NonCrossed}
                className="mr-3 img-thumbnail float-left"
                width="350px"
                height="350px"
              />
              <div id="aboutMeHeader">
                <h2 id="aboutMe">About Me</h2>
              </div>
              <section id="aboutMeIntro" className="ml-2 text-light pt-3 pb-1">
                Hello! Welcome to my portfolio. I am a graduate of the Kansas
                University Coding Bootcamp with the goal to become a full stack
                developer. I joined with the school when I realized how creative
                and fun being a web developer can be and haven't regretted it
                since. I had no prior knowledge of anything code related before
                I started and am proud of how fast I'm learning and can not wait
                to be able to apply my skills to my future employer. I bring
                critical thinking skills to the table that I acquired from my IT
                education at Mountainland Applied Tech. College located in
                Spanish Fork Utah while getting my A+ certification, Network+
                certification, and Security+ certification. Outside of the
                bootcamp curriculum I am studying: WordPress, PHP, Vue.js, and
                Python with a bit of dabbling in Data Science all to help
                broaden my scope of programming knowledge.
              </section>
              <Modal />
              <p id="resumePreText">
                <span>
                  <a
                    id="resume"
                    rel="noreferrer"
                    className="btn"
                    href="https://docs.google.com/document/d/1YeQ09hVz4KmRDTZ6hHcPA4l7eQIcgKygkbW03KcPj5M/edit?usp=sharing"
                    target="_blank"
                  >
                    Learn more about my professional history
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
