import Content from "../_content/work-areas";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("work-areas", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["work-areas"][lang].crumb, path: PAGES["work-areas"].path }])]} />
      <Content lang={lang} />
      <Related page="work-areas" lang={lang} />
    </>
  );
}
