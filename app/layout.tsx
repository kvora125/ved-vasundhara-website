import type { Metadata, Viewport } from "next";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { LANG_INIT_SCRIPT } from "./lang-init";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "वेद वसुंधरा मॉडल · Veda Vasundhara Model",
    template: "%s · वेद वसुंधरा मॉडल",
  },
  description:
    "वेद से प्रेरणा, आधुनिकता से संवाद और भारत के भविष्य का निर्माण — a national initiative of Sanskarit Yuva Aadarsh Samiti, Lucknow.",
};

export const viewport: Viewport = {
  themeColor: "#16110D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hi" data-lang="hi" suppressHydrationWarning>
      <head>
        {/* Apply the saved language before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: LANG_INIT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- inline mockup styles reference these families by name */}
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
