"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  if (!mounted) {
    return (
      <div
        className="h-9 w-9 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-200/60 dark:bg-neutral-800/60"
        aria-hidden
      />
    );
  }

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 transition-colors duration-200"
    >
      <span className="relative h-5 w-5">
        <SunIcon
          className={
            "absolute inset-0 h-5 w-5 text-neutral-700 transition-all duration-300 ease-out " +
            (isDark
              ? "opacity-0 scale-75 rotate-90"
              : "opacity-100 scale-100 rotate-0")
          }
        />
        <MoonIcon
          className={
            "absolute inset-0 h-5 w-5 text-neutral-200 transition-all duration-300 ease-out " +
            (isDark
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 -rotate-90")
          }
        />
      </span>
    </button>
  );
}
