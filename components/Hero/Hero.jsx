/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from "react";

import browserPng from "./images/browser.png";
import useObserver from "../../hooks/useObserver";

const Hero = ({ id }) => {
  // const [containerRef] = useObserver();
  const heroTextRef = useRef();

  // useEffect(() => {
  //   if (heroTextRef) {
  //     const htmlArray = [];
  //     const text = heroTextRef.current.innerHTML;
  //     const splittedValues = text.split(" ");
  //     splittedValues.forEach((word) => {
  //       htmlArray.push(
  //         `<span className="hover:animate-addColor">${word}</span>`
  //       );
  //     });
  //   }
  //   // <span className="hover:animate-addColor">
  // }, []);

  return (
    <div
      id={id}
      className="section w-full md:h-[100vh] h-full px-4 md:px-8 pb-4 pt-28"
    >
      {/* <Image src={browserPng} /> */}
      <p
        ref={heroTextRef}
        className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wide leading-[52px]"
      >
        <span className="hover:animate-addColor">Hello !</span>{" "}
        <span className="hover:animate-addColor">I'm</span>{" "}
        <span className="hover:animate-addColor">Christopher</span>,{" "}
        <span className="hover:animate-addColor">a</span>{" "}
        <span className="hover:animate-addColor">front-end</span>{" "}
        <span className="hover:animate-addColor">engineer</span>{" "}
        <span className="hover:animate-addColor">with</span>{" "}
        <span className="hover:animate-addColor">years</span>{" "}
        <span className="hover:animate-addColor">of</span>{" "}
        <span className="hover:animate-addColor">experience</span>{" "}
        <span className="hover:animate-addColor">creating</span>{" "}
        <span className="hover:animate-addColor">robust</span>,
        <span className="hover:animate-addColor"> accessible</span>{" "}
        <span className="hover:animate-addColor">and</span>{" "}
        <span className="hover:animate-addColor">well</span>{" "}
        <span className="hover:animate-addColor">crafted</span>{" "}
        <span className="hover:animate-addColor">websites.</span> <br />
        <span className="hover:animate-addColor">I</span>{" "}
        <span className="hover:animate-addColor">focus</span>{" "}
        <span className="hover:animate-addColor">on</span>{" "}
        <span className="hover:animate-addColor">using</span>{" "}
        <span className="hover:animate-addColor">the</span>{" "}
        <span className="hover:animate-addColor">latest</span>{" "}
        <span className="hover:animate-addColor">tools</span>{" "}
        <span className="hover:animate-addColor">available</span>{" "}
        <span className="hover:animate-addColor">&</span>{" "}
        <span className="hover:animate-addColor">collaborate</span>{" "}
        <span className="hover:animate-addColor">with</span>{" "}
        <span className="hover:animate-addColor">designers</span>{" "}
        <span className="hover:animate-addColor">to</span>{" "}
        <span className="hover:animate-addColor">deliver</span>{" "}
        <span className="hover:animate-addColor">the</span>{" "}
        <span className="hover:animate-addColor">best</span>{" "}
        <span className="hover:animate-addColor">experience</span>{" "}
        <span className="hover:animate-addColor">possible</span>{" "}
        <span className="hover:animate-addColor">in</span>{" "}
        <span className="hover:animate-addColor">terms</span>{" "}
        <span className="hover:animate-addColor">of</span>{" "}
        <span className="hover:animate-addColor">performance,</span>{" "}
        <span className="hover:animate-addColor"> design</span>{" "}
        <span className="hover:animate-addColor">and</span>{" "}
        <span className="hover:animate-addColor">user</span>{" "}
        <span className="hover:animate-addColor">experience.</span>
      </p>
    </div>
  );
};

export default Hero;
