import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";

// Matches the highlighter colors used on the home page
const HIGHLIGHT_COLORS = ["#fef08a", "#99f6e4", "#ddd6fe", "#fecdd3"];

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, index) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 animate-[fadeSlideIn_0.4s_ease-out_both]"
            style={{ animationDelay: `${index * 60}ms` }}
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p
                className="tracking-tight highlight-streak"
                style={
                  {
                    "--streak-color":
                      HIGHLIGHT_COLORS[index % HIGHLIGHT_COLORS.length],
                    "--streak-skew-y": index % 2 === 0 ? "0.4deg" : "-0.4deg",
                  } as React.CSSProperties
                }
              >
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
