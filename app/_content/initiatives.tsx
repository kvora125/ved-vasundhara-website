import type { Lang } from "../i18n";
import L from "../lang";
import { asset } from "../asset";

export default function InitiativesPage({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="rf" style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px) clamp(16px, 3.1vw, 44px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "clamp(16px, 2.8vw, 40px)" }}>
        <div>
          <h1 style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            <L lang={lang} en={"Initiatives"} hi={"पहल"} />
          </h1>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(25px, 3.2vw, 46px)", lineHeight: "1.2" }}>
            1.0 · 2.0 · 3.0
          </div>
        </div>
        <div className="nw" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", color: "#9B1C1C", whiteSpace: "nowrap" }}>
          <L lang={lang} en={"Knowledge → Values → Direction"} hi={"ज्ञान → संस्कार → दिशा"} />
        </div>
      </div>

      <div style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "flex", flexDirection: "column", gap: "2px", background: "#E2D9C8" }}>
        <div className="rg1" style={{ background: "#F6F1E7", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ borderLeft: "4px solid #9B1C1C", paddingLeft: "24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#9B1C1C", marginBottom: "14px" }}>
              1.0
            </div>
            <h2 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.3", marginBottom: "10px" }}>
              <L lang={lang} en={"Veda Vasundhara 1.0"} hi={"वेद वसुंधरा 1.0"} />
            </h2>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7", color: "#6E6459" }}>
              <L lang={lang} en={"Nari Yuva Shakti Mahotsav — from education, values and culture to self-awareness"} hi={"नारी युवा शक्ति महोत्सव — शिक्षा, संस्कार एवं संस्कृति से आत्मबोध तक"} />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignContent: "flex-start" }}>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Education"} hi={"शिक्षा"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Values"} hi={"संस्कार"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Culture"} hi={"संस्कृति"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Goal setting"} hi={"लक्ष्य निर्धारण"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Positive thinking"} hi={"सकारात्मक चिंतन"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Deliberation"} hi={"विचार-विमर्श"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Quiz"} hi={"प्रश्नोत्तरी"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Debate"} hi={"वाद-विवाद"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Speech"} hi={"भाषण"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Writing"} hi={"लेखन"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Art"} hi={"कला"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Storytelling"} hi={"कथा-वाचन"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Cultural expression"} hi={"सांस्कृतिक अभिव्यक्ति"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Leadership challenges"} hi={"नेतृत्व चुनौतियाँ"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Social-impact ideas"} hi={"सामाजिक प्रभाव के विचार"} />
            </span>
          </div>
        </div>
        <div className="rg1" style={{ background: "#F6F1E7", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ borderLeft: "4px solid #C8651B", paddingLeft: "24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#C8651B", marginBottom: "14px" }}>
              2.0
            </div>
            <h2 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.3", marginBottom: "10px" }}>
              <L lang={lang} en={"National Youth Excellence Initiative"} hi={"राष्ट्रीय युवा उत्कृष्टता पहल"} />
            </h2>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Ideal Young Man & Ideal Young Woman"} hi={"आदर्श युवा एवं आदर्श युवती"} />
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", lineHeight: "1.6", color: "#6E6459" }}>
              <L lang={lang} en={"National Youth Excellence Contest & Recognition Platform"} hi={"राष्ट्रीय युवा उत्कृष्टता प्रतियोगिता एवं सम्मान मंच"} />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Knowledge, thoughtfulness & awareness of current affairs"} hi={"ज्ञान, विचारशीलता एवं समसामयिक समझ"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Character, ethics & discipline"} hi={"चरित्र, नैतिकता एवं अनुशासन"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Leadership, decision-making & problem-solving"} hi={"नेतृत्व, निर्णय क्षमता एवं समस्या-समाधान"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Personality, confidence & expression"} hi={"व्यक्तित्व, आत्मविश्वास एवं अभिव्यक्ति"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Indian knowledge tradition, culture & heritage"} hi={"भारतीय ज्ञान परंपरा, संस्कृति एवं विरासत"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Social sensitivity, service & responsibility"} hi={"सामाजिक संवेदनशीलता, सेवा एवं उत्तरदायित्व"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"National awareness, civic duty & nation-building"} hi={"राष्ट्रबोध, नागरिक कर्तव्य एवं राष्ट्र निर्माण"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Environmental consciousness & sustainable living"} hi={"पर्यावरण चेतना एवं सतत जीवनशैली"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Digital awareness & responsible social media behaviour"} hi={"डिजिटल जागरूकता एवं जिम्मेदार सोशल मीडिया व्यवहार"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Achievement, innovation & social impact"} hi={"उपलब्धि, नवाचार एवं सामाजिक प्रभाव"} />
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                <L lang={lang} en={"Identification, certification, encouragement & national honour"} hi={"पहचान, प्रमाणन, प्रोत्साहन एवं राष्ट्रीय सम्मान"} />
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", borderTop: "1px solid #E2D9C8", paddingTop: "20px" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
                <L lang={lang} en={"The process in brief"} hi={"संक्षिप्त प्रक्रिया"} />
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                <L lang={lang} en={"Identify"} hi={"पहचान"} />
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                <L lang={lang} en={"Assess"} hi={"मूल्यांकन"} />
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                <L lang={lang} en={"Develop"} hi={"विकास"} />
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                <L lang={lang} en={"Recognize"} hi={"सम्मान"} />
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                <L lang={lang} en={"Inspire"} hi={"प्रेरणा"} />
              </span>
            </div>
          </div>
        </div>
        <div className="rg1" style={{ background: "#F6F1E7", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ borderLeft: "4px solid #2E5A3C", paddingLeft: "24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#2E5A3C", marginBottom: "14px" }}>
              3.0
            </div>
            <h2 style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.3", marginBottom: "10px" }}>
              <L lang={lang} en={"Veda Vasundhara 3.0"} hi={"वेद वसुंधरा 3.0"} />
            </h2>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7", color: "#6E6459" }}>
              <L lang={lang} en={"Modern application and global outreach of the Indian knowledge tradition"} hi={"भारतीय ज्ञान परंपरा का आधुनिक अनुप्रयोग एवं वैश्विक संवाहन"} />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignContent: "flex-start" }}>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Indian knowledge tradition"} hi={"भारतीय ज्ञान परंपरा"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Vedic philosophy & outlook on life"} hi={"वैदिक दर्शन एवं जीवन-दृष्टि"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Historical & cultural heritage"} hi={"ऐतिहासिक एवं सांस्कृतिक विरासत"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Pilgrimage & cultural tourism"} hi={"तीर्थ एवं सांस्कृतिक पर्यटन"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Knowledge, science & intellectual dialogue"} hi={"ज्ञान-विज्ञान एवं बौद्धिक संवाद"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Art, literature & culture"} hi={"कला, साहित्य एवं संस्कृति"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Youth research & innovation"} hi={"युवा शोध एवं नवाचार"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Inspiring stories of national heroes and heroines"} hi={"राष्ट्रीय नायकों एवं वीरांगनाओं की प्रेरक गाथाएँ"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Taking Indian culture to the world"} hi={"भारतीय संस्कृति का वैश्विक संवाहन"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"National unity & cultural consciousness"} hi={"राष्ट्रीय एकता एवं सांस्कृतिक चेतना"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Nature, environment & sustainable living"} hi={"प्रकृति, पर्यावरण एवं सतत जीवन"} />
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              <L lang={lang} en={"Modern application of the Indian knowledge tradition"} hi={"भारतीय ज्ञान परंपरा का आधुनिक अनुप्रयोग"} />
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(19px, 3.6vw, 52px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "26px" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L lang={lang} en={"Events held"} hi={"संपन्न आयोजन"} />
          </h2>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            2023 – 2026
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "24px" }}>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-prerna-banner.jpg")} width={1600} height={899} alt="प्रेरणा विमर्श — नारी शक्ति राष्ट्र वंदन यज्ञ" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                2023 · 2024
              </div>
              <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                <L lang={lang} en={"Prerna Vimarsh — Nari Shakti Rashtra Vandan Yajna"} hi={"प्रेरणा विमर्श — नारी शक्ति राष्ट्र वंदन यज्ञ"} />
              </h3>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"108-kund yajna with the participation of 648 mothers and sisters; conducted by chief acharya Dr. Praveen Vidyalankar. Theme of the 2024 edition — Panch Parivartan."} hi={"108 कुंडीय यज्ञ एवं 648 माताओं–बहनों की सहभागिता; संचालन मुख्य आचार्य — डॉ. प्रवीण विद्यालंकार। 2024 संस्करण का विषय — पंच परिवर्तन।"} />
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-virat-banner.jpg")} loading="lazy" decoding="async" width={1280} height={960} alt="विराट हिन्दू सम्मेलन" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                <L lang={lang} en={"Abanti Bai Basti, Harigarh"} hi={"अबन्ती बाई बस्ती, हरिगढ़"} />
              </div>
              <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                <L lang={lang} en={"Virat Hindu Sammelan"} hi={"विराट हिन्दू सम्मेलन"} />
              </h3>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"On the dais with Shri Kaushal Nath Ji Maharaj; Bharat Mata puja and address."} hi={"श्री कौशल नाथ जी महाराज के साथ मंचासीन; भारत माता पूजन एवं संबोधन।"} />
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-bhopal.jpg")} loading="lazy" decoding="async" width={1280} height={960} alt="अखिल भारतीय आर्य महासम्मेलन" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                <L lang={lang} en={"21–23 December 2025 · Bhopal"} hi={"21–23 दिसम्बर 2025 · भोपाल"} />
              </div>
              <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                <L lang={lang} en={"All India Arya Mahasammelan"} hi={"अखिल भारतीय आर्य महासम्मेलन"} />
              </h3>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Address at the national convention held to mark 75 years of the Sarvadeshik Arya Pratinidhi Sabha."} hi={"सार्वदेशिक आर्य प्रतिनिधि सभा के 75 वर्ष पूर्ण होने के अवसर पर आयोजित महासम्मेलन में संबोधन।"} />
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-dav-dais.jpg")} loading="lazy" decoding="async" width={1080} height={713} alt="महर्षि दयानंद सरस्वती 202वीं जन्म जयंती व्याख्यान माला" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                <L lang={lang} en={"12 February 2026 · Lucknow"} hi={"12 फरवरी 2026 · लखनऊ"} />
              </div>
              <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                <L lang={lang} en={"Lecture series on the 202nd birth anniversary of Maharshi Dayanand Saraswati"} hi={"महर्षि दयानंद सरस्वती 202वीं जन्म जयंती व्याख्यान माला"} />
              </h3>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Lecture and presentation of a memento at D.A.V. Degree College."} hi={"डी.ए.वी. डिग्री कॉलेज में व्याख्यान एवं स्मृति-चिह्न भेंट।"} />
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-sangoshthi.jpg")} loading="lazy" decoding="async" width={634} height={704} alt="चरित्र निर्माण में शिक्षा की भूमिका" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                <L lang={lang} en={"15 July 2025 · Meerut region"} hi={"15 जुलाई 2025 · मेरठ प्रान्त"} />
              </div>
              <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                <L lang={lang} en={"The role of education in character building"} hi={"चरित्र निर्माण में शिक्षा की भूमिका"} />
              </h3>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Educational seminar during the foundation-day week of the Shiksha Sanskriti Utthan Nyas — special guest."} hi={"शिक्षा संस्कृति उत्थान न्यास के स्थापना दिवस सप्ताह पर शैक्षिक संगोष्ठी — विशिष्ट अतिथि।"} />
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-kavi-1.jpg")} loading="lazy" decoding="async" width={1063} height={1222} alt="राष्ट्रीय कवि सम्मेलन" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                <L lang={lang} en={"Uttar Pradesh Tourism"} hi={"उत्तर प्रदेश पर्यटन"} />
              </div>
              <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                <L lang={lang} en={"National Kavi Sammelan"} hi={"राष्ट्रीय कवि सम्मेलन"} />
              </h3>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                <L lang={lang} en={"Poetry recitation at a convention organised by the Ministry of Tourism & Culture and convened by the Arya Pratinidhi Sabha, Uttar Pradesh."} hi={"पर्यटन एवं संस्कृति मंत्रालय द्वारा आयोजित एवं आर्य प्रतिनिधि सभा उत्तर प्रदेश द्वारा संयोजित सम्मेलन में काव्य पाठ।"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(19px, 3.6vw, 52px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "24px" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "12px" }}>
              <L lang={lang} en={"Programme recordings"} hi={"कार्यक्रम रिकॉर्डिंग"} />
            </div>
            <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
              <L lang={lang} en={"From the dais — videos"} hi={"मंच से — वीडियो"} />
            </h2>
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#6E6459" }}>
            <L lang={lang} en={"Send the titles and they will be added as they are"} hi={"शीर्षक भेजिए, यथावत लगा दिए जाएँगे"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "22px" }}>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <video src={asset("/assets/vid-1.mp4")} poster={asset("/assets/vid-1-poster.webp")} controls preload="none" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "5px" }}>
                <L lang={lang} en={"Address from the dais"} hi={"मंच से संबोधन"} />
              </div>
              <div style={{ fontSize: "13px", color: "#6E6459" }}>
                <L lang={lang} en={"मंच से संबोधन"} hi={"Address from the dais"} />
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <video src={asset("/assets/vid-2.mp4")} poster={asset("/assets/vid-2-poster.webp")} controls preload="none" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "5px" }}>
                <L lang={lang} en={"Programme excerpt"} hi={"कार्यक्रम की झलक"} />
              </div>
              <div style={{ fontSize: "13px", color: "#6E6459" }}>
                <L lang={lang} en={"कार्यक्रम की झलक"} hi={"Programme excerpt"} />
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <video src={asset("/assets/vid-3.mp4")} poster={asset("/assets/vid-3-poster.webp")} controls preload="none" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "5px" }}>
                <L lang={lang} en={"Lecture"} hi={"व्याख्यान"} />
              </div>
              <div style={{ fontSize: "13px", color: "#6E6459" }}>
                <L lang={lang} en={"व्याख्यान"} hi={"Lecture"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#EDE5D6", padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            <L lang={lang} en={"Flagship"} hi={"प्रमुख अभियान"} />
          </div>
          <h2 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.4vw, 34px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "18px" }}>
            <L lang={lang} en={"Nari–Yuva Shakti Mahotsav"} hi={"नारी–युवा शक्ति महोत्सव"} />
          </h2>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.85", color: "#4A423A" }}>
            <L lang={lang} en={"Through Veda-based programmes in universities, the idea was presented to young people as an experiment. This is where the model first received a response from youth."} hi={"विश्वविद्यालयों में वेद-आधारित कार्यक्रमों के माध्यम से इस विचार को युवाओं के बीच एक प्रयोग के रूप में प्रस्तुत किया गया। यहीं से मॉडल को पहली बार युवाओं की प्रतिक्रिया मिली।"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "16px" }}>
          <img src={asset("/assets/vv-abhiyan-emblem.webp")} loading="lazy" decoding="async" width={720} height={720} alt="वेद वसुंधरा अभियान — वेद वसुंधरा मॉडल" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "contain", background: "#FFFFFF", display: "block" }} />
          <img src={asset("/assets/ev-bharatmata.jpg")} loading="lazy" decoding="async" width={1600} height={532} alt="भारत माता पूजन" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "cover", display: "block" }} />
          <img src={asset("/assets/ev-aparna.jpg")} loading="lazy" decoding="async" width={1600} height={1066} alt="उत्तर प्रदेश राज्य महिला आयोग" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "cover", display: "block" }} />
          <img src={asset("/assets/ev-plaque.jpg")} loading="lazy" decoding="async" width={1599} height={899} alt="सम्मान" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </>
  );
}
