import React from "react";

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="section grid md:grid-rows-2 md:grid-cols-2 min-h-[670px]"
    >
      <a className="text-6xl p-6 m-auto hover:strike-through-yellow" href="#">
        LinkedIn
      </a>
      <a className="text-6xl p-6 m-auto hover:strike-through-green" href="#">
        Twitter
      </a>
      <a className="text-6xl p-6 m-auto hover:strike-through-cyan" href="#">
        Github
      </a>
      <a className="text-6xl p-6 m-auto hover:strike-through-violet" href="#">
        Dev.to
      </a>
    </div>
  );
};

export default Contact;
