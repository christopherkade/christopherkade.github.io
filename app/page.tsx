import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        Bonjour ! I'm Christopher, a Senior Frontend Engineer working at{" "}
        <a
          href="https://openclassrooms.com/en/"
          className="text-rose-500 hover:underline"
          target="_blank"
        >
          OpenClassrooms
        </a>{" "}
        making education accessible.
        <br />
        <br />I am passionate about building user-friendly and accessible web
        applications. I have a strong background in React, Vue and TypeScript,
        and I love creating beautiful and performant user interfaces.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
