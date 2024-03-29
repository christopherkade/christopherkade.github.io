/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";

const Hero = ({ id }) => {
  const textRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!textRef || !textRef.current) return;
      textRef.current.style.transform = `translateX(${window.scrollY / 8}px)`;
    });
  }, []);

  return (
    <div
      id={id}
      className="section w-full h-[100vh] px-4 md:px-20 pt-36 2xl:pt-48 overflow-hidden"
    >
      <div
        ref={textRef}
        className="animate-textAppear text-4xl md:text-5xl 2xl:text-8xl tracking-wide md:leading-[60px]"
      >
        <span className="strike-through-green">Bonjour !</span> I'm Christopher,
        a <span className="strike-through-green">front-end engineer</span> with
        years of experience building{" "}
        <span className="strike-through-cyan">robust</span>,{" "}
        <span className="strike-through-violet">accessible</span> &{" "}
        <span className="strike-through-yellow">well crafted</span> UIs.
      </div>
    </div>
  );
};

export default Hero;
