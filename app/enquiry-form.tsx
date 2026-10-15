"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "./lang-client";

type Variant = "contact" | "partner";
type Status = "idle" | "sending" | "sent" | "error";

// The site is a static export, so enquiries go straight from the browser to a
// form service that accepts JSON with CORS and emails them on
// (e.g. https://formsubmit.co/ajax/<address or alias>, or a Formspree form URL).
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

const SUBJECT = {
  contact: "New enquiry — Contact form · vedvasundharamodel.org.in",
  partner: "New partnership enquiry — Partner form · vedvasundharamodel.org.in",
};

const TEXT = {
  organisation: { en: "Organisation name", hi: "संस्था का नाम" },
  contactPerson: { en: "Contact person", hi: "संपर्क व्यक्ति" },
  email: { en: "Email", hi: "ईमेल" },
  phone: { en: "Phone", hi: "फ़ोन" },
  partnership: { en: "Type of partnership", hi: "साझेदारी का प्रकार" },
  message: { en: "Message", hi: "संदेश" },
  fullName: { en: "Full name", hi: "पूरा नाम" },
  topic: { en: "I am writing about…", hi: "मैं इस विषय में लिख रहा/रही हूँ…" },
  institution: { en: "Institution / organisation (optional)", hi: "संस्थान / संगठन (वैकल्पिक)" },
  sending: { en: "Sending…", hi: "भेजा जा रहा है…" },
  sendEnquiry: { en: "Send enquiry", hi: "पूछताछ भेजें" },
  sendMessage: { en: "Send message", hi: "संदेश भेजें" },
  sent: { en: "Thank you — your message has been sent. We will get back to you soon.", hi: "धन्यवाद — आपका संदेश भेज दिया गया है। हम शीघ्र ही आपसे संपर्क करेंगे।" },
  error: { en: "The message could not be sent right now. Please try again later.", hi: "संदेश अभी नहीं भेजा जा सका। कृपया बाद में पुनः प्रयास करें।" },
};

export default function EnquiryForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const dark = variant === "partner";
  const fieldClass = dark ? "field field-dark" : "field";
  const lang = useLang();
  const t = (key: keyof typeof TEXT) => TEXT[key][lang];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      if (!ENDPOINT) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
      const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
      if (data._honey) {
        // Honeypot filled in: almost certainly a bot. Pretend success, send nothing.
        form.reset();
        setStatus("sent");
        return;
      }
      delete data._honey;
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          form: variant,
          ...data,
          // Understood by FormSubmit and Formspree: email subject, reply goes to the sender.
          _subject: SUBJECT[variant],
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const body = await res.json().catch(() => ({}));
      // FormSubmit answers 200 with { success: "false" } when the form is not yet activated.
      if (!res.ok || body.success === false || body.success === "false") throw new Error(body.message || String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      {variant === "partner" ? (
        <>
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <input className={fieldClass} name="organisation" placeholder={t("organisation")} aria-label={t("organisation")} />
            <input className={fieldClass} name="name" placeholder={t("contactPerson")} aria-label={t("contactPerson")} required />
          </div>
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <input className={fieldClass} type="email" name="email" placeholder={t("email")} aria-label={t("email")} required />
            <input className={fieldClass} type="tel" name="phone" placeholder={t("phone")} aria-label={t("phone")} />
          </div>
          <input className={fieldClass} name="partnership" placeholder={t("partnership")} aria-label={t("partnership")} />
          <textarea className={fieldClass} name="message" placeholder={t("message")} aria-label={t("message")} required />
        </>
      ) : (
        <>
          <input className={fieldClass} name="name" placeholder={t("fullName")} aria-label={t("fullName")} required />
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <input className={fieldClass} type="email" name="email" placeholder={t("email")} aria-label={t("email")} required />
            <input className={fieldClass} type="tel" name="phone" placeholder={t("phone")} aria-label={t("phone")} />
          </div>
          <input className={fieldClass} name="topic" placeholder={t("topic")} aria-label={t("topic")} />
          <input className={fieldClass} name="organisation" placeholder={t("institution")} aria-label={t("institution")} />
          <textarea className={fieldClass} name="message" placeholder={t("message")} aria-label={t("message")} required />
        </>
      )}
      <button type="submit" className={dark ? "submit submit-saffron" : "submit"} disabled={status === "sending"}>
        {status === "sending" ? t("sending") : variant === "partner" ? t("sendEnquiry") : t("sendMessage")}
      </button>
      {status === "sent" && (
        <p role="status" style={{ margin: 0, fontSize: 14, color: dark ? "#E8B24C" : "#2E5A3C" }}>
          {t("sent")}
        </p>
      )}
      {status === "error" && (
        <p role="alert" style={{ margin: 0, fontSize: 14, color: dark ? "#F0A08A" : "#9B1C1C" }}>
          {t("error")}
        </p>
      )}
    </form>
  );
}
