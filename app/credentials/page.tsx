import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "प्रमाण · Credentials" };

export default function CredentialsPage() {
  return (
    <>
      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(16px, 2.8vw, 40px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#2E5A3C", marginBottom: "18px" }}>
          Credentials &amp; Transparency
        </div>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1.15", maxWidth: "900px", marginBottom: "18px", textWrap: "pretty" }}>
          हमारे पंजीकरण एवं प्रमाण-पत्र
          <br />
          <span style={{ fontSize: "clamp(20px, 2.4vw, 34px)", color: "#6E6459" }}>
            Our registrations, approvals and certificates
          </span>
        </div>
        <div style={{ fontSize: "17px", lineHeight: "1.7", color: "#6E6459", maxWidth: "760px" }}>
          Every document below is downloadable as a scanned PDF. Corporate and institutional partners can verify each registration number directly with the issuing authority.
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px) 20px" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "22px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)" }}>
            वैधानिक पंजीकरण · Statutory registrations
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459" }}>
            Nature of activities — religious cum charitable · PAN AAPAS6190R
          </div>
        </div>
        <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
          <div className="tbl tbl-head" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", gap: "0", background: "#EDE5D6", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#6E6459", fontWeight: "600" }}>
            <div style={{ padding: "14px 22px" }}>
              Registration
            </div>
            <div style={{ padding: "14px 22px" }}>
              Issuing authority
            </div>
            <div style={{ padding: "14px 22px" }}>
              Number
            </div>
            <div style={{ padding: "14px 22px" }}>
              Valid till
            </div>
            <div style={{ padding: "14px 22px" }}>
              Document
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              Society Registration
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              Registrar of Societies, UP
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
              12A — provisional (Form 10AC)
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              Income Tax Department
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              AAPAS6190RE20251
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              AY 2028-29
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-12a.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                PDF ↓
              </a>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              80G — provisional (Form 10AC)
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              Income Tax Department
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              AAPAS6190RF20251
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              AY 2028-29
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-80g.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                PDF ↓
              </a>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center", background: "#F9F5EC" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              Trust Deed
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              Registered deed
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              Sanskarit Yuva Aadarsh Samiti
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
              Income Tax Department
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              AAPAS6190R
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              Perpetual
            </div>
            <div style={{ padding: "18px 22px" }}>
              <span style={{ color: "#9C9287" }}>
                —
              </span>
            </div>
          </div>
          <div className="tbl" style={{ display: "grid", gridTemplateColumns: "1.3fr 1.1fr 1fr .9fr .8fr", borderTop: "1px solid #E2D9C8", fontSize: "15px", alignItems: "center", background: "#F9F5EC" }}>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              NITI Aayog DARPAN
            </div>
            <div style={{ padding: "18px 22px", color: "#6E6459" }}>
              NITI Aayog
            </div>
            <div style={{ padding: "18px 22px", fontWeight: "600" }}>
              UP/2025/0652369
            </div>
            <div style={{ padding: "18px 22px", color: "#2E5A3C", fontWeight: "600" }}>
              Active
            </div>
            <div style={{ padding: "18px 22px" }}>
              <a href={asset("/assets/doc-darpan.png")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C", fontWeight: "600" }}>
                View ↗
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "12px", fontSize: "13px", color: "#6E6459" }}>
          12A एवं 80G अंतरिम पंजीकरण — दिनांक 20-08-2025, निर्धारण वर्ष 2026-27 से 2028-29 तक मान्य।
        </div>
      </div>

      <div style={{ padding: "clamp(16px, 3.1vw, 44px) clamp(20px, 3.9vw, 56px) clamp(26px, 5vw, 72px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "22px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)" }}>
            प्रमाण-पत्र संग्रह · Certificate gallery
          </div>
          <div style={{ display: "flex", gap: "8px", fontSize: "13px" }}>
            <span style={{ background: "#16110D", color: "#F6F1E7", padding: "7px 14px", borderRadius: "2px" }}>
              All
            </span>
            <span style={{ border: "1px solid #DED5C6", padding: "7px 14px", borderRadius: "2px", color: "#6E6459" }}>
              Statutory
            </span>
            <span style={{ border: "1px solid #DED5C6", padding: "7px 14px", borderRadius: "2px", color: "#6E6459" }}>
              Programme
            </span>
            <span style={{ border: "1px solid #DED5C6", padding: "7px 14px", borderRadius: "2px", color: "#6E6459" }}>
              Recognition
            </span>
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "22px" }}>
          <a href={asset("/assets/letter-governor.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/letter-governor-web.png")} alt="माननीया राज्यपाल जी का सन्देश" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              माननीया राज्यपाल जी का सन्देश
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              Recognition ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                पूर्ण पत्र देखें
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-society-renewal.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-society-renewal.jpg")} alt="सोसाइटी पंजीकरण एवं नवीकरण" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              सोसाइटी पंजीकरण एवं नवीकरण
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              वैधानिक ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                पंजीकरण 3826 · 05-02-2009
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-12a.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <div style={{ width: "100%", height: "100%", background: "#16110D", color: "#F6F1E7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", padding: "22px", boxSizing: "border-box" }}>
                <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
                  FORM 10AC
                </div>
                <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  12A
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  AAPAS6190RE20251
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  Income Tax Department · 20-08-2025
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              12A — Form 10AC
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              वैधानिक ·
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
                  FORM 10AC
                </div>
                <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  80G
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  AAPAS6190RF20251
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  Income Tax Department · 20-08-2025
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              80G — Form 10AC
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              वैधानिक ·
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
                  REGISTERED DEED
                </div>
                <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  Trust Deed
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  संस्कारित युवा आदर्श समिति
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  11 पृष्ठ · PDF
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              Trust Deed
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              संस्थापन ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                संस्कारित युवा आदर्श समिति
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-darpan.png")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-darpan.png")} alt="NITI Aayog DARPAN" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              NITI Aayog DARPAN
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              वैधानिक ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                UP/2025/0652369 · Active
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-csr1.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-csr1.jpg")} alt="Form CSR-1 — MCA" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              CSR-1 — MCA पंजीकरण
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              वैधानिक ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                Companies Act 2013, धारा 135
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-estamp.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/doc-estamp.jpg")} alt="Government of UP e-Stamp" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              Government of UP e-Stamp
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              वैधानिक ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                Article 4 Affidavit
              </span>
            </div>
          </a>
          <a href={asset("/assets/doc-accounts.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <div style={{ width: "100%", height: "100%", background: "#16110D", color: "#F6F1E7", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", padding: "22px", boxSizing: "border-box" }}>
                <div style={{ fontSize: "10px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
                  AUDITED
                </div>
                <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1" }}>
                  Accounts
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#DCD2C2", lineHeight: "1.5" }}>
                  2022–23 · 2023–24 · 2024–25
                </div>
                <div style={{ fontSize: "11px", color: "#9C9287", marginTop: "auto" }}>
                  Balance sheets · PDF
                </div>
              </div>
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              अंकेक्षित लेखा 2022–25
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              लेखा ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                Balance sheets 22-23 · 23-24 · 24-25
              </span>
            </div>
          </a>
          <a href={asset("/assets/ev-souvenir.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", background: "#FFFCF6", border: "1px solid #E2D9C8", padding: "14px", display: "block" }}>
            <div style={{ height: "clamp(150px, 17.4vw, 250px)", marginBottom: "14px", overflow: "hidden", background: "#EDE5D6" }}>
              <img src={asset("/assets/ev-souvenir.jpg")} alt="प्रेरणा मीडिया स्मारिका" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
              प्रेरणा मीडिया स्मारिका
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              प्रकाशन ·
              {" "}
              <span style={{ color: "#9B1C1C" }}>
                प्रथम पृष्ठ पर प्रकाशित
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="rg1" style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
        <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px)", borderLeft: "3px solid #2E5A3C" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
            अंकेक्षित लेखा · Audited accounts
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459", lineHeight: "1.65", marginBottom: "16px" }}>
            Annual statement of accounts with the auditor&apos;s report, published each financial year.
          </div>
          <a href={asset("/assets/doc-accounts.pdf")} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600" }}>
            Download ↓
          </a>
        </div>
        <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px)", borderLeft: "3px solid #2E5A3C" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
            वार्षिक कार्य रिपोर्ट · Annual report
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459", lineHeight: "1.65", marginBottom: "16px" }}>
            Workshops conducted, institutions covered, participants reached and outcomes measured.
          </div>
          <div style={{ fontSize: "14px", color: "#9C9287", fontWeight: "600" }}>
            शीघ्र उपलब्ध · Coming soon
          </div>
        </div>
        <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px)", borderLeft: "3px solid #2E5A3C" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
            प्रभाव मूल्यांकन · Impact assessment
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459", lineHeight: "1.65", marginBottom: "16px" }}>
            Pre and post assessment results against the five dimensions of the Youth Leadership Index.
          </div>
          <div style={{ fontSize: "14px", color: "#9C9287", fontWeight: "600" }}>
            शीघ्र उपलब्ध · Coming soon
          </div>
        </div>
      </div>
    </>
  );
}
