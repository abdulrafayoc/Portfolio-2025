import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// SVG Filters Component (include once in your app)
export const SVGFilters = () => (
  <svg style={{ display: "none" }}>
    <defs>
      <filter id="goo-1">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 13 -6"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
      <filter id="goo-2">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 12 -4"
          result="goo"
        />
        <feTurbulence
          type="turbulence"
          baseFrequency="1"
          numOctaves="1"
          seed="2"
          result="noise"
        />
        <feDisplacementMap
          in="goo"
          in2="noise"
          scale="0"
          result="displacement"
        />
        <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
      </filter>
      <filter id="goo-3">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 15 -8"
          result="goo"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.1 0.5"
          numOctaves="5"
          seed="2"
          result="noise"
        />
        <feDisplacementMap
          in="goo"
          in2="noise"
          scale="0"
          result="displacement"
        />
        <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
      </filter>
      <filter id="goo-4">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
          result="goo"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1 0.01"
          numOctaves="1"
          seed="1"
          result="noise"
        />
        <feDisplacementMap
          in="goo"
          in2="noise"
          scale="0"
          result="displacement"
        />
        <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
      </filter>
      <filter id="goo-5">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 14 -1"
          result="goo"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.009 1"
          numOctaves="1"
          seed="1"
          result="noise"
        />
        <feDisplacementMap
          in="goo"
          in2="noise"
          scale="0"
          result="displacement"
        />
        <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
      </filter>
      <filter id="goo-6">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 12 -8"
          result="goo"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1"
          numOctaves="1"
          seed="1"
          result="noise"
        />
        <feDisplacementMap
          in="goo"
          in2="noise"
          scale="0"
          result="displacement"
        />
        <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
      </filter>
      <filter id="goo-7">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -5"
          result="goo"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.07 0.3"
          numOctaves="1"
          seed="1"
          result="noise"
        />
        <feDisplacementMap
          in="goo"
          in2="noise"
          scale="0"
          result="displacement"
        />
        <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
      </filter>
    </defs>
  </svg>
);
const FilterAnimation = ({ text, filterId = "goo-2" }) => {
  const textRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Filter elements
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);

    if (!feBlur || !feDisplacementMap) {
      console.warn("Filter elements not found");
      return;
    }

    // Animation values
    const primitiveValues = { stdDeviation: 0, scale: 0 };

    // Set initial opacity to 0
    gsap.set(textElement, { opacity: 0});

    // Create animation timeline
    timeline.current = gsap.timeline({
      defaults: { duration: 1, ease: "power4.out" },
      onUpdate: () => {
        // Update SVG filter attributes
        feBlur.setAttribute("stdDeviation", primitiveValues.stdDeviation);
        feDisplacementMap.setAttribute("scale", primitiveValues.scale);
      },
      scrollTrigger: {
        trigger: textElement, // Trigger the animation when the text enters the viewport
        // start: "top 100%", // Adjust this value to control when the animation starts
        end: "top 65%", // Adjust this value to control when the animation ends
        scrub: 1, // Smoothly scrub through the animation on scroll
        
      },
    })
      .to(primitiveValues, {
        stdDeviation: 50, // Start with a strong blur
        scale: 100, // Start with a high displacement
      })
      .to(primitiveValues, {
        stdDeviation: 0, // End with no blur
        scale: 0, // End with no displacement
      })
      .to(
        textElement,
        {
          opacity: 1, // Fade in the text
        },
        0
      );

    return () => {
      timeline.current.kill(); // Clean up the timeline on unmount
    };
  }, []);

  return (
    <div
      ref={textRef}
      style={{ filter: `url(#${filterId})` }}
    >
      {text}
    </div>
  );
};

export default FilterAnimation;