import React from "react";

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="section grid md:grid-rows-2 md:grid-cols-2 min-h-[670px]"
    >
      <a
        className="text-6xl hover:underline p-6 m-auto bg-amber-300 h-10"
        href="#"
      >
        LinkedIn
      </a>
      <a
        className="text-6xl hover:underline p-6 m-auto bg-green-300 h-10"
        href="#"
      >
        Twitter
      </a>
      <a
        className="text-6xl hover:underline p-6 m-auto bg-cyan-300 h-10"
        href="#"
      >
        Github
      </a>
      <a
        className="text-6xl hover:underline p-6 m-auto bg-violet-300 h-10"
        href="#"
      >
        Dev.to
      </a>
    </div>
  );
};

export default Contact;
