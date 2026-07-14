import { ImageResponse } from "next/og";
import { getBlogPosts } from "app/blog/utils";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);
  const title = post?.metadata.title ?? "Christopher KADE";

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        padding: "64px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#fff",
        }}
      />
      <p
        style={{
          fontSize: 18,
          color: "#737373",
          margin: 0,
          marginBottom: 20,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        christopherkade.com
      </p>
      <p
        style={{
          fontSize: title.length > 50 ? 44 : 56,
          fontWeight: 600,
          color: "#fff",
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          maxWidth: "900px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: 18,
          color: "#525252",
          margin: 0,
          marginTop: 32,
        }}
      >
        Senior Frontend Engineer · Agentic Coding · Product Engineering
      </p>
    </div>,
    { ...size },
  );
}
