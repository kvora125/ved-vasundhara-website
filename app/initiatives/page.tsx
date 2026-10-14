import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "पहल · Initiatives" };

export default function InitiativesPage() {
  return (
    <>
      <div className="rf" style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px) clamp(16px, 3.1vw, 44px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "clamp(16px, 2.8vw, 40px)" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            Initiatives · पहल
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(25px, 3.2vw, 46px)", lineHeight: "1.2" }}>
            1.0 · 2.0 · 3.0
          </div>
        </div>
        <div className="nw" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", color: "#9B1C1C", whiteSpace: "nowrap" }}>
          ज्ञान → संस्कार → दिशा
        </div>
      </div>

      <div style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "flex", flexDirection: "column", gap: "2px", background: "#E2D9C8" }}>
        <div className="rg1" style={{ background: "#F6F1E7", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ borderLeft: "4px solid #9B1C1C", paddingLeft: "24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#9B1C1C", marginBottom: "14px" }}>
              1.0
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.3", marginBottom: "10px" }}>
              Veda Vasundhara 1.0
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7", color: "#6E6459" }}>
              नारी युवा शक्ति महोत्सव — शिक्षा, संस्कार एवं संस्कृति से आत्मबोध तक
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignContent: "flex-start" }}>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              शिक्षा
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              संस्कार
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              संस्कृति
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              लक्ष्य निर्धारण
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              सकारात्मक चिंतन
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              विचार-विमर्श
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              प्रश्नोत्तरी
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              वाद-विवाद
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              भाषण
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              लेखन
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              कला
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              Storytelling
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              Cultural expression
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              Leadership challenges
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #9B1C1C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              Social-impact ideas
            </span>
          </div>
        </div>
        <div className="rg1" style={{ background: "#F6F1E7", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ borderLeft: "4px solid #C8651B", paddingLeft: "24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#C8651B", marginBottom: "14px" }}>
              2.0
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.3", marginBottom: "10px" }}>
              National Youth Excellence Initiative
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", marginBottom: "8px" }}>
              आदर्श युवा एवं आदर्श युवती
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", lineHeight: "1.6", color: "#6E6459" }}>
              National Youth Excellence Contest &amp; Recognition Platform
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                ज्ञान, विचारशीलता एवं समसामयिक समझ
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                चरित्र, नैतिकता एवं अनुशासन
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                नेतृत्व, निर्णय क्षमता एवं समस्या-समाधान
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                व्यक्तित्व, आत्मविश्वास एवं अभिव्यक्ति
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                भारतीय ज्ञान परंपरा, संस्कृति एवं विरासत
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                सामाजिक संवेदनशीलता, सेवा एवं उत्तरदायित्व
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                राष्ट्रबोध, नागरिक कर्तव्य एवं राष्ट्र निर्माण
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                पर्यावरण चेतना एवं सतत जीवनशैली
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                डिजिटल जागरूकता एवं जिम्मेदार सोशल मीडिया व्यवहार
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                उपलब्धि, नवाचार एवं सामाजिक प्रभाव
              </span>
              <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #C8651B", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
                पहचान, प्रमाणन, प्रोत्साहन एवं राष्ट्रीय सम्मान
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", borderTop: "1px solid #E2D9C8", paddingTop: "20px" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
                संक्षिप्त प्रक्रिया
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                Identify
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                Assess
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                Develop
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                Recognize
              </span>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.3vw, 19px)", color: "#16110D" }}>
                Inspire
              </span>
            </div>
          </div>
        </div>
        <div className="rg1" style={{ background: "#F6F1E7", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)", display: "grid", gridTemplateColumns: "300px minmax(0,1fr)", gap: "clamp(16px, 2.8vw, 40px)" }}>
          <div style={{ borderLeft: "4px solid #2E5A3C", paddingLeft: "24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#2E5A3C", marginBottom: "14px" }}>
              3.0
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.3", marginBottom: "10px" }}>
              Veda Vasundhara 3.0
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7", color: "#6E6459" }}>
              भारतीय ज्ञान परंपरा का आधुनिक अनुप्रयोग एवं वैश्विक संवाहन
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignContent: "flex-start" }}>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              भारतीय ज्ञान परंपरा
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              वैदिक दर्शन एवं जीवन-दृष्टि
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              ऐतिहासिक एवं सांस्कृतिक विरासत
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              तीर्थ एवं सांस्कृतिक पर्यटन
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              ज्ञान-विज्ञान एवं बौद्धिक संवाद
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              कला, साहित्य एवं संस्कृति
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              युवा शोध एवं नवाचार
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              राष्ट्रीय नायकों एवं वीरांगनाओं की प्रेरक गाथाएँ
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              भारतीय संस्कृति का वैश्विक संवाहन
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              राष्ट्रीय एकता एवं सांस्कृतिक चेतना
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              प्रकृति, पर्यावरण एवं सतत जीवन
            </span>
            <span style={{ background: "#F6F1E7", border: "1px solid #DED5C6", borderLeft: "3px solid #2E5A3C", padding: "11px 16px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.5" }}>
              भारतीय ज्ञान परंपरा का आधुनिक अनुप्रयोग
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(19px, 3.6vw, 52px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "26px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            संपन्न आयोजन · Events held
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            2023 – 2026
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "24px" }}>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-prerna-banner.jpg")} alt="प्रेरणा विमर्श — नारी शक्ति राष्ट्र वंदन यज्ञ" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                2023 · 2024
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                प्रेरणा विमर्श — नारी शक्ति राष्ट्र वंदन यज्ञ
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                108 कुंडीय यज्ञ एवं 648 माताओं–बहनों की सहभागिता; संचालन मुख्य आचार्य — डॉ. प्रवीण विद्यालंकार। 2024 संस्करण का विषय — पंच परिवर्तन।
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-virat-banner.jpg")} alt="विराट हिन्दू सम्मेलन" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                अबन्ती बाई बस्ती, हरिगढ़
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                विराट हिन्दू सम्मेलन
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                श्री कौशल नाथ जी महाराज के साथ मंचासीन; भारत माता पूजन एवं संबोधन।
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-bhopal.jpg")} alt="अखिल भारतीय आर्य महासम्मेलन" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                21–23 दिसम्बर 2025 · भोपाल
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                अखिल भारतीय आर्य महासम्मेलन
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                सार्वदेशिक आर्य प्रतिनिधि सभा के 75 वर्ष पूर्ण होने के अवसर पर आयोजित महासम्मेलन में संबोधन।
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-dav-dais.jpg")} alt="महर्षि दयानंद सरस्वती 202वीं जन्म जयंती व्याख्यान माला" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                12 फरवरी 2026 · लखनऊ
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                महर्षि दयानंद सरस्वती 202वीं जन्म जयंती व्याख्यान माला
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                डी.ए.वी. डिग्री कॉलेज में व्याख्यान एवं स्मृति-चिह्न भेंट।
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-sangoshthi.jpg")} alt="चरित्र निर्माण में शिक्षा की भूमिका" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                15 जुलाई 2025 · मेरठ प्रान्त
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                चरित्र निर्माण में शिक्षा की भूमिका
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                शिक्षा संस्कृति उत्थान न्यास के स्थापना दिवस सप्ताह पर शैक्षिक संगोष्ठी — विशिष्ट अतिथि।
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/ev-kavi-1.jpg")} alt="राष्ट्रीय कवि सम्मेलन" style={{ width: "100%", height: "clamp(138px, 16vw, 230px)", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
                उत्तर प्रदेश पर्यटन
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "12px" }}>
                राष्ट्रीय कवि सम्मेलन
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
                पर्यटन एवं संस्कृति मंत्रालय द्वारा आयोजित एवं आर्य प्रतिनिधि सभा उत्तर प्रदेश द्वारा संयोजित सम्मेलन में काव्य पाठ।
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(19px, 3.6vw, 52px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "24px" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "12px" }}>
              कार्यक्रम रिकॉर्डिंग · Programme recordings
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
              मंच से — वीडियो
            </div>
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#6E6459" }}>
            शीर्षक भेजिए, यथावत लगा दिए जाएँगे
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "22px" }}>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <video src={asset("/assets/vid-1.mp4")} poster={asset("/assets/vid-1-poster.png")} controls preload="none" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "5px" }}>
                मंच से संबोधन
              </div>
              <div style={{ fontSize: "13px", color: "#6E6459" }}>
                Address from the dais
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <video src={asset("/assets/vid-2.mp4")} poster={asset("/assets/vid-2-poster.png")} controls preload="none" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "5px" }}>
                कार्यक्रम की झलक
              </div>
              <div style={{ fontSize: "13px", color: "#6E6459" }}>
                Programme excerpt
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <video src={asset("/assets/vid-3.mp4")} poster={asset("/assets/vid-3-poster.png")} controls preload="none" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "5px" }}>
                व्याख्यान
              </div>
              <div style={{ fontSize: "13px", color: "#6E6459" }}>
                Lecture
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#EDE5D6", padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            प्रमुख अभियान · Flagship
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.4vw, 34px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "18px" }}>
            नारी–युवा शक्ति महोत्सव
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.85", color: "#4A423A" }}>
            विश्वविद्यालयों में वेद-आधारित कार्यक्रमों के माध्यम से इस विचार को युवाओं के बीच एक प्रयोग के रूप में प्रस्तुत किया गया। यहीं से मॉडल को पहली बार युवाओं की प्रतिक्रिया मिली।
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "16px" }}>
          <img src={asset("/assets/vv-abhiyan-emblem.png")} alt="वेद वसुंधरा अभियान — वेद वसुंधरा मॉडल" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "contain", background: "#FFFFFF", display: "block" }} />
          <img src={asset("/assets/ev-bharatmata.jpg")} alt="भारत माता पूजन" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "cover", display: "block" }} />
          <img src={asset("/assets/ev-aparna.jpg")} alt="उत्तर प्रदेश राज्य महिला आयोग" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "cover", display: "block" }} />
          <img src={asset("/assets/ev-plaque.jpg")} alt="सम्मान" style={{ width: "100%", height: "clamp(126px, 14.6vw, 210px)", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </>
  );
}
