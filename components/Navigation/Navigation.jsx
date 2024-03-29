import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import useScrollPosition from "../../hooks/useScrollPosition";

const CustomLink = ({ children, href, scroll, scrollToTop }) => {
  return (
    <Link
      href={href}
      scroll={scroll}
      onClick={() => (scrollToTop ? window.scroll(0, 0) : null)}
      className="list__link strike-through-animation hover:strike-through-yellow block py-2 px-2 md:px-0 font-extralight"
    >
      {children}
    </Link>
  );
};

// use dislayNavigation for display outside of main page (hide nav?)
const Navigation = () => {
  const scrollPosition = useScrollPosition();
  const { asPath } = useRouter();
  // const displayNav = asPath.includes("posts") ? false : true;
  const displayNav = true;

  return (
    <nav
      className={classNames(
        "animate-textAppear fixed top-0 w-full text-grey-900 px-1 sm:px-4 bg-theme-primary z-10",
        {
          shadow: scrollPosition > 10,
          "shadow-none": scrollPosition === 0,
          "hidden md:block": asPath.includes("/posts/"),
        }
      )}
    >
      <div className="container flex flex-wrap items-center justify-center mx-auto">
        <Link
          href="/"
          onClick={() => window.scroll(0, 0)}
          className="absolute my-auto left-7 hidden sm:block tracking-wide strike-through-violet"
        >
          CHRISTOPHER KADE
        </Link>

        {displayNav && (
          <div className="block w-auto" id="navbar-default">
            <ul className="flex p-2 flex-row md:space-x-8 mt-0 text-sm font-medium">
              <li>
                <CustomLink href="/" scroll={false} scrollToTop={true}>
                  About,
                </CustomLink>
              </li>
              <li className="ml-0">
                <CustomLink href="/#articles" scroll={false}>
                  articles,
                </CustomLink>
              </li>
              <li className="ml-0">
                <CustomLink href="/#projects" scroll={false}>
                  projects,
                </CustomLink>
              </li>
              <li className="ml-0">
                <CustomLink href="/#contact" scroll={false}>
                  contact
                </CustomLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
