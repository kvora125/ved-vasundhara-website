import type { Lang } from "../i18n";
import L from "../lang";
import { asset } from "../asset";

export default function VisionMissionPage({ lang }: { lang: Lang }) {
  return (
    <>
      <h1 className="sr-only">
        <L lang={lang} hi={"दृष्टि, ध्येय एवं मूल मूल्य"} en={"Vision, Mission & Core Values"} />
      </h1>
      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            <L lang={lang} en={"Whom we serve"} hi={"लक्ष्य समूह"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.7", color: "#16110D" }}>
            <L lang={lang} en={"Women and young people in schools and colleges — prepared to meet modern challenges while staying connected to their roots."} hi={"विद्यालयों एवं महाविद्यालयों की नारी शक्ति एवं युवा — जिन्हें जड़ों से जुड़े रहकर आधुनिक चुनौतियों का सामना करने के लिए तैयार किया जाता है।"} />
          </div>
        </div>
        <div>
          <img src={asset("/assets/founder-yellow.webp")} width={231} height={254} alt="डॉ. प्रवीण सत्येन्द्र विद्यालंकार" style={{ width: "100%", height: "clamp(204px, 23.6vw, 340px)", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        </div>
      </div>

      <div style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", opacity: ".82", marginBottom: "22px" }}>
          <L lang={lang} en={"Vision"} hi={"दृष्टि"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: "600", lineHeight: "1.45", maxWidth: "1140px", marginBottom: "clamp(16px, 2.1vw, 30px)", textWrap: "pretty" }}>
          <L lang={lang} en={"To develop value-rooted, skilled, self-reliant young leaders and empowered women who —"} hi={"ऐसे संस्कारवान, कुशल, आत्मनिर्भर और नेतृत्वकारी युवा एवं सशक्त नारी शक्ति का विकास, जो —"} />
        </div>
        <div className="rfw" style={{ display: "flex", alignItems: "stretch", gap: "0", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              <L lang={lang} en={"Lead themselves"} hi={"स्वयं अपने नेता बनें"} />
            </div>
          </div>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)", borderLeft: "1px solid rgba(253,246,234,.28)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              <L lang={lang} en={"Create employment"} hi={"रोजगार सृजित करें"} />
            </div>
          </div>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)", borderLeft: "1px solid rgba(253,246,234,.28)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              <L lang={lang} en={"Add value to society"} hi={"समाज में मूल्य जोड़ें"} />
            </div>
          </div>
          <div style={{ flex: "1", padding: "24px 26px", background: "rgba(253,246,234,.08)", borderLeft: "1px solid rgba(253,246,234,.28)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", opacity: ".75", marginBottom: "12px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
              <L lang={lang} en={"Become builders of India"} hi={"भारत के निर्माता बनें"} />
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.85", maxWidth: "1140px", opacity: ".95", textWrap: "pretty" }}>
          <L lang={lang} en={"The broad goal of the Veda Vasundhara Model is to ensure the meaningful participation of youth in building a developed, prosperous and self-reliant India — through knowledge, values, culture, skill and leadership, to shape self-reliant, principled and nation-devoted young people and empowered women who become the makers of their own lives, create opportunities and employment, and play a leading role in building a developed, prosperous and self-reliant India."} hi={"वेद वसुंधरा मॉडल का व्यापक लक्ष्य — विकसित, वैभवशाली और आत्मनिर्भर भारत के निर्माण में युवा शक्ति की सार्थक भागीदारी सुनिश्चित करना। ज्ञान, संस्कार, संस्कृति, कौशल और नेतृत्व से ऐसे आत्मनिर्भर, चरित्रवान एवं राष्ट्रनिष्ठ युवाओं और सशक्त नारी शक्ति का निर्माण करना, जो स्वयं अपने जीवन के निर्माता बनें, अवसर एवं रोजगार सृजित करें और विकसित, वैभवशाली एवं आत्मनिर्भर भारत के निर्माण में नेतृत्वकारी भूमिका निभाएँ।"} />
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            <L lang={lang} en={"Mission"} hi={"ध्येय"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.8", color: "#16110D", textWrap: "pretty" }}>
            <L lang={lang} en={"To carry the life-giving values of the Indian knowledge tradition to young people and society in modern contexts — through education, values, culture, skill, dialogue, leadership and creative participation."} hi={"भारतीय ज्ञान परंपरा के जीवनोपयोगी मूल्यों को आधुनिक संदर्भों में शिक्षा, संस्कार, संस्कृति, कौशल, संवाद, नेतृत्व एवं रचनात्मक सहभागिता के माध्यम से युवाओं और समाज तक पहुँचाना।"} />
          </div>
        </div>
        <div style={{ borderLeft: "3px solid #C8651B", paddingLeft: "clamp(16px, 2.4vw, 34px)" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            <L lang={lang} en={"Brand line"} hi={"ब्रांड सूत्र"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.4vw, 34px)", fontWeight: "600", lineHeight: "1.45", marginBottom: "26px" }}>
            <L lang={lang} en={"Empowered, value-rooted women and youth — an empowered nation"} hi={"संस्कारित एवं सशक्त नारी–युवा, सशक्त राष्ट्र"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.85", color: "#4A423A" }}>
            <L lang={lang} en={"At the centre of our work — connecting Indian knowledge, modern skills and youth leadership with life and nation-building."} hi={"हमारे कार्य का केंद्र है — भारतीय ज्ञान, आधुनिक कौशल और युवा नेतृत्व को जीवन एवं राष्ट्र-निर्माण से जोड़ना।"} />
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L lang={lang} en={"Core Values"} hi={"मूल मूल्य"} />
          </h2>
          <div style={{ fontSize: "14px", color: "#6E6459" }}>
            <L lang={lang} en={"Eight values"} hi={"आठ मूल्य"} />
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "2px", background: "#DED5C6" }}>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              01
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Knowledge"} hi={"ज्ञान"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"ज्ञान"} hi={"Knowledge"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              02
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Character"} hi={"संस्कार"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"संस्कार"} hi={"Character"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              03
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Cultural Rootedness"} hi={"संस्कृति"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"संस्कृति"} hi={"Cultural Rootedness"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              04
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"National Responsibility"} hi={"राष्ट्रनिष्ठा"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"राष्ट्रनिष्ठा"} hi={"National Responsibility"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              05
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Self-reliance"} hi={"आत्मनिर्भरता"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"आत्मनिर्भरता"} hi={"Self-Reliance"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              06
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Leadership"} hi={"नेतृत्व"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"नेतृत्व"} hi={"Leadership"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              07
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Inclusiveness"} hi={"समावेशिता"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"समावेशिता"} hi={"Inclusiveness"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.1vw, 30px) 26px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              08
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", marginBottom: "8px" }}>
              <L lang={lang} en={"Social & Environmental Responsibility"} hi={"लोक कल्याण"} />
            </h3>
            <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C8651B", lineHeight: "1.6" }}>
              <L lang={lang} en={"लोक कल्याण"} hi={"Social & Environmental Responsibility"} />
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "clamp(17px, 3.3vw, 48px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            <L lang={lang} en={"Whom we serve"} hi={"लक्ष्य समूह"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.7", color: "#16110D" }}>
            <L lang={lang} en={"Women and young people in schools and colleges — prepared to meet modern challenges while staying connected to their roots."} hi={"विद्यालयों एवं महाविद्यालयों की नारी शक्ति एवं युवा — जिन्हें जड़ों से जुड़े रहकर आधुनिक चुनौतियों का सामना करने के लिए तैयार किया जाता है।"} />
          </div>
        </div>
        <div>
          <img src={asset("/assets/ev-podium-marigold.jpg")} loading="lazy" decoding="async" width={734} height={906} alt="व्याख्यान देते हुए" style={{ width: "100%", height: "clamp(204px, 23.6vw, 340px)", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        </div>
      </div>
    </>
  );
}
