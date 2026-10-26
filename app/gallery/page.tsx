import { GalleryPage } from "../_content/cms-pages";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("gallery", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: PAGES["gallery"][lang].crumb, path: PAGES["gallery"].path }])} />
      <GalleryPage lang={lang} />
      <Related page="gallery" lang={lang} />
    </>
  );
}
