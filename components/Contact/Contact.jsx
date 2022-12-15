import React from "react";

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="section grid md:grid-rows-2 md:grid-cols-2 min-h-[670px]"
    >
      <a
        className="text-6xl hover:text-theme-select hover:underline p-6 m-auto"
        href="#"
      >
        LinkedIn
      </a>
      <a
        className="text-6xl hover:text-theme-select hover:underline p-6 m-auto"
        href="#"
      >
        Twitter
      </a>
      <a
        className="text-6xl hover:text-theme-select hover:underline p-6 m-auto"
        href="#"
      >
        Github
      </a>
      <a
        className="text-6xl hover:text-theme-select hover:underline p-6 m-auto"
        href="#"
      >
        Dev.to
      </a>
    </div>
  );
};

export default Contact;
