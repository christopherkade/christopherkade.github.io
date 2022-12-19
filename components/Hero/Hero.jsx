/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = ({ id }) => {
  return (
    <div
      id={id}
      className="section w-full h-[100vh] px-4 md:px-8 pb-4 md:pt-28 pt-20 2xl:pt-48"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl 2xl:text-8xl tracking-wide md:leading-[60px] 2xl:leading-[1.2rem]">
        <div className="overflow-hidden h-12 md:h-16 2xl:h-24 mb-2">
          <div className="block animate-slideHelloMobile md:animate-slideHello 2xl:animate-none">
            <span className="mb-11 inline-block strike-through-yellow">
              Hello
            </span>
          </div>
          <div className="block">
            <span className="mb-11 inline-block strike-through-green">
              Bonjour
            </span>
          </div>
          <div className="block">
            <span className="mb-11 inline-block strike-through-cyan">
              مَرْحَبا
            </span>
          </div>
        </div>
        I'm Christopher, a{" "}
        <span className="strike-through-green">front-end engineer</span> with
        years of experience building{" "}
        <span className="strike-through-cyan">robust</span>,{" "}
        <span className="strike-through-violet">accessible</span> &{" "}
        <span className="strike-through-yellow">well crafted</span> UIs.
      </div>
    </div>
  );
};

export default Hero;
