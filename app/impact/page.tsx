import Content from "../_content/impact";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("impact", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["impact"][lang].crumb, path: PAGES["impact"].path }])]} />
      <Content lang={lang} />
      <Related page="impact" lang={lang} />
    </>
  );
}
