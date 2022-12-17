import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import useScrollPosition from "../../hooks/useScrollPosition";

const CustomLink = ({ children, href, scroll }) => {
  return (
    <Link
      href={href}
      scroll={scroll}
      className="list__link block py-2 px-2 md:px-0 font-extralight hover:text-gray-400 "
    >
      {children}
    </Link>
  );
};

// use dislayNavigation for display outside of main page (hide nav?)
const Navigation = ({ dislayNavigation }) => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={classNames(
        "fixed top-0 w-full text-grey-900 px-1 sm:px-4 bg-theme-primary z-10",
        {
          shadow: scrollPosition > 0,
          "shadow-none": scrollPosition === 0,
        }
      )}
    >
      <div className="container flex flex-wrap items-center justify-center mx-auto">
        <p className="absolute left-7 hidden sm:block tracking-wide">
          CHRISTOPHER KADE
        </p>

        <div className="block w-auto" id="navbar-default">
          <ul className="flex p-2 flex-row md:space-x-8 mt-0 text-sm font-medium">
            <li>
              <CustomLink href="/" scroll={false}>
                About,
              </CustomLink>
            </li>
            <li className="ml-0">
              <CustomLink href="#articles" scroll={false}>
                articles,
              </CustomLink>
            </li>
            <li className="ml-0">
              <CustomLink href="#projects" scroll={false}>
                projects,
              </CustomLink>
            </li>
            <li className="ml-0">
              <CustomLink href="#contact" scroll={false}>
                contact
              </CustomLink>
            </li>
            {/* <li className="ml-2">
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
