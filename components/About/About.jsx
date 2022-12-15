import React from "react";
import Image from "next/image";
import { Gilda_Display } from "@next/font/google";

import useObserver from "../../hooks/useObserver";
import mePng from "./images/chris.jpg";
import { CustomLink } from "../CustomLink";

const gildaDisplay = Gilda_Display({ weight: "400" });

const Tooltip = () => {
  return (
    <span className="hidden group-hover:block text-sm bg-theme-select rounded-sm absolute text-theme-white py-2 px-1 md:-top-14 md:right-0 right-20 -top-20 offset-tooltip text-center">
      Performance, clean code & accessibility
    </span>
  );
};

const About = () => {
  const [containerRef] = useObserver("about");

  return (
    <div
      id="about"
      ref={containerRef}
      className="flex items-center justify-center md:flex-row flex-col-reverse mt-12"
    >
      {/* className="h-72 w-80" */}
      <div className="border about-img-radius border-theme-select overflow-hidden self-start">
        <Image
          src={mePng}
          alt="A picture of me!"
          className="w-[300px] overflow-clip overflow-clip-margin"
        />
      </div>

      <article className="md:ml-12 mb-8">
        <h3
          className={`md:text-[48px] text-2xl leading-tight text-theme-text mb-8 ${gildaDisplay.className}`}
        >
          Pro-active, reliable <br />& focused on what{" "}
          <div className="group relative inline">
            <span className="underline cursor-pointer">matters</span>

            <Tooltip />
          </div>
        </h3>
        <div className="max-w-lg">
          <p className="mb-2">
            Currently residing in Paris, France and working to make education
            accessible{" "}
            <CustomLink href="https://openclassrooms.com" newTab={true}>
              @OpenClassrooms
            </CustomLink>
            .
          </p>
          <p>
            I'm passionate about what I do and deliver reliable, robust &
            accessible code while working side-by-side with designers.
          </p>
        </div>
      </article>
    </div>
  );
};

export default About;
