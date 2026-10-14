import { asset } from "./asset";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div style={{ position: "relative", background: "#1E1812", color: "#F6F1E7" }}>
        <img src={asset("/assets/hero-banner.jpg")} alt="वेद वसुंधरा मॉडल" style={{ width: "100%", height: "auto", display: "block" }} />
        <div style={{ position: "relative", padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px)", maxWidth: "940px", pointerEvents: "none" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", color: "#E8B24C", marginBottom: "8px" }}>
            भारत का प्रथम वैचारिक राष्ट्रीय अभियान
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(31px, 3.9vw, 56px)", lineHeight: "1.25", fontWeight: "600", marginBottom: "18px", textWrap: "pretty" }}>
            वेद से प्रेरणा, आधुनिकता से संवाद और भारत के भविष्य का निर्माण।
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 25px)", lineHeight: "1.45", color: "#DCD2C2", maxWidth: "680px", marginBottom: "26px" }}>
            Modern application of India&apos;s timeless knowledge tradition — building self-reliant, value-rooted youth and women leaders.
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7", color: "#B7AC9C", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
            संस्कारित युवा आदर्श समिति (स्थापना वर्ष 2009), लखनऊ, उत्तर प्रदेश की एक राष्ट्रीय पहल
            <br />
            परिकल्पना — डॉ. प्रवीण सत्येन्द्र विद्यालंकार
          </div>
          <div style={{ display: "flex", gap: "14px", pointerEvents: "auto" }}>
            <Link href="/contact" style={{ background: "#C8651B", color: "#16110D", padding: "15px clamp(16px, 1.9vw, 28px)", fontSize: "15px", fontWeight: "600", borderRadius: "2px", fontFamily: "'Noto Sans Devanagari',sans-serif", display: "block" }}>
              कार्यशाला हेतु पंजीकरण
            </Link>
            <Link href="/credentials" style={{ border: "1px solid #6B6053", padding: "15px clamp(16px, 1.9vw, 28px)", fontSize: "15px", borderRadius: "2px", fontFamily: "'Noto Sans Devanagari',sans-serif", display: "block", color: "inherit" }}>
              प्रमाण एवं प्रमाण-पत्र देखें
            </Link>
          </div>
        </div>
      </div>

      <div className="rfw" style={{ background: "#FFFCF6", borderBottom: "1px solid #E2D9C8", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            ज्ञान
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            Knowledge
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            संस्कार
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            Values
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            संस्कृति
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            Culture
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            नेतृत्व
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            Leadership
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", borderLeft: "1px solid #E2D9C8", paddingLeft: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600" }}>
            सेवा
          </div>
          <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C8651B" }}>
            Service
          </div>
        </div>
      </div>

      <div className="rf" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(16px, 2.8vw, 40px)" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "10px" }}>
            आदर्श वाक्य
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
          संस्कारित एवं सशक्त नारी–युवा, सशक्त राष्ट्र
        </div>
        <div style={{ fontSize: "13px", letterSpacing: ".2em", textTransform: "uppercase", opacity: ".85" }}>
          Campaign tagline
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(27px, 5.3vw, 76px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(23px, 4.4vw, 64px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "20px" }}>
            Signature Philosophy
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(24px, 3.1vw, 44px)", lineHeight: "1.18", marginBottom: "24px", textWrap: "pretty" }}>
            Westernization नहीं — Modernization
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.7", color: "#4A423A", marginBottom: "14px" }}>
            भारत की शाश्वत ज्ञान परंपरा का आधुनिक अनुप्रयोग। जड़ों से जुड़े रहकर आधुनिकता की ओर।
          </div>
          <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#6E6459" }}>
            The Vedas are not read here as scripture alone. They are read as a body of knowledge about how to live, how to hold a family and a society together, and how to keep balance with nature.
          </div>
        </div>
        <div style={{ borderLeft: "3px solid #C8651B", padding: "6px 0 6px clamp(16px, 2.2vw, 32px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.65", color: "#16110D", fontWeight: "500", textWrap: "pretty" }}>
            &quot;जिस प्रकार वृक्ष अपनी जड़ों से शक्ति लेकर आकाश की ओर बढ़ता है, उसी प्रकार युवा अपनी जड़ों से शक्ति लेकर भविष्य की ओर बढ़े।&quot;
          </div>
          <div style={{ marginTop: "22px", fontSize: "14px", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9287" }}>
            Founder &amp; Visionary
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(21px, 2.6vw, 38px)" }}>
            त्रिस्तरीय मॉडल · The model, in three stages
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459" }}>
            Veda Vasundhara 1.0 · 2.0 · 3.0
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          <div style={{ background: "#FFFCF6", borderTop: "4px solid #9B1C1C", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "15px", letterSpacing: ".24em", color: "#9B1C1C", marginBottom: "18px" }}>
              1.0
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "14px" }}>
              त्रिदिवसीय नारी–युवा नेतृत्व एवं व्यक्तित्व विकास कार्यशाला
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "22px" }}>
              Three-day leadership and personality development workshop in schools and colleges. Phase I of the campaign.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#4A423A" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  Phase
                </span>
                <span style={{ fontWeight: "600" }}>
                  I — active
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  Target group
                </span>
                <span style={{ fontWeight: "600" }}>
                  Women &amp; youth
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "15px", letterSpacing: ".24em", color: "#C8651B", marginBottom: "18px" }}>
              2.0
            </div>
            <div style={{ fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "14px", fontFamily: "'Marcellus',serif" }}>
              National Digital Platform &amp; Online Application
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "22px" }}>
              Online registration, applicant profiles, document verification and a transparent digital database for the campaign.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#4A423A" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  Stage
                </span>
                <span style={{ fontWeight: "600" }}>
                  3
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  Duration
                </span>
                <span style={{ fontWeight: "600" }}>
                  माह 2–4
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  Outcome
                </span>
                <span style={{ fontWeight: "600" }}>
                  Scalable system
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "4px solid #2E5A3C", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "15px", letterSpacing: ".24em", color: "#2E5A3C", marginBottom: "18px" }}>
              3.0
            </div>
            <div style={{ fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "14px", fontFamily: "'Marcellus',serif" }}>
              National Awareness &amp; Youth Outreach Campaign
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "22px" }}>
              Taking the model to a national scale through outreach, media documentation and a standing youth network.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#4A423A" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  Stage
                </span>
                <span style={{ fontWeight: "600" }}>
                  4
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #D6CBB8", paddingBottom: "6px" }}>
                <span>
                  Duration
                </span>
                <span style={{ fontWeight: "600" }}>
                  माह 2–4
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  Horizon
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
            Registered &amp; accountable
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", lineHeight: "1.25", marginBottom: "16px" }}>
            प्रत्येक पंजीकरण एवं प्रमाण-पत्र, एक ही स्थान पर
            <br />
            <span style={{ fontFamily: "'Marcellus',serif" }}>
              Every registration, approval and certificate, published in one place.
            </span>
          </div>
          <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#6E6459", marginBottom: "26px" }}>
            Society registration, 12A, 80G and CSR-1 documents are available as downloadable scans, alongside workshop certificates and audited reports.
          </div>
          <Link href="/credentials" style={{ display: "inline-block", border: "1px solid #2E5A3C", color: "#2E5A3C", padding: "13px 24px", fontSize: "14px", fontWeight: "600" }}>
            Open the credentials page
          </Link>
        </div>
        <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }}>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              12A
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              Income-tax registration
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              80G
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              Donor tax exemption
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              CSR-1
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              MCA CSR eligibility
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "20px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "4px" }}>
              Society
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459" }}>
              Registration certificate
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
