import React from "react";
import Image from "next/image";

import mePng from "./images/me.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center md:flex-row flex-col-reverse mt-12 border-black border-b"
    >
      <Image src={mePng} alt="A picture of me!" className="min-h-[250px]" />

      <article className="md:ml-8 mb-8">
        <h3 className="md:text-[48px] text-2xl leading-tight text-theme-select mb-8">
          Pro-active, reliable <br />& focused on what matters
        </h3>
        <p>
          Currently residing in Paris, France and working to make education
          accessible @OpenClassrooms.
        </p>
        <p>
          I'm passionate about what I do and deliver reliable, robust &
          accessible code while working side-by-side with designers.
        </p>
      </article>
    </div>
  );
};

export default About;
