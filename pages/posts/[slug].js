import React from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getSinglePost } from "../../services/md";
import style from "../../styles/markdown-styles.module.css";

import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";

SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const Post = ({ content, frontmatter }) => {
  const router = useRouter();
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
    <div className="pt-28 max-w-7xl p-6 mx-auto">
      <article className="max-w-[60%] mx-auto">
        <header className="mb-14">
          <h1 className="text-4xl box-decoration-clone strike-through-yellow inline">
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
