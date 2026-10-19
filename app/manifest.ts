import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "वेद वसुंधरा मॉडल · Veda Vasundhara Model",
    short_name: "वेद वसुंधरा",
    description: "संस्कारित युवा आदर्श समिति — युवा एवं नारी नेतृत्व का राष्ट्रीय अभियान",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F1E7",
    theme_color: "#16110D",
    lang: "hi",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
