import React from "react";
import Head from "next/head";

import { getAllPublished } from "../services/md";
import Link from "next/link";

import { getRandomStrikeColor } from "../services/getRandomStrikeColor";

const ArticleCard = ({ slug, title }) => {
  return (
    <Link
      href={slug}
      className="hover:project-scale project-transition mb-8 w-fit"
    >
      <>
        <h3
          className={`text-xl md:text-3xl box-decoration-clone ${getRandomStrikeColor()} inline`}
        >
          {title}
        </h3>
      </>
    </Link>
  );
};

const Posts = ({ posts }) => {
  return (
    <div className="h-full md:pt-28 pt-20 px-4 md:px-8">
      <Head>
        <title>Site seeing - Blog</title>
        <meta name="description" content="Christopher Kade's technical blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col text-left">
        {/* <Link
          href="/#articles"
          className="flex justify-start text-2xl hover:strike-through-violet mr-auto w-fit mb-8"
        >
          Back home
        </Link> */}

        {posts.map(({ frontmatter }) => {
          return (
            <ArticleCard
              key={frontmatter.slug}
              slug={frontmatter.slug}
              title={frontmatter.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPublished("content/posts");
  return {
    props: { posts },
  };
};

export default Posts;
