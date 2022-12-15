import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import starPng from "../../images/star.png";

const CustomLink = ({ children, href, scroll }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      scroll={scroll}
      className={classNames(
        "block py-2 px-2 md:px-0 font-extralight hover:text-gray-400",
        {
          "text-theme-select":
            asPath.includes(children.split(",")[0].toLowerCase()) ||
            (asPath === "/" && children === "About,"),
          "text-theme-text": !asPath.includes(children.toLowerCase()),
        }
      )}
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full text-grey-900 px-1 pt-2.5 sm:px-4 bg-theme-primary z-10">
      <div className="container flex flex-wrap items-center justify-center mx-auto">
        <p className="absolute left-7">Christopher Kade</p>

        <div className="block w-auto" id="navbar-default">
          <ul className="flex p-2 flex-row md:space-x-8 mt-0 text-sm font-medium">
            <li>
              <CustomLink href="/" scroll={false}>
                About,
              </CustomLink>
            </li>
            <li>
              <CustomLink href="#articles" scroll={false}>
                Articles,
              </CustomLink>
            </li>
            <li>
              <CustomLink href="#projects" scroll={false}>
                Projects
              </CustomLink>
            </li>
            {/* <li>
              <Link
                href="/blog"
                className={classNames(
                  "block py-2 pl-3 pr-4 hover:text-gray-400 p-0",
                  {
                    "text-theme-brown-dark": router.pathname === "/blog",
                    "text-gray-700": router.pathname !== "/blog",
                  }
                )}
              >
                BLOG
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
