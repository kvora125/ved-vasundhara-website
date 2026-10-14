import L from "../lang";
import EnquiryForm from "../enquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "संपर्क · Contact" };

export default function ContactPage() {
  return (
    <>
      <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
        <div style={{ padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            <L en={"Contact"} hi={"संपर्क"} />
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(25px, 3.2vw, 46px)", lineHeight: "1.15", marginBottom: "clamp(16px, 2.5vw, 36px)" }}>
            <L en={"Reach the campaign office"} hi={"अभियान कार्यालय से संपर्क करें"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L en={"Registered office (Unnao)"} hi={"पंजीकृत कार्यालय (उन्नाव)"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
                <L en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
                <br />
                <L en={"Village Sakatpur, Hasnapur, P.O. Rasoolabad"} hi={"ग्राम सकतपुर, हसनापुर, पो. रसूलाबाद"} />
                <br />
                <L en={"District Unnao, Uttar Pradesh — 209870"} hi={"जिला उन्नाव, उत्तर प्रदेश — 209870"} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L en={"Campaign office"} hi={"अभियान कार्यालय"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
                <L en={"Campaign office & programme office, Lucknow"} hi={"अभियान कार्यालय एवं कार्यक्रम कार्यालय लखनऊ"} />
                <br />
                <L en={"Lucknow, Uttar Pradesh"} hi={"लखनऊ, उत्तर प्रदेश"} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L en={"Registration"} hi={"पंजीकरण"} />
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                <L en={"Society registration 3826 · PAN AAPAS6190R"} hi={"सोसाइटी पंजीकरण 3826 · PAN AAPAS6190R"} />
                <br />
                12A AAPAS6190RE20251 · 80G AAPAS6190RF20251
                <br />
                DARPAN UP/2025/0652369
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                <L en={"Enquiries"} hi={"पूछताछ"} />
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                <L en={"Workshops & participation · Institutional tie-ups"} hi={"कार्यशालाएँ एवं सहभागिता · संस्थागत सहयोग"} />
                <br />
                <L en={"CSR & funding · Media and press"} hi={"CSR एवं वित्तपोषण · मीडिया एवं प्रेस"} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)", background: "#EDE5D6" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "26px" }}>
            <L en={"Write to us"} hi={"हमें लिखें"} />
          </div>
          <EnquiryForm variant="contact" />
          <div style={{ marginTop: "clamp(16px, 2.4vw, 34px)", paddingTop: "24px", borderTop: "1px solid #DED5C6", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", color: "#4A423A", lineHeight: "1.7" }}>
            संगच्छध्वं संवदध्वं सं वो मनांसि जानताम् ॥
          </div>
        </div>
      </div>
    </>
  );
}
