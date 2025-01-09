import React from "react";
import "./Quote.css";
import QuoteMark from "../assets/quote.svg";
const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-wrapper">
        <div className="quote">
          <img src={QuoteMark} alt="Quote Mark" className="quote-svg" />

          <div className="quote-text">
            I have not failed. I’ve just found 10,000 ways that won’t work.
          </div>
        </div>
        <div className="quote-author">- Thomas A. Edison</div>
      </div>
      <div className="cta">
        <div className="cta-top">Don't hesitate</div>
        <svg className="cta-line" xmlns="http://www.w3.org/2000/svg" width="378" height="47" viewBox="0 0 378 47" fill="none">
            <path d="M1 1L377 46" stroke="black"/>
        </svg>
        <div className="cta-bot">to say Hello</div>
      </div>
    </div>
  );
};

export default Quote;
