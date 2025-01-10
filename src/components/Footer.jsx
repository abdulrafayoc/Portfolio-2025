import React from "react";
import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [year, setYear] = useState();

  useEffect(() => {
    // Function to format the time
    const formatTime = () => {
      const now = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
      const year = now.getFullYear();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      
      setYear(currentTime.getFullYear());    

      return `${day} ${month} ${date} ${year} ${hours}:${minutes}:${seconds}`;
    };


    // Update the time initially and every second
    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
              placeholder="Your name*"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your email*"
              className="form-input"
              required
            />
            <textarea
              placeholder="Your message*"
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
        <p className="edition-text">{year} © Edition</p>
        <p className="time-text">{currentTime.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Footer;
