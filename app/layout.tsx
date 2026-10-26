import type { Metadata, Viewport } from "next";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import ConsentBanner from "./consent";
import { LANG_HEAD_SCRIPT } from "./lang-pref";
import { SITE_URL } from "./seo";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "वेद वसुंधरा मॉडल · Veda Vasundhara Model",
  applicationName: "वेद वसुंधरा मॉडल · Veda Vasundhara Model",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#16110D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        {/* Set <html lang> for English pages and apply a saved English preference before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: LANG_HEAD_SCRIPT }} />
        <link rel="preload" href="/fonts/NotoSansDevanagari-devanagari-e859320e.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ConsentBanner />
      </body>
    </html>
  );
}
