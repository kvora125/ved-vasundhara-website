import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "संस्था · Organisation" };

export default function OrganisationPage() {
  return (
    <>
      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(27px, 5.3vw, 76px) clamp(20px, 3.9vw, 56px) clamp(24px, 4.6vw, 66px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".34em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
          About The Organisation
        </div>
        <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(41px, 5.1vw, 74px)", lineHeight: "1.08", marginBottom: "16px", textWrap: "pretty" }}>
          Sanskarit Yuva Aadarsh Samiti
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: "600", lineHeight: "1.35", marginBottom: "26px" }}>
          संस्कारित युवा आदर्श समिति
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.6", color: "#DCD2C2", maxWidth: "1000px", borderLeft: "3px solid #C8651B", paddingLeft: "clamp(16px, 1.9vw, 28px)" }}>
          मॉडल को implement (अमल) में लाने वाली संस्था।
        </div>
        <div style={{ marginTop: "clamp(16px, 2.6vw, 38px)", paddingTop: "clamp(16px, 1.9vw, 28px)", borderTop: "1px solid #3B342B", display: "flex", gap: "clamp(20px, 3.9vw, 56px)", flexWrap: "wrap", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C" }}>
          <div>
            स्थापना वर्ष —
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              2009
            </span>
          </div>
          <div>
            पंजीकरण —
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              Societies Registration Act, 1860
            </span>
          </div>
          <div>
            कार्यक्षेत्र —
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              उत्तर प्रदेश
            </span>
          </div>
          <div>
            पंजीकृत कार्यालय —
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              उन्नाव, उत्तर प्रदेश
            </span>
          </div>
          <div>
            अभियान एवं कार्यक्रम कार्यालय —
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              लखनऊ, उत्तर प्रदेश
            </span>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)", alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "20px" }}>
            संस्था विवरण
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                संस्था का नाम
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                संस्कारित युवा आदर्श समिति
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", background: "#F9F5EC", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                पंजीकरण संख्या
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                3826 · दिनांक 05-02-2009
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                अधिनियम
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                Societies Registration Act, 1860
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", background: "#F9F5EC", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                नवीकरण
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                3016 · प्रमाण-पत्र 072796 · 03-02-2025
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                पंजीकृत कार्यालय
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                ग्राम सकतपुर, हसनापुर, पो. रसूलाबाद, जिला उन्नाव, उत्तर प्रदेश — 209870
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", background: "#F9F5EC", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                PAN
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                AAPAS6190R
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                12A
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                AAPAS6190RE20251
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", background: "#F9F5EC", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                80G
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                AAPAS6190RF20251
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                NITI Aayog DARPAN
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                UP/2025/0652369
              </span>
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "20px" }}>
            संस्था क्या करती है
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                कार्यशाला संचालन
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                विद्यालयों एवं महाविद्यालयों में नारी–युवा नेतृत्व एवं व्यक्तित्व विकास कार्यशाला।
              </div>
            </div>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                संस्थागत समन्वय
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                शैक्षणिक संस्थानों, न्यासों एवं शासकीय निकायों के साथ आयोजन एवं सहभागिता।
              </div>
            </div>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                मूल्यांकन एवं रिपोर्टिंग
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                युवा नेतृत्व सूचकांक पर आधारित पूर्व–पश्चात मूल्यांकन, अंकेक्षित लेखा एवं वार्षिक रिपोर्ट।
              </div>
            </div>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                दस्तावेजीकरण
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                प्रत्येक कार्यक्रम का फोटो, वीडियो एवं प्रेस दस्तावेजीकरण।
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rg2" style={{ background: "#2B241C", padding: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "2px" }}>
        <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
            शासन · Governance
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.75", color: "#DCD2C2" }}>
            प्रबंध समिति द्वारा संचालित; वार्षिक साधारण सभा एवं अंकेक्षित लेखा प्रस्तुत।
          </div>
        </div>
        <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
            पारदर्शिता · Transparency
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.75", color: "#DCD2C2" }}>
            समस्त पंजीकरण, प्रमाण-पत्र एवं लेखा सार्वजनिक रूप से डाउनलोड हेतु उपलब्ध।
          </div>
        </div>
        <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
            सीएसआर पात्रता · CSR
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.75", color: "#DCD2C2" }}>
            12A एवं 80G प्राप्त; CSR-1 प्रक्रियाधीन। दानकर्ता को 80G छूट उपलब्ध।
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(16px, 3.1vw, 44px) clamp(20px, 3.9vw, 56px) clamp(16px, 2.2vw, 32px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", marginBottom: "12px" }}>
          संस्था के अभिलेख
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.75", color: "#4A423A", maxWidth: "900px" }}>
          संस्था के समस्त पंजीकरण, प्रमाण-पत्र एवं वैधानिक अभिलेख नीचे क्रमबद्ध रूप से दिए गए हैं। प्रत्येक दस्तावेज़ स्कैन के रूप में डाउनलोड हेतु उपलब्ध है।
        </div>
      </div>

      <div style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", background: "#EDE5D6" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "26px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)" }}>
            दस्तावेज़ · Documents
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            क्लिक करने पर मूल फाइल खुलती है
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "22px", marginBottom: "22px" }}>
          <a href={asset("/assets/doc-society-renewal.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #DED5C6", background: "#FFFCF6", display: "block" }}>
            <img src={asset("/assets/doc-society-renewal.jpg")} alt="सोसाइटी नवीकरण प्रमाण-पत्र" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                सोसाइटी पंजीकरण एवं नवीकरण
              </div>
              <div style={{ fontSize: "14px", color: "#6E6459" }}>
                3826 · नवीकरण 3016 · 03-02-2025
              </div>
            </div>
          </a>
          <a href={asset("/assets/doc-darpan.png")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #DED5C6", background: "#FFFCF6", display: "block" }}>
            <img src={asset("/assets/doc-darpan.png")} alt="NITI Aayog DARPAN" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "6px" }}>
                NITI Aayog DARPAN
              </div>
              <div style={{ fontSize: "14px", color: "#6E6459" }}>
                UP/2025/0652369 · Active
              </div>
            </div>
          </a>
          <a href={asset("/assets/doc-estamp.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #DED5C6", background: "#FFFCF6", display: "block" }}>
            <img src={asset("/assets/doc-estamp.jpg")} alt="e-Stamp certificate" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "6px" }}>
                Government of UP e-Stamp
              </div>
              <div style={{ fontSize: "14px", color: "#6E6459" }}>
                Article 4 Affidavit
              </div>
            </div>
          </a>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "22px" }}>
          <a href={asset("/assets/doc-12a.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              Form 10AC
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              12A
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              AAPAS6190RE20251 · 20-08-2025
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              खोलें ↗
            </div>
          </a>
          <a href={asset("/assets/doc-80g.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              Form 10AC
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              80G
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              AAPAS6190RF20251 · 20-08-2025
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              खोलें ↗
            </div>
          </a>
          <a href={asset("/assets/doc-trust-deed.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              Registered Deed
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              Trust Deed
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              संस्कारित युवा आदर्श समिति · 11 पृष्ठ
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              खोलें ↗
            </div>
          </a>
          <a href={asset("/assets/doc-accounts.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              Audited
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              लेखा
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              2022–23 · 2023–24 · 2024–25
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              खोलें ↗
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
