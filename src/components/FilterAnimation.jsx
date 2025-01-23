import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// SVG Filters Component (include once in your app)
export const SVGFilters = () => (
  <svg style={{ display: 'none' }}>
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
        <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
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
        <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
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
        <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
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
        <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
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
        <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
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
        <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
        <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
      </filter>
    </defs>
  </svg>
);

const FilterAnimation = ({ text, filterId = 'goo-2' }) => {
  const textRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Filter elements
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feTurbulence = document.querySelector(`#${filterId} feTurbulence`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);

    if (!feBlur || !feDisplacementMap) {
      console.warn('Filter elements not found');
      return;
    }

    // Animation values
    const primitiveValues = {
      stdDeviation: 30,
      scale: 100,
      baseFrequency: 0.1,
    };

    // Set initial values
    gsap.set(primitiveValues, {
      stdDeviation: 30,
      scale: 100,
      baseFrequency: 0.1,
    });

    // Create animation timeline
    timeline.current = gsap.timeline({
      onUpdate: () => {
        feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
        feDisplacementMap.setAttribute('scale', primitiveValues.scale);
        if (feTurbulence) {
          feTurbulence.setAttribute('baseFrequency', primitiveValues.baseFrequency);
        }
      },
    }).to(primitiveValues, {
      stdDeviation: 0,
      scale: 0,
      baseFrequency: 0.05,
      duration: 1.5,
      ease: 'power6.out',
    });

    timeline.current.play();

    return () => {
      timeline.current.kill();
    };
  }, [filterId]);

  return (
    <h2
      ref={textRef}
      style={{ filter: `url(#${filterId})`, cursor: 'pointer' }}
      className="animated-text font-imbue font-black"
    >
      {text}
    </h2>
  );
};

export default FilterAnimation;