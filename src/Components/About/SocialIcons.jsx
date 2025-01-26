import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon github"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
