import React from "react";
import Link from "next/link";

import { colors } from "../../constants/colors";

const ArticleCard = ({ slug, title, bgColor }) => {
  return (
    <Link
      href={slug}
      className="hover:project-scale project-transition mb-4 md:mr-2"
    >
      <>
        <h3
          className={`text-xl mb-4 box-decoration-clone strike-through-${bgColor} inline`}
        >
          {title}
        </h3>
      </>
    </Link>
  );
};

const Articles = ({ id, posts }) => {
  const firstFourFiles = posts.slice(0, 4);

  return (
    <div id={id} className="section pt-12">
      <div
        className={
          "modal-transition max-w-7xl mx-auto border-t border-b border-black p-6 mb-10"
        }
      >
        <h2 className="text-3xl mb-8">My most recent articles</h2>

        <div className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-none mb-8">
          {firstFourFiles.map(({ frontmatter }, index) => (
            <ArticleCard
              key={frontmatter.slug}
              slug={frontmatter.slug}
              title={frontmatter.title}
              description={frontmatter.description}
              bgColor={colors[index]}
            />
          ))}
        </div>

        <Link
          href="/posts"
          className="flex justify-end text-lg mt-2 hover:strike-through-violet ml-auto w-fit"
        >
          View all articles
        </Link>
      </div>
    </div>
  );
};

export default Articles;
