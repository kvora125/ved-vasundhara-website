import Content from "../_content/privacy";
import JsonLd from "../json-ld";
import { breadcrumbLd, pageMetadata } from "../seo";
import { PAGES } from "../seo-pages";

const lang = "hi";

export const metadata = pageMetadata("privacy", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: PAGES.privacy[lang].crumb, path: PAGES.privacy.path }])} />
      <Content lang={lang} />
    </>
  );
}
