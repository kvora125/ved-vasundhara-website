import Content from "../../_content/credentials";
import JsonLd from "../../json-ld";
import Related from "../../related";
import { breadcrumbLd, pageMetadata } from "../../seo";
import { PAGES } from "../../seo-pages";

const lang = "en";

export const metadata = pageMetadata("credentials", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["credentials"][lang].crumb, path: PAGES["credentials"].path }])]} />
      <Content lang={lang} />
      <Related page="credentials" lang={lang} />
    </>
  );
}
