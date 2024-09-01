// import About_img from "../../asserts/assets/about_profile.svg";
import About_img from '../../asserts/assets/profile-2-transformed.jpeg'
import Heading from "../SecHeading/Heading";
import "./About.css";
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
                I am a experience fronted developer having a deep understanding
                of modern technologies like HTML Next.JS etc.My passion is not
                only making websites and someting more than it. its like my
                hobby
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quos ducimus soluta temporibus quis beatae? Tenetur,
                odio dolorem sunt sint sapiente quae doloremque laudantium enim
                iste. Ea earum rerum dolor.
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
            <h1>100+</h1>
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
