import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        <span className="title-line">WEB DESIGNER</span>
        <span className="title-line">&amp; DEVELOPER</span>
      </h1>
      <div className="hero-content">
        <p className="hero-greeting">HELLO!</p>
        <p className="hero-name">I'm Abdul Rafay</p>
        <p className="hero-description">A Non-Award Designer and a Developer</p>
      </div>
      <p className="hero-statement">
        I partner with businesses to provide innovative digital solutions that drive growth and enhance user experiences.
      </p>
    </div>
  )
}

export default Hero