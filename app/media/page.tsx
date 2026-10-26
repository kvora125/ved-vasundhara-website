import Content from "../_content/media";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("media", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["media"][lang].crumb, path: PAGES["media"].path }])]} />
      <Content lang={lang} />
      <Related page="media" lang={lang} />
    </>
  );
}
