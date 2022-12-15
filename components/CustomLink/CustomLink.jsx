import React from "react";
import Link from "next/link";

const CustomLink = ({ children, href, newTab }) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : null}
      className="underline text-theme-text font-bold"
    >
      {children}
    </a>
  );
};

export default CustomLink;
