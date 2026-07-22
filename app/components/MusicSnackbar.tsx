"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useMusic } from "./MusicProvider";

// Minimum horizontal drag distance (px) that counts as a dismiss swipe.
const DISMISS_THRESHOLD_PX = 60;

export default function MusicSnackbar() {
  const { isPlaying, currentSong } = useMusic();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Whether the snackbar has ever had a song to show — keeps it mounted
  // (off-screen) after the first play so slide-out/slide-in transitions
  // between songs work, instead of unmounting immediately when stopped.
  const [everPlayed, setEverPlayed] = useState(false);
  // Decoupled from `isPlaying` so the element mounts off-screen first, then
  // flips to its on-screen position a frame later — required for the CSS
  // transition to actually animate the slide-in instead of appearing
  // instantly in its final position.
  const [visible, setVisible] = useState(false);
  // User swiped/dragged the snackbar away — reset whenever a new song
  // starts so the notification reappears for the next track.
  const [dismissed, setDismissed] = useState(false);
  // Live horizontal offset (px) while a pointer drag is in progress, so the
  // snackbar tracks the finger/cursor 1:1 instead of only reacting on release.
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartXRef = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (currentSong) {
      setEverPlayed(true);
      setDismissed(false);
    }
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying && currentSong && !dismissed) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    setVisible(false);
  }, [isPlaying, currentSong, dismissed]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStartXRef.current = event.clientX;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartXRef.current === null) return;
    setDragOffset(event.clientX - dragStartXRef.current);
  };

  const endDrag = () => {
    if (Math.abs(dragOffset) > DISMISS_THRESHOLD_PX) {
      setDismissed(true);
    }
    setDragging(false);
    setDragOffset(0);
    dragStartXRef.current = null;
  };

  if (!everPlayed || !currentSong) return null;

  // Same rationale as ThemeSwitch/MusicSwitch: colors are chosen from JS
  // rather than Tailwind `dark:` classes, since this project's Tailwind
  // build resolves `dark:` off `prefers-color-scheme` instead of the app's
  // actual next-themes class. The snackbar intentionally inverts the page
  // theme (light snackbar on a dark page, dark snackbar on a light page)
  // for contrast, like a toast.
  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : false;

  return (
    <div
      role="status"
      aria-live="polite"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      style={
        dragging
          ? { transform: `translateX(${dragOffset}px)`, transition: "none" }
          : undefined
      }
      className={
        "fixed bottom-4 right-4 z-50 flex max-w-xs cursor-grab touch-pan-y select-none items-center gap-3 rounded-lg border px-3 py-3 shadow-lg transition-all duration-300 ease-out active:cursor-grabbing " +
        (isDark
          ? "border-neutral-300 bg-white text-black"
          : "border-neutral-700 bg-neutral-900 text-white") +
        " " +
        (visible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-[120%] opacity-0")
      }
    >
      <div
        className={
          "relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md pointer-events-none " +
          (isDark ? "bg-neutral-200" : "bg-neutral-800")
        }
      >
        <Image
          src={currentSong.cover}
          alt={`${currentSong.title} album cover`}
          fill
          sizes="48px"
          draggable={false}
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{currentSong.title}</p>
        <p
          className={
            "truncate text-xs " +
            (isDark ? "text-neutral-500" : "text-neutral-400")
          }
        >
          {currentSong.artist}
        </p>
      </div>
    </div>
  );
}
