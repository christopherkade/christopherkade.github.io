import React from "react";
import Head from "next/head";

import { Projects } from "../components/Projects";
import { Hero } from "../components/Hero";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";

import useObserver from "../hooks/useObserver";

export default function Home() {
  useObserver();

  return (
    <div className="h-full">
      <Head>
        <title>Christopher Kade</title>
        <meta name="description" content="Christopher Kade's home base" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <div className="h-full">
          <Hero id="hero" />
          <Articles id="articles" />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </main>
    </div>
  );
}
