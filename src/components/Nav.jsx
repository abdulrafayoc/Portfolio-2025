import React, { useState } from "react";
import "./Nav.css";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import logo from "../assets/logo.png";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <img className="menu-i" src={menu} alt="menu" />
        </div>
      </div>

      {/* Popup Menu */}
      <div className={`popup-menu ${isOpen ? "open" : "closed"}`}>
      <div className="close-btn" onClick={toggleMenu}>
          <img className="menu-i" src={close} alt="menu" />
        </div>
        <div className="menu-content">
          <h1 className="menu-title">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>WORK<sup>6</sup></div>
          </h1>
          <p className="socials-heading">Socials</p>
          <div className="social-links-nav">
            <div href="#linkedin">Linkedin</div>
            <div href="#telegram">Telegram</div>
            <div href="#whatsapp">WhatsApp</div>
            <div href="#instagram">Instagram</div>
          </div>
          <div className="location-info">
            <p className="location">Located in Islamabad</p>
            <p>{new Date().toDateString()}</p>
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
