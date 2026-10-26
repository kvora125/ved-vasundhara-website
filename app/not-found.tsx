import Link from "next/link";

// One 404 page serves both languages, so it carries both.
export default function NotFound() {
  return (
    <div style={{ padding: "clamp(48px, 7vw, 100px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6", minHeight: "50vh" }}>
      <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
        404
      </div>
      <h1 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(26px, 3.1vw, 44px)", fontWeight: 600, lineHeight: 1.3, margin: "0 0 6px" }}>
        यह पृष्ठ उपलब्ध नहीं है
      </h1>
      <p lang="en" style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2vw, 28px)", color: "#4A423A", margin: "0 0 18px" }}>
        This page could not be found
      </p>
      <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6E6459", margin: "0 0 28px", maxWidth: "640px" }}>
        हो सकता है पता बदल गया हो या लिंक अधूरा हो।{" "}
        <span lang="en">The address may have changed or the link may be incomplete.</span>
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Link href="/" style={{ display: "inline-block", background: "#9B1C1C", color: "#FDF6EA", padding: "14px 26px", fontSize: "15px", fontWeight: 600 }}>
          मुख पृष्ठ पर जाएँ
        </Link>
        <Link
          href="/en"
          lang="en"
          style={{ display: "inline-block", border: "1px solid #9B1C1C", color: "#9B1C1C", padding: "14px 26px", fontSize: "15px", fontWeight: 600 }}
        >
          Go to the English home page
        </Link>
      </div>
    </div>
  );
}
