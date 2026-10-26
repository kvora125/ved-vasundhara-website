import Content from "../_content/vision-mission";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("vision-mission", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["vision-mission"][lang].crumb, path: PAGES["vision-mission"].path }])]} />
      <Content lang={lang} />
      <Related page="vision-mission" lang={lang} />
    </>
  );
}
