import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <p>
          I am a passionate Full Stack Developer skilled in React, Java, and
          Spring Boot. I enjoy building modern web applications and writing clean,
          maintainable code.
        </p>
      </div>

      <div className="about-right">
        <img src="/images/santosh.jpeg" alt="profile" />
      </div>
    </div>
  );
};

export default About;
