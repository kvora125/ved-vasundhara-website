import { notFound } from "next/navigation";
import { EventDetail } from "../../../_content/cms-pages";
import { getEvents } from "../../../cms";
import JsonLd from "../../../json-ld";
import { ORG, breadcrumbLd, eventLd, pageMetadata } from "../../../seo";
import { PAGES } from "../../../seo-pages";

const lang = "en";

const items = () => [...getEvents().upcoming, ...getEvents().past];

// Static export: one page per approved Sheet row. A placeholder keeps the build valid while the list is empty.
export const dynamicParams = false;
export function generateStaticParams() {
  const list = items();
  return list.length ? list.map((i) => ({ slug: i.slug })) : [{ slug: "_" }];
}

export async function generateMetadata({ params }: PageProps<"/en/events/[slug]">) {
  const { slug } = await params;
  const item = items().find((i) => i.slug === slug);
  if (!item) return { robots: { index: false } };
  return pageMetadata("events", lang, {
    path: `/events/${item.slug}`,
    title: `${item.title[lang]} | ${ORG.brand[lang]}`.slice(0, 70),
    description: (item.summary[lang] || item.body[lang]).slice(0, 160),
    image: item.photos[0]?.src,
    type: "article",
  });
}

export default async function Page({ params }: PageProps<"/en/events/[slug]">) {
  const { slug } = await params;
  const item = items().find((i) => i.slug === slug);
  if (!item) notFound();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(lang, [
            { name: PAGES["events"][lang].crumb, path: PAGES["events"].path },
            { name: item.title[lang], path: `/events/${item.slug}` },
          ]),
          eventLd(item, lang),
        ]}
      />
      <EventDetail lang={lang} item={item} />
    </>
  );
}
