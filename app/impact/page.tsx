import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "मेरा संदेश एवं हमारा प्रभाव · My Message & Our Impact" };

export default function ImpactPage() {
  return (
    <>
      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(25px, 4.9vw, 70px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px)", display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".32em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "24px" }}>
            My Message · मेरा संदेश
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(29px, 3.6vw, 52px)", fontWeight: "600", lineHeight: "1.35", marginBottom: "26px", textWrap: "pretty" }}>
            &quot;युवाओं को भारत का निर्माता बनना है।&quot;
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.85", color: "#DCD2C2", marginBottom: "18px", textWrap: "pretty" }}>
            युवा केवल अपने भविष्य के लिए तैयार न हों — वे भारत के भविष्य को तैयार करने वाले बनें।
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.85", color: "#DCD2C2" }}>
            परिस्थितियाँ कैसी भी हों, संघर्ष कितना भी बड़ा हो, अपनी रोशनी को बुझने न दें।
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}>
            <img src={asset("/assets/founder-pagdi.jpg")} alt="डॉ. प्रवीण सत्येन्द्र विद्यालंकार" style={{ width: "200px", height: "clamp(150px, 17.4vw, 250px)", objectFit: "cover", objectPosition: "center 20%", display: "block", border: "1px solid #3B342B" }} />
            <img src={asset("/assets/ev-podium-speech.jpg")} alt="व्याख्यान देते हुए" style={{ width: "160px", height: "clamp(120px, 13.9vw, 200px)", objectFit: "cover", objectPosition: "center 25%", display: "block", border: "1px solid #3B342B" }} />
          </div>
          <div style={{ borderLeft: "2px solid #C8651B", padding: "6px 0 6px clamp(16px, 2.4vw, 34px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.9", color: "#F6F1E7", textWrap: "pretty" }}>
              &quot;झंझावात हो या तूफ़ान, मैं बस एक दीया जलाती जाऊँ,
              <br />
              कुछ ऐसा कर जाऊँ, कुछ ऐसा लिख जाऊँ —
              <br />
              जिससे मैं युवाओं की प्रेरणा बन जाऊँ।&quot;
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.7", maxWidth: "1180px", textWrap: "pretty" }}>
          यदि एक भी युवा अपने भीतर की शक्ति पहचानकर स्वयं अपने जीवन के निर्माता बनें और भारत के निर्माण में योगदान दें, तो मेरा प्रयास सार्थक है।
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px) clamp(16px, 2.8vw, 40px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "14px" }}>
              Our Impact · हमारा प्रभाव
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.5vw, 36px)" }}>
              समेकित प्रभाव · Consolidated Impact
            </div>
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            दस आयाम
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "2px", background: "#E2D9C8" }}>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              व्यक्तित्व एवं चरित्र निर्माण
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              शिक्षा एवं बौद्धिक विकास
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              संस्कार एवं नैतिक चेतना
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              युवा एवं नारी नेतृत्व
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              05
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              सामाजिक उत्तरदायित्व
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              06
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              सांस्कृतिक जागरूकता
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              07
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              राष्ट्रीय चेतना एवं जिम्मेदार नागरिकता
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              08
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              उत्कृष्टता एवं प्रतिभा की पहचान
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              09
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              सकारात्मक युवा Role Models का निर्माण
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              10
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              दीर्घकालिक Youth Leadership Ecosystem
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            अपेक्षित प्रभाव
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            प्रत्येक आयाम का विस्तार
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0 clamp(19px, 3.6vw, 52px)" }}>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              नारी सशक्तीकरण
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              आत्मविश्वास, सम्मान, नेतृत्व एवं आत्मनिर्भरता की भावना का विकास।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              युवा नेतृत्व
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              नेतृत्व, संवाद, निर्णय क्षमता, teamwork एवं सामाजिक जिम्मेदारी का विकास।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              चरित्र एवं संस्कार
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              अनुशासन, सत्यनिष्ठा, कर्तव्यबोध, सेवा-भाव एवं नैतिक मूल्यों का विकास।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              सामाजिक जागरूकता
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              नशामुक्ति, महिला सम्मान, सामाजिक सहयोग एवं जिम्मेदार नागरिक बनने के प्रति संवेदनशीलता।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              शैक्षिक एवं बौद्धिक विकास
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              ज्ञान, विचारशीलता, समसामयिक समझ, creativity एवं problem-solving क्षमता का विकास।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              सांस्कृतिक जागरूकता
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              भारतीय ज्ञान परंपरा, संस्कृति एवं जीवन-मूल्यों के प्रति सकारात्मक समझ एवं गौरव।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              व्यक्तित्व विकास
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              आत्मविश्वास, अभिव्यक्ति, आत्म अनुशासन एवं सकारात्मक दृष्टिकोण का विकास।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              आध्यात्मिक एवं आंतरिक विकास
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              आत्मचिंतन, आत्मसंयम, जीवन-मूल्यों एवं कर्तव्यबोध की समझ।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              पर्यावरणीय चेतना
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              प्रकृति संरक्षण एवं पर्यावरणीय जिम्मेदारी के प्रति व्यावहारिक जागरूकता।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              राष्ट्रीय चेतना
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              जिम्मेदार नागरिकता, राष्ट्रीय एकता एवं राष्ट्र-निर्माण में युवाओं की सक्रिय भूमिका की भावना।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              समग्र प्रभाव
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              शिक्षा, संस्कार, संस्कृति, कौशल, चरित्र और नेतृत्व के समन्वय से संस्कारित, सक्षम एवं जिम्मेदार युवा नागरिकों का विकास।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              सामाजिक प्रभाव
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              समाजसेवा, community contribution एवं youth-led positive initiatives को प्रोत्साहन।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              सांस्कृतिक प्रभाव
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              भारतीय संस्कृति, ज्ञान परंपरा एवं राष्ट्रीय मूल्यों से जुड़े उत्कृष्ट योगदान को पहचान और मंच।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              राष्ट्रीय प्रभाव
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              विभिन्न क्षेत्रों के उत्कृष्ट युवाओं को national platform पर जोड़कर राष्ट्र-निर्माण की भावना को सुदृढ़ करना।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              नारी नेतृत्व
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              उत्कृष्ट युवतियों की पहचान, recognition एवं leadership development के अवसर।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              प्रेरणात्मक प्रभाव
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              आदर्श युवा एवं आदर्श युवती को positive role models के रूप में स्थापित कर व्यापक युवा वर्ग को प्रेरित करना।
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              व्यक्तित्व एवं बौद्धिक विकास
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              communication, creativity, critical thinking, confidence एवं multidimensional excellence को बढ़ावा।
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "22px" }}>
          दीर्घकालिक प्रभाव · Long-term impact
        </div>
        <div className="rfw" style={{ display: "flex", alignItems: "stretch", gap: "0", marginBottom: "22px" }}>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              Talent
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              Excellence
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              Recognition
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              Leadership
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #9B1C1C", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              05
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              Nation Building
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.8", color: "#4A423A", maxWidth: "1100px" }}>
          एक sustainable youth leadership ecosystem का निर्माण — जहाँ प्रतिभा पहचानी जाए, उत्कृष्टता तक पहुँचे, सम्मान पाए, नेतृत्व में बदले और राष्ट्र-निर्माण से जुड़े।
        </div>
      </div>

      <div className="rg2 rgw" style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "2px", background: "#E2D9C8" }}>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            648
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            माताओं–बहनों की सहभागिता
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            नारी शक्ति राष्ट्र वंदन यज्ञ, 2023
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            108
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            कुंडीय यज्ञ
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            गौतम बुद्ध विश्वविद्यालय, ग्रेटर नोएडा
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            11
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            ब्रह्मचारिणी आचार्य
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            कन्या गुरुकुल हाथरस
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            7
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            राष्ट्रीय एवं राज्य स्तरीय मंच
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            2023 – 2026
          </div>
        </div>
      </div>

      <div className="rf" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(16px, 2.8vw, 40px)" }}>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600", maxWidth: "900px" }}>
          प्रत्येक कार्यशाला के बाद प्रतिभागी संख्या, संस्थान एवं मूल्यांकन परिणाम इसी पृष्ठ पर प्रकाशित किए जाते हैं।
        </div>
        <div className="nw" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", opacity: ".9", whiteSpace: "nowrap" }}>
          अंकेक्षित लेखा एवं वार्षिक रिपोर्ट → प्रमाण
        </div>
      </div>
    </>
  );
}
