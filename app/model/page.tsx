import L from "../lang";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "वेद वसुंधरा मॉडल · The Model" };

export default function ModelPage() {
  return (
    <>
      <div style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", borderBottom: "1px solid #E2D9C8" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "14px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(21px, 2.6vw, 38px)" }}>
            <L en={"What is the Veda Vasundhara Model?"} hi={"वेद वसुंधरा मॉडल क्या है?"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"Eleven answers"} hi={"ग्यारह उत्तर"} />
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.7", color: "#4A423A", maxWidth: "1000px", marginBottom: "clamp(16px, 2.5vw, 36px)", textWrap: "pretty" }}>
          <L en={"Veda Vasundhara does not merely teach young people to run — it develops in them the ability to understand which direction to run in."} hi={"वेद वसुंधरा केवल दौड़ना नहीं सिखाता — यह युवाओं में यह समझने की क्षमता विकसित करेगा कि उन्हें किस दिशा में दौड़ना है।"} />
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0 clamp(20px, 3.9vw, 56px)" }}>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              01
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is a sense of direction — not just moving ahead, but choosing the right goal and the right direction."} hi={"दिशा का बोध है — सिर्फ आगे बढ़ना नहीं, सही लक्ष्य और सही दिशा चुनना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              02
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is a journey from negativity to positivity."} hi={"नकारात्मकता से सकारात्मकता की ओर यात्रा है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              03
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is the art of turning despair into hope."} hi={"निराशा को आशा में बदलने की कला है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              04
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is the capacity for wise judgement — choosing rightly between what is proper and improper, meaningful and meaningless."} hi={"विवेकपूर्ण निर्णय की क्षमता है — क्या उचित है, क्या अनुचित; क्या सार्थक है, क्या निरर्थक, इनके बीच सही चुनाव।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              05
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is an intellectual resource that gives direction to life and the future."} hi={"जीवन और भविष्य को दिशा देने का वैचारिक संसाधन है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              06
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is the inspiration to become modern while staying connected to one's roots."} hi={"जड़ों से जुड़े रहकर आधुनिक बनने की प्रेरणा है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              07
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is a vision of the modern application of timeless knowledge."} hi={"शाश्वत ज्ञान के आधुनिक अनुप्रयोग की परिकल्पना है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              08
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is the inspiration to move from seeking employment to creating it."} hi={"रोजगार खोजने से रोजगार सृजन की ओर बढ़ने की प्रेरणा है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              09
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is a journey from leading oneself to building India."} hi={"स्वयं के नेता बनने से भारत के निर्माता बनने की यात्रा है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              10
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is a journey from knowledge to action, and from action to nation-building."} hi={"ज्ञान से कर्म और कर्म से राष्ट्र-निर्माण की यात्रा है।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "15px", minWidth: "30px" }}>
              11
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.7" }}>
              <L en={"It is the inspiration to keep one's roots strong in adverse circumstances."} hi={"विपरीत परिस्थितियों में अपनी जड़ों को मजबूत रखने की प्रेरणा है।"} />
            </span>
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)", marginBottom: "10px" }}>
          <L en={"How the model works"} hi={"मॉडल कैसे काम करता है"} />
        </div>
        <div style={{ fontSize: "16px", color: "#6E6459", marginBottom: "clamp(16px, 2.2vw, 32px)" }}>
          <L en={"A chain of links — each one makes the next possible"} hi={"चार कड़ियों की एक शृंखला — प्रत्येक अगली कड़ी को संभव बनाती है"} />
        </div>
        <div className="rf" style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 2.1vw, 30px) 24px", marginRight: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 25px)", fontWeight: "600", marginBottom: "6px" }}>
              <L en={"Knowledge"} hi={"ज्ञान"} />
            </div>
            <div style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B" }}>
              <L en={"ज्ञान"} hi={"Knowledge"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 2.1vw, 30px) 24px", marginRight: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 25px)", fontWeight: "600", marginBottom: "6px" }}>
              <L en={"Life"} hi={"जीवन"} />
            </div>
            <div style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B" }}>
              <L en={"जीवन"} hi={"Life"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 2.1vw, 30px) 24px", marginRight: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 25px)", fontWeight: "600", marginBottom: "6px" }}>
              <L en={"Skill"} hi={"कौशल"} />
            </div>
            <div style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B" }}>
              <L en={"कौशल"} hi={"Skill"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 2.1vw, 30px) 24px", marginRight: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 25px)", fontWeight: "600", marginBottom: "6px" }}>
              <L en={"Self-reliance"} hi={"आत्मनिर्भरता"} />
            </div>
            <div style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B" }}>
              <L en={"आत्मनिर्भरता"} hi={"Self-reliance"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #9B1C1C", padding: "clamp(16px, 2.1vw, 30px) 24px", marginRight: "0" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              05
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 25px)", fontWeight: "600", marginBottom: "6px" }}>
              <L en={"Nation-building"} hi={"राष्ट्र-निर्माण"} />
            </div>
            <div style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B" }}>
              <L en={"राष्ट्र-निर्माण"} hi={"Nation-building"} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L en={"Three stages"} hi={"तीन चरण"} />
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459" }}>
            <L en={"1.0 Workshop → 2.0 Digital platform → 3.0 National campaign"} hi={"1.0 कार्यशाला → 2.0 डिजिटल मंच → 3.0 राष्ट्रीय अभियान"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "24px" }}>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8", borderTop: "4px solid #9B1C1C", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#9B1C1C", marginBottom: "16px" }}>
              1.0
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "14px" }}>
              <L en={"Three-day women–youth leadership & personality development workshop"} hi={"त्रिदिवसीय नारी–युवा नेतृत्व एवं व्यक्तित्व विकास कार्यशाला"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
              <L en={"Phase one — conducted in schools and colleges."} hi={"प्रथम चरण — विद्यालयों एवं महाविद्यालयों में संचालित।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8", borderTop: "4px solid #C8651B", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#C8651B", marginBottom: "16px" }}>
              2.0
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "14px" }}>
              <L en={"National digital platform & online application"} hi={"राष्ट्रीय डिजिटल मंच एवं ऑनलाइन आवेदन"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
              <L en={"Online registration, applicant profiles, document verification and a transparent digital record."} hi={"ऑनलाइन पंजीकरण, अभ्यर्थी प्रोफाइल, दस्तावेज सत्यापन एवं पारदर्शी डिजिटल अभिलेख।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8", borderTop: "4px solid #2E5A3C", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "15px", letterSpacing: ".24em", color: "#2E5A3C", marginBottom: "16px" }}>
              3.0
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.5", marginBottom: "14px" }}>
              <L en={"National awareness & youth outreach campaign"} hi={"राष्ट्रीय जनजागरण एवं युवा आउटरीच अभियान"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#6E6459" }}>
              <L en={"Taking the model to a national scale — outreach, media documentation and a standing youth network."} hi={"मॉडल को राष्ट्रीय स्तर तक ले जाना — आउटरीच, मीडिया दस्तावेजीकरण एवं स्थायी युवा नेटवर्क।"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
