import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import starImg from "./images/star.png";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full text-grey-900 px-1 pt-2.5 sm:px-4 bg-theme-background z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/">
          <Image
            src={starImg}
            width={50}
            height={40}
            className="mr-3"
            alt="Christopher Logo"
          />
        </Link>

        <div className="block w-auto" id="navbar-default">
          <ul className="flex p-2 flex-row md:space-x-8 mt-0 text-sm font-medium">
            <li>
              <Link
                href="#about"
                scroll={false}
                className="block py-2 pl-3 pr-4 hover:text-gray-400 p-0"
                // className={classNames(
                //   "block py-2 pl-3 pr-4 hover:text-gray-400 p-0",
                //   {
                //     "text-theme-select": router.pathname === "/",
                //     "text-gray-700": router.pathname !== "/",
                //   }
                // )}
                aria-current="page"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                scroll={false}
                className="block py-2 pl-3 pr-4 hover:text-gray-400 p-0"
                // className={classNames(
                //   "block py-2 pl-3 pr-4 hover:text-gray-400 p-0",
                //   {
                //     "text-theme-brown-dark": router.pathname === "/blog",
                //     "text-gray-700": router.pathname !== "/blog",
                //   }
                // )}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                scroll={false}
                className={classNames(
                  "block py-2 pl-3 pr-4 hover:text-gray-400 p-0",
                  {
                    "text-theme-brown-dark": router.pathname === "/faq",
                    "text-gray-700": router.pathname !== "/faq",
                  }
                )}
              >
                FAQ
              </Link>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
