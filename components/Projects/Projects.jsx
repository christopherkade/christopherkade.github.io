import React from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react/headless";
import { followCursor } from "tippy.js";

import bannerPng from "../../public/images/banner-generator.png";
import lockdownPng from "../../public/images/lockdown.png";
import gitignorePng from "../../public/images/gitignore.png";
import foodpickerPng from "../../public/images/foodpicker.png";
import accorPng from "../../public/images/accor.png";
import ocPng from "../../public/images/oc.png";
import snippetPng from "../../public/images/snippet.png";
import reactcraftPng from "../../public/images/reactcraft.png";

import { getRandomStrikeColor } from "../../services/getRandomStrikeColor";

const Projects = ({ id }) => {
  const projects = [
    {
      title: "OpenClassrooms course page",
      href: "https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python",
      image: ocPng,
      description:
        "The new OpenClassrooms course page, including the chapter & quiz layouts !",
    },
    {
      title: "Accor hotels",
      href: "https://all.accor.com/",
      image: accorPng,
      description: "The Accor hotels website to book hotel reservations.",
    },
    {
      title: "Banner generator",
      href: "https://christopherkade.com/banner-generator/",
      image: bannerPng,
      description:
        "A banner generator, allowing the user to generate a png file to use as a banner for your articles on Dev.to.",
    },
    {
      title: "Lockdown center",
      href: null,
      image: lockdownPng,
      description:
        "A website to find ways to stimulate your mind during the lockdown: presentations, talks, hobbies etc.",
    },
    {
      title: "Gitignore it",
      href: "https://www.npmjs.com/package/gitignore-it",
      image: gitignorePng,
      description:
        "An npm package used to generate relevant gitignore files for your projects.",
    },
    {
      title: "Foodpicker",
      href: null,
      image: foodpickerPng,
      description:
        "A website to chose where to eat with your colleagues using a realtime websocket voting system.",
    },
    {
      title: "Snippet",
      href: "https://christopherkade.com/snippet/",
      image: snippetPng,
      description:
        "Generate code snippets to easily share with your colleagues.",
    },
    {
      title: "ReactCraft",
      href: "https://christopherkade.com/ReactCraft/?path=/story/button--with-text",
      image: reactcraftPng,
      description:
        "A small Design System based on World of Warcraft's UI identity.",
    },
  ];

  return (
    <div id={id} className="pt-12 section">
      <div className="h-full p-6 max-w-7xl mx-auto">
        {projects.map(({ title, href, image, description }, index) => {
          return (
            <div className="text-center mb-8 last:mb-0" key={title}>
              <div>
                <h2
                  className={`w-fit mx-auto block sm:hidden ${getRandomStrikeColor()}`}
                >
                  {title}
                </h2>
                <p className="block sm:hidden font-extralight text-sm">
                  {description}
                </p>
              </div>
              <a
                id={`link-${index}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <Tippy
                  delay={500}
                  followCursor={true}
                  plugins={[followCursor]}
                  render={(attrs) => (
                    <div
                      tabIndex="-1"
                      className="bg-violet-300 text-theme-primary p-2 rounded-md"
                      {...attrs}
                    >
                      {description}
                    </div>
                  )}
                >
                  <Image
                    src={image}
                    className="w-full h-fit mt-3 project-transition hover:project-scale"
                    alt={description}
                  />
                </Tippy>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
