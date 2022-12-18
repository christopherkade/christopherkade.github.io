import React from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getSinglePost } from "../../services/md";
import style from "../../styles/markdown-styles.module.css";
import { getRandomStrikeColor } from "../../services/getRandomStrikeColor";
import backArrowSvg from "../../images/back-arrow.svg";

import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import Link from "next/link";
import Image from "next/image";

SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const Post = ({ content, frontmatter }) => {
  const syntaxTheme = oneDark;

  const MarkdownComponents = {
    // SyntaxHighlight code will go here
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;

      const applyHighlights = (applyHighlights) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)[1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers);
          const highlight = highlightLines;
          const data = highlight.includes(applyHighlights) ? "highlight" : null;
          return { data };
        } else {
          return {};
        }
      };

      return match ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta ? true : false}
          useInlineStyles={true}
          lineProps={applyHighlights}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <div className="pt-8 md:pt-28 max-w-7xl p-6 mx-auto">
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="md:max-w-[60%] mx-auto">
        <header className="mb-14">
          <Link className="flex w-fit mb-8 text-lg group" href="/posts">
            <Image
              src={backArrowSvg}
              width={15}
              height={15}
              className="mr-2"
              alt="Back button to all articles"
            />
            <span className="group-hover:strike-through-yellow">
              All articles
            </span>
          </Link>
          <h1
            className={`text-4xl box-decoration-clone ${getRandomStrikeColor()} inline`}
          >
            {frontmatter.title}
          </h1>
        </header>
        <main>
          <ReactMarkdown
            className={style.reactMarkDown}
            components={MarkdownComponents}
          >
            {content}
          </ReactMarkdown>
        </main>
      </article>
    </div>
  );
};

export default Post;

export const getServerSideProps = async ({ params }) => {
  const post = await getSinglePost(params.slug, "content/posts");
  return {
    props: { ...post },
  };
};
