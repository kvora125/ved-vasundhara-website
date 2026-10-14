import L from "../lang";
import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "प्रशंसा-पत्र · Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(16px, 3.1vw, 44px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#2E5A3C", marginBottom: "18px" }}>
          <L en={"Credentials & Testimonials"} hi={"प्रमाण एवं प्रशंसा"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(25px, 3.2vw, 46px)", fontWeight: "600", lineHeight: "1.28", marginBottom: "10px" }}>
          <L en={"Registration, records and messages of appreciation"} hi={"पंजीकरण, अभिलेख एवं प्रशंसा संदेश"} />
        </div>
        <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.8vw, 26px)", color: "#6E6459", marginBottom: "20px" }}>
          <L en={"पंजीकरण, अभिलेख एवं प्रशंसा संदेश"} hi={"Registration, records and messages of appreciation"} />
        </div>
        <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#4A423A", maxWidth: "820px" }}>
          <L en={"Sanskarit Yuva Aadarsh Samiti — Village Sakatpur, P.O. Rasoolabad, District Unnao, Uttar Pradesh. Registered under the Societies Registration Act, 1860."} hi={"संस्कारित युवा आदर्श समिति — ग्राम सकतपुर, पो. रसूलाबाद, जिला उन्नाव, उत्तर प्रदेश। सोसाइटी पंजीकरण अधिनियम, 1860 के अंतर्गत पंजीकृत।"} />
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.05fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "14px" }}>
            <L en={"Letter of incorporation"} hi={"स्थापना प्रमाण"} />
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", marginBottom: "22px" }}>
            <L en={"Society registration & renewal certificate"} hi={"सोसाइटी पंजीकरण एवं नवीकरण प्रमाण-पत्र"} />
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"Name"} hi={"संस्था का नाम"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right" }}>
                <L en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
                <br />
                <L en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #E2D9C8", fontSize: "15px", background: "#F9F5EC" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"Registration no."} hi={"पंजीकरण संख्या"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                3826 · 05-02-2009
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"Act"} hi={"अधिनियम"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                <L en={"Societies Registration Act, 1860 (No. 21)"} hi={"सोसाइटी पंजीकरण अधिनियम, 1860 (सं. 21)"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #E2D9C8", fontSize: "15px", background: "#F9F5EC" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"Renewal no."} hi={"नवीकरण संख्या"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                <L en={"3016 · certificate 072796"} hi={"3016 · प्रमाण-पत्र 072796"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"File no."} hi={"पत्रावली संख्या"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                1-156446 (2008–2009)
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #E2D9C8", fontSize: "15px", background: "#F9F5EC" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"Renewed for"} hi={"नवीकरण अवधि"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                <L en={"Five years from 05-02-2024"} hi={"05-02-2024 से पाँच वर्ष"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"Issued"} hi={"जारी दिनांक"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                03-02-2025
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 22px", fontSize: "15px", background: "#F9F5EC" }}>
              <span style={{ color: "#6E6459" }}>
                <L en={"Registered office"} hi={"पंजीकृत कार्यालय"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right" }}>
                <L en={"Village Sakatpur, P.O. Rasoolabad"} hi={"ग्राम सकतपुर, पो. रसूलाबाद"} />
                <br />
                <L en={"District Unnao, Uttar Pradesh"} hi={"जिला उन्नाव, उत्तर प्रदेश"} />
              </span>
            </div>
          </div>
          <a href={asset("/assets/doc-society-renewal.jpg")} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "14px", fontSize: "14px", color: "#9B1C1C", fontWeight: "600" }}>
            <L en={"Download full certificate ↓"} hi={"पूर्ण प्रमाण-पत्र डाउनलोड करें ↓"} />
          </a>
        </div>
        <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6", padding: "14px" }}>
          <img src={asset("/assets/doc-society-renewal.jpg")} alt="सोसाइटी नवीकरण प्रमाण-पत्र" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "14px 6px 4px", fontSize: "13px", color: "#6E6459" }}>
            <L en={"Form 9 · Rule 8(2) · Registrar of Societies, Uttar Pradesh"} hi={"प्रारूप 9 · नियम 8(2) · सोसाइटी के रजिस्ट्रार, उत्तर प्रदेश"} />
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "22px" }}>
          <L en={"Other statutory records"} hi={"अन्य अभिलेख"} />
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "22px" }}>
          <a href={asset("/assets/doc-csr1.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #E2D9C8", background: "#FFFCF6", display: "block" }}>
            <img src={asset("/assets/doc-csr1.jpg")} alt="Form CSR-1" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
                <L en={"Form CSR-1 · MCA"} hi={"फॉर्म CSR-1 · MCA"} />
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A423A" }}>
                <L en={"Registration of entities for undertaking CSR activities — Section 135, Companies Act 2013; Rule 4(1) & 4(2), CSR Policy Rules 2014"} hi={"CSR गतिविधियाँ संचालित करने वाली संस्थाओं का पंजीकरण — धारा 135, कंपनी अधिनियम 2013; नियम 4(1) एवं 4(2), CSR नीति नियम 2014"} />
                <br />
                <L en={"Society · Reg. no."} hi={"सोसाइटी · पंजीकरण सं."} />
                {" "}
                <span style={{ fontWeight: "600" }}>
                  032149
                </span>
                {" "}
                <L en={"· Incorporated 05/02/2009"} hi={"· स्थापना 05/02/2009"} />
                <br />
                <L en={"Registered under 12A, approved under 80G"} hi={"12A के अंतर्गत पंजीकृत, 80G के अंतर्गत स्वीकृत"} />
              </div>
            </div>
          </a>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <img src={asset("/assets/doc-darpan.png")} alt="NITI Aayog DARPAN" style={{ width: "100%", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
                <L en={"NITI Aayog DARPAN"} hi={"नीति आयोग DARPAN"} />
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A423A" }}>
                <L en={"DARPAN ID"} hi={"DARPAN आईडी"} />
                {" "}
                <span style={{ fontWeight: "600" }}>
                  UP/2025/0652369
                </span>
                {" "}
                <L en={"· Active"} hi={"· सक्रिय"} />
                <br />
                <L en={"Registered district — Unnao (UP) · Registration year 2009"} hi={"पंजीकृत जिला — उन्नाव (उ.प्र.) · पंजीकरण वर्ष 2009"} />
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <img src={asset("/assets/doc-estamp.jpg")} alt="e-Stamp certificate" style={{ width: "100%", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "22px" }}>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "8px" }}>
                <L en={"Government of UP e-Stamp"} hi={"उत्तर प्रदेश सरकार ई-स्टाम्प"} />
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A423A" }}>
                <L en={"Account ref. NEWIMPACC (SV)/up14888204/Sarojini Nagar/UP-LKN"} hi={"खाता संदर्भ NEWIMPACC (SV)/up14888204/Sarojini Nagar/UP-LKN"} />
                <br />
                <L en={"Article 4 Affidavit · Sanskarit Yuva Aadarsh Samiti"} hi={"अनुच्छेद 4 शपथ-पत्र · संस्कारित युवा आदर्श समिति"} />
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#EDE5D6", padding: "26px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              <L en={"Income-tax registration"} hi={"आयकर पंजीकरण"} />
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.85", color: "#4A423A" }}>
              PAN — AAPAS6190R
              <br />
              <L en={"12A — AAPAS6190RE20251 (Form 10AC, 20-08-2025)"} hi={"12A — AAPAS6190RE20251 (फॉर्म 10AC, 20-08-2025)"} />
              <br />
              <L en={"80G — AAPAS6190RF20251 (Form 10AC, 20-08-2025)"} hi={"80G — AAPAS6190RF20251 (फॉर्म 10AC, 20-08-2025)"} />
              <br />
              <L en={"Assessment years 2026-27 to 2028-29"} hi={"निर्धारण वर्ष 2026-27 से 2028-29"} />
              <br />
              <L en={"Nature — religious cum charitable"} hi={"प्रकृति — धार्मिक सह धर्मार्थ"} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "auto", fontSize: "14px", fontWeight: "600" }}>
              <a href={asset("/assets/doc-12a.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C" }}>
                12A ↓
              </a>
              <a href={asset("/assets/doc-80g.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C" }}>
                80G ↓
              </a>
              <a href={asset("/assets/doc-trust-deed.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C" }}>
                <L en={"Trust deed ↓"} hi={"ट्रस्ट डीड ↓"} />
              </a>
              <a href={asset("/assets/doc-accounts.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "#9B1C1C" }}>
                <L en={"Accounts ↓"} hi={"लेखा ↓"} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(16px, 2.5vw, 36px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
              <L en={"Annexure"} hi={"अनुलग्नक"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(21px, 2.6vw, 38px)", fontWeight: "600", lineHeight: "1.3" }}>
              <L en={"Messages of Appreciation & Good Wishes"} hi={"प्रेरणा एवं शुभकामना संदेश"} />
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", color: "#B7AC9C", marginTop: "6px" }}>
              <L en={"प्रेरणा एवं शुभकामना संदेश"} hi={"Messages of Appreciation & Good Wishes"} />
            </div>
          </div>
          <div className="tr" style={{ fontSize: "14px", color: "#9C9287", textAlign: "right", maxWidth: "280px", lineHeight: "1.7" }}>
            <L en={"Messages received in future will be added to this annexure"} hi={"आगे प्राप्त होने वाले संदेश इसी अनुलग्नक में जोड़े जाएँगे"} />
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600", marginBottom: "22px", color: "#F6F1E7" }}>
          <L en={"Letter from the Hon'ble Defence Minister"} hi={"माननीय रक्षा मंत्री जी का पत्र"} />
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(16px, 3.1vw, 44px)", alignItems: "start" }}>
          <div style={{ background: "#FFFCF6", border: "1px solid #3B342B", padding: "16px" }}>
            <a href={asset("/assets/letter-rajnath-singh.pdf")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 3.1vw, 44px) clamp(16px, 2.8vw, 40px)" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "26px" }}>
                <L en={"Government of India · Ministry of Defence"} hi={"भारत सरकार · रक्षा मंत्रालय"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", lineHeight: "1.4", marginBottom: "14px" }}>
                <L en={"Letter from the Hon'ble Defence Minister"} hi={"माननीय रक्षा मंत्री"} />
                <br />
                <L en={"Shri Rajnath Singh"} hi={"श्री राजनाथ सिंह जी का पत्र"} />
              </div>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#B7AC9C", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
                <L en={"माननीय रक्षा मंत्री श्री राजनाथ सिंह जी का पत्र"} hi={"Letter from the Hon'ble Union Minister of Defence"} />
              </div>
              <div className="rf" style={{ borderTop: "1px solid #3B342B", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: "14px", color: "#9C9287" }}>
                  <L en={"Message of inspiration & good wishes · 1 page"} hi={"प्रेरणा एवं शुभकामना संदेश · 1 पृष्ठ"} />
                </div>
                <div style={{ fontSize: "15px", color: "#E8B24C", fontWeight: "600" }}>
                  <L en={"Open letter ↗"} hi={"पत्र खोलें ↗"} />
                </div>
              </div>
            </a>
            <div style={{ padding: "14px 8px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "13px", color: "#6E6459" }}>
                <L en={"Original letter (PDF)"} hi={"मूल पत्र (PDF)"} />
              </div>
              <a href={asset("/assets/letter-rajnath-singh.pdf")} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Download ↓"} hi={"डाउनलोड ↓"} />
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "18px", textWrap: "pretty" }}>
              <L en={"\"A message from the Hon'ble Defence Minister Shri Rajnath Singh\""} hi={"\"माननीय रक्षा मंत्री श्री राजनाथ सिंह जी का संदेश\""} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.85", color: "#DCD2C2", borderLeft: "2px solid #C8651B", paddingLeft: "22px", marginBottom: "clamp(16px, 2.4vw, 34px)", textWrap: "pretty" }}>
              <L en={"\"A message of appreciation and good wishes from the Hon'ble Defence Minister for the aims of the Veda Vasundhara Model and its efforts to develop knowledge, character, leadership and social responsibility among young people.\""} hi={"\"वेद वसुंधरा मॉडल के उद्देश्यों एवं युवाओं में ज्ञान, चरित्र, नेतृत्व एवं सामाजिक उत्तरदायित्व के विकास के प्रयासों के प्रति माननीय रक्षा मंत्री जी द्वारा व्यक्त प्रशंसा एवं शुभकामना संदेश।\""} />
            </div>
            <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "16px", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
              <div>
                <img src={asset("/assets/ev-rajnath-book.jpg")} alt="माननीय रक्षा मंत्री जी को पुस्तक भेंट" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
              </div>
              <div>
                <img src={asset("/assets/ev-rajnath-talk.jpg")} alt="माननीय रक्षा मंत्री जी से भेंट" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <img src={asset("/assets/ev-rajnath-child.jpg")} alt="माननीय रक्षा मंत्री जी से भेंट" style={{ width: "100%", height: "clamp(144px, 16.7vw, 240px)", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "8px" }}>
                <img src={asset("/assets/ev-defence-minister-kids.jpg")} alt="बच्चों की लोकसभा यात्रा — माननीय रक्षा मंत्री जी से भेंट" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "center 40%", display: "block" }} />
                <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#B7AC9C" }}>
                  <L en={"Children's visit to the Lok Sabha — meeting the Hon'ble Defence Minister"} hi={"बच्चों की लोकसभा यात्रा — माननीय रक्षा मंत्री जी से भेंट"} />
                </span>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#9C9287", lineHeight: "1.7" }}>
              <L en={"Meeting the Hon'ble Defence Minister Shri Rajnath Singh — presenting a book and discussing the Veda Vasundhara Model."} hi={"माननीय रक्षा मंत्री श्री राजनाथ सिंह जी से भेंट — पुस्तक भेंट एवं वेद वसुंधरा मॉडल पर चर्चा।"} />
            </div>
          </div>
        </div>
        <div className="rg2" style={{ marginTop: "clamp(16px, 3.1vw, 44px)", paddingTop: "clamp(16px, 2.2vw, 32px)", borderTop: "1px solid #2B241C", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "2px", background: "#2B241C" }}>
          <div style={{ background: "#1C1712", padding: "26px" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
              <L en={"Awaited"} hi={"प्रतीक्षित"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
              <L en={"Messages from senior dignitaries"} hi={"उच्च पदस्थ महानुभावों के संदेश"} />
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.75", color: "#9C9287" }}>
              <L en={"Further messages from senior dignitaries are expected; each will be added to this annexure as a letter with its own citation."} hi={"वरिष्ठ महानुभावों के अन्य संदेश अपेक्षित हैं; प्रत्येक संदेश अपने संदर्भ सहित पत्र के रूप में इस अनुलग्नक में जोड़ा जाएगा।"} />
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "26px" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
              <L en={"Institutional"} hi={"संस्थागत"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
              <L en={"Uttar Pradesh State Women's Commission"} hi={"उत्तर प्रदेश राज्य महिला आयोग"} />
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.75", color: "#9C9287" }}>
              <L en={"Smt. Aparna Yadav, Vice-Chairperson — participation and honour at Prerna Vimarsh 2024."} hi={"श्रीमती अपर्णा यादव, उपाध्यक्ष — प्रेरणा विमर्श 2024 में सहभागिता एवं सम्मान।"} />
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "26px" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
              <L en={"Publisher"} hi={"प्रकाशक"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
              Walnut Publication
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.75", color: "#9C9287" }}>
              <L en={"\"Your principal works will surely inspire young people to choose the right direction.\""} hi={"\"आपकी प्रमुख कृतियाँ निश्चित रूप से युवाओं को सही दिशा अपनाने के लिए प्रेरित करेंगी।\""} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#1C1712", color: "#F6F1E7", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", borderTop: "1px solid #2B241C" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
              <L en={"Raj Bhavan, Uttar Pradesh"} hi={"राजभवन, उत्तर प्रदेश"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: "600", lineHeight: "1.35" }}>
              <L en={"Message from the Hon'ble Governor"} hi={"माननीया राज्यपाल जी का सन्देश"} />
            </div>
          </div>
          <div className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#9C9287", textAlign: "right" }}>
            <L en={"Jan Bhavan, Lucknow — 226 027"} hi={"जन भवन, लखनऊ — 226 027"} />
            <br />
            <L en={"14 September 2026"} hi={"14 सितम्बर, 2026"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.05fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "start" }}>
          <a href={asset("/assets/letter-governor.pdf")} target="_blank" rel="noopener noreferrer" style={{ display: "block", border: "1px solid #3B342B", background: "#FFFCF6", padding: "14px", textDecoration: "none" }}>
            <img src={asset("/assets/letter-governor-web.png")} alt="माननीया राज्यपाल श्रीमती आनंदीबेन पटेल का सन्देश" style={{ width: "100%", display: "block" }} />
            <div style={{ padding: "14px 8px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
                <L en={"Original"} hi={"मूल पत्र"} />
              </span>
              <span style={{ fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Download ↓"} hi={"डाउनलोड ↓"} />
              </span>
            </div>
          </a>
          <div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
              <L en={"Smt. Anandiben Patel"} hi={"श्रीमती आनंदीबेन पटेल"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", color: "#E8B24C", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
              <L en={"Governor, Uttar Pradesh"} hi={"राज्यपाल, उत्तर प्रदेश"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.95", color: "#DCD2C2", borderLeft: "2px solid #C8651B", paddingLeft: "24px", textWrap: "pretty" }}>
              <L en={"\"I am pleased to learn that Sanskarit Yuva Aadarsh Samiti, Lucknow, is striving through the 'Veda Vasundhara Model' to connect young people with the knowledge of the Vedas, Indian values and life values."} hi={"\"यह जानकर प्रसन्नता हुई कि संस्कारित युवा आदर्श समिति, लखनऊ द्वारा 'वेद वसुंधरा मॉडल' के माध्यम से वेदों के ज्ञान, भारतीय संस्कारों एवं जीवन–मूल्यों को युवाओं से जोड़ने का प्रयास किया जा रहा है।"} />
              <br />
              <br />
              <L en={"Today it is necessary that the values of our rich knowledge tradition become part of the life and conduct of the new generation. I hope this initiative of the organisation will prove useful in developing positive thinking, self-confidence, leadership ability and a sense of social responsibility among young people and women."} hi={"आज आवश्यकता है कि हमारी समृद्ध ज्ञान–परंपरा के मूल्यों को नई पीढ़ी के जीवन और आचरण का हिस्सा बनाया जाए। आशा है कि संस्था की यह पहल युवाओं एवं महिलाओं में सकारात्मक सोच, आत्मविश्वास, नेतृत्व क्षमता तथा सामाजिक दायित्व की भावना विकसित करने में उपयोगी सिद्ध होगी।"} />
              <br />
              <br />
              <L en={"My heartfelt good wishes for the success of the 'Veda Vasundhara Model' and the Samiti's future efforts.\""} hi={"'वेद वसुंधरा मॉडल' की सफलता एवं समिति के भावी प्रयासों के लिए मेरी हार्दिक शुभकामनाएँ।\""} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "24px" }}>
          <L en={"Record of work"} hi={"कार्य अभिलेख"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0", borderTop: "1px solid #E2D9C8" }}>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"15 Dec 2023"} hi={"15 दिसम्बर 2023"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L en={"Nari Shakti Rashtra Vandan Yajna — Prerna Vimarsh 2023"} hi={"नारी शक्ति राष्ट्र वंदन यज्ञ — प्रेरणा विमर्श 2023"} />
              </div>
              <div style={{ fontSize: "15px", color: "#6E6459", lineHeight: "1.7" }}>
                <L en={"108-kund yajna; participation of 648 mothers and sisters. Conducted by chief acharya Dr. Praveen Vidyalankar, with 11 brahmacharinis of Kanya Gurukul Hathras."} hi={"108 कुंडीय यज्ञ; 648 माताओं–बहनों की सहभागिता। संचालन मुख्य आचार्य — डॉ. प्रवीण विद्यालंकार, कन्या गुरुकुल हाथरस की 11 ब्रह्मचारिणियों सहित।"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}>
              <L en={"Gautam Buddha University, Greater Noida"} hi={"गौतम बुद्ध विश्वविद्यालय, ग्रेटर नोएडा"} />
            </div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              2024
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L en={"Prerna Vimarsh 2024: Panch Parivartan — chief guest"} hi={"प्रेरणा विमर्श 2024 : पंच परिवर्तन — मुख्य अतिथि"} />
              </div>
              <div style={{ fontSize: "15px", color: "#6E6459", lineHeight: "1.7" }}>
                <L en={"Nari Shakti Rashtra Vandan Yajna; joined on the dais by the Vice-Chairperson of the UP State Women's Commission and the President of the Prerna Shodh Sansthan Nyas."} hi={"नारी शक्ति राष्ट्र वंदन यज्ञ; मंच पर उत्तर प्रदेश राज्य महिला आयोग की उपाध्यक्ष एवं प्रेरणा शोध संस्थान न्यास की अध्यक्ष सहभागी।"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}>
              <L en={"Prerna Shodh Sansthan Nyas"} hi={"प्रेरणा शोध संस्थान न्यास"} />
            </div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"15 Jul 2025"} hi={"15 जुलाई 2025"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L en={"The role of education in character building — special guest"} hi={"चरित्र निर्माण में शिक्षा की भूमिका — विशिष्ट अतिथि"} />
              </div>
              <div style={{ fontSize: "15px", color: "#6E6459", lineHeight: "1.7" }}>
                <L en={"Educational seminar during the foundation-day week of the Shiksha Sanskriti Utthan Nyas."} hi={"शिक्षा संस्कृति उत्थान न्यास के स्थापना दिवस सप्ताह पर शैक्षिक संगोष्ठी।"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}>
              <L en={"Shiksha Sanskriti Utthan Nyas, Meerut region"} hi={"शिक्षा संस्कृति उत्थान न्यास, मेरठ प्रान्त"} />
            </div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"21–23 Dec 2025"} hi={"21–23 दिसम्बर 2025"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L en={"All India Arya Mahasammelan — keynote speaker"} hi={"अखिल भारतीय आर्य महासम्मेलन — मुख्य वक्ता"} />
              </div>
              <div style={{ fontSize: "15px", color: "#6E6459", lineHeight: "1.7" }}>
                <L en={"National convention held to mark 75 years of the Sarvadeshik Arya Pratinidhi Sabha."} hi={"सार्वदेशिक आर्य प्रतिनिधि सभा के 75 वर्ष के अवसर पर आयोजित महासम्मेलन।"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}>
              <L en={"Bhopal, Madhya Pradesh"} hi={"भोपाल, मध्य प्रदेश"} />
            </div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"12 Feb 2026"} hi={"12 फरवरी 2026"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L en={"Lecture series on the 202nd birth anniversary of Maharshi Dayanand Saraswati — honour"} hi={"महर्षि दयानंद सरस्वती की 202वीं जन्म जयंती व्याख्यान माला — सम्मान"} />
              </div>
              <div style={{ fontSize: "15px", color: "#6E6459", lineHeight: "1.7" }}>
                <L en={"Lecture and presentation of a memento."} hi={"व्याख्यान एवं स्मृति-चिह्न भेंट।"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}>
              <L en={"D.A.V. Degree College, Lucknow"} hi={"डी.ए.वी. डिग्री कॉलेज, लखनऊ"} />
            </div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"March 2026"} hi={"मार्च 2026"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L en={"Virat Hindu Sammelan — keynote speaker"} hi={"विराट हिन्दू सम्मेलन — मुख्य वक्ता"} />
              </div>
              <div style={{ fontSize: "15px", color: "#6E6459", lineHeight: "1.7" }}>
                <L en={"On the dais with Shri Kaushal Nath Ji Maharaj; Bharat Mata puja and address."} hi={"श्री कौशल नाथ जी महाराज के साथ मंचासीन; भारत माता पूजन एवं संबोधन।"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}>
              <L en={"Abanti Bai Basti, Chandrashekhar Azad Nagar, Harigarh"} hi={"अबन्ती बाई बस्ती, चन्द्रशेखर आजाद नगर, हरिगढ़"} />
            </div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"February 2025"} hi={"फरवरी 2025"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
                <L en={"Taruni Sammelan — keynote speaker"} hi={"तरुणी सम्मेलन — मुख्य वक्ता"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}></div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"March 2024"} hi={"मार्च 2024"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
                <L en={"Grand Matrishakti convention — chief guest"} hi={"विशाल मातृशक्ति सम्मेलन — मुख्य अतिथि"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}></div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E2D9C8", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"March 2025"} hi={"मार्च 2025"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
                <L en={"Maan Vandan Matrishakti programme — keynote speaker"} hi={"मान वंदन मातृशक्ति कार्यक्रम — मुख्य वक्ता"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}></div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 260px", gap: "24px", padding: "20px 0", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "16px", color: "#9B1C1C" }}>
              <L en={"November 2024"} hi={"नवम्बर 2024"} />
            </div>
            <div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "6px" }}>
                <L en={"National Kavi Sammelan — poetry recitation"} hi={"राष्ट्रीय कवि सम्मेलन — काव्य पाठ"} />
              </div>
              <div style={{ fontSize: "15px", color: "#6E6459", lineHeight: "1.7" }}>
                <L en={"Organised by the Ministry of Tourism & Culture, Uttar Pradesh, and convened by the Arya Pratinidhi Sabha, Uttar Pradesh."} hi={"पर्यटन एवं संस्कृति मंत्रालय, उत्तर प्रदेश द्वारा आयोजित एवं आर्य प्रतिनिधि सभा उत्तर प्रदेश द्वारा संयोजित।"} />
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#4A423A" }}>
              <L en={"Farrukhabad, Uttar Pradesh"} hi={"फर्रुखाबाद, उत्तर प्रदेश"} />
            </div>
          </div>
        </div>
      </div>

      <div className="rf" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600" }}>
          <L en={"All records are available for verification"} hi={"सत्यापन हेतु सभी अभिलेख उपलब्ध हैं"} />
        </div>
        <div style={{ fontSize: "15px", opacity: ".9" }}>
          vedvasundharamodel.org.in
        </div>
      </div>
    </>
  );
}
