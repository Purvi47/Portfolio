import React from "react";
import "../App.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <h2 className="section-title neon-text">Let's Connect!</h2>

        <div className="contact-container">

          {/* Left Side */}
          <div className="contact-left">
            <h3 className="contact-heading">Get In Touch</h3>
            <p className="contact-text">
              I believe in the power of connection to spark creativity and innovation. Reach out, and let’s turn ideas into reality together.
            </p>
            <p className="contact-item"><FaEnvelope /> purvi7454@gmail.com</p>
            <p className="contact-item"><FaPhone /> +91 74107 70669</p>
            <p className="contact-item"><FaMapMarkerAlt /> Mumbai, Maharashtra, India</p>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            <h3 className="contact-heading">Connect With Me</h3>
            <div className="contact-icons">
              <a href="https://github.com/Purvi47" target="_blank" rel="noreferrer" className="social-icon neon-btn">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/purvi-vishwakarma-0b9081272/" target="_blank" rel="noreferrer" className="social-icon neon-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.codechef.com/users/purvi98" target="_blank" rel="noreferrer" className="social-icon neon-btn">
                <SiCodechef /> CodeChef
              </a>
              <a href="https://leetcode.com/u/Purviii/" target="_blank" rel="noreferrer" className="social-icon neon-btn">
                <SiLeetcode /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neon Divider After Contact */}
      <div className="contact-divider"></div>
    </>
  );
};

export default Contact;
