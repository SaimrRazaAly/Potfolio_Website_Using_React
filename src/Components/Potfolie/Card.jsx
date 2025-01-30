import React from "react";
import "./Card.css";
import { mywork_data } from "../../asserts/assets/mywork_data";

const Card = () => {

  return (

      <div className="grid">
        {mywork_data.map((project, index) => (
          <div key={index} className="card">
            {/* Card Header */}
            <div className="card-header">{project.title}</div>

            {/* Card Body */}
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Overlay */}
            <div className="overlay">
              <div className="overlay-buttons">
                <a href={project.liveDemo} className="button button-primary">
                  Live Demo
                </a>
                <a href={project.viewCode} className="button button-secondary">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
  );
};

export default Card;
