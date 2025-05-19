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

type Project = {
  title: string
  href: string | null
  image: any
  description: string
}

export function getProjects(): Project[] {
  return [
    {      
      title: "OpenClassroom's course page",
      href: "https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python",
      image: ocPng,
      description:
        "Most visited page of the online training platform, including the homepage, chapters & quiz",
    },
    {
      title: "Accor hotel's reservation funnel",
      href: "https://all.accor.com/",
      image: accorPng,
      description:
        "Consulted on the rework of their website used by over 11M users per year",
    },
    {
      title: "CFV Deck Exporter",
      href: "https://chrome.google.com/webstore/detail/cfv-deck-exporter/dcclinglnjcbdggbamlneoclnaligkea?hl=en-GB&authuser=2",
      image: cfvDeckExporter,
      description:
        "Chrome extension to export Cardfight!! Vanguard decks in a single click",
    },
    {
      title: "Banner generator",
      href: "https://christopherkade.com/banner-generator/",
      image: bannerPng,
      description:
        "Generate a png file to use as a banner for your articles on Dev.to",
    },
    {
      title: "Packing Helper GPT",
      href: "https://github.com/christopherkade/gpt-packing-helper",
      image: packingHelperPng,
      description:
        "ChatGPT-powered luggage packing assistant to help you pack efficiently",
    },
    {
      title: "Daily chess club",
      href: "https://dailychess.club/",
      image: dailyChessClubPng,
      description: "Daily challenges & stats based on previous games",
    },
    {
      title: "Lockdown center",
      href: null,
      image: lockdownPng,
      description:
        "Find ways to stimulate your mind during the lockdown: presentations, talks, hobbies etc.",
    },
    {
      title: "Gitignore it",
      href: "https://www.npmjs.com/package/gitignore-it",
      image: gitignorePng,
      description:
        "An npm package used to generate relevant gitignore files for your projects",
    },
    {
      title: "Foodpicker",
      href: null,
      image: foodpickerPng,
      description:
        "Choose where to eat with your colleagues using a realtime websocket voting system",
    },
    {
      title: "Snippet",
      href: "https://christopherkade.com/snippet/",
      image: snippetPng,
      description:
        "Generate code snippets to easily share with your colleagues",
    },
    {
      title: "Twitter thread generator",
      href: "https://christopherkade.com/twitter-thread-generator/",
      image: twitterPng,
      description:
        "Automatically divide your rants into Tweet-sized copyable boxes",
    },
    {
      title: "Jammer",
      href: "https://christopherkade.com/Jammer",
      image: jammerPng,
      description:
        "Find which songs to jam to by comparing them to your bandmate's",
    },
    {
      title: "ReactCraft",
      href: "https://christopherkade.com/ReactCraft/?path=/story/button--with-text",
      image: reactcraftPng,
      description:
        "A small design system based on World of Warcraft's UI identity",
    },
  ]
}