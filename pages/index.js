import React from "react";
import Head from "next/head";

import { Durin } from "../components/Durin";
import { MainName } from "../components/MainName";
import { About } from "../components/About";
// import { Projects } from "../components/Projects";

// TODO:
// Highlight nav element on view (Observer API)
export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Christopher Kade</title>
        <meta name="description" content="Christopher Kade's home base" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <div className="relative h-full">
          <Durin />

          <MainName />
        </div>

        <div className="mx-20">
          <About />

          {/* <Projects /> */}
        </div>
      </main>
    </div>
  );
}
