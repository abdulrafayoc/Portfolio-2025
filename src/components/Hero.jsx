import React from "react";
import "./Hero.css";
import { useMediaQuery } from "react-responsive";
import splash from "../assets/splash-1.png";
import {SVGFilters} from "./FilterAnimation";
import FilterAnimation from "./FilterAnimation";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const MobileHero = () => (
    <div className="hero-container-mobile">
      <img src={splash} alt="Splash" className="hero-splash-mobile" />
      <div className="hero-title-mobile">
        <span className="title-line-mobile">WEB DESIGNER</span>
        <span className="title-line2-mobile">& DEVELOPER</span>
      </div>
      <div className="hero-intro-mobile">
        <p className="hero-greeting-mobile">HELLO!</p>
        <p className="hero-info-mobile">
          I'm Abdul Rafay
          <br />A Non-Award Designer and a Developer
        </p>
        <p className="hero-statement-mobile">
          I partner with businesses to provide innovative digital solutions that
          drive growth and enhance user experiences.
        </p>
      </div>
      
    </div>
  );

  const DesktopHero = () => (
    <div className="hero-container">
      
      <SVGFilters />
      <div style={{ padding: '100px', fontSize: '15rem' }}>
        <FilterAnimation text="Hover Me" filterId="goo-6" />
      
    </div>
      <img src={splash} alt="Splash" className="hero-splash" />
      <div className="hero-title">
        <span className="title-line">WEB DESIGNER</span>
        <div className="hero-intro">
          <p className="hero-greeting">HELLO!</p>
          <p className="hero-info">
            I'm Abdul Rafay
            <br />A Non-Award Designer and a Developer
          </p>
        </div>
      </div>
      <div className="hero-sec-title">
        <p className="hero-statement">
          I partner with businesses to provide innovative digital solutions that
          drive growth and enhance user experiences.
        </p>
        <span className="title-line">& DEVELOPER</span>
      </div>
      
    </div>
  );

  return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default Hero;
