import Content from "../_content/crowdfunding";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("crowdfunding", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["crowdfunding"][lang].crumb, path: PAGES["crowdfunding"].path }])]} />
      <Content lang={lang} />
      <Related page="crowdfunding" lang={lang} />
    </>
  );
}
