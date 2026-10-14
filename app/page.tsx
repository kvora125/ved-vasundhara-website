import L from "./lang";
import { asset } from "./asset";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div style={{ position: "relative", background: "#1E1812", color: "#F6F1E7" }}>
        <img src={asset("/assets/hero-banner.jpg")} alt="वेद वसुंधरा मॉडल" style={{ width: "100%", height: "auto", display: "block" }} />
        <div style={{ position: "relative", padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px)", maxWidth: "940px", pointerEvents: "none" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", color: "#E8B24C", marginBottom: "8px" }}>
            <L en={"India's first ideological national campaign"} hi={"भारत का प्रथम वैचारिक राष्ट्रीय अभियान"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(31px, 3.9vw, 56px)", lineHeight: "1.25", fontWeight: "600", marginBottom: "18px", textWrap: "pretty" }}>
            <L en={"Inspiration from the Vedas, dialogue with modernity, and building India's future."} hi={"वेद से प्रेरणा, आधुनिकता से संवाद और भारत के भविष्य का निर्माण।"} />
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 25px)", lineHeight: "1.45", color: "#DCD2C2", maxWidth: "680px", marginBottom: "26px" }}>
            <L en={"Modern application of India's timeless knowledge tradition — building self-reliant, value-rooted youth and women leaders."} hi={"भारत की शाश्वत ज्ञान परंपरा का आधुनिक अनुप्रयोग — आत्मनिर्भर, मूल्यनिष्ठ युवा एवं नारी नेतृत्व का निर्माण।"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7", color: "#B7AC9C", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
            <L en={"A national initiative of Sanskarit Yuva Aadarsh Samiti (est. 2009), Lucknow, Uttar Pradesh"} hi={"संस्कारित युवा आदर्श समिति (स्थापना वर्ष 2009), लखनऊ, उत्तर प्रदेश की एक राष्ट्रीय पहल"} />
            <br />
            <L en={"Conceived by — Dr. Praveen Satyendra Vidyalankar"} hi={"परिकल्पना — डॉ. प्रवीण सत्येन्द्र विद्यालंकार"} />
          </div>
          <div style={{ display: "flex", gap: "14px", pointerEvents: "auto" }}>
            <Link href="/contact" style={{ background: "#C8651B", color: "#16110D", padding: "15px clamp(16px, 1.9vw, 28px)", fontSize: "15px", fontWeight: "600", borderRadius: "2px", fontFamily: "'Noto Sans Devanagari',sans-serif", display: "block" }}>
              <L en={"Register for a workshop"} hi={"कार्यशाला हेतु पंजीकरण"} />
            </Link>
            <Link href="/credentials" style={{ border: "1px solid #6B6053", padding: "15px clamp(16px, 1.9vw, 28px)", fontSize: "15px", borderRadius: "2px", fontFamily: "'Noto Sans Devanagari',sans-serif", display: "block", color: "inherit" }}>
              <L en={"View credentials & certificates"} hi={"प्रमाण एवं प्रमाण-पत्र देखें"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="rfw" style={{ background: "#FFFCF6", borderBottom: "1px solid #E2D9C8", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            <L en={"Knowledge"} hi={"ज्ञान"} />
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            <L en={"ज्ञान"} hi={"Knowledge"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            <L en={"Values"} hi={"संस्कार"} />
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            <L en={"संस्कार"} hi={"Values"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            <L en={"Culture"} hi={"संस्कृति"} />
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            <L en={"संस्कृति"} hi={"Culture"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            <L en={"Leadership"} hi={"नेतृत्व"} />
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            <L en={"नेतृत्व"} hi={"Leadership"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            <L en={"Service"} hi={"सेवा"} />
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            <L en={"सेवा"} hi={"Service"} />
          </div>
        </div>
      </div>

      <div className="rf" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(16px, 2.8vw, 40px)" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "10px" }}>
            <L en={"Motto"} hi={"आदर्श वाक्य"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600" }}>
            &quot;वयं राष्ट्रे जागृयाम पुरोहिताः&quot;
          </div>
        </div>
        <div className="nw tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", color: "#B7AC9C", textAlign: "right", whiteSpace: "nowrap" }}>
          संगच्छध्वं संवदध्वं सं वो मनांसि जानताम् ॥
        </div>
      </div>

      <div className="rf" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "20px clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600" }}>
          <L en={"Empowered, value-rooted women and youth — an empowered nation"} hi={"संस्कारित एवं सशक्त नारी–युवा, सशक्त राष्ट्र"} />
        </div>
        <div style={{ fontSize: "13px", letterSpacing: ".2em", textTransform: "uppercase", opacity: ".85" }}>
          <L en={"Campaign tagline"} hi={"अभियान घोष-वाक्य"} />
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(27px, 5.3vw, 76px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(23px, 4.4vw, 64px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "20px" }}>
            <L en={"Signature Philosophy"} hi={"हस्ताक्षर दर्शन"} />
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(24px, 3.1vw, 44px)", lineHeight: "1.18", marginBottom: "24px", textWrap: "pretty" }}>
            <L en={"Not Westernization — Modernization"} hi={"Westernization नहीं — Modernization"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.7", color: "#4A423A", marginBottom: "14px" }}>
            <L en={"The modern application of India's timeless knowledge tradition. Moving towards modernity while staying rooted."} hi={"भारत की शाश्वत ज्ञान परंपरा का आधुनिक अनुप्रयोग। जड़ों से जुड़े रहकर आधुनिकता की ओर।"} />
          </div>
          <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#6E6459" }}>
            <L en={"The Vedas are not read here as scripture alone. They are read as a body of knowledge about how to live, how to hold a family and a society together, and how to keep balance with nature."} hi={"यहाँ वेदों को केवल धर्मग्रंथ के रूप में नहीं पढ़ा जाता। उन्हें ज्ञान के उस भंडार के रूप में पढ़ा जाता है जो सिखाता है कि जीवन कैसे जिया जाए, परिवार और समाज को कैसे जोड़े रखा जाए, और प्रकृति के साथ संतुलन कैसे बनाए रखा जाए।"} />
          </div>
        </div>
        <div style={{ borderLeft: "3px solid #C8651B", padding: "6px 0 6px clamp(16px, 2.2vw, 32px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.65", color: "#16110D", fontWeight: "500", textWrap: "pretty" }}>
            <L en={"\"Just as a tree draws strength from its roots and grows towards the sky, may young people draw strength from their roots and grow towards the future.\""} hi={"\"जिस प्रकार वृक्ष अपनी जड़ों से शक्ति लेकर आकाश की ओर बढ़ता है, उसी प्रकार युवा अपनी जड़ों से शक्ति लेकर भविष्य की ओर बढ़े।\""} />
          </div>
          <div style={{ marginTop: "22px", fontSize: "14px", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9287" }}>
            <L en={"Founder & Visionary"} hi={"संस्थापक एवं परिकल्पनाकार"} />
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(21px, 2.6vw, 38px)" }}>
            <L en={"The model, in three stages"} hi={"त्रिस्तरीय मॉडल"} />
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459" }}>
            <L en={"Veda Vasundhara 1.0 · 2.0 · 3.0"} hi={"वेद वसुंधरा 1.0 · 2.0 · 3.0"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          <div style={{ background: "#FFFCF6", borderTop: "4px solid #9B1C1C", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "15px", letterSpacing: ".24em", color: "#9B1C1C", marginBottom: "18px" }}>
              1.0
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "14px" }}>
              <L en={"Three-day women–youth leadership & personality development workshop"} hi={"त्रिदिवसीय नारी–युवा नेतृत्व एवं व्यक्तित्व विकास कार्यशाला"} />
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "22px" }}>
              <L en={"Three-day leadership and personality development workshop in schools and colleges. Phase I of the campaign."} hi={"विद्यालयों एवं महाविद्यालयों में त्रिदिवसीय नेतृत्व एवं व्यक्तित्व विकास कार्यशाला। अभियान का प्रथम चरण।"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#4A423A" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  <L en={"Phase"} hi={"चरण"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  <L en={"I — active"} hi={"I — सक्रिय"} />
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  <L en={"Target group"} hi={"लक्षित समूह"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  <L en={"Women & youth"} hi={"महिलाएँ एवं युवा"} />
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "15px", letterSpacing: ".24em", color: "#C8651B", marginBottom: "18px" }}>
              2.0
            </div>
            <div style={{ fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "14px", fontFamily: "'Marcellus',serif" }}>
              <L en={"National Digital Platform & Online Application"} hi={"राष्ट्रीय डिजिटल मंच एवं ऑनलाइन आवेदन"} />
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "22px" }}>
              <L en={"Online registration, applicant profiles, document verification and a transparent digital database for the campaign."} hi={"अभियान हेतु ऑनलाइन पंजीकरण, अभ्यर्थी प्रोफाइल, दस्तावेज़ सत्यापन एवं पारदर्शी डिजिटल डेटाबेस।"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#4A423A" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  <L en={"Stage"} hi={"स्तर"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  3
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  <L en={"Duration"} hi={"अवधि"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  <L en={"Months 2–4"} hi={"माह 2–4"} />
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  <L en={"Outcome"} hi={"परिणाम"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  <L en={"Scalable system"} hi={"विस्तार योग्य व्यवस्था"} />
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "4px solid #2E5A3C", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "15px", letterSpacing: ".24em", color: "#2E5A3C", marginBottom: "18px" }}>
              3.0
            </div>
            <div style={{ fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "14px", fontFamily: "'Marcellus',serif" }}>
              <L en={"National Awareness & Youth Outreach Campaign"} hi={"राष्ट्रीय जनजागरण एवं युवा आउटरीच अभियान"} />
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "22px" }}>
              <L en={"Taking the model to a national scale through outreach, media documentation and a standing youth network."} hi={"आउटरीच, मीडिया दस्तावेज़ीकरण एवं स्थायी युवा नेटवर्क के माध्यम से मॉडल को राष्ट्रीय स्तर तक ले जाना।"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#4A423A" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  <L en={"Stage"} hi={"स्तर"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  4
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  <L en={"Duration"} hi={"अवधि"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  <L en={"Months 2–4"} hi={"माह 2–4"} />
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  <L en={"Horizon"} hi={"लक्ष्य वर्ष"} />
                </span>
                <span style={{ fontWeight: "600" }}>
                  2040
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(20px, 3.9vw, 56px)", alignItems: "center", background: "#FFFCF6", borderTop: "1px solid #E2D9C8" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#2E5A3C", marginBottom: "16px" }}>
            <L en={"Registered & accountable"} hi={"पंजीकृत एवं उत्तरदायी"} />
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1.25", marginBottom: "16px" }}>
            <L en={"Every registration and certificate, in one place"} hi={"प्रत्येक पंजीकरण एवं प्रमाण-पत्र, एक ही स्थान पर"} />
            <br />
            <span style={{ fontFamily: "'Marcellus',serif" }}>
              <L en={"प्रत्येक पंजीकरण, स्वीकृति एवं प्रमाण-पत्र, एक ही स्थान पर प्रकाशित।"} hi={"Every registration, approval and certificate, published in one place."} />
            </span>
          </div>
          <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#6E6459", marginBottom: "26px" }}>
            <L en={"Society registration, 12A, 80G and CSR-1 documents are available as downloadable scans, alongside workshop certificates and audited reports."} hi={"सोसाइटी पंजीकरण, 12A, 80G एवं CSR-1 दस्तावेज़ डाउनलोड योग्य स्कैन के रूप में उपलब्ध हैं — साथ ही कार्यशाला प्रमाण-पत्र एवं अंकेक्षित रिपोर्ट भी।"} />
          </div>
          <Link href="/credentials" style={{ display: "inline-block", border: "1px solid #2E5A3C", color: "#2E5A3C", padding: "13px 24px", fontSize: "14px", fontWeight: "600" }}>
            <L en={"Open the credentials page"} hi={"प्रमाण पृष्ठ खोलें"} />
          </Link>
        </div>
        <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }}>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              12A
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L en={"Income-tax registration"} hi={"आयकर पंजीकरण"} />
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              80G
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L en={"Donor tax exemption"} hi={"दानकर्ता कर छूट"} />
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              CSR-1
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L en={"MCA CSR eligibility"} hi={"MCA CSR पात्रता"} />
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              <L en={"Society"} hi={"सोसाइटी"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              <L en={"Registration certificate"} hi={"पंजीकरण प्रमाण-पत्र"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
