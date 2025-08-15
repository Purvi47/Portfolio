import React from "react";
import Profile from "../image/Profile.png";

const HeroAbout = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>
          Hi, I'm <span className="highlight-name">Purvi Vishwakarma</span>
        </h1>
        <p>
          A technology enthusiast with a deep curiosity for how things work.
          I enjoy exploring new ideas, learning emerging tools, and turning
          concepts into impactful solutions. I believe in blending logic with
          creativity to make meaningful changes.
        </p>

        <div className="about-buttons">
          <a href="/Resume PV.pdf" className="btn-primary" download>
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right side image */}
      <div className="about-image-container">
        <img src={Profile} alt="Purvi Vishwakarma" className="about-image" />
      </div>
    </section>
  );
};

export default HeroAbout;
