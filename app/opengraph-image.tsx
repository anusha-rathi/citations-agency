import { ImageResponse } from "next/og";

export const alt = "citations.agency — AI citations = prompt-backed research + content";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#F8F7F4",
          color: "#171717",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
          citations<span style={{ color: "#FF5637" }}>.agency</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>
          <div style={{ display: "flex" }}>AI CITATIONS</div>
          <div style={{ display: "flex", fontSize: 60, marginTop: 16 }}>
            <span style={{ color: "#FF5637" }}>=</span>&nbsp;Prompt-backed research + content.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#66635D" }}>AEO · GEO · AI SEO · AI CITATIONS</div>
      </div>
    ),
    size,
  );
}
