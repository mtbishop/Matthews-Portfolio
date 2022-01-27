// import ParticleBackground from './ParticleBackground';
import '../styles/components/AboutMe.scss';
import NonCrossed from '../styles/img/non crossed.jpg';

function AboutMe() {
  return (
    <section className="container aboutMe">
      <p className="aboutMeIntro">
        <img className="selfImage" alt="pic-of-me" src={NonCrossed} />
        <span className="aboutMe">About Me</span>
        Hello! Welcome to my portfolio. I am a graduate of the Kansas University
        Coding Bootcamp with the goal to become a full stack developer. I joined
        with the school when I realized how creative and fun being a web
        developer can be and haven't regretted it since. I had no prior
        knowledge of anything code related before I started and am proud of how
        fast I'm learning and can not wait to be able to apply my skills to my
        future employer. I bring critical thinking skills to the table that I
        acquired from my IT education at Mountainland Applied Tech. College
        located in Spanish Fork Utah while getting my A+ certification, Network+
        certification, and Security+ certification. Outside of the bootcamp
        curriculum I am studying: WordPress, PHP, Vue.js, and Python with a bit
        of dabbling in Data Science all to help broaden my scope of programming
        knowledge.
      </p>
      <a
        className="resume"
        href="/Matthew_Bishop.pdf"
        target="_blank"
        rel="noreffer"
      >
        Learn more about my professional history
      </a>
      {/* <ParticleBackground /> */}
    </section>
  );
}

export default AboutMe;
