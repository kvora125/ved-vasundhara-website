import Content from "../_content/initiatives";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("initiatives", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["initiatives"][lang].crumb, path: PAGES["initiatives"].path }])]} />
      <Content lang={lang} />
      <Related page="initiatives" lang={lang} />
    </>
  );
}
