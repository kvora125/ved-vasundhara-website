import Content from "../../_content/contact";
import JsonLd from "../../json-ld";
import Related from "../../related";
import { breadcrumbLd, pageMetadata } from "../../seo";
import { PAGES } from "../../seo-pages";

const lang = "en";

export const metadata = pageMetadata("contact", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["contact"][lang].crumb, path: PAGES["contact"].path }])]} />
      <Content lang={lang} />
      <Related page="contact" lang={lang} />
    </>
  );
}
