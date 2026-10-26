import { notFound } from "next/navigation";
import { UpdateDetail } from "../../../_content/cms-pages";
import { getNews } from "../../../cms";
import JsonLd from "../../../json-ld";
import { ORG, breadcrumbLd, newsArticleLd, pageMetadata } from "../../../seo";
import { PAGES } from "../../../seo-pages";

const lang = "en";

const items = () => getNews();

// Static export: one page per approved Sheet row. A placeholder keeps the build valid while the list is empty.
export const dynamicParams = false;
export function generateStaticParams() {
  const list = items();
  return list.length ? list.map((i) => ({ slug: i.slug })) : [{ slug: "_" }];
}

export async function generateMetadata({ params }: PageProps<"/en/updates/[slug]">) {
  const { slug } = await params;
  const item = items().find((i) => i.slug === slug);
  if (!item) return { robots: { index: false } };
  return pageMetadata("updates", lang, {
    path: `/updates/${item.slug}`,
    title: `${item.title[lang]} | ${ORG.brand[lang]}`.slice(0, 70),
    description: (item.summary[lang] || item.body[lang]).slice(0, 160),
    image: item.photos[0]?.src,
    type: "article",
  });
}

export default async function Page({ params }: PageProps<"/en/updates/[slug]">) {
  const { slug } = await params;
  const item = items().find((i) => i.slug === slug);
  if (!item) notFound();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(lang, [
            { name: PAGES["updates"][lang].crumb, path: PAGES["updates"].path },
            { name: item.title[lang], path: `/updates/${item.slug}` },
          ]),
          newsArticleLd(item, lang),
        ]}
      />
      <UpdateDetail lang={lang} item={item} />
    </>
  );
}
