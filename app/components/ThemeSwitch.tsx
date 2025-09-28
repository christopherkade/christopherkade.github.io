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
        className="h-7 w-12 rounded-full bg-neutral-200/60 dark:bg-neutral-800/60"
        aria-hidden
      />
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-7 w-12 items-center rounded-full border border-neutral-200 dark:border-neutral-700 transition-colors duration-300 ease-out bg-white dark:bg-neutral-900"
    >
      <span
        className={
          "absolute left-0.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-sm transition-transform duration-300 ease-out " +
          (isDark ? "translate-x-5" : "translate-x-0")
        }
      />
      <SunIcon
        className={
          "absolute left-1.5 h-4 w-4 text-yellow-500 transition-opacity duration-300 " +
          (isDark ? "opacity-0" : "opacity-100")
        }
      />
      <MoonIcon
        className={
          "absolute right-1.5 h-4 w-4 text-blue-400 transition-opacity duration-300 " +
          (isDark ? "opacity-100" : "opacity-0")
        }
      />
    </button>
  );
}
