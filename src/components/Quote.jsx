import React from "react";
import "./Quote.css";
import QuoteMark from "../assets/quote.svg";
import FilterAnimation, {SVGFilters} from "./FilterAnimation";

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-wrapper">
        <div className="quote">
          <img src={QuoteMark} alt="Quote Mark" className="quote-svg" />

          <div className="quote-text">
            <SVGFilters />
            
          <FilterAnimation text="I have not failed. I’ve just found 10,000 ways that won’t work." filterId="goo-7" />

            {/* I have not failed. I’ve just found 10,000 ways that won’t work. */}
          </div>
        </div>
        <div className="quote-author">
          <FilterAnimation text="- Thomas A. Edison" filterId="goo-7" /> </div>
      </div>
      <div className="cta">
        <div className="cta-top">
            
            <FilterAnimation text="Don't hesitate" filterId="goo-4" />
  
          </div>
        <svg className="cta-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 378 47" fill="none">
            <path d="M1 1L377 46" stroke="black"/>
        </svg>
        <div className="cta-bot">
        <FilterAnimation text="to say Hello" filterId="goo-4" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
