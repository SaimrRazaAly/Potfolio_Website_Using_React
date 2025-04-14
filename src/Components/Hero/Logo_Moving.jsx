import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiShadcnui,
  SiRedux,
  // SiVisualstudiocode,
} from "react-icons/si";
import "./Logo_Moving.css";

const icons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJs />,
  <SiRedux />,
  <SiTypescript />,
  <FaReact />,
  <SiNextdotjs />,
  <SiMui />,
  <SiShadcnui />,
  <FaFigma />,
  // <SiVisualstudiocode />,
  <FaGithub />,
];

const Logo_Moving = () => {
  return (
    <div className="logo-container">
      <div className="logo-track">
        {[...icons, ...icons].map((icon, index) => (
          <div className="logo-icon" key={index}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo_Moving;
