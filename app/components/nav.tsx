import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56l-.01-2.03c-3.22.7-3.9-1.39-3.9-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.39.97.11-.76.41-1.27.74-1.56-2.57-.29-5.28-1.28-5.28-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.79 1.08.79 2.18l-.01 3.23c0 .31.2.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h3.96v12H3V9zm7.49 0H14.3v1.64h.05c.46-.87 1.58-1.79 3.26-1.79 3.48 0 4.12 2.29 4.12 5.26V21H17.8v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.86V21H10.5V9z" />
    </svg>
  );
}

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
          className="flex flex-row relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative items-center"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-5 md:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-row space-x-0 ml-auto items-center">
            {Object.entries(linkItems).map(([key, { name, href }]) => {
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  aria-label={name}
                  title={name}
                >
                  <span className="md:hidden">
                    {key === "github" ? (
                      <GitHubIcon />
                    ) : key === "linkedin" ? (
                      <LinkedInIcon />
                    ) : null}
                  </span>
                  <span className="hidden md:inline">{name}</span>
                </a>
              );
            })}
            <div className="pl-2 pr-1 m-1">
              <ThemeSwitch />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
