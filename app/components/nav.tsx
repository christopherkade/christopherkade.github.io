import ThemeSwitch from "./ThemeSwitch";
import MusicSwitch from "./MusicSwitch";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
};

const linkItems = {
  github: {
    name: "github",
    href: "http://github.com/christopherkade",
  },
  linkedin: {
    name: "linkedin",
    href: "https://www.linkedin.com/in/christopher-kade/",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative items-center justify-between md:justify-start"
          id="nav"
        >
          <MobileMenu navItems={navItems} />

          <div className="hidden flex-row space-x-0 pr-5 md:flex md:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <NavLink key={path} href={path}>
                  {name}
                </NavLink>
              );
            })}
          </div>

          <div className="flex flex-row space-x-0 items-center ml-auto">
            {Object.entries(linkItems).map(([key, { name, href }]) => {
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative px-2"
                  aria-label={name}
                  title={name}
                >
                  <span className="inline">{name}</span>
                </a>
              );
            })}
            <div className="flex items-center gap-3 ml-1">
              <MusicSwitch />
              <ThemeSwitch />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
