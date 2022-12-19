import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import bannerPng from "../../public/images/banner-generator.png";
import lockdownPng from "../../public/images/lockdown.png";
import gitignorePng from "../../public/images/gitignore.png";
import foodpickerPng from "../../public/images/foodpicker.png";
import accorPng from "../../public/images/accor.png";
import ocPng from "../../public/images/oc.png";
import snippetPng from "../../public/images/snippet.png";
import twitterPng from "../../public/images/twitter-thread-generator.png";
import jammerPng from "../../public/images/jammer.png";
import reactcraftPng from "../../public/images/reactcraft.png";

const Projects = ({ id }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "OpenClassroom's course page",
      href: "https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python",
      image: ocPng,
      description:
        "The new OpenClassrooms course page, including the chapter & quiz layouts !",
      color: "yellow",
    },
    {
      title: "Accor hotel's reservation funnel",
      href: "https://all.accor.com/",
      image: accorPng,
      description: "Consulted on the rework of their website",
      color: "violet",
    },
    {
      title: "Banner generator",
      href: "https://christopherkade.com/banner-generator/",
      image: bannerPng,
      description:
        "A banner generator, allowing the user to generate a png file to use as a banner for your articles on Dev.to",
      color: "cyan",
    },
    {
      title: "Lockdown center",
      href: null,
      image: lockdownPng,
      description:
        "A website to find ways to stimulate your mind during the lockdown: presentations, talks, hobbies etc.",
      color: "green",
    },
    {
      title: "Gitignore it",
      href: "https://www.npmjs.com/package/gitignore-it",
      image: gitignorePng,
      description:
        "An npm package used to generate relevant gitignore files for your projects",
      color: "yellow",
    },
    {
      title: "Foodpicker",
      href: null,
      image: foodpickerPng,
      description:
        "A website to chose where to eat with your colleagues using a realtime websocket voting system",
      color: "violet",
    },
    {
      title: "Snippet",
      href: "https://christopherkade.com/snippet/",
      image: snippetPng,
      description:
        "Generate code snippets to easily share with your colleagues",
      color: "cyan",
    },
    {
      title: "Twitter thread generator",
      href: "https://christopherkade.com/twitter-thread-generator/",
      image: twitterPng,
      description:
        "Automatically divide your rants into Tweet-sized copyable boxes",
      color: "green",
    },
    {
      title: "Jammer",
      href: "https://christopherkade.com/Jammer",
      image: jammerPng,
      description:
        "Find which songs to jam to by comparing them to your bandmate's",
      color: "yellow",
    },
    {
      title: "ReactCraft",
      href: "https://christopherkade.com/ReactCraft/?path=/story/button--with-text",
      image: reactcraftPng,
      description:
        "A small Design System based on World of Warcraft's UI identity",
      color: "violet",
    },
  ];

  return (
    <div id={id} className="pt-12 section overflow-hidden">
      <div className="h-full p-6 max-w-7xl mx-auto">
        {projects.map(({ title, href, image, description, color }, index) => {
          return (
            <div
              key={title}
              data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}
              data-aos-duration="1000"
            >
              <div className="mb-2 text-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-fit mx-auto block strike-through-${color}`}
                >
                  {title}
                </a>
                <p className="block font-extralight text-sm">{description}</p>
              </div>
              <div className="h-full">
                <a href={href} target="_blank" rel="noreferrer">
                  <Image src={image} className="mb-8" alt={description} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
