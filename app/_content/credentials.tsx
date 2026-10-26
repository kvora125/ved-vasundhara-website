import type { Lang } from "../i18n";
import L from "../lang";
import { asset } from "../asset";

export default function CredentialsPage({ lang }: { lang: Lang }) {
  return (
    <>
      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(16px, 2.8vw, 40px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#2E5A3C", marginBottom: "18px" }}>
          <L lang={lang} en={"Credentials & Transparency"} hi={"प्रमाण एवं पारदर्शिता"} />
        </div>
        <h1 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1.15", maxWidth: "900px", marginBottom: "18px", textWrap: "pretty" }}>
          <L lang={lang} en={"Our registrations, approvals and certificates"} hi={"हमारे पंजीकरण एवं प्रमाण-पत्र"} />
          <br />
          <span style={{ fontSize: "clamp(20px, 2.4vw, 34px)", color: "#6E6459" }}>
            <L lang={lang} en={"हमारे पंजीकरण एवं प्रमाण-पत्र"} hi={"Our registrations, approvals and certificates"} />
          </span>
        </h1>
        <div style={{ fontSize: "17px", lineHeight: "1.7", color: "#6E6459", maxWidth: "760px" }}>
          <L lang={lang} en={"Every document below is downloadable as a scanned PDF. Corporate and institutional partners can verify each registration number directly with the issuing authority."} hi={"नीचे दिया गया प्रत्येक दस्तावेज़ स्कैन की गई PDF के रूप में डाउनलोड किया जा सकता है। कॉर्पोरेट एवं संस्थागत सहयोगी प्रत्येक पंजीकरण संख्या का सत्यापन सीधे जारीकर्ता प्राधिकरण से कर सकते हैं।"} />
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px) 20px" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "22px" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)" }}>
            <L lang={lang} en={"Statutory registrations"} hi={"वैधानिक पंजीकरण"} />
          </h2>
          <div style={{ fontSize: "13px", color: "#6E6459" }}>
            <L lang={lang} en={"Nature of activities — religious cum charitable · PAN AAPAS6190R"} hi={"गतिविधियों की प्रकृति — धार्मिक सह धर्मार्थ · PAN AAPAS6190R"} />
          </div>
        </div>
        <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
          <div className="tbl tbl-head" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", gap: "0", background: "#EDE5D6", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#6E6459", fontWeight: "600" }}>
            <div style={{ padding: "14px 22px" }}>
              <L lang={lang} en={"Registration"} hi={"पंजीकरण"} />
            </div>
            <div style={{ padding: "14px 22px" }}>
              <L lang={lang} en={"Issuing authority"} hi={"जारीकर्ता प्राधिकरण"} />
            </div>
            <div style={{ padding: "14px 22px" }}>
              <L lang={lang} en={"Number"} hi={"संख्या"} />
            </div>
            <div style={{ padding: "14px 22px" }}>
              <L lang={lang} en={"Valid till"} hi={"वैधता"} />
            </div>
            <div style={{ padding: "14px 22px" }}>
              <L lang={lang} en={"Document"} hi={"दस्तावेज़"} />
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              <L lang={lang} en={"Society Registration"} hi={"सोसाइटी पंजीकरण"} />
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"Registrar of Societies, UP"} hi={"सोसाइटी रजिस्ट्रार, उ.प्र."} />
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              3826 · 05-02-2009
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              05-02-2029
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-society-renewal.jpg")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                PDF ↓
              </a>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center", background: "#F9F5EC" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              <L lang={lang} en={"12A — provisional (Form 10AC)"} hi={"12A — अंतरिम (फॉर्म 10AC)"} />
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"Income Tax Department"} hi={"आयकर विभाग"} />
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              AAPAS6190RE20251
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"AY 2028-29"} hi={"निर्धारण वर्ष 2028-29"} />
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-12a.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                PDF ↓
              </a>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              <L lang={lang} en={"80G — provisional (Form 10AC)"} hi={"80G — अंतरिम (फॉर्म 10AC)"} />
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"Income Tax Department"} hi={"आयकर विभाग"} />
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              AAPAS6190RF20251
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"AY 2028-29"} hi={"निर्धारण वर्ष 2028-29"} />
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-80g.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                PDF ↓
              </a>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center", background: "#F9F5EC" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              <L lang={lang} en={"Trust Deed"} hi={"ट्रस्ट डीड"} />
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"Registered deed"} hi={"पंजीकृत विलेख"} />
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              —
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-trust-deed.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                PDF ↓
              </a>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              PAN
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"Income Tax Department"} hi={"आयकर विभाग"} />
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              AAPAS6190R
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"Perpetual"} hi={"स्थायी"} />
            </div>
            <div style={{ padding: "18px 22px" }}>
              <span style={{ color: "#9C9287" }}>
                —
              </span>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center", background: "#F9F5EC" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              <L lang={lang} en={"NITI Aayog DARPAN"} hi={"नीति आयोग DARPAN"} />
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              <L lang={lang} en={"NITI Aayog"} hi={"नीति आयोग"} />
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              UP/2025/0652369
            </div>
            <div style={{ padding: "18px 22px", color: "#2E5A3C", fontWeight: "600" }}>
              <L lang={lang} en={"Active"} hi={"सक्रिय"} />
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-darpan.webp")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                <L lang={lang} en={"View ↗"} hi={"देखें ↗"} />
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "12px", fontSize: "13px", color: "#6E6459" }}>
          <L lang={lang} en={"12A and 80G provisional registration — dated 20-08-2025, valid for assessment years 2026-27 to 2028-29."} hi={"12A एवं 80G अंतरिम पंजीकरण — दिनांक 20-08-2025, निर्धारण वर्ष 2026-27 से 2028-29 तक मान्य।"} />
        </div>
      </div>

      <div style={{ padding: "clamp(16px, 3.1vw, 44px) clamp(20px, 3.9vw, 56px) clamp(26px, 5vw, 72px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "22px" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)" }}>
            <L lang={lang} en={"Certificate gallery"} hi={"प्रमाण-पत्र संग्रह"} />
          </h2>
          <div style={{ display: "flex", gap: "8px", fontSize: "13px" }}>
            <span style={{ background: "#16110D", color: "#F6F1E7", padding: "7px 14px", borderRadius: "2px" }}>
              <L lang={lang} en={"All"} hi={"सभी"} />
            </span>
            <span style={{ border: "1px solid #DED5C6", padding: "7px 14px", borderRadius: "2px", color: "#6E6459" }}>
              <L lang={lang} en={"Statutory"} hi={"वैधानिक"} />
            </span>
            <span style={{ border: "1px solid #DED5C6", padding: "7px 14px", borderRadius: "2px", color: "#6E6459" }}>
              <L lang={lang} en={"Programme"} hi={"कार्यक्रम"} />
            </span>
            <span style={{ border: "1px solid #DED5C6", padding: "7px 14px", borderRadius: "2px", color: "#6E6459" }}>
              <L lang={lang} en={"Recognition"} hi={"मान्यता"} />
            </span>
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "22px" }}>
          <a href={asset("/assets/letter-governor.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/letter-governor-web.webp")} width={900} height={1300} alt="माननीया राज्यपाल जी का सन्देश" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"Message from the Hon'ble Governor"} hi={"माननीया राज्यपाल जी का सन्देश"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Recognition ·"} hi={"मान्यता ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"View full letter"} hi={"पूर्ण पत्र देखें"} />
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-society-renewal.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-society-renewal.jpg")} loading="lazy" decoding="async" width={1080} height={1507} alt="सोसाइटी पंजीकरण एवं नवीकरण" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"Society registration & renewal"} hi={"सोसाइटी पंजीकरण एवं नवीकरण"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Statutory ·"} hi={"वैधानिक ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"Registration 3826 · 05-02-2009"} hi={"पंजीकरण 3826 · 05-02-2009"} />
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-12a.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <div style={{ width: "100%", height: "100%", background: "#16110D", color: "#F6F1E7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", padding: "22px", boxSizing: "border-box" }}>
                <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
                  <L lang={lang} en={"FORM 10AC"} hi={"फॉर्म 10AC"} />
                </div>
                <h3 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  12A
                </h3>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  AAPAS6190RE20251
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  <L lang={lang} en={"Income Tax Department · 20-08-2025"} hi={"आयकर विभाग · 20-08-2025"} />
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"12A — Form 10AC"} hi={"12A — फॉर्म 10AC"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Statutory ·"} hi={"वैधानिक ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                URN AAPAS6190RE20251
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-80g.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <div style={{ width: "100%", height: "100%", background: "#16110D", color: "#F6F1E7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", padding: "22px", boxSizing: "border-box" }}>
                <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
                  <L lang={lang} en={"FORM 10AC"} hi={"फॉर्म 10AC"} />
                </div>
                <h3 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  80G
                </h3>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  AAPAS6190RF20251
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  <L lang={lang} en={"Income Tax Department · 20-08-2025"} hi={"आयकर विभाग · 20-08-2025"} />
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"80G — Form 10AC"} hi={"80G — फॉर्म 10AC"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Statutory ·"} hi={"वैधानिक ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                URN AAPAS6190RF20251
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-trust-deed.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <div style={{ width: "100%", height: "100%", background: "#16110D", color: "#F6F1E7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", padding: "22px", boxSizing: "border-box" }}>
                <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
                  <L lang={lang} en={"REGISTERED DEED"} hi={"पंजीकृत विलेख"} />
                </div>
                <h3 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  <L lang={lang} en={"Trust Deed"} hi={"ट्रस्ट डीड"} />
                </h3>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  <L lang={lang} en={"11 pages · PDF"} hi={"11 पृष्ठ · PDF"} />
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"Trust Deed"} hi={"ट्रस्ट डीड"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Founding ·"} hi={"संस्थापन ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-darpan.webp")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-darpan.webp")} loading="lazy" decoding="async" width={1065} height={350} alt="NITI Aayog DARPAN" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"NITI Aayog DARPAN"} hi={"नीति आयोग DARPAN"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Statutory ·"} hi={"वैधानिक ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"UP/2025/0652369 · Active"} hi={"UP/2025/0652369 · सक्रिय"} />
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-csr1.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-csr1.jpg")} loading="lazy" decoding="async" width={1057} height={1364} alt="Form CSR-1 — MCA" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"CSR-1 — MCA registration"} hi={"CSR-1 — MCA पंजीकरण"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Statutory ·"} hi={"वैधानिक ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"Companies Act 2013, Section 135"} hi={"कंपनी अधिनियम 2013, धारा 135"} />
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-estamp.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-estamp.jpg")} loading="lazy" decoding="async" width={1280} height={720} alt="Government of UP e-Stamp" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"Government of UP e-Stamp"} hi={"उत्तर प्रदेश सरकार ई-स्टाम्प"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Statutory ·"} hi={"वैधानिक ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"Article 4 Affidavit"} hi={"अनुच्छेद 4 शपथ-पत्र"} />
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-accounts.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <div style={{ width: "100%", height: "100%", background: "#16110D", color: "#F6F1E7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", padding: "22px", boxSizing: "border-box" }}>
                <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
                  <L lang={lang} en={"AUDITED"} hi={"अंकेक्षित"} />
                </div>
                <h3 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  <L lang={lang} en={"Accounts"} hi={"लेखा"} />
                </h3>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  2022–23 · 2023–24 · 2024–25
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  <L lang={lang} en={"Balance sheets · PDF"} hi={"बैलेंस शीट · PDF"} />
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"Audited accounts 2022–25"} hi={"अंकेक्षित लेखा 2022–25"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Accounts ·"} hi={"लेखा ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"Balance sheets 22-23 · 23-24 · 24-25"} hi={"बैलेंस शीट 22-23 · 23-24 · 24-25"} />
              </span>
            </div>
          </a>
          <a href={asset("/assets/ev-souvenir.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/ev-souvenir.jpg")} loading="lazy" decoding="async" width={1080} height={1264} alt="प्रेरणा मीडिया स्मारिका" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              <L lang={lang} en={"Prerna Media souvenir"} hi={"प्रेरणा मीडिया स्मारिका"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L lang={lang} en={"Publication ·"} hi={"प्रकाशन ·"} />
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                <L lang={lang} en={"Published on the front page"} hi={"प्रथम पृष्ठ पर प्रकाशित"} />
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="rg1" style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
        <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px)", borderLeft: "3px solid #2E5A3C" }}>
          <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
            <L lang={lang} en={"Audited accounts"} hi={"अंकेक्षित लेखा"} />
          </h3>
          <div style={{ fontSize: "14px", color: "#6E6459", lineHeight: "1.65", marginBottom: "16px" }}>
            <L lang={lang} en={"Annual statement of accounts with the auditor's report, published each financial year."} hi={"लेखा परीक्षक की रिपोर्ट सहित वार्षिक लेखा विवरण, प्रत्येक वित्तीय वर्ष में प्रकाशित।"} />
          </div>
          <a href={asset("/assets/doc-accounts.pdf")} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600" }}>
            <L lang={lang} en={"Download ↓"} hi={"डाउनलोड ↓"} />
          </a>
        </div>
        <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px)", borderLeft: "3px solid #2E5A3C" }}>
          <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
            <L lang={lang} en={"Annual report"} hi={"वार्षिक कार्य रिपोर्ट"} />
          </h3>
          <div style={{ fontSize: "14px", color: "#6E6459", lineHeight: "1.65", marginBottom: "16px" }}>
            <L lang={lang} en={"Workshops conducted, institutions covered, participants reached and outcomes measured."} hi={"आयोजित कार्यशालाएँ, सम्मिलित संस्थान, लाभान्वित प्रतिभागी एवं मापे गए परिणाम।"} />
          </div>
          <div style={{ fontSize: "14px", color: "#9C9287", fontWeight: "600" }}>
            <L lang={lang} en={"Coming soon"} hi={"शीघ्र उपलब्ध"} />
          </div>
        </div>
        <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px)", borderLeft: "3px solid #2E5A3C" }}>
          <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
            <L lang={lang} en={"Impact assessment"} hi={"प्रभाव मूल्यांकन"} />
          </h3>
          <div style={{ fontSize: "14px", color: "#6E6459", lineHeight: "1.65", marginBottom: "16px" }}>
            <L lang={lang} en={"Pre and post assessment results against the five dimensions of the Youth Leadership Index."} hi={"युवा नेतृत्व सूचकांक के पाँच आयामों पर पूर्व एवं पश्चात मूल्यांकन के परिणाम।"} />
          </div>
          <div style={{ fontSize: "14px", color: "#9C9287", fontWeight: "600" }}>
            <L lang={lang} en={"Coming soon"} hi={"शीघ्र उपलब्ध"} />
          </div>
        </div>
      </div>
    </>
  );
}
