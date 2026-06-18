"use client";

import Link from "next/link";
import Image from "next/image";
import { getProjects } from "app/projects/utils";

export function Projects() {
  let allProjects = getProjects();

  return (
    <div>
      {allProjects.map((project, index) => (
        <div
          key={project.title}
          className="animate-[fadeSlideIn_0.4s_ease-out_both]"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              className="block overflow-hidden rounded-lg mb-4 group"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                placeholder="blur"
                blurDataURL={project.blurDataURL}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Link>
          ) : (
            <div className="overflow-hidden rounded-lg border-2 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                placeholder="blur"
                blurDataURL={project.blurDataURL}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          )}
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              className="inline-flex items-center gap-1 group"
            >
              <h2 className="font-semibold text-xl tracking-tighter group-hover:underline m-0">
                {project.title}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60 flex-shrink-0 translate-y-[2px]"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Link>
          ) : (
            <h2 className="font-semibold text-xl tracking-tighter">
              {project.title}
            </h2>
          )}
          <p className="mb-8">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
