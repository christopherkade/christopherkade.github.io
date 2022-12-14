import React from "react";
import Image from "next/image";
import { Gilda_Display } from "@next/font/google";

import useObserver from "../../hooks/useObserver";
import mePng from "./images/me.png";

const gildaDisplay = Gilda_Display({ weight: "400" });

const About = () => {
  const [containerRef] = useObserver("about");

  return (
    <div
      id="about"
      ref={containerRef}
      className="flex items-center justify-center md:flex-row flex-col-reverse mt-12 border-black border-b"
    >
      {/* <Image src={mePng} alt="A picture of me!" className="min-h-[250px]" /> */}

      <article className="md:ml-8 mb-8">
        <h3
          className={`md:text-[48px] text-2xl leading-tight text-theme-text mb-8 ${gildaDisplay.className}`}
        >
          Pro-active, reliable <br />& focused on what{" "}
          <div className="group relative inline">
            <span className="underline cursor-pointer">matters</span>
            <span className="hidden group-hover:block text-sm bg-slate-400 border-r-4 absolute text-theme-white p-2 -top-14 right-0 offset-tooltip">
              Performance, clean code & accessibility
            </span>
          </div>
        </h3>
        <div className="max-w-lg">
          <p className="mb-2">
            Currently residing in Paris, France and working to make education
            accessible @OpenClassrooms.
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
