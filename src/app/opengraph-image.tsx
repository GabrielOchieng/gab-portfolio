import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gabriel Ochieng | Product Engineer, Web & Mobile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #123e4b 0%, #0b303d 48%, #082633 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            fontWeight: 700,
            color: "#e8eef2",
            letterSpacing: "-0.02em",
            marginBottom: 40,
          }}
        >
          GO<span style={{ color: "#d8653b" }}>/</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          GABRIEL OCHIENG
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#2a9dab",
            fontWeight: 700,
            marginTop: 24,
          }}
        >
          Product Engineer, Web &amp; Mobile
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(232, 238, 242, 0.75)",
            marginTop: 20,
            maxWidth: 900,
          }}
        >
          React &middot; Next.js &middot; React Native &middot; Node.js / Product Engineering &amp; Applied AI
        </div>
      </div>
    ),
    { ...size },
  );
}
