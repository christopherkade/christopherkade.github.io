import Link from "next/link";
import Image from "next/image";
import { getProjects } from "app/projects/utils";

export function Projects() {
  let allProjects = getProjects();

  return (
    <div>
      {allProjects.map((project) => (
        <div key={project.title}>
          {project.href ? (
            <>
              <Link href={project.href} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mb-4"
                />
              </Link>
              <h2 className="font-semibold text-xl tracking-tighter">
                {project.title}
              </h2>
              <p className="mb-8">{project.description}</p>
            </>
          ) : (
            <>
              <Image
                src={project.image}
                alt={project.title}
                className="mb-4 border-2"
              />
              <h2 className="font-semibold text-xl tracking-tighter">
                {project.title}
              </h2>
              <p className="mb-8">{project.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
