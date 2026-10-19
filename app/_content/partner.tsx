import type { Lang } from "../i18n";
import { localHref } from "../i18n";
import L from "../lang";
import { asset } from "../asset";
import EnquiryForm from "../enquiry-form";
import Link from "next/link";

export default function PartnerPage({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="rg1" style={{ padding: "clamp(25px, 4.9vw, 70px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "clamp(23px, 4.4vw, 64px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#C8651B", marginBottom: "18px" }}>
            <L lang={lang} en={"CSR partnership"} hi={"CSR साझेदारी"} />
          </div>
          <h1 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(28px, 3.5vw, 50px)", lineHeight: "1.15", marginBottom: "20px", textWrap: "pretty" }}>
            <L lang={lang} en={"Support a workshop, reach a generation"} hi={"एक कार्यशाला को सहयोग दें, एक पीढ़ी तक पहुँचें"} />
            <br />
            <span style={{ fontSize: "clamp(20px, 2.4vw, 34px)", color: "#6E6459", fontFamily: "'Marcellus',serif" }}>
              <L lang={lang} en={"एक कार्यशाला को सहयोग दें, नेतृत्वकर्ताओं की एक पीढ़ी तक पहुँचें।"} hi={"Fund a workshop. Reach a generation of leaders."} />
            </span>
          </h1>
          <div style={{ fontSize: "17px", lineHeight: "1.75", color: "#6E6459" }}>
            <L lang={lang} en={"Phase I is a programme of three-day leadership workshops for women and youth in schools and colleges, with pre and post assessment against a five-dimension index and full documentation of every session."} hi={"चरण I विद्यालयों एवं महाविद्यालयों में महिलाओं एवं युवाओं के लिए त्रिदिवसीय नेतृत्व कार्यशालाओं का कार्यक्रम है — पाँच-आयामी सूचकांक पर पूर्व एवं पश्चात मूल्यांकन तथा प्रत्येक सत्र के पूर्ण दस्तावेज़ीकरण के साथ।"} />
          </div>
        </div>
        <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px)" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#6E6459", marginBottom: "18px" }}>
            <L lang={lang} en={"Programme summary"} hi={"कार्यक्रम सारांश"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E2D9C8", paddingBottom: "10px" }}>
              <span style={{ color: "#6E6459" }}>
                <L lang={lang} en={"Project phase"} hi={"परियोजना चरण"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                <L lang={lang} en={"Phase I"} hi={"चरण I"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E2D9C8", paddingBottom: "10px" }}>
              <span style={{ color: "#6E6459" }}>
                <L lang={lang} en={"Programme"} hi={"कार्यक्रम"} />
              </span>
              <span className="tr" style={{ fontWeight: "600", textAlign: "right" }}>
                <L lang={lang} en={"Three-day youth"} hi={"त्रिदिवसीय युवा"} />
                <br />
                <L lang={lang} en={"leadership workshops"} hi={"नेतृत्व कार्यशालाएँ"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E2D9C8", paddingBottom: "10px" }}>
              <span style={{ color: "#6E6459" }}>
                <L lang={lang} en={"Target group"} hi={"लक्षित समूह"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                <L lang={lang} en={"Women and youth"} hi={"महिलाएँ एवं युवा"} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 3.1vw, 44px)", alignItems: "center" }}>
        <a href={asset("/assets/letter-governor.pdf")} target="_blank" rel="noopener noreferrer" style={{ display: "block", border: "1px solid #3B342B", background: "#FFFCF6", padding: "10px" }}>
          <img src={asset("/assets/letter-governor-web.webp")} width={900} height={1300} alt="माननीया राज्यपाल जी का सन्देश" style={{ width: "100%", display: "block" }} />
        </a>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "16px" }}>
            <L lang={lang} en={"Raj Bhavan, Uttar Pradesh · 14 September 2026"} hi={"राजभवन, उत्तर प्रदेश · 14 सितम्बर 2026"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", lineHeight: "1.55", marginBottom: "18px", textWrap: "pretty" }}>
            <L lang={lang} en={"\"My heartfelt good wishes for the success of the 'Veda Vasundhara Model' and the Samiti's future efforts.\""} hi={"\"'वेद वसुंधरा मॉडल' की सफलता एवं समिति के भावी प्रयासों के लिए मेरी हार्दिक शुभकामनाएँ।\""} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", color: "#DCD2C2" }}>
            <L lang={lang} en={"Smt. Anandiben Patel — Governor, Uttar Pradesh"} hi={"श्रीमती आनंदीबेन पटेल — राज्यपाल, उत्तर प्रदेश"} />
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px)" }}>
        <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          <L lang={lang} en={"Ways to partner"} hi={"सहयोग के माध्यम"} />
        </h2>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "22px" }}>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #9B1C1C", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              <L lang={lang} en={"CSR grant"} hi={"सीएसआर अनुदान"} />
            </h3>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              <L lang={lang} en={"Fund a workshop cohort or a programme component. CSR-1 registered; audited utilisation certificates provided."} hi={"किसी कार्यशाला समूह या कार्यक्रम घटक को वित्तपोषित करें। CSR-1 पंजीकृत; अंकेक्षित उपयोगिता प्रमाण-पत्र उपलब्ध।"} />
            </div>
            <Link href={localHref(lang, "/contact")} style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              <L lang={lang} en={"Request the proposal ↓"} hi={"प्रस्ताव मंगाएँ ↓"} />
            </Link>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #C8651B", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              <L lang={lang} en={"Host a workshop"} hi={"कार्यशाला आयोजित करें"} />
            </h3>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              <L lang={lang} en={"Schools, colleges and universities can invite the three-day programme onto their campus."} hi={"विद्यालय, महाविद्यालय एवं विश्वविद्यालय त्रिदिवसीय कार्यक्रम को अपने परिसर में आमंत्रित कर सकते हैं।"} />
            </div>
            <Link href={localHref(lang, "/contact")} style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              <L lang={lang} en={"Institutional enquiry →"} hi={"संस्थागत पूछताछ →"} />
            </Link>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #2E5A3C", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              <L lang={lang} en={"Volunteer or train"} hi={"स्वयंसेवा"} />
            </h3>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              <L lang={lang} en={"Resource persons, subject experts and facilitators for leadership, culture and skill sessions."} hi={"नेतृत्व, संस्कृति एवं कौशल सत्रों के लिए संसाधन व्यक्ति, विषय विशेषज्ञ एवं सहायक प्रशिक्षक।"} />
            </div>
            <Link href={localHref(lang, "/contact")} style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              <L lang={lang} en={"Apply as a trainer →"} hi={"प्रशिक्षक के रूप में आवेदन करें →"} />
            </Link>
          </div>
          <div style={{ background: "#FFFCF6", borderTop: "3px solid #16110D", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <h3 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "12px" }}>
              <L lang={lang} en={"Donate"} hi={"सहयोग राशि"} />
            </h3>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#6E6459", marginBottom: "18px" }}>
              <L lang={lang} en={"Individual contributions towards workshop kits, handbooks and certificates. 80G exemption applies."} hi={"कार्यशाला किट, पुस्तिकाओं एवं प्रमाण-पत्रों हेतु व्यक्तिगत सहयोग। 80G छूट लागू।"} />
            </div>
            <Link href={localHref(lang, "/crowdfunding")} style={{ fontSize: "14px", color: "#9B1C1C", fontWeight: "600", display: "block" }}>
              <L lang={lang} en={"Contribute →"} hi={"सहयोग करें →"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(26px, 5vw, 72px)" }}>
        <div>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", marginBottom: "16px" }}>
            <L lang={lang} en={"Talk to us about a partnership"} hi={"साझेदारी हेतु संपर्क करें"} />
          </h2>
          <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#B7AC9C", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
            <L lang={lang} en={"Tell us what you want to support and we will send the detailed project proposal and our registration documents."} hi={"बताइए कि आप किस कार्य में सहयोग करना चाहते हैं — हम विस्तृत परियोजना प्रस्ताव एवं अपने पंजीकरण दस्तावेज़ भेजेंगे।"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#E5DDCE" }}>
            <div>
              <L lang={lang} en={"CSR-1 registered · 80G exemption · audited accounts"} hi={"CSR-1 पंजीकृत · 80G छूट · अंकेक्षित लेखा"} />
            </div>
            <div style={{ color: "#9C9287" }}>
              <L lang={lang} en={"Documents shared within two working days"} hi={"दस्तावेज़ दो कार्य-दिवसों में साझा किए जाते हैं"} />
            </div>
          </div>
          <a href={asset("/assets/doc-csr1.jpg")} target="_blank" rel="noopener noreferrer" className="rg1" style={{ marginTop: "clamp(16px, 1.9vw, 28px)", display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "22px", alignItems: "center", border: "1px solid #3B342B", padding: "14px", textDecoration: "none", color: "#F6F1E7" }}>
            <img src={asset("/assets/doc-csr1.jpg")} loading="lazy" decoding="async" width={1057} height={1364} alt="Form CSR-1 — MCA" style={{ width: "150px", height: "190px", objectFit: "cover", objectPosition: "top", display: "block", background: "#FFFCF6" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#E8B24C" }}>
                <L lang={lang} en={"Ministry of Corporate Affairs"} hi={"कॉर्पोरेट कार्य मंत्रालय"} />
              </div>
              <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(18px, 1.5vw, 22px)" }}>
                <L lang={lang} en={"Form CSR-1 registration"} hi={"Form CSR-1 पंजीकरण"} />
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#B7AC9C" }}>
                <L lang={lang} en={"Registered society under 12A & 80G · Reg. no. 032149 · 3-year track record ✓"} hi={"12A एवं 80G के अंतर्गत पंजीकृत सोसाइटी · पंजीकरण सं. 032149 · 3 वर्ष का कार्य-अनुभव ✓"} />
              </div>
              <div style={{ fontSize: "13px", color: "#E8B24C" }}>
                <L lang={lang} en={"View ↗"} hi={"देखें ↗"} />
              </div>
            </div>
          </a>
        </div>
        <EnquiryForm variant="partner" lang={lang} />
      </div>
    </>
  );
}
