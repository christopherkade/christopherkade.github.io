import React from "react";
import Link from "next/link";
import Image from "next/image";

import { colors } from "../../constants/colors";
import backArrowSvg from "../../images/back-arrow.svg";

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
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Recent articles</h2>
          <p>
            I write about Javascript, CSS & best practices in software
            engineering.
          </p>
        </div>

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
          className="flex justify-end text-lg mt-2 ml-auto w-fit group"
        >
          <span className="group-hover:strike-through-yellow">
            View all articles
          </span>
          <Image
            src={backArrowSvg}
            width={15}
            height={15}
            className="ml-2 rotate-180"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Articles;
