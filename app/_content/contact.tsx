import type { Lang } from "../i18n";
import L from "../lang";
import { ORG } from "../org";
import EnquiryForm from "../enquiry-form";

export default function ContactPage({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
        <div style={{ padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            <L lang={lang} en={"Contact"} hi={"संपर्क"} />
          </div>
          <h1 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(25px, 3.2vw, 46px)", lineHeight: "1.15", marginBottom: "clamp(16px, 2.5vw, 36px)" }}>
            <L lang={lang} en={"Reach the campaign office"} hi={"अभियान कार्यालय से संपर्क करें"} />
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L lang={lang} en={"Registered office (Unnao)"} hi={"पंजीकृत कार्यालय (उन्नाव)"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
                <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
                <br />
                <L lang={lang} en={"Village Sakatpur, Hasnapur, P.O. Rasoolabad"} hi={"ग्राम सकतपुर, हसनापुर, पो. रसूलाबाद"} />
                <br />
                <L lang={lang} en={"District Unnao, Uttar Pradesh — 209870"} hi={"जिला उन्नाव, उत्तर प्रदेश — 209870"} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L lang={lang} en={"Campaign office"} hi={"अभियान कार्यालय"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
                <L lang={lang} en={"Campaign office & programme office, Lucknow"} hi={"अभियान कार्यालय एवं कार्यक्रम कार्यालय लखनऊ"} />
                <br />
                <L lang={lang} en={"Lucknow, Uttar Pradesh"} hi={"लखनऊ, उत्तर प्रदेश"} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L lang={lang} en={"Registration"} hi={"पंजीकरण"} />
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                <L lang={lang} en={"Society registration 3826 · PAN AAPAS6190R"} hi={"सोसाइटी पंजीकरण 3826 · PAN AAPAS6190R"} />
                <br />
                12A AAPAS6190RE20251 · 80G AAPAS6190RF20251
                <br />
                DARPAN UP/2025/0652369
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L lang={lang} en={"Phone · Email · Instagram"} hi={"फ़ोन · ईमेल · इंस्टाग्राम"} />
              </div>
              <div style={{ fontSize: "18px", lineHeight: "1.8", display: "flex", flexDirection: "column" }}>
                <a href={`tel:${ORG.phone}`} style={{ color: "#16110D" }}>
                  {ORG.phoneDisplay}
                </a>
                <a href={`mailto:${ORG.email}`} style={{ color: "#9B1C1C" }}>
                  {ORG.email}
                </a>
                <a href={ORG.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C" }}>
                  Instagram {ORG.instagramHandle} ↗
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L lang={lang} en={"Enquiries"} hi={"पूछताछ"} />
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                <L lang={lang} en={"Workshops & participation · Institutional tie-ups"} hi={"कार्यशालाएँ एवं सहभागिता · संस्थागत सहयोग"} />
                <br />
                <L lang={lang} en={"CSR & funding · Media and press"} hi={"CSR एवं वित्तपोषण · मीडिया एवं प्रेस"} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)", background: "#EDE5D6" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "26px" }}>
            <L lang={lang} en={"Write to us"} hi={"हमें लिखें"} />
          </h2>
          <EnquiryForm variant="contact" lang={lang} />
          <div style={{ marginTop: "clamp(16px, 2.4vw, 34px)", paddingTop: "24px", borderTop: "1px solid #DED5C6", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", color: "#4A423A", lineHeight: "1.7" }}>
            संगच्छध्वं संवदध्वं सं वो मनांसि जानताम् ॥
          </div>
        </div>
      </div>
    </>
  );
}
