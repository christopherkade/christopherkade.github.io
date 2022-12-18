import React from "react";
import Link from "next/link";

import { colors } from "../../constants/colors";

const ArticleCard = ({ slug, title, bgColor }) => {
  return (
    <Link
      href={slug}
      className="hover:project-scale project-transition mb-2 md:mr-2"
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

  // TODO:
  // 1. Order by date (descending)
  // 2. Keep first 4 items
  // 3. Display them + a "See all articles ->" link
  // 4. Said link opens a modal with the full list of articles
  return (
    <>
      <div
        id={id}
        className={
          "modal-transition section max-w-7xl mx-auto border-t border-b border-black p-6 mb-10"
        }
      >
        <h2 className="text-3xl mb-8">My most recent articles</h2>

        <div className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-none">
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

        <Link href="/posts" className="flex justify-end text-lg mt-2">
          Show me all of them
        </Link>
      </div>
    </>
  );
};

export default Articles;
