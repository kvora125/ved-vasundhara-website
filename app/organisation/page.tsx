import Content from "../_content/organisation";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("organisation", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["organisation"][lang].crumb, path: PAGES["organisation"].path }])]} />
      <Content lang={lang} />
      <Related page="organisation" lang={lang} />
    </>
  );
}
