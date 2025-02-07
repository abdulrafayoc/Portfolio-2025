import React, { useEffect, useRef, useId } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./ProjectItem.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

const ProjectItem = ({
  image,
  title,
  location,
  year,
  counter,
  description,
}) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const svgRef = useRef(null);
  const captionRef = useRef(null);
  const displacementMapRef = useRef(null);
  const filterId = useId();

  const metaRefs = {
    counter: useRef(null),
    title: useRef(null),
    location: useRef(null),
    year: useRef(null),
  };

  useEffect(() => {
    // Initial setup
    gsap.set(captionRef.current, { y: "0%", opacity: 0 });
    gsap.set(metaRefs.counter.current, { x: 20, opacity: 0 });
    gsap.set(metaRefs.title.current, { x: -20, opacity: 0 });
    gsap.set(metaRefs.location.current, { x: 20, opacity: 0 });
    gsap.set(metaRefs.year.current, { x: 20, opacity: 0 });

    // Set initial image scale and position
    gsap.set(imageRef.current, {
      scale: 1.1,
      transformOrigin: "center center",
    });

    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(
        displacementMapRef.current,
        {
          attr: { scale: 80 }, // Reduced scale for less aggressive distortion
          duration: 0.7,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        captionRef.current,
        {
          y: "0%",
          opacity: 0.75,
          duration: 0.3,
          ease: "sine.out",
        },
        0
      )
      .to(
        [
          metaRefs.counter.current,
          metaRefs.title.current,
          metaRefs.location.current,
          metaRefs.year.current,
        ],
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        0
      )
      .to(
        imageRef.current,
        {
          scale: 1.2,
          duration: 0.7,
          ease: "power2.inOut",
        },
        0
      );

    const handleMouseEnter = () => hoverTimeline.play();
    const handleMouseLeave = () => hoverTimeline.reverse();

    const container = containerRef.current;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="item w-full h-full group relative overflow-hidden"
    >
      <figure className="thumb w-full aspect-square relative overflow-hidden">
        <svg
          ref={svgRef}
          className="distort w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 450 450"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id={filterId}>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.07 0.01"
              numOctaves="5"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              ref={displacementMapRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
          <mask id="image-mask">
            <rect width="100%" height="100%" fill="white" />
          </mask>
          <image
            ref={imageRef}
            mask={`url(#image-mask)`}
            filter={`url(#${filterId})`}
            href={image}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            className="origin-center"
          />
        </svg>
        <figcaption
          ref={captionRef}
          className="thumb__caption bg-black/80 text-white absolute inset-0 flex flex-col justify-center items-center text-center p-4 translate-y-full opacity-1 backdrop-blur-sm"
        >
          <p className="thumb__caption-title text-xl font-bold mb-2">
            {description}
          </p>
          <a className="thumb__caption-link text-link underline">Explore</a>
        </figcaption>
      </figure>

      <div className="item__meta mt-4 ml-4 top-0 absolute">
        <p
          ref={metaRefs.counter}
          className="item__meta-counter opacity-0 transform translate-x-5"
        >
          {counter}
        </p>
        <h3
          ref={metaRefs.title}
          className="item__meta-title text-2xl font-semibold opacity-0 transform -translate-x-5"
        >
          {title}
        </h3>
        <p
          ref={metaRefs.location}
          className="item__meta-detail opacity-0 transform translate-x-5"
        >
          {location}
        </p>
        <p
          ref={metaRefs.year}
          className="item__meta-detail opacity-0 transform translate-x-5"
        >
          {year}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
