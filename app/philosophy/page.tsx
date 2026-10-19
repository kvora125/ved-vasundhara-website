import Content from "../_content/philosophy";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("philosophy", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["philosophy"][lang].crumb, path: PAGES["philosophy"].path }])]} />
      <Content lang={lang} />
      <Related page="philosophy" lang={lang} />
    </>
  );
}
