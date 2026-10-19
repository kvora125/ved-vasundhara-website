import Content from "../../_content/research";
import JsonLd from "../../json-ld";
import Related from "../../related";
import { booksLd, breadcrumbLd, pageMetadata } from "../../seo";
import { PAGES } from "../../seo-pages";

const lang = "en";

export const metadata = pageMetadata("research", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["research"][lang].crumb, path: PAGES["research"].path }]), ...booksLd()]} />
      <Content lang={lang} />
      <Related page="research" lang={lang} />
    </>
  );
}
