import { EventsList } from "../../_content/cms-pages";
import JsonLd from "../../json-ld";
import Related from "../../related";
import { breadcrumbLd, pageMetadata } from "../../seo";
import { PAGES } from "../../seo-pages";

const lang = "en";

export const metadata = pageMetadata("events", lang);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: PAGES["events"][lang].crumb, path: PAGES["events"].path }])} />
      <EventsList lang={lang} />
      <Related page="events" lang={lang} />
    </>
  );
}
