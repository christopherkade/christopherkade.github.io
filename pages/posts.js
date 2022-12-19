import React, { useState, useMemo } from "react";
import Head from "next/head";

import { getAllPublished } from "../services/md";
import Link from "next/link";

import { getRandomStrikeColor } from "../services/getRandomStrikeColor";

const ArticleCard = ({ slug, title }) => {
  const strikeColor = useMemo(() => getRandomStrikeColor(), []);

  return (
    <Link
      href={slug}
      className="hover:project-scale project-transition mb-8 w-fit"
    >
      <>
        <h3
          className={`text-xl md:text-3xl box-decoration-clone ${strikeColor} inline`}
        >
          {title}
        </h3>
      </>
    </Link>
  );
};

const Posts = ({ posts }) => {
  const [displayedPosts, setDisplayedPosts] = useState(posts);

  const handleInput = (e) => {
    const input = e.target.value.toLowerCase();
    const filteredPosts = posts.filter(({ frontmatter }) =>
      frontmatter.title.toLowerCase().includes(input)
    );

    setDisplayedPosts(filteredPosts);
  };

  return (
    <div className="h-full md:pt-28 pt-20 px-4 md:px-8">
      <Head>
        <title>A Technical Blog by Christopher Kade</title>
        <meta
          name="description"
          content="Read up on new web development trends for Javascript, HTML, CSS, React & Vue."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col text-left">
        <input
          type="text"
          className="w-fit mb-8 p-2 bg-theme-primary outline-theme-violet"
          placeholder="Search article..."
          onInput={handleInput}
        />

        {displayedPosts.map(({ frontmatter }) => {
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
