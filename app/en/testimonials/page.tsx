import Content from "../../_content/testimonials";
import JsonLd from "../../json-ld";
import Related from "../../related";
import { breadcrumbLd, pageMetadata } from "../../seo";
import { PAGES } from "../../seo-pages";

const lang = "en";

export const metadata = pageMetadata("testimonials", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["testimonials"][lang].crumb, path: PAGES["testimonials"].path }])]} />
      <Content lang={lang} />
      <Related page="testimonials" lang={lang} />
    </>
  );
}
