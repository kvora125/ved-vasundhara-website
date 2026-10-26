import Content from "../_content/model";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("model", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["model"][lang].crumb, path: PAGES["model"].path }])]} />
      <Content lang={lang} />
      <Related page="model" lang={lang} />
    </>
  );
}
