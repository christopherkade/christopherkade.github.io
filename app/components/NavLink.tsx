"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={
        "transition-all flex align-middle relative py-1 px-2 m-1 " +
        (isActive
          ? "nav-link-active font-medium underline underline-offset-4 decoration-2"
          : "nav-link-inactive hover:text-neutral-800 transition-colors")
      }
    >
      {children}
    </Link>
  );
}
