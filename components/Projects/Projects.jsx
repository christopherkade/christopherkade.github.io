import React from "react";
import Image from "next/image";

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
import dailyChessClubPng from "../../public/images/dailychessclub.png";
import packingHelperPng from "../../public/images/packing-helper.png";
import cfvDeckExporter from "../../public/images/cfv-deck-exporter.png";

const colors = ["yellow", "violet", "cyan", "green"];

const Projects = ({ id }) => {
  const projects = [
    {
      title: "OpenClassroom's course page",
      href: "https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python",
      image: ocPng,
      description:
        "Most visited page of the online training platform, including the homepage, chapters & quiz",
      color: colors[0],
    },
    {
      title: "Accor hotel's reservation funnel",
      href: "https://all.accor.com/",
      image: accorPng,
      description:
        "Consulted on the rework of their website used by over 11M users per year",
      color: colors[1],
    },
    {
      title: "CFV Deck Exporter",
      href: "https://chrome.google.com/webstore/detail/cfv-deck-exporter/dcclinglnjcbdggbamlneoclnaligkea?hl=en-GB&authuser=2",
      image: cfvDeckExporter,
      description:
        "Chrome extension to export Cardfight!! Vanguard decks in a single click",
      color: colors[2],
    },
    {
      title: "Banner generator",
      href: "https://christopherkade.com/banner-generator/",
      image: bannerPng,
      description:
        "Generate a png file to use as a banner for your articles on Dev.to",
      color: colors[3],
    },
    {
      title: "Packing Helper GPT",
      href: "https://github.com/christopherkade/gpt-packing-helper",
      image: packingHelperPng,
      description:
        "ChatGPT-powered luggage packing assistant to help you pack efficiently",
      color: colors[0],
    },
    {
      title: "Daily chess club",
      href: "https://dailychess.club/",
      image: dailyChessClubPng,
      description: "Daily challenges & stats based on previous games",
      color: colors[1],
    },
    {
      title: "Lockdown center",
      href: null,
      image: lockdownPng,
      description:
        "Find ways to stimulate your mind during the lockdown: presentations, talks, hobbies etc.",
      color: colors[2],
    },
    {
      title: "Gitignore it",
      href: "https://www.npmjs.com/package/gitignore-it",
      image: gitignorePng,
      description:
        "An npm package used to generate relevant gitignore files for your projects",
      color: colors[3],
    },
    {
      title: "Foodpicker",
      href: null,
      image: foodpickerPng,
      description:
        "Choose where to eat with your colleagues using a realtime websocket voting system",
      color: colors[0],
    },
    {
      title: "Snippet",
      href: "https://christopherkade.com/snippet/",
      image: snippetPng,
      description:
        "Generate code snippets to easily share with your colleagues",
      color: colors[1],
    },
    {
      title: "Twitter thread generator",
      href: "https://christopherkade.com/twitter-thread-generator/",
      image: twitterPng,
      description:
        "Automatically divide your rants into Tweet-sized copyable boxes",
      color: colors[2],
    },
    {
      title: "Jammer",
      href: "https://christopherkade.com/Jammer",
      image: jammerPng,
      description:
        "Find which songs to jam to by comparing them to your bandmate's",
      color: colors[3],
    },
    {
      title: "ReactCraft",
      href: "https://christopherkade.com/ReactCraft/?path=/story/button--with-text",
      image: reactcraftPng,
      description:
        "A small design system based on World of Warcraft's UI identity",
      color: colors[0],
    },
  ];

  return (
    <div id={id} className="pt-12 section overflow-hidden">
      <div className="h-full p-6 max-w-7xl mx-auto">
        {projects.map(({ title, href, image, description, color }, index) => {
          return (
            <>
              <div
                key={title}
                className="mb-2 mt-4 text-center [&:not(:first-child)]:mt-8"
              >
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
              <div className="h-full md:max-w-[80%] overflow-hidden m-auto">
                <a
                  className="h-full w-full"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={image}
                    className="object-cover transition-transform ease-in hover:scale-105"
                    alt={description}
                  />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
