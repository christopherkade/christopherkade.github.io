import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        Bonjour ! I'm Christopher, a{" "}
        <span className="bg-rose-200 dark:bg-rose-400/30 px-1 py-0.5 inline-block rotate-[0.7deg] skew-x-[-0.5deg]">
          Senior Frontend Engineer
        </span>{" "}
        working at{" "}
        <a
          href="https://openclassrooms.com/en/"
          className="hover:text-rose-500 underline inline-flex items-center gap-0.5"
          target="_blank"
        >
          OpenClassrooms
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-60 flex-shrink-0 translate-y-[1px]"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>{" "}
        making education accessible.
        <br />I am passionate about building{" "}
        <span className="bg-yellow-200 dark:bg-yellow-400/30 px-1 py-0.5 inline-block -rotate-[0.8deg] skew-x-[1deg]">
          user-friendly
        </span>{" "}
        and{" "}
        <span className="bg-teal-200 dark:bg-teal-400/30 px-1 py-0.5 inline-block rotate-[0.6deg] skew-x-[-1deg]">
          accessible
        </span>{" "}
        web applications. I have a strong background in React, Vue and
        TypeScript, and I love creating beautiful and performant user
        interfaces.
        <br />
        <br />
        Currently, my focus is on the opportunities{" "}
        <span className="bg-violet-200 dark:bg-violet-400/30 px-1 py-0.5 inline-block -rotate-[0.5deg] skew-x-[0.8deg]">
          agentic coding
        </span>{" "}
        offer us engineers. Focusing in on Product Engineering & Architecture to
        deliver scalable software at a faster pace.
      </p>

      <div className="home-divider border-t my-8 mx-auto md:w-md sm:w-sm" />

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
