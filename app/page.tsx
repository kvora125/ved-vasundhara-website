import Content from "./_content/home";
import JsonLd from "./json-ld";
import Related from "./related";
import { breadcrumbLd, organizationLd, pageMetadata, websiteLd } from "./seo";

const lang = "hi";

export const metadata = pageMetadata("home", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[organizationLd(lang), websiteLd(lang), breadcrumbLd(lang, [])]} />
      <Content lang={lang} />
      <Related page="home" lang={lang} />
    </>
  );
}
