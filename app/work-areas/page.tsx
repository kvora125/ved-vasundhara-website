import L from "../lang";
import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "कार्यक्षेत्र · Work Areas" };

export default function WorkAreasPage() {
  return (
    <>
      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(17px, 3.3vw, 48px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
          <L en={"Our work areas"} hi={"प्रमुख कार्यक्षेत्र"} />
        </div>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(28px, 3.5vw, 50px)", lineHeight: "1.15", maxWidth: "920px", marginBottom: "16px", textWrap: "pretty" }}>
          <L en={"Knowledge to life. Life to skill. Skill to self-reliance. Self-reliance to nation-building."} hi={"ज्ञान से जीवन। जीवन से कौशल। कौशल से आत्मनिर्भरता। आत्मनिर्भरता से राष्ट्र-निर्माण।"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.7", color: "#6E6459", maxWidth: "820px" }}>
          <L en={"Connecting knowledge with life, life with skill, skill with self-reliance, and self-reliance with nation-building."} hi={"ज्ञान को जीवन से जोड़ना, जीवन को कौशल से जोड़ना, कौशल को आत्मनिर्भरता से जोड़ना और आत्मनिर्भरता को राष्ट्र-निर्माण से जोड़ना।"} />
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L en={"Our Work Areas"} hi={"हमारे कार्यक्षेत्र"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"Seven work areas"} hi={"सात कार्यक्षेत्र"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "2px", background: "#E2D9C8" }}>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "6px" }}>
              <L en={"Youth Development"} hi={"युवा विकास"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"युवा विकास"} hi={"Youth Development"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"Youth personality, goal-setting, positive thinking, dialogue and an outlook on life."} hi={"युवा व्यक्तित्व, लक्ष्य निर्धारण, सकारात्मक चिंतन, संवाद एवं जीवन-दृष्टि।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "6px" }}>
              <L en={"Education & Life Skills"} hi={"शिक्षा एवं जीवन कौशल"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"शिक्षा एवं जीवन कौशल"} hi={"Education & Life Skills"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"Alongside education — critical thinking, communication, decision-making and practical life skills."} hi={"शिक्षा के साथ आलोचनात्मक चिंतन, संवाद, निर्णय क्षमता और व्यावहारिक जीवन कौशल।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "6px" }}>
              <L en={"Sanskar & Character Building"} hi={"संस्कार एवं चरित्र निर्माण"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"संस्कार एवं चरित्र निर्माण"} hi={"Sanskar & Character Building"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"Ethics, discipline, responsibility, sensitivity and character building."} hi={"नैतिकता, अनुशासन, जिम्मेदारी, संवेदनशीलता और चरित्र निर्माण।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "6px" }}>
              <L en={"Culture & Indian Knowledge Tradition"} hi={"संस्कृति एवं भारतीय ज्ञान परंपरा"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"संस्कृति एवं भारतीय ज्ञान परंपरा"} hi={"Culture & Indian Knowledge Tradition"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"Understanding Indian knowledge, cultural heritage and traditions in a modern context."} hi={"भारतीय ज्ञान, सांस्कृतिक विरासत और परंपराओं को आधुनिक संदर्भ में समझना।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              05
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "6px" }}>
              <L en={"Leadership & Self-Reliance"} hi={"नेतृत्व एवं आत्मनिर्भरता"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"नेतृत्व एवं आत्मनिर्भरता"} hi={"Leadership & Self-Reliance"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"Leadership, entrepreneurship, employability, skill development और employment creation।"} hi={"नेतृत्व, उद्यमिता, रोजगार-योग्यता, कौशल विकास और रोजगार सृजन।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              06
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "6px" }}>
              <L en={"Women Empowerment"} hi={"नारी सशक्तिकरण"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"नारी सशक्तिकरण"} hi={"Women Empowerment"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"Developing women not merely as beneficiaries — but as leaders, contributors and nation-builders."} hi={"नारी को केवल लाभार्थी नहीं — नेतृत्वकर्ता, योगदानकर्ता और राष्ट्र-निर्माता के रूप में विकसित करना।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 2.1vw, 30px)", gridColumn: "span 2" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "13px", color: "#9C9287", marginBottom: "14px" }}>
              07
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "6px" }}>
              <L en={"Social, National & Environmental Responsibility"} hi={"सामाजिक, राष्ट्रीय एवं पर्यावरणीय उत्तरदायित्व"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"सामाजिक, राष्ट्रीय एवं पर्यावरणीय उत्तरदायित्व"} hi={"Social, National & Environmental Responsibility"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"Responsibility towards society, the nation and the earth (Vasundhara)."} hi={"समाज, राष्ट्र और वसुंधरा के प्रति उत्तरदायित्व।"} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "12px" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
              <L en={"Spiritual & Cultural"} hi={"आध्यात्मिक एवं सांस्कृतिक"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: "600", lineHeight: "1.4" }}>
              <L en={"Vedic sanskars, yajna and cultural programmes"} hi={"वैदिक संस्कार, यज्ञ एवं सांस्कृतिक कार्यक्रम"} />
            </div>
          </div>
          <div className="nw" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#9C9287", whiteSpace: "nowrap" }}>
            <L en={"Programme videos"} hi={"कार्यक्रमों के वीडियो"} />
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.8", color: "#B7AC9C", maxWidth: "960px", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          <L en={"Understanding the Indian knowledge tradition, culture and life values in a modern context — through the conduct of sanskars by the Vedic method."} hi={"भारतीय ज्ञान परंपरा, संस्कृति एवं जीवन-मूल्यों को आधुनिक संदर्भ में समझना — संस्कार संचालन एवं वैदिक विधि से।"} />
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr) 240px", gap: "20px", alignItems: "start", color: "#16110D", marginBottom: "20px" }}>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <video src={asset("/assets/vid-0923-a.mp4")} poster={asset("/assets/vid-0923-a.jpg")} controls preload="none" playsInline style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Vedic wedding sanskar — conducting the ceremony"} hi={"वैदिक विवाह संस्कार — संचालन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Dr. Praveen Satyendra Vidyalankar · 23 September 2026"} hi={"डॉ. प्रवीण सत्येन्द्र विद्यालंकार · 23 सितम्बर 2026"} />
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <video src={asset("/assets/vid-0923-c.mp4")} poster={asset("/assets/vid-0923-c.jpg")} controls preload="none" playsInline style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Vedic wedding sanskar — mantra recitation"} hi={"वैदिक विवाह संस्कार — मंत्रोच्चारण"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"23 September 2026"} hi={"23 सितम्बर 2026"} />
              </div>
            </div>
          </div>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <video src={asset("/assets/vid-0923-b.mp4")} poster={asset("/assets/vid-0923-b.jpg")} controls preload="none" playsInline style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Sanskar — scenes"} hi={"संस्कार — दृश्य"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"23 September 2026"} hi={"23 सितम्बर 2026"} />
              </div>
            </div>
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "20px", color: "#16110D" }}>
          <div style={{ background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <video src={asset("/assets/vid-0923-d.mp4")} poster={asset("/assets/vid-0923-d.jpg")} controls preload="none" playsInline style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", background: "#16110D" }}></video>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Vedic wedding sanskar — blessings"} hi={"वैदिक विवाह संस्कार — आशीर्वचन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"23 September 2026"} hi={"23 सितम्बर 2026"} />
              </div>
            </div>
          </div>
          <a href="https://www.youtube.com/watch?v=Su1DFuEapGI" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/Su1DFuEapGI/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Spiritual & cultural programmes"} hi={"आध्यात्मिक एवं सांस्कृतिक कार्यक्रम"} />
              </div>
              <div style={{ marginTop: "6px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=8erbLQobP_o" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/8erbLQobP_o/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Spiritual & cultural programmes"} hi={"आध्यात्मिक एवं सांस्कृतिक कार्यक्रम"} />
              </div>
              <div style={{ marginTop: "6px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)" }}>
            <L en={"Key work areas"} hi={"प्रमुख कार्यक्षेत्र"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"The centre of our work — connecting Indian knowledge, modern skills and youth leadership with life and nation-building"} hi={"हमारे कार्य का केंद्र — भारतीय ज्ञान, आधुनिक कौशल और युवा नेतृत्व को जीवन एवं राष्ट्र-निर्माण से जोड़ना"} />
          </div>
        </div>
        <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "2px", background: "#DED5C6" }}>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Education"} hi={"शिक्षा"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"Knowledge & life skills"} hi={"ज्ञान एवं जीवनोपयोगी दक्षता"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Values"} hi={"संस्कार"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"Character & ethical leadership"} hi={"चरित्र एवं नैतिक नेतृत्व"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Culture"} hi={"संस्कृति"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"National consciousness & identity"} hi={"राष्ट्रीय चेतना एवं पहचान"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Skill"} hi={"कौशल"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"Self-reliance & employment creation"} hi={"आत्मनिर्भरता एवं रोजगार-सृजन"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Leadership"} hi={"नेतृत्व"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"From self-leadership to national leadership"} hi={"स्वनेतृत्व से राष्ट्र-नेतृत्व तक"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Women's empowerment"} hi={"नारी सशक्तिकरण"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"Equal participation and opportunity"} hi={"समान भागीदारी और अवसर"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Youth development"} hi={"युवा विकास"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"Personality, dialogue & positive thinking"} hi={"व्यक्तित्व, संवाद एवं सकारात्मक चिंतन"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Environment & social responsibility"} hi={"पर्यावरण एवं सामाजिक उत्तरदायित्व"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#4A423A" }}>
              <L en={"Duty towards the earth and society"} hi={"वसुंधरा एवं समाज के प्रति कर्तव्य"} />
            </div>
          </div>
          <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 1.9vw, 28px) 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Nation-building"} hi={"राष्ट्र-निर्माण"} />
            </div>
            <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#B7AC9C" }}>
              <L en={"Where all the work areas meet."} hi={"जहाँ सभी कार्यक्षेत्र मिलते हैं।"} />
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(26px, 5vw, 72px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)" }}>
        <div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.2vw, 32px)", marginBottom: "22px" }}>
            <L en={"Methodology"} hi={"कार्यपद्धति"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <div style={{ display: "flex", gap: "18px", padding: "16px 0", borderBottom: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", color: "#C8651B", fontSize: "15px", minWidth: "28px" }}>
                01
              </span>
              <span style={{ fontSize: "17px" }}>
                <L en={"Experiential learning — learning by doing"} hi={"अनुभव आधारित शिक्षण — करके सीखना"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "18px", padding: "16px 0", borderBottom: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", color: "#C8651B", fontSize: "15px", minWidth: "28px" }}>
                02
              </span>
              <span style={{ fontSize: "17px" }}>
                <L en={"Participatory activities & group discussion"} hi={"सहभागितापूर्ण गतिविधियाँ एवं समूह चर्चा"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "18px", padding: "16px 0", borderBottom: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", color: "#C8651B", fontSize: "15px", minWidth: "28px" }}>
                03
              </span>
              <span style={{ fontSize: "17px" }}>
                <L en={"Leadership practice & role play"} hi={"नेतृत्व अभ्यास एवं भूमिका निर्वहन"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "18px", padding: "16px 0", borderBottom: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", color: "#C8651B", fontSize: "15px", minWidth: "28px" }}>
                04
              </span>
              <span style={{ fontSize: "17px" }}>
                <L en={"Community participation"} hi={"सामुदायिक सहभागिता"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "18px", padding: "16px 0", borderBottom: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", color: "#C8651B", fontSize: "15px", minWidth: "28px" }}>
                05
              </span>
              <span style={{ fontSize: "17px" }}>
                <L en={"Yoga & meditation"} hi={"योग एवं ध्यान"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "18px", padding: "16px 0" }}>
              <span style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", color: "#C8651B", fontSize: "15px", minWidth: "28px" }}>
                06
              </span>
              <span style={{ fontSize: "17px" }}>
                <L en={"Youth dialogue & nation-building resolve"} hi={"युवा संवाद एवं राष्ट्र-निर्माण संकल्प"} />
              </span>
            </div>
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "290px 230px 250px 240px", gap: "12px" }}>
          <div style={{ gridRow: "span 2", display: "flex", flexDirection: "column", gap: "8px" }}>
            <img src={asset("/assets/meth-yajna-class.jpg")} alt="यज्ञ एवं ध्यान सत्र" style={{ width: "100%", flex: "1", minHeight: "0", objectFit: "cover", display: "block" }} />
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
              <L en={"05 · Yoga & meditation — yajna session"} hi={"05 · योग एवं ध्यान — यज्ञ सत्र"} />
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <img src={asset("/assets/meth-gbu-2023.jpg")} alt="नारी शक्ति राष्ट्र वन्दन यज्ञ, गौतम बुद्ध विश्वविद्यालय 2023" style={{ width: "100%", flex: "1", minHeight: "0", objectFit: "cover", objectPosition: "center 70%", display: "block" }} />
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
              <L en={"02 · Participatory activities — GBU, 2023"} hi={"02 · सहभागितापूर्ण गतिविधियाँ — GBU, 2023"} />
            </span>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "minmax(0,1fr)", gap: "12px", height: "100%", minHeight: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
              <img src={asset("/assets/ev-bhajan.jpg")} alt="छात्राओं के साथ भजन सत्र" style={{ width: "100%", flex: "1", minHeight: "0", objectFit: "cover", display: "block" }} />
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
                <L en={"01 · Experiential learning"} hi={"01 · अनुभव आधारित शिक्षण"} />
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
              <img src={asset("/assets/ev-child.jpg")} alt="मंच से संबोधन करती बालिका" style={{ width: "100%", flex: "1", minHeight: "0", objectFit: "cover", display: "block" }} />
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
                <L en={"06 · Youth dialogue"} hi={"06 · युवा संवाद"} />
              </span>
            </div>
          </div>
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "8px", minHeight: "0" }}>
            <img src={asset("/assets/ev-workshop-school.jpg")} alt="विद्यालय में समूह चर्चा एवं सामुदायिक सहभागिता" style={{ width: "100%", flex: "1", minHeight: "0", objectFit: "cover", display: "block" }} />
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
              <L en={"04 · Community participation & group discussion"} hi={"04 · सामुदायिक सहभागिता एवं समूह चर्चा"} />
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", minHeight: "0" }}>
            <img src={asset("/assets/ev-rajnath-family.jpg")} alt="माननीय रक्षा मंत्री जी से भेंट" style={{ width: "100%", flex: "1", minHeight: "0", objectFit: "cover", objectPosition: "center 35%", display: "block" }} />
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
              <L en={"Meeting the Hon'ble Defence Minister"} hi={"माननीय रक्षा मंत्री जी से भेंट"} />
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", minHeight: "0" }}>
            <img src={asset("/assets/ev-school-outdoor.jpg")} alt="विद्यालय में संवाद सत्र" style={{ width: "100%", flex: "1", minHeight: "0", objectFit: "cover", display: "block" }} />
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459" }}>
              <L en={"06 · Youth dialogue — school session"} hi={"06 · युवा संवाद — विद्यालय सत्र"} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
