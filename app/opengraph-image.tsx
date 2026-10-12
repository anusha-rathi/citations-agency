import { ImageResponse } from "next/og";

export const alt = "citations.agency — Reddit Marketing & AI Visibility Agency";
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
        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>
          <div style={{ display: "flex" }}>
            Get talked about on&nbsp;<span style={{ color: "#FF5637" }}>Reddit.</span>
          </div>
          <div style={{ display: "flex" }}>Get discovered by AI.</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#66635D" }}>The Reddit Marketing & AI Visibility Agency</div>
      </div>
    ),
    size,
  );
}
