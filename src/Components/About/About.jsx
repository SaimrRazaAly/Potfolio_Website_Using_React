// import About_img from "../../asserts/assets/about_profile.svg";
import About_img from '../../asserts/assets/profile-2-transformed.jpeg'
import Heading from "../SecHeading/Heading";
import "./About.css";
import SocialIcons from './SocialIcons';
const About = () => {
  return (
    <>
      <section className="About" id="page-2">
        <Heading title="About Me" />
        <div className="about-content">
          <div className="about-left">
            <img src={About_img} alt="" />
          </div>

          <div className="about-right">
            <div className="about-para">
              <p>
              I'm a passionate Frontend Developer with expertise in crafting modern, responsive, and user-friendly web applications.
              With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I specialize in building scalable and maintainable front-end solutions using cutting-edge frameworks like React, Next.js, and Tailwind CSS.
              </p>
            </div>
        
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>React</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Tailwind</p> <hr style={{ width: "45%" }} />
              </div>
                <SocialIcons/>
            </div>
          </div>
        </div>
        <div className="about-achivements">
          <div className="about-achivement">
            <h1>2+</h1>
            <p>Years Of Experience</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>20+</h1>
            <p>Project Completed</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>2+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
