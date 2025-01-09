import React from "react";
import "./Cases.css";
import case1 from "../assets/case-1.png";

const Cases = () => {
  const cases = [
    { id: 1, image: case1 },
    { id: 2, image: case1 },
    { id: 3, image: case1 },
    { id: 4, image: case1 },
    { id: 5, image: case1 },
  ];

  return (
    <div className="cases-container">
      <div className="process-text">
        Thorough research and iterative experimentation lay the foundation of
        every design. From there, the process involves designing, ideating,
        building, and developing to meet users’ needs
      </div>

      <div className="cases-wrapper">
        <p className="heading">SELECTED CASES</p>
        <div className="cases">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="case group">
              <img
                src={caseItem.image}
                alt={`Case ${caseItem.id}`}
                className="case-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
