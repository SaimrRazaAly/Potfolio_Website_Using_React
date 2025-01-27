import React from "react";
import "./Card.css";

const Card = ({ title, img, codeLink, live, liveUrl }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={title} />
      </div>
      <div className="card__descr-wrapper">
        <h3 className="card__title">{title}</h3>
        <div className="card__links">
          {/* GitHub Code Link */}
          {codeLink && (
            <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github svg"
          >
            <i className="fab fa-github"></i>
          </a>
          )}

          {/* Live Preview Link */}
          {live && liveUrl && (
            <a href={liveUrl} className="link" target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
