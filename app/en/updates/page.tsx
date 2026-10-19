import { UpdatesList } from "../../_content/cms-pages";
import JsonLd from "../../json-ld";
import Related from "../../related";
import { breadcrumbLd, pageMetadata } from "../../seo";
import { PAGES } from "../../seo-pages";

const lang = "en";

export const metadata = pageMetadata("updates", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: PAGES["updates"][lang].crumb, path: PAGES["updates"].path }])} />
      <UpdatesList lang={lang} />
      <Related page="updates" lang={lang} />
    </>
  );
}
