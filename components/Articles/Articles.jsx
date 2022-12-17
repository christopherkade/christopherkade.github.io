import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
// import posts from "../../content/posts.json";
import { ArticlesModal } from "../ArticlesModal";

const ArticleCard = ({ slug, title, description }) => {
  return (
    <Link
      href={slug}
      className="border-2 border-black p-6 hover:project-scale project-transition mb-2 md:mr-2"
    >
      <>
        <h3 className="text-xl mb-4">{title}</h3>
      </>
    </Link>
  );
};

const Articles = ({ id, posts }) => {
  const [showArticles, setShowArticles] = useState(false);
  // const { files } = posts;
  const firstFourFiles = posts.slice(0, 4);

  const handleArticleModalDisplay = (showArticles) => {
    setShowArticles(showArticles);
  };

  // TODO:
  // 1. Order by date (descending)
  // 2. Keep first 4 items
  // 3. Display them + a "See all articles ->" link
  // 4. Said link opens a modal with the full list of articles
  return (
    <>
      <div
        id={id}
        className={classNames(
          "modal-transition section max-w-7xl mx-auto border-t border-b border-black p-6 mb-10",
          {
            "z-40 my-0 bg-theme-primary w-auto fit-available": showArticles,
          }
        )}
      >
        {showArticles ? (
          <h2 className="text-3xl mb-8">My articles</h2>
        ) : (
          <h2 className="text-3xl mb-8">My most recent articles</h2>
        )}

        <div className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-none">
          {!showArticles
            ? firstFourFiles.map(({ frontmatter }) => (
                <ArticleCard
                  key={frontmatter.slug}
                  slug={frontmatter.slug}
                  title={frontmatter.title}
                  description={frontmatter.description}
                />
              ))
            : posts.map(({ frontmatter }) => (
                <ArticleCard
                  key={frontmatter.slug}
                  slug={frontmatter.slug}
                  title={frontmatter.title}
                  description={frontmatter.description}
                />
              ))}
        </div>

        {showArticles ? (
          <button
            className="flex ml-auto text-lg mt-2"
            onClick={() => handleArticleModalDisplay(false)}
          >
            Show less
          </button>
        ) : (
          <button
            className="flex ml-auto text-lg mt-2"
            onClick={() => handleArticleModalDisplay(true)}
          >
            See all article ➡️
          </button>
        )}
        {/* {showArticles && (
          <ArticlesModal setShowArticles={setShowArticles} posts={posts} />
        )} */}
      </div>
    </>
  );
};

export default Articles;
