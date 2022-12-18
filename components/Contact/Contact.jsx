import React from "react";

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="section grid md:grid-rows-2 md:grid-cols-2 min-h-[670px]"
    >
      <a
        className="text-6xl p-6 m-auto hover:strike-through-yellow"
        href="https://www.linkedin.com/in/christopher-kade/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="text-6xl p-6 m-auto hover:strike-through-green"
        href="https://twitter.com/christo_kade"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      <a
        className="text-6xl p-6 m-auto hover:strike-through-cyan"
        href="https://github.com/christopherkade"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        className="text-6xl p-6 m-auto hover:strike-through-violet"
        href="https://dev.to/christopherkade"
        target="_blank"
        rel="noreferrer"
      >
        Dev.to
      </a>
    </div>
  );
};

export default Contact;
