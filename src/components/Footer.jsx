import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="contact-container">
      <div className="wrapper">
        <div className="social-links">
          <p className="social-link">
            <a href="https://www.linkedin.com/in/abdulrafayoc/">Behance</a>
          </p>

          <p className="social-link">
            <a href="https://www.linkedin.com/in/abdulrafayoc/">LinkedIn</a>
          </p>

          <p className="social-link">
            <a href="https://www.linkedin.com/in/abdulrafayoc/">Dribble</a>
          </p>
        </div>

        <div className="form-container">
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your name *"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your email *"
              className="form-input"
              required
            />
            <textarea
              placeholder="Your message *"
              className="form-input message-input"
              required
            />
            <button type="submit" className="connect-button">
              Let's Connect
            </button>
          </form>
        </div>
      </div>

      <div className="footer-info">
        <p className="edition-text">2024 © Edition</p>
        <p className="time-text">Mon Oct 14 2024 17:20</p>
      </div>
    </div>
  );
};

export default Footer;
