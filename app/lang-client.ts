"use client";

import { useSyncExternalStore } from "react";
import { LANG_KEY } from "./lang-init";

export type Lang = "hi" | "en";

const EVENT = "vv-lang-change";

export function getLang(): Lang {
  return document.documentElement.dataset.lang === "en" ? "en" : "hi";
}

export function setLang(lang: Lang) {
  const root = document.documentElement;
  root.dataset.lang = lang;
  root.lang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this page only.
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getLang, () => "hi");
}

// Re-apply the saved language after a client-side re-render of <html>
// (e.g. hydration recovery), which would otherwise drop the attribute set in <head>.
export function applyStoredLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if ((stored === "en" || stored === "hi") && stored !== getLang()) setLang(stored);
  } catch {
    // Storage unavailable: keep the default.
  }
}
