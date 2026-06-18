import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Christopher KADE";

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
      {/* top accent line */}
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
    {
      width: 1200,
      height: 630,
    },
  );
}
