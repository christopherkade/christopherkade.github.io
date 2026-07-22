"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useMusic } from "./MusicProvider";

function MusicNoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
    >
      <path d="M9 18V5l11-2v13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </svg>
  );
}

function EqualizerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <rect
        x="4"
        y="10"
        width="3"
        height="8"
        rx="1"
        className="eq-bar"
        style={{ animationDelay: "0ms" }}
      />
      <rect
        x="10.5"
        y="6"
        width="3"
        height="12"
        rx="1"
        className="eq-bar"
        style={{ animationDelay: "150ms" }}
      />
      <rect
        x="17"
        y="9"
        width="3"
        height="9"
        rx="1"
        className="eq-bar"
        style={{ animationDelay: "300ms" }}
      />
    </svg>
  );
}

export default function MusicSwitch() {
  const { isPlaying, toggleMusic } = useMusic();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Same rationale as ThemeSwitch: the icon color is driven from JS (rather
  // than a Tailwind `dark:` class) because this project's Tailwind build
  // resolves `dark:` off `prefers-color-scheme`, not the app's actual
  // next-themes class — using `dark:` here would make the icon invisible
  // against the current theme whenever it disagrees with the OS scheme.
  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : false;
  const iconColor = isDark ? "text-neutral-200" : "text-neutral-700";

  return (
    <button
      aria-label={isPlaying ? "Stop music" : "Start music"}
      title={isPlaying ? "Stop music" : "Start music"}
      aria-pressed={isPlaying}
      onClick={toggleMusic}
      suppressHydrationWarning
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 transition-colors duration-200 cursor-pointer"
    >
      <span className="relative h-5 w-5">
        <MusicNoteIcon
          className={
            `absolute inset-0 h-5 w-5 ${iconColor} transition-all duration-300 ease-out ` +
            (isPlaying
              ? "opacity-0 scale-75 rotate-90"
              : "opacity-100 scale-100 rotate-0")
          }
        />
        <EqualizerIcon
          className={
            `absolute inset-0 h-5 w-5 ${iconColor} transition-all duration-300 ease-out ` +
            (isPlaying
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 -rotate-90")
          }
        />
      </span>
    </button>
  );
}
