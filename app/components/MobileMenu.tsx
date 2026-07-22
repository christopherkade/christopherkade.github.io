"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  navItems: Record<string, { name: string }>;
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Same rationale as ThemeSwitch/MusicSwitch: the bar color is chosen from
  // JS rather than a Tailwind `dark:` class, since this project's Tailwind
  // build resolves `dark:` off `prefers-color-scheme` instead of the app's
  // actual next-themes class — using `dark:` here made the bars nearly
  // invisible whenever the OS scheme disagreed with the selected app theme.
  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : false;
  const barColor = isDark ? "text-neutral-200" : "text-neutral-700";

  // Collapse the panel whenever the route changes, i.e. a link was just
  // followed.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div className="flex relative md:hidden" ref={containerRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        suppressHydrationWarning
        className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 transition-colors duration-200 cursor-pointer"
      >
        {/* Same rotate/fade morph language as ThemeSwitch's sun/moon and
            MusicSwitch's note/equalizer icons: the three bars collapse into
            an X rather than being swapped for a separate icon. */}
        <span className="relative flex h-4 w-5 flex-col justify-between">
          <span
            className={
              `block h-0.5 w-full origin-center rounded-full bg-current ${barColor} transition-transform duration-300 ease-out ` +
              (open ? "translate-y-[7px] rotate-45" : "")
            }
          />
          <span
            className={
              `block h-0.5 w-full rounded-full bg-current ${barColor} transition-all duration-150 ease-out ` +
              (open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100")
            }
          />
          <span
            className={
              `block h-0.5 w-full origin-center rounded-full bg-current ${barColor} transition-transform duration-300 ease-out ` +
              (open ? "-translate-y-[7px] -rotate-45" : "")
            }
          />
        </span>
      </button>

      <div
        id={panelId}
        className={
          "mobile-menu-panel absolute left-0 top-[calc(100%+0.5rem)] z-40 w-40 overflow-hidden rounded-xl border transition-all duration-300 ease-out " +
          (open
            ? "max-h-64 opacity-100 translate-y-0"
            : "pointer-events-none max-h-0 -translate-y-1 opacity-0")
        }
      >
        <ul className="flex flex-col p-1">
          {Object.entries(navItems).map(([href, { name }]) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    "block rounded-lg px-3 py-2.5 transition-colors " +
                    (isActive
                      ? "nav-link-active font-medium"
                      : "nav-link-inactive hover:text-neutral-800")
                  }
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
