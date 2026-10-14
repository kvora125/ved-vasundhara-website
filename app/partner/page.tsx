import { asset } from "../asset";
import EnquiryForm from "../enquiry-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "सहयोग · Partner with us" };

export default function PartnerPage() {
  return (
    <>
      <div className="rg1" style={{ padding: "clamp(25px, 4.9vw, 70px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "clamp(23px, 4.4vw, 64px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#C8651B", marginBottom: "18px" }}>
            CSR partnership
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(28px, 3.5vw, 50px)", lineHeight: "1.15", marginBottom: "20px", textWrap: "pretty" }}>
            एक कार्यशाला को सहयोग दें, एक पीढ़ी तक पहुँचें
            <br />
            <span style={{ fontSize: "clamp(20px, 2.4vw, 34px)", color: "#6E6459", fontFamily: "'Marcellus',serif" }}>
              Fund a workshop. Reach a generation of leaders.
            </span>
          </div>
          <div style={{ fontSize: "17px", lineHeight: "1.75", color: "#6E6459" }}>
            Phase I is a programme of three-day leadership workshops for women and youth in schools and colleges, with pre and post assessment against a five-dimension index and full documentation of every session.
          </div>
        </div>
        <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px)" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#6E6459", marginBottom: "18px" }}>
            Programme summary
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E2D9C8", paddingBottom: "10px" }}>
              <span style={{ color: "#6E6459" }}>
                Project phase
              </span>
              <span style={{ fontWeight: "600" }}>
                Phase I
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E2D9C8", paddingBottom: "10px" }}>
              <span style={{ color: "#6E6459" }}>
                Programme
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right" }}>
                Three-day youth
                <br />
                leadership workshops
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E2D9C8", paddingBottom: "10px" }}>
              <span style={{ color: "#6E6459" }}>
                Target group
              </span>
              <span style={{ fontWeight: "600" }}>
                Women and youth
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 3.1vw, 44px)", alignItems: "center" }}>
        <a href={asset("/assets/letter-governor.pdf")} target="_blank" rel="noopener noreferrer" style={{ display: "block", border: "1px solid #3B342B", background: "#FFFCF6", padding: "10px" }}>
          <img src={asset("/assets/letter-governor-web.png")} alt="माननीया राज्यपाल जी का सन्देश" style={{ width: "100%", display: "block" }} />
        </a>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "16px" }}>
            राजभवन, उत्तर प्रदेश · 14 सितम्बर 2026
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", lineHeight: "1.55", marginBottom: "18px", textWrap: "pretty" }}>
            &quot;&apos;वेद वसुंधरा मॉडल&apos; की सफलता एवं समिति के भावी प्रयासों के लिए मेरी हार्दिक शुभकामनाएँ।&quot;
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", color: "#DCD2C2" }}>
            श्रीमती आनंदीबेन पटेल — राज्यपाल, उत्तर प्रदेश
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          सहयोग के माध्यम · Ways to partner
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "22px" }}>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #9B1C1C", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              सीएसआर अनुदान · CSR grant
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              Fund a workshop cohort or a programme component. CSR-1 registered; audited utilisation certificates provided.
            </div>
            <Link href="/contact" style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              Request the proposal ↓
            </Link>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #C8651B", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              कार्यशाला आयोजित करें · Host a workshop
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              Schools, colleges and universities can invite the three-day programme onto their campus.
            </div>
            <Link href="/contact" style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              Institutional enquiry →
            </Link>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #2E5A3C", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              स्वयंसेवा · Volunteer or train
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              Resource persons, subject experts and facilitators for leadership, culture and skill sessions.
            </div>
            <Link href="/contact" style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              Apply as a trainer →
            </Link>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #16110D", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              सहयोग राशि · Donate
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              Individual contributions towards workshop kits, handbooks and certificates. 80G exemption applies.
            </div>
            <Link href="/crowdfunding" style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              Contribute →
            </Link>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(26px, 5vw, 72px)" }}>
        <div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", marginBottom: "16px" }}>
            साझेदारी हेतु संपर्क करें · Talk to us about a partnership
          </div>
          <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#B7AC9C", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
            Tell us what you want to support and we will send the detailed project proposal and our registration documents.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#E5DDCE" }}>
            <div>
              CSR-1 registered · 80G exemption · audited accounts
            </div>
            <div style={{ color: "#9C9287" }}>
              Documents shared within two working days
            </div>
          </div>
          <a href={asset("/assets/doc-csr1.jpg")} target="_blank" rel="noopener noreferrer" className="rg1" style={{ marginTop: "clamp(16px, 1.9vw, 28px)", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "22px", alignItems: "center", border: "1px solid #3B342B", padding: "14px", textDecoration: "none", color: "#F6F1E7" }}>
            <img src={asset("/assets/doc-csr1.jpg")} alt="Form CSR-1 — MCA" style={{ width: "150px", height: "190px", objectFit: "cover", objectPosition: "top", display: "block", background: "#FFFCF6" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#E8B24C" }}>
                Ministry of Corporate Affairs
              </div>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(18px, 1.5vw, 22px)" }}>
                Form CSR-1 पंजीकरण
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#B7AC9C" }}>
                Registered society under 12A &amp; 80G · Reg. no. 032149 · 3-year track record ✓
              </div>
              <div style={{ fontSize: "13px", color: "#E8B24C" }}>
                देखें ↗
              </div>
            </div>
          </a>
        </div>
        <EnquiryForm variant="partner" />
      </div>
    </>
  );
}
