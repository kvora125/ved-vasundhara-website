import Link from "next/link";
import L from "./lang";

export default function NotFound() {
  return (
    <div style={{ padding: "clamp(48px, 7vw, 100px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6", minHeight: "50vh" }}>
      <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
        404
      </div>
      <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(26px, 3.1vw, 44px)", fontWeight: 600, lineHeight: 1.3, marginBottom: "14px" }}>
        <L hi="यह पृष्ठ उपलब्ध नहीं है" en="This page could not be found" />
      </div>
      <div style={{ fontSize: "17px", lineHeight: 1.7, color: "#6E6459", marginBottom: "28px", maxWidth: "640px" }}>
        <L
          hi="हो सकता है पता बदल गया हो या लिंक अधूरा हो। मुख पृष्ठ से आगे बढ़ें।"
          en="The address may have changed or the link may be incomplete. Continue from the home page."
        />
      </div>
      <Link
        href="/"
        style={{ display: "inline-block", background: "#9B1C1C", color: "#FDF6EA", padding: "14px 26px", fontSize: "15px", fontWeight: 600 }}
      >
        <L hi="मुख पृष्ठ पर जाएँ" en="Go to the home page" />
      </Link>
    </div>
  );
}
