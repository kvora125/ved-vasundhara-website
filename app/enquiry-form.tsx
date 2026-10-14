"use client";

import { useState, type FormEvent } from "react";

type Variant = "contact" | "partner";
type Status = "idle" | "sending" | "sent" | "error";

// The site is a static export, so enquiries go straight from the browser to a
// form service that accepts JSON with CORS (e.g. https://formspree.io/f/xxxx).
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

export default function EnquiryForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const dark = variant === "partner";
  const fieldClass = dark ? "field field-dark" : "field";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      if (!ENDPOINT) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ form: variant, ...Object.fromEntries(new FormData(form)) }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {variant === "partner" ? (
        <>
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <input className={fieldClass} name="organisation" placeholder="Organisation name" aria-label="Organisation name" />
            <input className={fieldClass} name="name" placeholder="Contact person" aria-label="Contact person" required />
          </div>
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <input className={fieldClass} type="email" name="email" placeholder="Email" aria-label="Email" required />
            <input className={fieldClass} type="tel" name="phone" placeholder="Phone" aria-label="Phone" />
          </div>
          <input className={fieldClass} name="partnership" placeholder="Type of partnership" aria-label="Type of partnership" />
          <textarea className={fieldClass} name="message" placeholder="Message" aria-label="Message" required />
        </>
      ) : (
        <>
          <input className={fieldClass} name="name" placeholder="Full name" aria-label="Full name" required />
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <input className={fieldClass} type="email" name="email" placeholder="Email" aria-label="Email" required />
            <input className={fieldClass} type="tel" name="phone" placeholder="Phone" aria-label="Phone" />
          </div>
          <input className={fieldClass} name="topic" placeholder="I am writing about…" aria-label="Topic" />
          <input className={fieldClass} name="organisation" placeholder="Institution / organisation (optional)" aria-label="Institution or organisation" />
          <textarea className={fieldClass} name="message" placeholder="Message" aria-label="Message" required />
        </>
      )}
      <button type="submit" className={dark ? "submit submit-saffron" : "submit"} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : variant === "partner" ? "Send enquiry" : "Send message"}
      </button>
      {status === "sent" && (
        <p role="status" style={{ margin: 0, fontSize: 14, color: dark ? "#E8B24C" : "#2E5A3C" }}>
          धन्यवाद — your message has been sent. We will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" style={{ margin: 0, fontSize: 14, color: dark ? "#F0A08A" : "#9B1C1C" }}>
          The message could not be sent right now. Please try again later.
        </p>
      )}
    </form>
  );
}
