import React from "react";
import Head from "next/head";

import { Projects } from "../components/Projects";
import { Hero } from "../components/Hero";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { getAllPublished } from "../services/md";

import useObserver from "../hooks/useObserver";

const Home = ({ posts }) => {
  useObserver();

  return (
    <div className="h-full">
      <Head>
        <title>Christopher Kade</title>
        <meta
          name="description"
          content="Christopher Kade's portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <div className="h-full">
          <Hero id="hero" />
          <Articles id="articles" posts={posts} />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPublished("content/posts");
  return {
    props: { posts },
  };
};

export default Home;
