/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

const Hero = ({ id }) => {
  const [formattedSentenceArray, setFormattedSentenceArray] = useState(null);
  const [helloIndex, setHelloIndex] = useState(0);
  // const heroSentence =
  //   "Hello ! I'm Christopher, a front-end engineer with years of experience creating robust, accessible and well crafted websites. I focus on using the latest tools available & collaborate with designers to deliver the best experience possible in terms of performance, design and user experience.";
  // const hellos = ["Hey ! ", " Bonjour ! ", "! مَرْحَبا "];
  const heroSentence =
    "I'm Christopher, a front-end engineers with years of experience building robust, accessible & well crafted UIs.";

  useEffect(() => {
    const split = heroSentence.split(" ");
    const html = split.map((word) => {
      return (
        <span className="hover:animate-addColor" key={word}>
          {word}{" "}
        </span>
      );
    });
    setFormattedSentenceArray(html);
  }, []);

  return (
    <div
      id={id}
      className="section w-full h-[100vh] px-4 md:px-8 pb-4 md:pt-28 pt-20"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wide md:leading-[60px]">
        <div className="overflow-hidden h-12 md:h-16 mb-2">
          <div className="block animate-slideHelloMobile md:animate-slideHello">
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
        {/* {formattedSentenceArray && formattedSentenceArray.map((word) => word)} */}
      </div>
    </div>
  );
};

export default Hero;
