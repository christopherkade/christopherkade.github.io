import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import { CopyCodeButton } from "app/components/copy-code-button";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// sugar-high is a lightweight JS/JSX/TS-only highlighter. Fenced code blocks
// written in other languages (markdown, yaml, bash, json, plain text, etc.)
// get tokenized as if they were JavaScript, producing nonsensical colors on
// unrelated words. Only highlight languages sugar-high actually understands
// and render everything else as plain text.
let highlightableLanguages = new Set([
  "js",
  "jsx",
  "ts",
  "tsx",
  "javascript",
  "typescript",
]);

function Code({ children, className, ...props }) {
  let language = className?.replace("language-", "");
  let shouldHighlight = !language || highlightableLanguages.has(language);

  if (!shouldHighlight) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  let codeHTML = highlight(children);
  return (
    <code
      className={className}
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
}

// `.prose pre` scrolls horizontally (overflow-x-auto) for long lines, but a
// <pre> isn't natively focusable, so keyboard users can't reach that
// scrollable content. tabIndex makes it Tab-reachable (axe: scrollable-region-focusable).
//
// The MDX `code` component is only substituted when React actually renders
// `children`, so at this point `children` is still the raw `<code>` element
// with its original string `props.children` — read that directly to get the
// unhighlighted source for copying, rather than trying to strip highlight
// markup back out later. Inline `code` (not inside a fenced block) is never
// wrapped in `pre`, so the copy button naturally never appears for it. The
// button is further limited to code that spans multiple lines.
function Pre({ children, ...props }) {
  let code = children?.props?.children;
  let codeText = typeof code === "string" ? code : "";
  let isMultiline = codeText.trim().includes("\n");

  return (
    <div className="group relative">
      <pre tabIndex={0} {...props}>
        {children}
      </pre>
      {isMultiline && <CopyCodeButton code={codeText} />}
    </div>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  pre: Pre,
  Table,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
