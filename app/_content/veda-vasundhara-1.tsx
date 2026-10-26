import type { Lang } from "../i18n";
import L from "../lang";
import { asset } from "../asset";

export default function VedaVasundhara1Page({ lang }: { lang: Lang }) {
  return (
    <>
      <div style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "26px", fontSize: "13px" }}>
          <span style={{ background: "#FDF6EA", color: "#9B1C1C", padding: "6px 14px", fontWeight: "700" }}>
            1.0
          </span>
          <span style={{ border: "1px solid rgba(253,246,234,.4)", padding: "6px 14px" }}>
            2.0
          </span>
          <span style={{ border: "1px solid rgba(253,246,234,.4)", padding: "6px 14px" }}>
            3.0
          </span>
        </div>
        <h1 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(26px, 3.3vw, 48px)", fontWeight: "600", lineHeight: "1.3", marginBottom: "12px" }}>
          <L lang={lang} en={"Veda Vasundhara Model 1.0 — Nari Yuva Shakti Mahotsav"} hi={"वेद वसुंधरा मॉडल 1.0 — नारी युवा शक्ति महोत्सव"} />
        </h1>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", opacity: ".92", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <L lang={lang} en={"A one-year structured programme of youth development, cultural awareness and national renewal"} hi={"एक-वर्षीय संरचित युवा विकास, सांस्कृतिक चेतना एवं राष्ट्रीय नवचेतना"} />
        </div>
        <div style={{ display: "flex", gap: "clamp(20px, 3.9vw, 56px)", fontSize: "15px", flexWrap: "wrap" }}>
          <div>
            <div style={{ opacity: ".72", marginBottom: "6px" }}>
              <L lang={lang} en={"Project duration"} hi={"परियोजना अवधि"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              <L lang={lang} en={"12 months"} hi={"12 माह"} />
            </div>
          </div>
          <div>
            <div style={{ opacity: ".72", marginBottom: "6px" }}>
              <L lang={lang} en={"Project budget"} hi={"परियोजना बजट"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              <L lang={lang} en={"₹1.50 crore"} hi={"₹1.50 करोड़"} />
            </div>
          </div>
          <div>
            <div style={{ opacity: ".72", marginBottom: "6px" }}>
              <L lang={lang} en={"Region"} hi={"क्षेत्र"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              <L lang={lang} en={"Uttar Pradesh"} hi={"उत्तर प्रदेश"} />
            </div>
          </div>
          <div>
            <div style={{ opacity: ".72", marginBottom: "6px" }}>
              <L lang={lang} en={"Implementing organisation"} hi={"कार्यान्वयन संस्था"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              <L lang={lang} en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
            </div>
          </div>
          <div>
            <div style={{ opacity: ".72", marginBottom: "6px" }}>
              <L lang={lang} en={"Long-term vision"} hi={"दीर्घकालिक दृष्टि"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              2040
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.8vw, 40px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: "clamp(16px, 2.8vw, 40px)", alignItems: "center" }}>
        <img src={asset("/assets/ev-nayak-diwas-bhopal.webp")} width={800} height={236} alt="नायक दिवस, भोपाल — राज्यपाल श्री मंगुभाई पटेल" style={{ width: "100%", height: "auto", display: "block", border: "1px solid #3B342B" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C" }}>
            <L lang={lang} en={"Nari Yuva Shakti Mahotsav · Bhopal"} hi={"नारी युवा शक्ति महोत्सव · भोपाल"} />
          </div>
          <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", lineHeight: "1.45" }}>
            <L lang={lang} en={"Nayak Diwas programme — Hon'ble Governor Shri Mangubhai Patel"} hi={"नायक दिवस कार्यक्रम — माननीय राज्यपाल श्री मंगुभाई पटेल"} />
          </h3>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#DCD2C2" }}>
            <L lang={lang} en={"Governor Shri Mangubhai Patel addressed the Nayak Diwas programme held under the Nari Yuva Shakti Mahotsav."} hi={"राज्यपाल श्री मंगुभाई पटेल ने नारी युवा शक्ति महोत्सव अंतर्गत नायक दिवस कार्यक्रम को संबोधित किया।"} />
          </div>
          <div style={{ fontSize: "14px", color: "#9C9287" }}>
            <L lang={lang} en={"Bhopal, Madhya Pradesh · 26 May 2022"} hi={"भोपाल, मध्य प्रदेश · 26 मई 2022"} />
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            <L lang={lang} en={"In brief"} hi={"संक्षिप्त परिचय"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.9", color: "#4A423A", marginBottom: "18px", textWrap: "pretty" }}>
            <L lang={lang} en={"Veda Vasundhara 1.0 is a structured youth-development intervention run over one year. Its aim is to develop self-awareness, values, leadership ability, social responsibility, cultural consciousness, civic duty and an active spirit of nation-building among young people and women."} hi={"वेद वसुंधरा 1.0 एक वर्ष की अवधि में संचालित किया जाने वाला एक संरचित युवा विकास हस्तक्षेप है, जिसका उद्देश्य युवाओं एवं महिलाओं में आत्मबोध, संस्कार, नेतृत्व क्षमता, सामाजिक उत्तरदायित्व, सांस्कृतिक चेतना, नागरिक कर्तव्यबोध तथा राष्ट्र निर्माण की सक्रिय भावना का विकास करना है।"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.9", color: "#4A423A", textWrap: "pretty" }}>
            <L lang={lang} en={"This project is not merely a collection of programmes or events, but an integrated process that leads from knowledge to conduct, from values to leadership, and from resolve to social action."} hi={"यह परियोजना केवल कार्यक्रमों या आयोजनों का मात्र समूह नहीं है, बल्कि ज्ञान से व्यवहार, संस्कार से नेतृत्व और संकल्प से सामाजिक कार्रवाई तक ले जाने वाली एक समेकित प्रक्रिया है।"} />
          </div>
        </div>
        <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".26em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "22px" }}>
            <L lang={lang} en={"Core approach"} hi={"मूल दृष्टिकोण"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "11px 0" }}>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", minWidth: "22px" }}>
                01
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600" }}>
                <L lang={lang} en={"Knowing"} hi={"जानना"} />
              </span>
              <span style={{ color: "#C8651B", marginLeft: "auto" }}>
                ↓
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", minWidth: "22px" }}>
                02
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600" }}>
                <L lang={lang} en={"Understanding"} hi={"समझना"} />
              </span>
              <span style={{ color: "#C8651B", marginLeft: "auto" }}>
                ↓
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", minWidth: "22px" }}>
                03
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600" }}>
                <L lang={lang} en={"Internalising"} hi={"आत्मसात करना"} />
              </span>
              <span style={{ color: "#C8651B", marginLeft: "auto" }}>
                ↓
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", minWidth: "22px" }}>
                04
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600" }}>
                <L lang={lang} en={"Making a resolve"} hi={"संकल्प लेना"} />
              </span>
              <span style={{ color: "#C8651B", marginLeft: "auto" }}>
                ↓
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", minWidth: "22px" }}>
                05
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600" }}>
                <L lang={lang} en={"Acting"} hi={"कार्य करना"} />
              </span>
              <span style={{ color: "#C8651B", marginLeft: "auto" }}>
                ↓
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", minWidth: "22px" }}>
                06
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600" }}>
                <L lang={lang} en={"Leading"} hi={"नेतृत्व करना"} />
              </span>
              <span style={{ color: "#C8651B", marginLeft: "auto" }}>
                ↓
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Marcellus',serif", fontSize: "12px", color: "#9C9287", minWidth: "22px" }}>
                07
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600" }}>
                <L lang={lang} en={"Bringing positive social change"} hi={"सकारात्मक सामाजिक परिवर्तन लाना"} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "26px" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L lang={lang} en={"Why the project is needed"} hi={"परियोजना की आवश्यकता"} />
          </h2>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L lang={lang} en={"Youth are India's greatest human resource"} hi={"युवा भारत की सबसे बड़ी जनशक्ति हैं"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0 clamp(19px, 3.6vw, 52px)", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Growing tendency towards drugs and other addictions"} hi={"नशे एवं अन्य व्यसनों की बढ़ती प्रवृत्ति"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Unbalanced use of digital media and social media"} hi={"डिजिटल माध्यमों और सोशल मीडिया का असंतुलित उपयोग"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Stress, lack of direction and lack of purpose"} hi={"तनाव, दिशाहीनता एवं उद्देश्यहीनता"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Lack of self-awareness and an outlook on life"} hi={"आत्मबोध एवं जीवन-दृष्टि का अभाव"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Distance from social and civic responsibility"} hi={"सामाजिक एवं नागरिक उत्तरदायित्व से दूरी"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Lack of leadership opportunities"} hi={"नेतृत्व के अवसरों की कमी"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Distance from cultural and historical consciousness"} hi={"सांस्कृतिक एवं ऐतिहासिक चेतना से दूरी"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Unfamiliarity with positive ideals and inspiring life stories"} hi={"सकारात्मक आदर्शों और प्रेरक जीवन-चरित्रों से अपरिचित होना"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Limited participation of youth in solving social problems"} hi={"सामाजिक समस्याओं के समाधान में युवाओं की सीमित भागीदारी"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #DED5C6" }}>
            <span style={{ color: "#9B1C1C", fontSize: "15px" }}>
              ✗
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
              <L lang={lang} en={"Challenges faced by women and young women in leadership, self-confidence and social participation"} hi={"महिलाओं एवं युवतियों के सामने नेतृत्व, आत्मविश्वास एवं सामाजिक सहभागिता से संबंधित चुनौतियाँ"} />
            </span>
          </div>
        </div>
        <div style={{ background: "#FFFCF6", borderLeft: "3px solid #C8651B", padding: "clamp(16px, 1.9vw, 28px) clamp(16px, 2.2vw, 32px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.85", color: "#16110D", textWrap: "pretty" }}>
            <L lang={lang} en={"In these circumstances, information or training alone is not enough. What is needed is a holistic, experiential development model in which young people learn for themselves, engage in dialogue, ask questions, reflect, make a resolve and turn that resolve into practical action."} hi={"इन परिस्थितियों में केवल सूचना अथवा प्रशिक्षण पर्याप्त नहीं है। आवश्यकता ऐसे समग्र एवं अनुभवात्मक विकास मॉडल की है, जिसमें युवा स्वयं सीखें, संवाद करें, प्रश्न पूछें, विचार करें, संकल्प लें और उस संकल्प को व्यावहारिक गतिविधि में परिवर्तित करें।"} />
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L lang={lang} en={"Specific objectives"} hi={"विशिष्ट उद्देश्य"} />
          </h2>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L lang={lang} en={"Fourteen objectives"} hi={"चौदह उद्देश्य"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0 clamp(19px, 3.6vw, 52px)" }}>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              01
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To promote self-awareness and personality development among young people."} hi={"युवाओं में आत्मबोध एवं व्यक्तित्व विकास को बढ़ावा देना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              02
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To develop leadership and decision-making ability among young people."} hi={"युवाओं में नेतृत्व क्षमता एवं निर्णय लेने की क्षमता विकसित करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              03
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To develop a positive outlook on life that keeps young people away from drugs and other social evils."} hi={"नशे एवं अन्य सामाजिक बुराइयों से दूर रहने के लिए सकारात्मक जीवन-दृष्टि विकसित करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              04
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To connect young people with Indian culture, heritage, life values and inspiring traditions."} hi={"भारतीय संस्कृति, विरासत, जीवन-मूल्यों एवं प्रेरक परंपराओं से युवाओं को जोड़ना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              05
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To offer inspiration from the lives and work of great men and heroic women."} hi={"महान पुरुषों एवं वीरांगनाओं के जीवन एवं कार्यों से प्रेरणा प्रदान करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              06
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To encourage self-confidence, leadership and social participation among women and young women."} hi={"महिलाओं एवं युवतियों में आत्मविश्वास, नेतृत्व एवं सामाजिक सहभागिता को प्रोत्साहित करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              07
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To develop a sense of civic duty and social responsibility among young people."} hi={"युवाओं में नागरिक कर्तव्यों एवं सामाजिक उत्तरदायित्व का बोध विकसित करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              08
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To develop sensitivity towards environmental and community responsibility."} hi={"पर्यावरण एवं सामुदायिक उत्तरदायित्व के प्रति संवेदनशीलता विकसित करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              09
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To promote a culture of dialogue, deliberation and critical thinking."} hi={"संवाद, विचार-विमर्श एवं आलोचनात्मक चिंतन की संस्कृति को बढ़ावा देना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              10
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To give young people the ability to take the initiative in solving their own problems."} hi={"युवाओं को अपनी समस्याओं के समाधान के लिए स्वयं पहल करने की क्षमता प्रदान करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              11
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To connect young people with positive social action."} hi={"युवाओं को सकारात्मक सामाजिक कार्रवाई से जोड़ना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              12
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To connect culture with life and conduct, rather than keeping it something only to watch and hear."} hi={"संस्कृति को केवल देखने-सुनने का विषय न रखकर उसे जीवन एवं व्यवहार से जोड़ना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              13
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To turn a \"resolve\" into real social and personal action."} hi={"\"संकल्प\" को वास्तविक सामाजिक एवं व्यक्तिगत कार्रवाई में परिवर्तित करना।"} />
            </span>
          </div>
          <div style={{ display: "flex", gap: "18px", padding: "15px 0", borderTop: "1px solid #E2D9C8" }}>
            <span style={{ fontFamily: "'Marcellus',serif", color: "#C8651B", fontSize: "14px", minWidth: "26px" }}>
              14
            </span>
            <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.7" }}>
              <L lang={lang} en={"To develop an inspiring model that can later be implemented in different states and regions."} hi={"एक ऐसा प्रेरक मॉडल विकसित करना जिसे आगे विभिन्न राज्यों एवं क्षेत्रों में लागू किया जा सके।"} />
            </span>
          </div>
        </div>
      </div>

      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "2px", background: "#2B241C", marginBottom: "2px" }}>
          <div style={{ background: "#1C1712", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
              <L lang={lang} en={"Programme"} hi={"कार्यक्रम"} />
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", marginBottom: "10px" }}>
              <L lang={lang} en={"Nayak Diwas (Heroes' Day)"} hi={"नायक दिवस"} />
            </h3>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.8", color: "#DCD2C2", marginBottom: "20px", textWrap: "pretty" }}>
              <L lang={lang} en={"\"Self-awareness to recognise one's purpose in life, inspiration from valour, character from duty, and national awareness from culture.\""} hi={"\"अपने जीवन उद्देश्य को पहचानने का स्वबोध, वीरता से प्रेरणा, कर्तव्य से चरित्र और संस्कृति से राष्ट्रबोध।\""} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.9", color: "#9C9287" }}>
              <L lang={lang} en={"Love for the nation · sense of duty · discipline · moral responsibility · valour and sacrifice · cultural leadership · social responsibility · freedom from addiction & youth awareness · service to nation and society"} hi={"राष्ट्रप्रेम · कर्तव्यबोध · अनुशासन · नैतिक दायित्व · वीरता एवं त्याग · सांस्कृतिक नेतृत्व · सामाजिक उत्तरदायित्व · नशामुक्ति एवं युवा जागरूकता · राष्ट्र एवं समाज के प्रति सेवा"} />
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "clamp(16px, 2.6vw, 38px) clamp(16px, 2.4vw, 34px)" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
              <L lang={lang} en={"Programme"} hi={"कार्यक्रम"} />
            </div>
            <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.1vw, 30px)", fontWeight: "600", marginBottom: "10px" }}>
              <L lang={lang} en={"Veerangana Diwas (Heroines' Day)"} hi={"वीरांगना दिवस"} />
            </h3>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.8", color: "#DCD2C2", marginBottom: "20px", textWrap: "pretty" }}>
              <L lang={lang} en={"\"Through women's strength — self-awareness, self-confidence, self-reliance, and social and cultural leadership.\""} hi={"\"नारी शक्ति से स्वबोध, आत्मविश्वास, आत्मनिर्भरता और सामाजिक व सांस्कृतिक नेतृत्व।\""} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.9", color: "#9C9287" }}>
              <L lang={lang} en={"Women's self-awareness · women's self-confidence · education and skills · economic and social self-reliance · decision-making · role in family and society · digital and social awareness · women's safety and responsibility · women's participation in social and cultural leadership"} hi={"स्त्री स्वबोध · महिला आत्मविश्वास · शिक्षा एवं कौशल · आर्थिक एवं सामाजिक आत्मनिर्भरता · निर्णय क्षमता · परिवार एवं समाज में भूमिका · डिजिटल एवं सामाजिक जागरूकता · महिला सुरक्षा एवं जिम्मेदारी · सामाजिक एवं सांस्कृतिक नेतृत्व में महिलाओं की भागीदारी"} />
            </div>
          </div>
        </div>
        <div className="rf" style={{ background: "#9B1C1C", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 2.4vw, 34px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(16px, 2.5vw, 36px)" }}>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", color: "#FDF6EA" }}>
            <L lang={lang} en={"This will not be just a stage programme — it is a method:"} hi={"यह केवल मंचीय कार्यक्रम नहीं होगा — कार्यपद्धति है:"} />
          </div>
          <div className="nw" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: "600", color: "#FDF6EA", whiteSpace: "nowrap" }}>
            <L lang={lang} en={"Learn → Discuss → Reflect → Act"} hi={"जानें → संवाद करें → चिंतन करें → कार्य करें"} />
          </div>
        </div>
      </div>

      <div className="rg2" style={{ padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "2px", background: "#E2D9C8" }}>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600", marginBottom: "14px" }}>
            <L lang={lang} en={"Target group"} hi={"लक्षित समूह"} />
          </h3>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.85", color: "#4A423A" }}>
            <L lang={lang} en={"Young men · young women · students · youth in higher education institutions · senior school students · youth groups and youth clubs · women and youth leadership groups"} hi={"युवा · युवतियाँ · छात्र एवं छात्राएँ · उच्च शिक्षा संस्थानों के युवा · विद्यालय स्तर के वरिष्ठ विद्यार्थी · युवा समूह एवं युवा मंडल · महिला एवं युवा नेतृत्व समूह"} />
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600", marginBottom: "14px" }}>
            <L lang={lang} en={"Wider beneficiaries"} hi={"व्यापक लाभार्थी"} />
          </h3>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.85", color: "#4A423A" }}>
            <L lang={lang} en={"Families, educational institutions, communities and other sections of society will also benefit indirectly from the project."} hi={"परिवार, शैक्षणिक संस्थान, समुदाय तथा समाज के अन्य वर्ग भी परियोजना से अप्रत्यक्ष रूप से लाभान्वित होंगे।"} />
          </div>
        </div>
        <div style={{ background: "#F6F1E7", padding: "clamp(16px, 2.4vw, 34px) clamp(16px, 2.1vw, 30px)" }}>
          <h3 style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600", marginBottom: "14px" }}>
            <L lang={lang} en={"Activities"} hi={"गतिविधियाँ"} />
          </h3>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.85", color: "#4A423A" }}>
            <L lang={lang} en={"Workshops · seminars · conferences · symposia · dialogues · resolve sessions · cultural festivals · exhibitions · research projects · publications · dance, music and drama"} hi={"कार्यशालाएँ · सेमिनार · सम्मेलन · संगोष्ठियाँ · संवाद · संकल्प सत्र · सांस्कृतिक महोत्सव · प्रदर्शनियाँ · शोध परियोजनाएँ · प्रकाशन · नृत्य, संगीत एवं नाटक"} />
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)" }}>
        <div>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "22px" }}>
            <L lang={lang} en={"Monitoring & evaluation"} hi={"निगरानी एवं मूल्यांकन"} />
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#2E5A3C" }}>
                ✓
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Number of young people and women engaged"} hi={"जुड़े हुए युवाओं एवं महिलाओं की संख्या"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#2E5A3C" }}>
                ✓
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Workshops, seminars and dialogues held"} hi={"आयोजित वर्कशॉप, सेमिनार एवं संवाद"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#2E5A3C" }}>
                ✓
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Resolves taken and the action that followed"} hi={"लिए गए संकल्प और उन पर हुई कार्रवाई"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#2E5A3C" }}>
                ✓
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Youth participation in social and cultural activities"} hi={"सामाजिक एवं सांस्कृतिक गतिविधियों में युवा सहभागिता"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#2E5A3C" }}>
                ✓
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Change in leadership, self-confidence and problem-solving ability"} hi={"नेतृत्व, आत्मविश्वास एवं समस्या समाधान क्षमता में परिवर्तन"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#2E5A3C" }}>
                ✓
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Commitment to freedom from addiction, civic duty and social responsibility"} hi={"नशामुक्ति, नागरिक कर्तव्य एवं सामाजिक उत्तरदायित्व के प्रति प्रतिबद्धता"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#2E5A3C" }}>
                ✓
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Growth in cultural participation and women's leadership"} hi={"सांस्कृतिक सहभागिता एवं महिला नेतृत्व में वृद्धि"} />
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "22px" }}>
            <L lang={lang} en={"Expected impact"} hi={"अपेक्षित प्रभाव"} />
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Young people will develop self-awareness, discipline and a purposeful outlook on life."} hi={"युवाओं में आत्मबोध, अनुशासन एवं उद्देश्यपूर्ण जीवन-दृष्टि विकसित होगी।"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Distance from drugs and other social evils will grow."} hi={"नशे एवं अन्य सामाजिक बुराइयों से दूरी बढ़ेगी।"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"The capacity for problem-solving, leadership and community participation will develop."} hi={"समस्या समाधान, नेतृत्व एवं सामुदायिक सहभागिता की क्षमता विकसित होगी।"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Awareness of Indian culture, heritage and life values will grow."} hi={"भारतीय संस्कृति, विरासत एवं जीवन-मूल्यों के प्रति जागरूकता बढ़ेगी।"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Self-confidence, leadership and social participation among women and young women will strengthen."} hi={"महिलाओं एवं युवतियों में आत्मविश्वास, नेतृत्व एवं सामाजिक भागीदारी मजबूत होगी।"} />
              </span>
            </div>
            <div style={{ display: "flex", gap: "14px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ color: "#C8651B" }}>
                →
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.65" }}>
                <L lang={lang} en={"Responsibility towards civic duty, the environment and nation-building will grow."} hi={"नागरिक कर्तव्य, पर्यावरण एवं राष्ट्र निर्माण के प्रति जिम्मेदारी बढ़ेगी।"} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(17px, 3.3vw, 48px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", opacity: ".8", marginBottom: "16px" }}>
            <L lang={lang} en={"Long-term vision — 2040"} hi={"दीर्घकालिक दृष्टि — 2040"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.7", textWrap: "pretty" }}>
            <L lang={lang} en={"The model will be expanded from the local to the national level. The goal is that by 2040 as many Indian young people and women as possible are connected with knowledge, values, culture, leadership and social responsibility."} hi={"मॉडल को स्थानीय से राष्ट्रीय स्तर तक विस्तारित किया जाएगा। लक्ष्य है कि वर्ष 2040 तक अधिकतम भारतीय युवाओं और महिलाओं को ज्ञान, संस्कार, संस्कृति, नेतृत्व और सामाजिक जिम्मेदारी से जोड़ा जाए।"} />
          </div>
        </div>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", opacity: ".8", marginBottom: "16px" }}>
            <L lang={lang} en={"Connection with the Veda Vasundhara Model"} hi={"वेद वसुंधरा मॉडल से संबंध"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 0" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600" }}>
                <L lang={lang} en={"Education"} hi={"शिक्षा"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", opacity: ".9", textAlign: "right" }}>
                <L lang={lang} en={"Knowledgeable and skilled young men and women"} hi={"ज्ञानवान एवं निपुण युवा–युवती"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 0", borderTop: "1px solid rgba(253,246,234,.28)" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600" }}>
                <L lang={lang} en={"Values"} hi={"संस्कार"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", opacity: ".9", textAlign: "right" }}>
                <L lang={lang} en={"Ethical and responsible citizens"} hi={"नैतिक एवं जिम्मेदार नागरिक"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 0", borderTop: "1px solid rgba(253,246,234,.28)" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600" }}>
                <L lang={lang} en={"Culture"} hi={"संस्कृति"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", opacity: ".9", textAlign: "right" }}>
                <L lang={lang} en={"Citizens devoted to the nation and culturally aware"} hi={"राष्ट्रनिष्ठ एवं सांस्कृतिक चेतना से युक्त नागरिक"} />
              </span>
            </div>
          </div>
          <div style={{ marginTop: "22px", fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.8", opacity: ".9", borderLeft: "2px solid rgba(253,246,234,.35)", paddingLeft: "22px" }}>
            <L lang={lang} en={"The Nari Yuva Shakti Mahotsav is the programme that connects the \"culture\" dimension of the Veda Vasundhara Model with youth leadership, social responsibility and nation-building."} hi={"नारी युवा शक्ति महोत्सव, वेद वसुंधरा मॉडल के \"संस्कृति\" आयाम को युवा नेतृत्व, सामाजिक उत्तरदायित्व और राष्ट्रनिर्माण से जोड़ने वाला कार्यक्रम है।"} />
          </div>
        </div>
      </div>
    </>
  );
}
