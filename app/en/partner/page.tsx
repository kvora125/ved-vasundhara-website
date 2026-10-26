import Content from "../../_content/partner";
import JsonLd from "../../json-ld";
import Related from "../../related";
import { breadcrumbLd, pageMetadata } from "../../seo";
import { PAGES } from "../../seo-pages";

const lang = "en";

export const metadata = pageMetadata("partner", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["partner"][lang].crumb, path: PAGES["partner"].path }])]} />
      <Content lang={lang} />
      <Related page="partner" lang={lang} />
    </>
  );
}
