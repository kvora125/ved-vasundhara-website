import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "दृष्टि, ध्येय एवं मूल मूल्य · Vision, Mission & Core Values" };

export default function VisionMissionPage() {
  return (
    <>
      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            लक्ष्य समूह · Whom we serve
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.7", color: "#16110D" }}>
            विद्यालयों एवं महाविद्यालयों की नारी शक्ति एवं युवा — जिन्हें जड़ों से जुड़े रहकर आधुनिक चुनौतियों का सामना करने के लिए तैयार किया जाता है।
          </div>
        </div>
        <div>
          <img src={asset("/assets/founder-yellow.png")} alt="डॉ. प्रवीण सत्येन्द्र विद्यालंकार" style={{ width: "100%", height: "clamp(204px, 23.6vw, 340px)", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        </div>
      </div>

      <div style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", opacity: ".82", marginBottom: "22px" }}>
          दृष्टि · Vision
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: "600", lineHeight: "1.45", maxWidth: "1140px", marginBottom: "clamp(16px, 2.1vw, 30px)", textWrap: "pretty" }}>
          ऐसे संस्कारवान, कुशल, आत्मनिर्भर और नेतृत्वकारी युवा एवं सशक्त नारी शक्ति का विकास, जो —
        </div>
        <div className="rfw" style={{ display: "flex", alignItems: "stretch", gap: "0", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              स्वयं अपने नेता बनें
            </div>
          </div>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)", borderLeft: "1px solid rgba(253,246,234,.28)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              रोजगार सृजित करें
            </div>
          </div>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)", borderLeft: "1px solid rgba(253,246,234,.28)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              समाज में मूल्य जोड़ें
            </div>
          </div>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)", borderLeft: "1px solid rgba(253,246,234,.28)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              भारत के निर्माता बनें
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.85", maxWidth: "1140px", opacity: ".95", textWrap: "pretty" }}>
          वेद वसुंधरा मॉडल का व्यापक लक्ष्य — विकसित, वैभवशाली और आत्मनिर्भर भारत के निर्माण में युवा शक्ति की सार्थक भागीदारी सुनिश्चित करना। ज्ञान, संस्कार, संस्कृति, कौशल और नेतृत्व से ऐसे आत्मनिर्भर, चरित्रवान एवं राष्ट्रनिष्ठ युवाओं और सशक्त नारी शक्ति का निर्माण करना, जो स्वयं अपने जीवन के निर्माता बनें, अवसर एवं रोजगार सृजित करें और विकसित, वैभवशाली एवं आत्मनिर्भर भारत के निर्माण में नेतृत्वकारी भूमिका निभाएँ।
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            ध्येय · Mission
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.8", color: "#16110D", textWrap: "pretty" }}>
            भारतीय ज्ञान परंपरा के जीवनोपयोगी मूल्यों को आधुनिक संदर्भों में शिक्षा, संस्कार, संस्कृति, कौशल, संवाद, नेतृत्व एवं रचनात्मक सहभागिता के माध्यम से युवाओं और समाज तक पहुँचाना।
          </div>
        </div>
        <div style={{ borderLeft: "3px solid #C8651B", paddingLeft: "clamp(16px, 2.4vw, 34px)" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            ब्रांड सूत्र · Brand line
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.4vw, 34px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "26px" }}>
            संस्कारित एवं सशक्त नारी–युवा, सशक्त राष्ट्र
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.85", color: "#4A423A" }}>
            हमारे कार्य का केंद्र है — भारतीय ज्ञान, आधुनिक कौशल और युवा नेतृत्व को जीवन एवं राष्ट्र-निर्माण से जोड़ना।
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            मूल मूल्य · Core Values
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459" }}>
            आठ मूल्य
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "2px", background: "#DED5C6" }}>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              ज्ञान
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              Knowledge
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              संस्कार
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              Character
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              संस्कृति
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              Cultural Rootedness
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              राष्ट्रनिष्ठा
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              National Responsibility
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              05
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              आत्मनिर्भरता
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              Self-Reliance
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              06
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              नेतृत्व
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              Leadership
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              07
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              समावेशिता
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              Inclusiveness
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              08
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              लोक कल्याण
            </div>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              Social & Environmental Responsibility
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            लक्ष्य समूह · Whom we serve
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.7", color: "#16110D" }}>
            विद्यालयों एवं महाविद्यालयों की नारी शक्ति एवं युवा — जिन्हें जड़ों से जुड़े रहकर आधुनिक चुनौतियों का सामना करने के लिए तैयार किया जाता है।
          </div>
        </div>
        <div>
          <img src={asset("/assets/ev-podium-marigold.jpg")} alt="व्याख्यान देते हुए" style={{ width: "100%", height: "clamp(204px, 23.6vw, 340px)", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        </div>
      </div>
    </>
  );
}
