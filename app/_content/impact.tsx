import type { Lang } from "../i18n";
import L from "../lang";
import { asset } from "../asset";

export default function ImpactPage({ lang }: { lang: Lang }) {
  return (
    <>
      <h1 className="sr-only">
        <L lang={lang} hi={"मेरा संदेश एवं हमारा प्रभाव"} en={"My Message & Our Impact"} />
      </h1>
      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(25px, 4.9vw, 70px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px)", display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".32em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "24px" }}>
            <L lang={lang} en={"My Message"} hi={"मेरा संदेश"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(29px, 3.6vw, 52px)", fontWeight: "600", lineHeight: "1.35", marginBottom: "26px", textWrap: "pretty" }}>
            <L lang={lang} en={"\"Young people must become the builders of India.\""} hi={"\"युवाओं को भारत का निर्माता बनना है।\""} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.85", color: "#DCD2C2", marginBottom: "18px", textWrap: "pretty" }}>
            <L lang={lang} en={"Young people should not merely prepare for their own future — they should become the ones who prepare India's future."} hi={"युवा केवल अपने भविष्य के लिए तैयार न हों — वे भारत के भविष्य को तैयार करने वाले बनें।"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.85", color: "#DCD2C2" }}>
            <L lang={lang} en={"Whatever the circumstances, however great the struggle, do not let your light go out."} hi={"परिस्थितियाँ कैसी भी हों, संघर्ष कितना भी बड़ा हो, अपनी रोशनी को बुझने न दें।"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}>
            <img src={asset("/assets/founder-pagdi.jpg")} width={1072} height={1470} alt="डॉ. प्रवीण सत्येन्द्र विद्यालंकार" style={{ width: "200px", height: "clamp(150px, 17.4vw, 250px)", objectFit: "cover", objectPosition: "center 20%", display: "block", border: "1px solid #3B342B" }} />
            <img src={asset("/assets/ev-podium-speech.jpg")} loading="lazy" decoding="async" width={734} height={906} alt="व्याख्यान देते हुए" style={{ width: "160px", height: "clamp(120px, 13.9vw, 200px)", objectFit: "cover", objectPosition: "center 25%", display: "block", border: "1px solid #3B342B" }} />
          </div>
          <div style={{ borderLeft: "2px solid #C8651B", padding: "6px 0 6px clamp(16px, 2.4vw, 34px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.9", color: "#F6F1E7", textWrap: "pretty" }}>
              <L lang={lang} en={"\"Whether squall or storm, may I simply keep lighting a lamp,"} hi={"\"झंझावात हो या तूफ़ान, मैं बस एक दीया जलाती जाऊँ,"} />
              <br />
              <L lang={lang} en={"may I do something, write something such —"} hi={"कुछ ऐसा कर जाऊँ, कुछ ऐसा लिख जाऊँ —"} />
              <br />
              <L lang={lang} en={"that I become an inspiration for young people.\""} hi={"जिससे मैं युवाओं की प्रेरणा बन जाऊँ।\""} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.7", maxWidth: "1180px", textWrap: "pretty" }}>
          <L lang={lang} en={"If even one young person recognises the strength within, becomes the maker of their own life and contributes to building India, my effort is worthwhile."} hi={"यदि एक भी युवा अपने भीतर की शक्ति पहचानकर स्वयं अपने जीवन के निर्माता बनें और भारत के निर्माण में योगदान दें, तो मेरा प्रयास सार्थक है।"} />
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px) clamp(16px, 2.8vw, 40px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "14px" }}>
              <L lang={lang} en={"Our Impact"} hi={"हमारा प्रभाव"} />
            </div>
            <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.5vw, 36px)" }}>
              <L lang={lang} en={"Consolidated Impact"} hi={"समेकित प्रभाव"} />
            </h2>
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L lang={lang} en={"Ten dimensions"} hi={"दस आयाम"} />
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "2px", background: "#E2D9C8" }}>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Personality & character building"} hi={"व्यक्तित्व एवं चरित्र निर्माण"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Education & intellectual development"} hi={"शिक्षा एवं बौद्धिक विकास"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Values & moral consciousness"} hi={"संस्कार एवं नैतिक चेतना"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Youth & women's leadership"} hi={"युवा एवं नारी नेतृत्व"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              05
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Social responsibility"} hi={"सामाजिक उत्तरदायित्व"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              06
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Cultural awareness"} hi={"सांस्कृतिक जागरूकता"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              07
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"National consciousness & responsible citizenship"} hi={"राष्ट्रीय चेतना एवं जिम्मेदार नागरिकता"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              08
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Recognising excellence & talent"} hi={"उत्कृष्टता एवं प्रतिभा की पहचान"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              09
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"Creating positive youth role models"} hi={"सकारात्मक युवा आदर्शों का निर्माण"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", padding: "26px 22px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              10
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.55" }}>
              <L lang={lang} en={"A long-term youth leadership ecosystem"} hi={"दीर्घकालिक युवा नेतृत्व तंत्र"} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L lang={lang} en={"Expected impact"} hi={"अपेक्षित प्रभाव"} />
          </h2>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L lang={lang} en={"Each dimension in detail"} hi={"प्रत्येक आयाम का विस्तार"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0 clamp(19px, 3.6vw, 52px)" }}>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Women's empowerment"} hi={"नारी सशक्तीकरण"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Developing self-confidence, dignity, leadership and a sense of self-reliance."} hi={"आत्मविश्वास, सम्मान, नेतृत्व एवं आत्मनिर्भरता की भावना का विकास।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Youth leadership"} hi={"युवा नेतृत्व"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Developing leadership, communication, decision-making, teamwork and social responsibility."} hi={"नेतृत्व, संवाद, निर्णय क्षमता, टीम भावना एवं सामाजिक जिम्मेदारी का विकास।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Character & values"} hi={"चरित्र एवं संस्कार"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Developing discipline, integrity, a sense of duty, a spirit of service and moral values."} hi={"अनुशासन, सत्यनिष्ठा, कर्तव्यबोध, सेवा-भाव एवं नैतिक मूल्यों का विकास।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Social awareness"} hi={"सामाजिक जागरूकता"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Sensitivity towards freedom from addiction, respect for women, social cooperation and becoming responsible citizens."} hi={"नशामुक्ति, महिला सम्मान, सामाजिक सहयोग एवं जिम्मेदार नागरिक बनने के प्रति संवेदनशीलता।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Educational & intellectual development"} hi={"शैक्षिक एवं बौद्धिक विकास"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Developing knowledge, thoughtfulness, awareness of current affairs, creativity and problem-solving ability."} hi={"ज्ञान, विचारशीलता, समसामयिक समझ, रचनात्मकता एवं समस्या-समाधान क्षमता का विकास।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Cultural awareness"} hi={"सांस्कृतिक जागरूकता"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"A positive understanding of, and pride in, the Indian knowledge tradition, culture and life values."} hi={"भारतीय ज्ञान परंपरा, संस्कृति एवं जीवन-मूल्यों के प्रति सकारात्मक समझ एवं गौरव।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Personality development"} hi={"व्यक्तित्व विकास"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Developing self-confidence, expression, self-discipline and a positive outlook."} hi={"आत्मविश्वास, अभिव्यक्ति, आत्म अनुशासन एवं सकारात्मक दृष्टिकोण का विकास।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Spiritual & inner development"} hi={"आध्यात्मिक एवं आंतरिक विकास"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Understanding of self-reflection, self-restraint, life values and a sense of duty."} hi={"आत्मचिंतन, आत्मसंयम, जीवन-मूल्यों एवं कर्तव्यबोध की समझ।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Environmental consciousness"} hi={"पर्यावरणीय चेतना"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Practical awareness of nature conservation and environmental responsibility."} hi={"प्रकृति संरक्षण एवं पर्यावरणीय जिम्मेदारी के प्रति व्यावहारिक जागरूकता।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"National consciousness"} hi={"राष्ट्रीय चेतना"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"A sense of responsible citizenship, national unity and the active role of youth in nation-building."} hi={"जिम्मेदार नागरिकता, राष्ट्रीय एकता एवं राष्ट्र-निर्माण में युवाओं की सक्रिय भूमिका की भावना।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Overall impact"} hi={"समग्र प्रभाव"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Developing value-rooted, capable and responsible young citizens through the harmony of education, values, culture, skill, character and leadership."} hi={"शिक्षा, संस्कार, संस्कृति, कौशल, चरित्र और नेतृत्व के समन्वय से संस्कारित, सक्षम एवं जिम्मेदार युवा नागरिकों का विकास।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Social impact"} hi={"सामाजिक प्रभाव"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Encouraging social service, community contribution and youth-led positive initiatives."} hi={"समाजसेवा, सामुदायिक योगदान एवं युवाओं के नेतृत्व में सकारात्मक पहलों को प्रोत्साहन।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Cultural impact"} hi={"सांस्कृतिक प्रभाव"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Recognition and a platform for outstanding contributions connected with Indian culture, the knowledge tradition and national values."} hi={"भारतीय संस्कृति, ज्ञान परंपरा एवं राष्ट्रीय मूल्यों से जुड़े उत्कृष्ट योगदान को पहचान और मंच।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"National impact"} hi={"राष्ट्रीय प्रभाव"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Strengthening the spirit of nation-building by bringing outstanding young people from many fields onto a national platform."} hi={"विभिन्न क्षेत्रों के उत्कृष्ट युवाओं को राष्ट्रीय मंच पर जोड़कर राष्ट्र-निर्माण की भावना को सुदृढ़ करना।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Women's leadership"} hi={"नारी नेतृत्व"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Opportunities for identifying, recognising and developing the leadership of outstanding young women."} hi={"उत्कृष्ट युवतियों की पहचान, सम्मान एवं नेतृत्व विकास के अवसर।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Inspirational impact"} hi={"प्रेरणात्मक प्रभाव"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Inspiring young people at large by establishing the ideal young man and ideal young woman as positive role models."} hi={"आदर्श युवा एवं आदर्श युवती को सकारात्मक आदर्शों के रूप में स्थापित कर व्यापक युवा वर्ग को प्रेरित करना।"} />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderTop: "1px solid #E2D9C8" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600", marginBottom: "7px" }}>
              <L lang={lang} en={"Personality & intellectual development"} hi={"व्यक्तित्व एवं बौद्धिक विकास"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#4A423A" }}>
              <L lang={lang} en={"Encouraging communication, creativity, critical thinking, confidence and multidimensional excellence."} hi={"संवाद, रचनात्मकता, आलोचनात्मक चिंतन, आत्मविश्वास एवं बहुआयामी उत्कृष्टता को बढ़ावा।"} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "22px" }}>
          <L lang={lang} en={"Long-term impact"} hi={"दीर्घकालिक प्रभाव"} />
        </div>
        <div className="rfw" style={{ display: "flex", alignItems: "stretch", gap: "0", marginBottom: "22px" }}>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              <L lang={lang} en={"Talent"} hi={"प्रतिभा"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              <L lang={lang} en={"Excellence"} hi={"उत्कृष्टता"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              <L lang={lang} en={"Recognition"} hi={"मान्यता"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              <L lang={lang} en={"Leadership"} hi={"नेतृत्व"} />
            </div>
          </div>
          <div style={{ flex: "1", background: "#FFFCF6", borderTop: "4px solid #9B1C1C", padding: "clamp(16px, 1.9vw, 28px) 24px", marginLeft: "2px" }}>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", marginBottom: "12px" }}>
              05
            </div>
            <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)" }}>
              <L lang={lang} en={"Nation Building"} hi={"राष्ट्र-निर्माण"} />
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.8", color: "#4A423A", maxWidth: "1100px" }}>
          <L lang={lang} en={"Building a sustainable youth leadership ecosystem — where talent is identified, reaches excellence, earns recognition, turns into leadership and connects with nation-building."} hi={"एक सतत युवा नेतृत्व तंत्र का निर्माण — जहाँ प्रतिभा पहचानी जाए, उत्कृष्टता तक पहुँचे, सम्मान पाए, नेतृत्व में बदले और राष्ट्र-निर्माण से जुड़े।"} />
        </div>
      </div>

      <div className="rg2 rgw" style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "2px", background: "#E2D9C8" }}>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            648
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            <L lang={lang} en={"Participation of mothers and sisters"} hi={"माताओं–बहनों की सहभागिता"} />
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            <L lang={lang} en={"Nari Shakti Rashtra Vandan Yajna, 2023"} hi={"नारी शक्ति राष्ट्र वंदन यज्ञ, 2023"} />
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            108
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            <L lang={lang} en={"Kundiya yajna"} hi={"कुंडीय यज्ञ"} />
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            <L lang={lang} en={"Gautam Buddha University, Greater Noida"} hi={"गौतम बुद्ध विश्वविद्यालय, ग्रेटर नोएडा"} />
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            11
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            <L lang={lang} en={"Brahmacharini Acharya"} hi={"ब्रह्मचारिणी आचार्य"} />
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            <L lang={lang} en={"Kanya Gurukul Hathras"} hi={"कन्या गुरुकुल हाथरस"} />
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px) clamp(16px, 1.9vw, 28px)" }}>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(29px, 3.6vw, 52px)", lineHeight: "1", marginBottom: "12px" }}>
            7
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "1.5", marginBottom: "8px" }}>
            <L lang={lang} en={"National & state-level platforms"} hi={"राष्ट्रीय एवं राज्य स्तरीय मंच"} />
          </div>
          <div style={{ fontSize: "13px", color: "#6E6459", lineHeight: "1.6" }}>
            2023 – 2026
          </div>
        </div>
      </div>

      <div className="rf" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(16px, 2.8vw, 40px)" }}>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600", maxWidth: "900px" }}>
          <L lang={lang} en={"After every workshop, participant numbers, institutions and assessment results are published on this page."} hi={"प्रत्येक कार्यशाला के बाद प्रतिभागी संख्या, संस्थान एवं मूल्यांकन परिणाम इसी पृष्ठ पर प्रकाशित किए जाते हैं।"} />
        </div>
        <div className="nw" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", opacity: ".9", whiteSpace: "nowrap" }}>
          <L lang={lang} en={"Audited accounts & annual report → Credentials"} hi={"अंकेक्षित लेखा एवं वार्षिक रिपोर्ट → प्रमाण"} />
        </div>
      </div>
    </>
  );
}
