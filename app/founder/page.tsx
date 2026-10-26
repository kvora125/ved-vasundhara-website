import Content from "../_content/founder";
import JsonLd from "../json-ld";
import Related from "../related";
import { booksLd, breadcrumbLd, founderLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("founder", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["founder"][lang].crumb, path: PAGES["founder"].path }]), founderLd(lang), ...booksLd()]} />
      <Content lang={lang} />
      <Related page="founder" lang={lang} />
    </>
  );
}
