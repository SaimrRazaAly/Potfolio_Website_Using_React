import React from "react";
import "./Card.css";
import { mywork_data } from "../../asserts/assets/mywork_data";
import { FaGithub, FaEye } from "react-icons/fa"; // Importing icons
import Imge from "../../asserts/assets/project-3.jpg";

const Card = () => {
  return (
    <div className="grid">
      {mywork_data.map((project, index) => (
        <div className="services-box lite-box" key={index}>
          <div className="project-image">
            <img src={project.image} alt="" />
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="services-box-btn">
            <a href={project.liveDemo}>
             {project.liveDemo ? <FaEye /> : ""}
            </a>
            <a href={project.viewCode}>
              <FaGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
