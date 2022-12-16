import React, { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  // const { files } = posts;
  const firstFourFiles = posts.slice(0, 4);

  const handleArticleModalDisplay = () => {
    setShowModal(true);
  };

  console.log("865 --- POSTS", posts);

  // TODO:
  // 1. Order by date (descending)
  // 2. Keep first 4 items
  // 3. Display them + a "See all articles ->" link
  // 4. Said link opens a modal with the full list of articles
  return (
    <>
      <div
        id={id}
        className="section max-w-7xl mx-auto border-t border-b border-black p-6"
      >
        <h2 className="text-3xl mb-8">My most recent articles</h2>

        <div className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-none">
          {firstFourFiles.map(({ frontmatter }) => (
            <ArticleCard
              key={frontmatter.slug}
              slug={frontmatter.slug}
              title={frontmatter.title}
              description={frontmatter.description}
            />
          ))}
        </div>

        <button
          className="flex ml-auto text-lg"
          onClick={handleArticleModalDisplay}
        >
          See all article ➡️
        </button>
        {showModal && (
          <ArticlesModal setShowModal={setShowModal} posts={posts} />
        )}
      </div>
    </>
  );
};

export default Articles;
