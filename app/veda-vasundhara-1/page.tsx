import Content from "../_content/veda-vasundhara-1";
import JsonLd from "../json-ld";
import Related from "../related";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("veda-vasundhara-1", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(lang, [{ name: PAGES["veda-vasundhara-1"][lang].crumb, path: PAGES["veda-vasundhara-1"].path }])]} />
      <Content lang={lang} />
      <Related page="veda-vasundhara-1" lang={lang} />
    </>
  );
}
