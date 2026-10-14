import { asset } from "../asset";
import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "हस्ताक्षर दर्शन · Signature Philosophy" };

export default function PhilosophyPage() {
  return (
    <>
      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(25px, 4.9vw, 70px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".32em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "26px" }}>
          Signature Philosophy
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(29px, 3.6vw, 52px)", fontWeight: "600", lineHeight: "1.32", maxWidth: "1120px", marginBottom: "20px", textWrap: "pretty" }}>
          &quot;वेद से प्रेरणा, आधुनिकता से संवाद और भारत के भविष्य का निर्माण।&quot;
        </div>
        <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 25px)", color: "#DCD2C2", marginBottom: "clamp(16px, 2.6vw, 38px)" }}>
          Modern Application of India&apos;s Timeless Knowledge Tradition
        </div>
        <div className="rf" style={{ display: "flex", alignItems: "stretch", gap: "0", borderTop: "1px solid #3B342B", paddingTop: "clamp(16px, 2.4vw, 34px)" }}>
          <div className="rfp" style={{ flex: "1", paddingRight: "clamp(16px, 2.8vw, 40px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: "1.7", color: "#F6F1E7" }}>
              भारत की शाश्वत ज्ञान परंपरा का आधुनिक अनुप्रयोग।
            </div>
          </div>
          <div className="rfb rfp" style={{ flex: "1", padding: "0 clamp(16px, 2.8vw, 40px)", borderLeft: "1px solid #3B342B", "--rfb": "1px solid #3B342B" } as CSSProperties}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.5", color: "#E8B24C" }}>
              Westernization नहीं — Modernization
            </div>
          </div>
          <div className="rfb rfp" style={{ flex: "1", paddingLeft: "clamp(16px, 2.8vw, 40px)", borderLeft: "1px solid #3B342B", "--rfb": "1px solid #3B342B" } as CSSProperties}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: "1.7", color: "#F6F1E7" }}>
              जड़ों से जुड़े रहकर आधुनिकता की ओर।
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: "clamp(20px, 3.9vw, 56px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", opacity: ".8", marginBottom: "20px" }}>
            उदाहरणार्थ
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(21px, 2.6vw, 38px)", fontWeight: "600", lineHeight: "1.5", textWrap: "pretty" }}>
            &quot;जिस प्रकार वृक्ष अपनी जड़ों से शक्ति लेकर आकाश की ओर बढ़ता है, उसी प्रकार युवा अपनी जड़ों से शक्ति लेकर भविष्य की ओर बढ़े।&quot;
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", opacity: ".9", borderLeft: "2px solid rgba(253,246,234,.35)", paddingLeft: "26px" }}>
          यही दृष्टि पूरे मॉडल का आधार है — जड़ें भारतीय ज्ञान परंपरा में, दिशा आधुनिक भारत की ओर।
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            नाम का आधार
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(21px, 2.6vw, 38px)", marginBottom: "24px" }}>
            वेद वसुंधरा नाम क्यों?
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.95", color: "#4A423A", textWrap: "pretty" }}>
            मैंने वेदों को इसलिए चुना क्योंकि वे किसी एक व्यक्ति, समुदाय या काल तक सीमित नहीं हैं। वेद को केवल आध्यात्मिक ग्रंथ मानकर सीमित कर देना उनकी व्यापकता को छोटा करता है। वे समस्त मानव एवं प्राणी जगत के कल्याण, प्रकृति, पृथ्वी, आकाश और ब्रह्मांड के प्रति हमारी दृष्टि तथा जीवन-मूल्यों की प्रेरणा देते हैं।
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.95", color: "#4A423A", marginTop: "20px", textWrap: "pretty" }}>
            वेदों में जीवन को कैसे जिया जाए, परिवार और समाज में कैसे रहा जाए, प्रकृति के साथ संतुलन कैसे बनाया जाए और मानव जीवन को श्रेष्ठ कैसे बनाया जाए — इन विषयों पर व्यापक ज्ञान और चिंतन की परंपरा मिलती है।
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ background: "#FFFCF6", borderLeft: "3px solid #C8651B", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 2.2vw, 32px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.9", color: "#16110D", textWrap: "pretty" }}>
              इसलिए मेरा प्रयास है कि इस भारतीय ज्ञान परंपरा में निहित जीवनोपयोगी विचारों को सरल, व्यावहारिक और आधुनिक संदर्भ में युवाओं तक पहुँचाया जाए, ताकि वे अपने चरित्र, करियर, भविष्य और जीवन का निर्माण करते हुए आत्मनिर्भर, नेतृत्वकर्ता और राष्ट्र-निर्माता बन सकें।
            </div>
          </div>
          <div style={{ background: "#FFFCF6", borderLeft: "3px solid #2E5A3C", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 2.2vw, 32px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.9", color: "#16110D", textWrap: "pretty" }}>
              मेरे लिए वेद ईश्वरीय ज्ञान की उस व्यापक परंपरा का प्रतीक हैं, जिसका केन्द्र किसी व्यक्ति विशेष के बजाय समस्त सृष्टि और लोककल्याण है। इसी प्रेरणा से मैंने &quot;वेद वसुंधरा मॉडल&quot; में वेदों को आधार बनाया — भारतीय ज्ञान की जड़ों से आधुनिक भारत के भविष्य को जोड़ने के लिए।
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            आधारभूमि · The foundation
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.2vw, 32px)", fontWeight: "600", lineHeight: "1.6", marginBottom: "22px", textWrap: "pretty" }}>
            &quot;वेदों से प्रेरणा, आधुनिक जीवन में प्रयोग और युवाओं के माध्यम से भारत के भविष्य का निर्माण — यही वेद वसुंधरा मॉडल की आधारभूमि है।&quot;
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.9", color: "#4A423A", textWrap: "pretty" }}>
            वेद वसुंधरा मॉडल केवल एक कार्यक्रम नहीं, बल्कि भारतीय ज्ञान परंपरा से प्रेरित एक ऐसा संकल्प है, जिसके माध्यम से आज के युवा और नारी शक्ति को अपने जीवन, समाज और राष्ट्र के निर्माण में सक्रिय नेतृत्वकारी भूमिका के लिए तैयार किया जा सके।
          </div>
        </div>
        <div>
          <img src={asset("/assets/ev-yajna-notitle.png")} alt="वैदिक व्याख्यान एवं यज्ञ संचालन" style={{ width: "100%", height: "clamp(216px, 25vw, 360px)", objectFit: "cover", display: "block" }} />
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            प्रमुख कार्यक्षेत्र · Focus of the work
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            ज्ञान → जीवन → कौशल → आत्मनिर्भरता → राष्ट्र-निर्माण
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "2px", background: "#E2D9C8" }}>
          <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 27px)", fontWeight: "600", marginBottom: "10px" }}>
              शिक्षा
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7", color: "#4A423A" }}>
              ज्ञान एवं जीवनोपयोगी दक्षता
            </div>
          </div>
          <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 27px)", fontWeight: "600", marginBottom: "10px" }}>
              संस्कार
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7", color: "#4A423A" }}>
              चरित्र एवं नैतिक नेतृत्व
            </div>
          </div>
          <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 27px)", fontWeight: "600", marginBottom: "10px" }}>
              संस्कृति
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7", color: "#4A423A" }}>
              जड़ों से जुड़ाव एवं राष्ट्रीय चेतना
            </div>
          </div>
          <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 27px)", fontWeight: "600", marginBottom: "10px" }}>
              कौशल
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7", color: "#4A423A" }}>
              आत्मनिर्भरता एवं रोजगार-सृजन
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
