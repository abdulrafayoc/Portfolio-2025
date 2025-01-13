import React from "react";
import "./MyServices.css";
import { Canvas } from "@react-three/fiber";
import TextPathAnimation from "./TextPathAnimation";

const MyServices = () => {
  return (
    <div className="services-container">
      <div className="ani-canvas-1">
        <Canvas>
          <ambientLight />
          <TextPathAnimation  scale={.23} />
        </Canvas>
      </div>
      <div className="ani-canvas-2">
        <Canvas>
          <ambientLight />
          <TextPathAnimation scale={.23} />
        </Canvas>
      </div>
      <div className="vertical-text">Just About</div>

      <div className="services">
        <p className="service">Web Design</p>
        <p className="service">Front-End Development</p>
        <p className="service">Mobile Design</p>
        <p className="service">User Interface (UI)</p>
        <p className="service">User Experience (UX) Design</p>
        <p className="service">Brand Identity Creation</p>
      </div>
    </div>
  );
};

export default MyServices;
