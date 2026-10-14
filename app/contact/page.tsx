import EnquiryForm from "../enquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "संपर्क · Contact" };

export default function ContactPage() {
  return (
    <>
      <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
        <div style={{ padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            Contact
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(25px, 3.2vw, 46px)", lineHeight: "1.15", marginBottom: "clamp(16px, 2.5vw, 36px)" }}>
            अभियान कार्यालय · Reach the campaign office
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                पंजीकृत कार्यालय · Registered office (उन्नाव)
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
                संस्कारित युवा आदर्श समिति
                <br />
                ग्राम सकतपुर, हसनापुर, पो. रसूलाबाद
                <br />
                जिला उन्नाव, उत्तर प्रदेश — 209870
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                अभियान कार्यालय · Campaign office
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
                अभियान कार्यालय एवं कार्यक्रम कार्यालय लखनऊ
                <br />
                लखनऊ, उत्तर प्रदेश
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                पंजीकरण · Registration
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                सोसाइटी पंजीकरण 3826 · PAN AAPAS6190R
                <br />
                12A AAPAS6190RE20251 · 80G AAPAS6190RF20251
                <br />
                DARPAN UP/2025/0652369
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "8px" }}>
                Enquiries
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                Workshops &amp; participation · Institutional tie-ups
                <br />
                CSR &amp; funding · Media and press
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)", background: "#EDE5D6" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "26px" }}>
            हमें लिखें · Write to us
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
