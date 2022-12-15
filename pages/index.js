import React from "react";
import Head from "next/head";

import { Durin } from "../components/Durin";
import { MainName } from "../components/MainName";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { MainDescription } from "../components/MainDescription";
import { Hero } from "../components/Hero";
import { Articles } from "../components/Articles";

// TODO:
// Highlight nav element on view (Observer API)
//
export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Christopher Kade</title>
        <meta name="description" content="Christopher Kade's home base" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full pt-28">
        <div className="h-full">
          {/* <Durin /> */}
          <Hero />

          {/* <MainName /> */}

          {/* Latest articles */}
          {/* Projects */}
          <Articles />
          <Projects />
        </div>

        <div className="max-w-xs sm:max-w-md md:max-w-6xl mx-auto">
          {/* <MainDescription /> */}

          {/* <About /> */}
        </div>
      </main>
    </div>
  );
}
