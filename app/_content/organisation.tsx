import type { Lang } from "../i18n";
import L from "../lang";
import { asset } from "../asset";

export default function OrganisationPage({ lang }: { lang: Lang }) {
  return (
    <>
      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(27px, 5.3vw, 76px) clamp(20px, 3.9vw, 56px) clamp(24px, 4.6vw, 66px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".34em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
          <L lang={lang} en={"About The Organisation"} hi={"संस्था के बारे में"} />
        </div>
        <h1 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(41px, 5.1vw, 74px)", lineHeight: "1.08", marginBottom: "16px", textWrap: "pretty" }}>
          <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
        </h1>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: "600", lineHeight: "1.35", marginBottom: "26px" }}>
          <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.6", color: "#DCD2C2", maxWidth: "1000px", borderLeft: "3px solid #C8651B", paddingLeft: "clamp(16px, 1.9vw, 28px)" }}>
          <L lang={lang} en={"The organisation that puts the model into practice."} hi={"मॉडल को अमल में लाने वाली संस्था।"} />
        </div>
        <div style={{ marginTop: "clamp(16px, 2.6vw, 38px)", paddingTop: "clamp(16px, 1.9vw, 28px)", borderTop: "1px solid #3B342B", display: "flex", gap: "clamp(20px, 3.9vw, 56px)", flexWrap: "wrap", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C" }}>
          <div>
            <L lang={lang} en={"Established —"} hi={"स्थापना वर्ष —"} />
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              2009
            </span>
          </div>
          <div>
            <L lang={lang} en={"Registration —"} hi={"पंजीकरण —"} />
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              <L lang={lang} en={"Societies Registration Act, 1860"} hi={"सोसाइटी पंजीकरण अधिनियम, 1860"} />
            </span>
          </div>
          <div>
            <L lang={lang} en={"Area of work —"} hi={"कार्यक्षेत्र —"} />
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              <L lang={lang} en={"Uttar Pradesh"} hi={"उत्तर प्रदेश"} />
            </span>
          </div>
          <div>
            <L lang={lang} en={"Registered office —"} hi={"पंजीकृत कार्यालय —"} />
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              <L lang={lang} en={"Unnao, Uttar Pradesh"} hi={"उन्नाव, उत्तर प्रदेश"} />
            </span>
          </div>
          <div>
            <L lang={lang} en={"Campaign & programme office —"} hi={"अभियान एवं कार्यक्रम कार्यालय —"} />
            {" "}
            <span style={{ color: "#F6F1E7", fontWeight: "600" }}>
              <L lang={lang} en={"Lucknow, Uttar Pradesh"} hi={"लखनऊ, उत्तर प्रदेश"} />
            </span>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)", alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "20px" }}>
            <L lang={lang} en={"Organisation details"} hi={"संस्था विवरण"} />
          </h2>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                <L lang={lang} en={"Name of organisation"} hi={"संस्था का नाम"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", background: "#F9F5EC", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                <L lang={lang} en={"Registration number"} hi={"पंजीकरण संख्या"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                <L lang={lang} en={"3826 · dated 05-02-2009"} hi={"3826 · दिनांक 05-02-2009"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                <L lang={lang} en={"Act"} hi={"अधिनियम"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                <L lang={lang} en={"Societies Registration Act, 1860"} hi={"सोसाइटी पंजीकरण अधिनियम, 1860"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", background: "#F9F5EC", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                <L lang={lang} en={"Renewal"} hi={"नवीकरण"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                <L lang={lang} en={"3016 · certificate 072796 · 03-02-2025"} hi={"3016 · प्रमाण-पत्र 072796 · 03-02-2025"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 22px", fontSize: "15px", borderTop: "1px solid #E2D9C8" }}>
              <span className="nw" style={{ color: "#6E6459", whiteSpace: "nowrap" }}>
                <L lang={lang} en={"Registered office"} hi={"पंजीकृत कार्यालय"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                <L lang={lang} en={"Village Sakatpur, Hasnapur, P.O. Rasoolabad, District Unnao, Uttar Pradesh — 209870"} hi={"ग्राम सकतपुर, हसनापुर, पो. रसूलाबाद, जिला उन्नाव, उत्तर प्रदेश — 209870"} />
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
                <L lang={lang} en={"NITI Aayog DARPAN"} hi={"नीति आयोग DARPAN"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right", fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                UP/2025/0652369
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "20px" }}>
            <L lang={lang} en={"What the organisation does"} hi={"संस्था क्या करती है"} />
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                <L lang={lang} en={"Conducting workshops"} hi={"कार्यशाला संचालन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Women–youth leadership and personality development workshops in schools and colleges."} hi={"विद्यालयों एवं महाविद्यालयों में नारी–युवा नेतृत्व एवं व्यक्तित्व विकास कार्यशाला।"} />
              </div>
            </div>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                <L lang={lang} en={"Institutional coordination"} hi={"संस्थागत समन्वय"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Organising events and partnering with educational institutions, trusts and government bodies."} hi={"शैक्षणिक संस्थानों, न्यासों एवं शासकीय निकायों के साथ आयोजन एवं सहभागिता।"} />
              </div>
            </div>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                <L lang={lang} en={"Assessment & reporting"} hi={"मूल्यांकन एवं रिपोर्टिंग"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Pre–post assessment based on the Youth Leadership Index, audited accounts and annual reports."} hi={"युवा नेतृत्व सूचकांक पर आधारित पूर्व–पश्चात मूल्यांकन, अंकेक्षित लेखा एवं वार्षिक रिपोर्ट।"} />
              </div>
            </div>
            <div style={{ background: "#FFFCF6", borderLeft: "3px solid #9B1C1C", padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
                <L lang={lang} en={"Documentation"} hi={"दस्तावेजीकरण"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Photo, video and press documentation of every programme."} hi={"प्रत्येक कार्यक्रम का फोटो, वीडियो एवं प्रेस दस्तावेजीकरण।"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rg2" style={{ background: "#2B241C", padding: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "2px" }}>
        <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
            <L lang={lang} en={"Governance"} hi={"शासन"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.75", color: "#DCD2C2" }}>
            <L lang={lang} en={"Run by a managing committee; annual general meeting held and audited accounts presented."} hi={"प्रबंध समिति द्वारा संचालित; वार्षिक साधारण सभा एवं अंकेक्षित लेखा प्रस्तुत।"} />
          </div>
        </div>
        <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
            <L lang={lang} en={"Transparency"} hi={"पारदर्शिता"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.75", color: "#DCD2C2" }}>
            <L lang={lang} en={"All registrations, certificates and accounts are publicly available for download."} hi={"समस्त पंजीकरण, प्रमाण-पत्र एवं लेखा सार्वजनिक रूप से डाउनलोड हेतु उपलब्ध।"} />
          </div>
        </div>
        <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
            <L lang={lang} en={"CSR eligibility"} hi={"सीएसआर पात्रता"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.75", color: "#DCD2C2" }}>
            <L lang={lang} en={"12A and 80G obtained; CSR-1 in process. 80G exemption available to donors."} hi={"12A एवं 80G प्राप्त; CSR-1 प्रक्रियाधीन। दानकर्ता को 80G छूट उपलब्ध।"} />
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(16px, 3.1vw, 44px) clamp(20px, 3.9vw, 56px) clamp(16px, 2.2vw, 32px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", marginBottom: "12px" }}>
          <L lang={lang} en={"Organisation records"} hi={"संस्था के अभिलेख"} />
        </h2>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.75", color: "#4A423A", maxWidth: "900px" }}>
          <L lang={lang} en={"All registrations, certificates and statutory records of the organisation are listed below in order. Each document is available for download as a scan."} hi={"संस्था के समस्त पंजीकरण, प्रमाण-पत्र एवं वैधानिक अभिलेख नीचे क्रमबद्ध रूप से दिए गए हैं। प्रत्येक दस्तावेज़ स्कैन के रूप में डाउनलोड हेतु उपलब्ध है।"} />
        </div>
      </div>

      <div style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", background: "#EDE5D6" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "26px" }}>
          <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)" }}>
            <L lang={lang} en={"Documents"} hi={"दस्तावेज़"} />
          </h3>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L lang={lang} en={"Click to open the original file"} hi={"क्लिक करने पर मूल फाइल खुलती है"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "22px", marginBottom: "22px" }}>
          <a href={asset("/assets/doc-society-renewal.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #DED5C6", background: "#FFFCF6", display: "block" }}>
            <img src={asset("/assets/doc-society-renewal.jpg")} width={1080} height={1507} alt="सोसाइटी नवीकरण प्रमाण-पत्र" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L lang={lang} en={"Society registration & renewal"} hi={"सोसाइटी पंजीकरण एवं नवीकरण"} />
              </div>
              <div style={{ fontSize: "14px", color: "#6E6459" }}>
                <L lang={lang} en={"3826 · renewal 3016 · 03-02-2025"} hi={"3826 · नवीकरण 3016 · 03-02-2025"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/doc-darpan.webp")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #DED5C6", background: "#FFFCF6", display: "block" }}>
            <img src={asset("/assets/doc-darpan.webp")} loading="lazy" decoding="async" width={1065} height={350} alt="NITI Aayog DARPAN" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "6px" }}>
                <L lang={lang} en={"NITI Aayog DARPAN"} hi={"नीति आयोग DARPAN"} />
              </div>
              <div style={{ fontSize: "14px", color: "#6E6459" }}>
                <L lang={lang} en={"UP/2025/0652369 · Active"} hi={"UP/2025/0652369 · सक्रिय"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/doc-estamp.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #DED5C6", background: "#FFFCF6", display: "block" }}>
            <img src={asset("/assets/doc-estamp.jpg")} loading="lazy" decoding="async" width={1280} height={720} alt="e-Stamp certificate" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "6px" }}>
                <L lang={lang} en={"Government of UP e-Stamp"} hi={"उत्तर प्रदेश सरकार ई-स्टाम्प"} />
              </div>
              <div style={{ fontSize: "14px", color: "#6E6459" }}>
                <L lang={lang} en={"Article 4 Affidavit"} hi={"अनुच्छेद 4 शपथ-पत्र"} />
              </div>
            </div>
          </a>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "22px" }}>
          <a href={asset("/assets/doc-12a.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              <L lang={lang} en={"Form 10AC"} hi={"फॉर्म 10AC"} />
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              12A
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              AAPAS6190RE20251 · 20-08-2025
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              <L lang={lang} en={"Open ↗"} hi={"खोलें ↗"} />
            </div>
          </a>
          <a href={asset("/assets/doc-80g.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              <L lang={lang} en={"Form 10AC"} hi={"फॉर्म 10AC"} />
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              80G
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              AAPAS6190RF20251 · 20-08-2025
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              <L lang={lang} en={"Open ↗"} hi={"खोलें ↗"} />
            </div>
          </a>
          <a href={asset("/assets/doc-trust-deed.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              <L lang={lang} en={"Registered Deed"} hi={"पंजीकृत विलेख"} />
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              <L lang={lang} en={"Trust Deed"} hi={"ट्रस्ट डीड"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti · 11 pages"} hi={"संस्कारित युवा आदर्श समिति · 11 पृष्ठ"} />
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              <L lang={lang} en={"Open ↗"} hi={"खोलें ↗"} />
            </div>
          </a>
          <a href={asset("/assets/doc-accounts.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
            <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
              <L lang={lang} en={"Audited"} hi={"अंकेक्षित"} />
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", lineHeight: "1" }}>
              <L lang={lang} en={"Accounts"} hi={"लेखा"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.6" }}>
              2022–23 · 2023–24 · 2024–25
            </div>
            <div style={{ fontSize: "13px", color: "#E8B24C", fontWeight: "600", marginTop: "auto" }}>
              <L lang={lang} en={"Open ↗"} hi={"खोलें ↗"} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
