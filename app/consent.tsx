"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import L from "./lang";
import { langFromPath, localHref } from "./i18n";

// Google Analytics 4 runs only after the visitor accepts; nothing loads until then.
// The Measurement ID comes from the NEXT_PUBLIC_GA_ID repository variable.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const ANALYTICS_ENABLED = /^G-[A-Z0-9]+$/.test(GA_ID);

const CONSENT_KEY = "vv-consent";
const OPEN_EVENT = "vv-consent-open";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function storeChoice(choice: Choice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage unavailable: the choice applies to this page view only.
  }
}

function loadAnalytics() {
  if (!ANALYTICS_ENABLED || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

function clearAnalyticsCookies() {
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      const domain = location.hostname.replace(/^www\./, "");
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
      document.cookie = `${name}=; Max-Age=0; path=/`;
    }
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function ConsentBanner() {
  const lang = langFromPath(usePathname());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;
    const choice = readChoice();
    if (choice === "granted") loadAnalytics();
    // Showing the banner depends on browser storage, which is only readable after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    else if (choice === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!ANALYTICS_ENABLED || !open) return null;

  const decide = (choice: Choice) => {
    const previous = readChoice();
    storeChoice(choice);
    setOpen(false);
    if (choice === "granted") loadAnalytics();
    else if (previous === "granted") {
      clearAnalyticsCookies();
      location.reload();
    }
  };

  return (
    <div className="consent" role="dialog" aria-live="polite" aria-label={lang === "en" ? "Cookie consent" : "कुकी सहमति"}>
      <p>
        <L
          lang={lang}
          hi="हम यह समझने के लिए Google Analytics कुकीज़ का उपयोग करना चाहते हैं कि लोग इस वेबसाइट का उपयोग कैसे करते हैं। आपकी सहमति के बिना कोई विश्लेषण कुकी नहीं लगाई जाती।"
          en="We'd like to use Google Analytics cookies to understand how people use this website. No analytics cookies are set without your consent."
        />{" "}
        <Link href={localHref(lang, "/privacy")}>
          <L lang={lang} hi="गोपनीयता नीति" en="Privacy policy" />
        </Link>
      </p>
      <div className="consent-actions">
        <button type="button" className="consent-reject" onClick={() => decide("denied")}>
          <L lang={lang} hi="अस्वीकार करें" en="Reject" />
        </button>
        <button type="button" className="consent-accept" onClick={() => decide("granted")}>
          <L lang={lang} hi="स्वीकार करें" en="Accept" />
        </button>
      </div>
    </div>
  );
}
