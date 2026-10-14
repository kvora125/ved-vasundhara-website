import L from "../lang";
import { asset } from "../asset";
import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "शोध एवं प्रकाशन · Research" };

export default function ResearchPage() {
  return (
    <>
      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(25px, 4.9vw, 70px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "16px" }}>
          <L en={"Research, Publication & Literary Works"} hi={"शोध, प्रकाशन एवं साहित्यिक कार्य"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(29px, 3.6vw, 52px)", fontWeight: "600", lineHeight: "1.3", marginBottom: "14px" }}>
          <L en={"Research, publication & literary work"} hi={"शोध, प्रकाशन एवं साहित्यिक कार्य क्षेत्र"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", lineHeight: "1.7", color: "#DCD2C2", maxWidth: "1000px", borderLeft: "3px solid #C8651B", paddingLeft: "26px", marginTop: "22px" }}>
          <L en={"Writing undertaken to bring new awareness and a new awakening to young people, society and the nation."} hi={"युवाओं, समाज एवं राष्ट्र में नव चेतना और नव जागरण लाने के उद्देश्य से किया गया लेखन कार्य।"} />
        </div>
        <div className="rf" style={{ display: "flex", gap: "0", marginTop: "clamp(16px, 2.8vw, 40px)", borderTop: "1px solid #3B342B" }}>
          <div className="rfp" style={{ flex: "1", padding: "22px 24px 0 0" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "13px", color: "#9C9287", marginBottom: "8px" }}>
              01
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "4px" }}>
              <L en={"Research Article"} hi={"शोध लेख"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C" }}>
              <L en={"Research article"} hi={"शोध लेख"} />
            </div>
          </div>
          <div className="rfb rfp" style={{ flex: "1", padding: "22px 24px 0 24px", borderLeft: "1px solid #3B342B", "--rfb": "1px solid #3B342B" } as CSSProperties}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "13px", color: "#9C9287", marginBottom: "8px" }}>
              02
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "4px" }}>
              <L en={"Books Publication"} hi={"पुस्तक प्रकाशन"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C" }}>
              <L en={"Book publication"} hi={"पुस्तक प्रकाशन"} />
            </div>
          </div>
          <div className="rfb rfp" style={{ flex: "1", padding: "22px 24px 0 24px", borderLeft: "1px solid #3B342B", "--rfb": "1px solid #3B342B" } as CSSProperties}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "13px", color: "#9C9287", marginBottom: "8px" }}>
              03
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "4px" }}>
              <L en={"Literary Works"} hi={"साहित्यिक कार्य"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C" }}>
              <L en={"Literary works"} hi={"साहित्यिक कार्य"} />
            </div>
          </div>
          <div className="rfb rfp" style={{ flex: "1", padding: "22px 24px 0 24px", borderLeft: "1px solid #3B342B", "--rfb": "1px solid #3B342B" } as CSSProperties}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "13px", color: "#9C9287", marginBottom: "8px" }}>
              04
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "4px" }}>
              <L en={"Newspaper Articles"} hi={"समाचार पत्रों में लेख"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C" }}>
              <L en={"Articles published in newspapers"} hi={"समाचार पत्रों में प्रकाशित लेख"} />
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
            <L en={"01 · Research Article"} hi={"01 · शोध लेख"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(21px, 2.6vw, 38px)", fontWeight: "600", lineHeight: "1.4", marginBottom: "8px" }}>
            <L en={"Bhaishajya Deep — a healing lamp during Corona"} hi={"कोरोना में हितकारी भैषज्य दीप"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", color: "#9B1C1C", marginBottom: "24px" }}>
            <L en={"As an air purifier and room freshener — Rashtra Kranti"} hi={"एयरप्योरिफायर एवं रूम फ्रेशनर के रूप में — राष्ट्र क्रांति"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", lineHeight: "1.85", color: "#16110D", background: "#FFFCF6", borderLeft: "3px solid #C8651B", padding: "20px 24px", marginBottom: "26px" }}>
            <L en={"\"I dedicate this series of articles to Maharshi Dayanand Saraswati as an environmentalist.\""} hi={"\"यह लेखमाला मैं महर्षि दयानन्द सरस्वती के पर्यावरणविद् रूप को समर्पित करती हूँ।\""} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.9", color: "#4A423A", marginBottom: "16px", textWrap: "pretty" }}>
            <L en={"An experiment with the oil lamp made during the Corona period, inspired by the Supreme Being, and named Bhaishajya Deep. The name comes from the Shatapatha and Gopatha texts, which prescribe the Bhaishajya Yajna — the yajna for removing illness."} hi={"कोरोना काल में परमपिता परमात्मा की प्रेरणा से दीपक पर किया गया एक प्रयोग, जिसका नाम भैषज्य दीप रखा गया। यह नाम शतपथ एवं गोपथ नामक ग्रंथ से लिया गया है, जिसमें भैषज्य यज्ञ — अर्थात व्याधियों को दूर करने संबंधी यज्ञ — का विधान है।"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", lineHeight: "1.9", color: "#4A423A", marginBottom: "clamp(16px, 2.1vw, 30px)", textWrap: "pretty" }}>
            <L en={"An ordinary lamp with two spoons of ghee burns for 10 to 15 minutes at most; the Bhaishajya Deep stays lit for about half an hour and fills the nearby rooms with fragrance. After the experiment it was lit continuously for four months, and a few others were also guided in its meaningful use."} hi={"सामान्य दीपक दो चम्मच घी के साथ अधिकतम 10 से 15 मिनट जलता है; भैषज्य दीप लगभग आधे घंटे तक प्रज्वलित रहता है और आस-पास के कमरे भी सुगन्धित हो जाते हैं। प्रयोग के उपरान्त चार माह से निरन्तर इसे प्रज्वलित किया गया एवं कुछ लोगों को भी इसका सार्थक प्रयोग कराया गया।"} />
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "2px", background: "#E2D9C8", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
            <div style={{ background: "#FFFCF6", padding: "24px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#C8651B", marginBottom: "10px" }}>
                <L en={"Mental benefits"} hi={"मानसिक लाभ"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#16110D" }}>
                <L en={"Trataka meditation sharpens concentration and memory; a feeling of mental peace and inner joy."} hi={"त्राटक ध्यान विधि से एकाग्रता एवं स्मरण शक्ति तीव्र; मानसिक शान्ति एवं आन्तरिक आनन्द की अनुभूति।"} />
              </div>
            </div>
            <div style={{ background: "#FFFCF6", padding: "24px 24px" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "#C8651B", marginBottom: "10px" }}>
                <L en={"Physical benefits"} hi={"शारीरिक लाभ"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#16110D" }}>
                <L en={"Helpful for insomnia, common headaches, and breathing, lung and throat problems; strengthens the respiratory system."} hi={"अनिद्रा, सामान्य सिर दर्द, श्वास, फेफड़ों एवं गले की समस्याओं में लाभ; श्वसन तंत्र दृढ़।"} />
              </div>
            </div>
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", marginBottom: "16px" }}>
            <L en={"Properties of the ingredients"} hi={"सामग्री के गुण"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "20px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600" }}>
                <L en={"Cow ghee"} hi={"गौ घृत"} />
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                <L en={"According to the Sushruta text, nectar-like; enhances memory, intellect and vitality; balances the three doshas and is antimicrobial."} hi={"सुश्रुत ग्रंथ के अनुसार अमृत तुल्य, स्मरण शक्ति, बुद्धि एवं ओज बढ़ाने वाला; त्रिदोषनाशक एवं कीटाणुनाशक।"} />
              </span>
            </div>
            <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "20px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600" }}>
                <L en={"Camphor"} hi={"कपूर"} />
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                <L en={"According to Bhavaprakasha, insecticidal and deodorising; beneficial for respiratory problems and an excellent antioxidant."} hi={"भावप्रकाश के अनुसार कीटनाशक एवं दुर्गन्धनाशक; श्वसन संबंधी समस्याओं में लाभकारी, उत्तम एंटी-ऑक्सीडेंट।"} />
              </span>
            </div>
            <div className="rg2" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "20px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600" }}>
                <L en={"Black cardamom"} hi={"बड़ी इलायची"} />
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                <L en={"Keeps the respiratory system healthy; boosts immunity."} hi={"श्वसन तंत्र को स्वस्थ रखती है; प्रतिरक्षा क्षमता बढ़ाती है।"} />
              </span>
            </div>
            <div className="rg2" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "20px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600" }}>
                <L en={"Guggul"} hi={"गुग्गुल"} />
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                <L en={"Rich in vitamins and antioxidants; an integral part of many medicines."} hi={"विटामिन एवं एंटी-ऑक्सीडेंट युक्त; औषधियों में अभिन्न स्थान।"} />
              </span>
            </div>
            <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "20px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600" }}>
                <L en={"Nutmeg"} hi={"जायफल"} />
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                <L en={"Antidepressant properties; helpful for insomnia and body pain; antibacterial and antiviral."} hi={"एंटी-डिप्रेसेंट गुण; अनिद्रा एवं शरीर दर्द में सहायक, एंटी-बैक्टीरियल एवं एंटी-वायरल।"} />
              </span>
            </div>
            <div className="rg2" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "20px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600" }}>
                <L en={"Giloy"} hi={"गिलोय"} />
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                <L en={"Useful for fever, burning sensation and cough because of the alkaloid berberine; insecticidal and anti-toxic."} hi={"बर्बरीन एल्कलॉइड के कारण ज्वर, दाह एवं खाँसी में उपयोगी; कीटनाशक एवं विषनाशक।"} />
              </span>
            </div>
            <div className="rg2" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "20px", padding: "14px 0", borderTop: "1px solid #E2D9C8" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600" }}>
                <L en={"Havan samagri"} hi={"हवन सामग्री"} />
              </span>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                <L en={"Purifies the environment."} hi={"पर्यावरण को शुद्ध करती है।"} />
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(16px, 2.1vw, 30px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "18px" }}>
              <L en={"Ingredients of the Bhaishajya Deep"} hi={"भैषज्य दीप की सामग्री"} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Guggul"} hi={"गुग्गुल"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                <L en={"25 grams"} hi={"25 ग्राम"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Giloy powder"} hi={"गिलोय चूर्ण"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                <L en={"50 grams"} hi={"50 ग्राम"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Havan samagri"} hi={"हवन सामग्री"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                <L en={"50 grams"} hi={"50 ग्राम"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Camphor"} hi={"कपूर"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                <L en={"08 small pieces"} hi={"08 छोटे टुकड़े"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Black cardamom seeds"} hi={"बड़ी इलायची के दाने"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                04
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Cinnamon"} hi={"दालचीनी"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                <L en={"Equal to one chickpea"} hi={"काबुली चना बराबर"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Nutmeg"} hi={"जायफल"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                <L en={"One teaspoon"} hi={"एक छोटा चम्मच"} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "11px 0", borderTop: "1px solid #2B241C" }}>
              <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px" }}>
                <L en={"Cow's ghee"} hi={"गाय का घी"} />
              </span>
              <span className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#B7AC9C", textAlign: "right" }}>
                <L en={"Two spoons"} hi={"दो चम्मच"} />
              </span>
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", lineHeight: "1.75", color: "#9C9287", marginTop: "16px", borderTop: "1px solid #2B241C", paddingTop: "14px" }}>
              <L en={"First the round wick, then two pinches of the mixture, then two spoons of cow's ghee — keep the ingredients in this order."} hi={"पहले गोल बाती, फिर दो चुटकी मिश्रण, फिर दो चम्मच गाय का घी — सामग्रियों का क्रम यही रखें।"} />
            </div>
          </div>
          <div style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 1.9vw, 28px) clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", opacity: ".8", marginBottom: "14px" }}>
              <L en={"Vedic basis · Yajurveda 6.16"} hi={"वैदिक आधार · यजुर्वेद 6.16"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600", lineHeight: "1.55", marginBottom: "12px" }}>
              &quot;स्वाहा कृते ऊर्ध्वनभसं मारुतं गच्छतम्।&quot;
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", opacity: ".92" }}>
              <L en={"Offerings made with \"svaha\" in the yajna carry air upward into the sky; becoming lighter, it purifies the whole atmosphere — the Law of Diffusion of Gases."} hi={"यज्ञ में स्वाहापूर्वक आहुति देने से वायु ऊपर आकाश में जाती है और हल्की होकर सम्पूर्ण वायुमण्डल को शुद्ध कर देती है — गैसों के विसरण का नियम।"} />
            </div>
          </div>
          <a href={asset("/assets/pdfimg/rp-00.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-00.jpg")} alt="प्रकाशित लेख — समाचार पत्र" loading="lazy" style={{ width: "100%", height: "clamp(252px, 29.2vw, 420px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Published article — newspaper"} hi={"प्रकाशित लेख — समाचार पत्र"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Dr. Praveen Satyendra Vidyalankar"} hi={"डॉ. प्रवीण सत्येन्द्र विद्यालंकार"} />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
          <L en={"02 · Book Publication"} hi={"02 · पुस्तक प्रकाशन"} />
        </div>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "26px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L en={"Published books"} hi={"प्रकाशित पुस्तकें"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"Walnut Publication · India · UK · USA · Amazon · Flipkart"} hi={"Walnut Publication · भारत · यूके · यूएसए · Amazon · Flipkart"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "230px 230px minmax(0,1fr)", gap: "clamp(16px, 2.2vw, 32px)", alignItems: "start", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <div>
            <img src={asset("/assets/book-jalta.jpg")} alt="जलता दीया हवाओं पर" style={{ width: "100%", display: "block", border: "1px solid #DED5C6", marginBottom: "14px" }} />
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              <L en={"Jalta Diya Hawaon Par"} hi={"जलता दीया हवाओं पर"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459", marginTop: "4px" }}>
              <L en={"जलता दीया हवाओं पर"} hi={"Jalta Diya Hawaon Par"} />
            </div>
          </div>
          <div>
            <img src={asset("/assets/pdfimg/rp-04.jpg")} alt="मिट्टी के रंग, जीवन के संग" style={{ width: "100%", display: "block", border: "1px solid #DED5C6", marginBottom: "14px" }} />
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              <L en={"Mitti Ke Rang, Jivan Ke Sang"} hi={"मिट्टी के रंग, जीवन के संग"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459", marginTop: "4px" }}>
              ISBN 978-935911759-1
            </div>
          </div>
          <div style={{ borderLeft: "3px solid #C8651B", paddingLeft: "clamp(16px, 2.2vw, 32px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: "1.75", marginBottom: "18px", textWrap: "pretty" }}>
              <L en={"\"Your principal works, ‘Jalta Diya Hawaon Par’ and ‘Mitti Ke Rang Jivan Ke Sang’, will surely inspire young people to choose the right direction.\""} hi={"\"आपकी प्रमुख कृतियाँ ‘जलता दीया हवाओं पर’ एवं ‘मिट्टी के रंग जीवन के संग’ निश्चित रूप से युवाओं को सही दिशा अपनाने के लिए प्रेरित करेंगी।\""} />
            </div>
            <div style={{ fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9287", marginBottom: "26px" }}>
              <L en={"Publisher's note · Walnut Publication"} hi={"प्रकाशक की टिप्पणी · Walnut Publication"} />
            </div>
            <div style={{ borderTop: "2px solid #16110D", paddingTop: "16px" }}>
              <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(17px, 1.5vw, 21px)", marginBottom: "8px" }}>
                <L en={"Eco Learning Award, 2004"} hi={"इको लर्निंग अवॉर्ड, 2004"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#4A423A" }}>
                <L en={"Honoured by Indian Ecology & Environment, New Delhi, at the India International Centre — for a research paper on environmental studies in the light of Maharshi Dayanand's \"Yajurveda Bhashya\"."} hi={"भारतीय पारिस्थितिकी एवं पर्यावरण, नई दिल्ली द्वारा इंडिया इंटरनेशनल सेंटर में सम्मानित — महर्षि दयानंद रचित \"यजुर्वेद भाष्य\" के आलोक में पर्यावरण अध्ययन पर शोध पत्र हेतु।"} />
              </div>
            </div>
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "18px" }}>
          <a href={asset("/assets/pdfimg/rp-02.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-02.jpg")} alt="जलता दीया हवाओं पर — पृष्ठ आवरण" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Jalta Diya Hawaon Par — cover"} hi={"जलता दीया हवाओं पर — पृष्ठ आवरण"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                Walnut Publication
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-05.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-05.jpg")} alt="मिट्टी के रंग, जीवन के संग — पृष्ठ आवरण" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Mitti Ke Rang, Jivan Ke Sang — cover"} hi={"मिट्टी के रंग, जीवन के संग — पृष्ठ आवरण"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"With an author introduction"} hi={"लेखक परिचय सहित"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-03.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-03.jpg")} alt="Also available on Amazon · Flipkart" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Also available on Amazon · Flipkart"} hi={"Amazon · Flipkart पर भी उपलब्ध"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Book details"} hi={"पुस्तक विवरण"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-07.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-07.jpg")} alt="Books by Dr. Praveen Satyendra Vidyalankar" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "center", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Books by Dr. Praveen Satyendra Vidyalankar"} hi={"डॉ. प्रवीण सत्येन्द्र विद्यालंकार की पुस्तकें"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                walnutpublication.com
              </div>
            </div>
          </a>
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
          <L en={"03 · Literary Works"} hi={"03 · साहित्यिक कार्य"} />
        </div>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "26px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L en={"Keshav Samvad — \"Panch Parivartan in the Vedas\""} hi={"केशव संवाद — \"वेदों में पंच परिवर्तन\""} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"Article series"} hi={"लेख शृंखला"} />
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "18px" }}>
          <a href={asset("/assets/pdfimg/rp-08.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-08.jpg")} alt="केशव संवाद — RSS@100 : पंच परिवर्तन" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Keshav Samvad — RSS@100: Panch Parivartan"} hi={"केशव संवाद — RSS@100 : पंच परिवर्तन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Cover"} hi={"आवरण"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-09.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-09.jpg")} alt="वेदों में पंच परिवर्तन" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Panch Parivartan in the Vedas"} hi={"वेदों में पंच परिवर्तन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Article — Keshav Samvad"} hi={"लेख — केशव संवाद"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-10.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-10.jpg")} alt="पंच परिवर्तन — कुटुम्ब प्रबोधन, सामाजिक समरसता, पर्यावरण संरक्षण, स्व-बोध, नागरिक कर्तव्य" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Panch Parivartan — family awareness, social harmony, environmental protection, self-awareness, civic duty"} hi={"पंच परिवर्तन — कुटुम्ब प्रबोधन, सामाजिक समरसता, पर्यावरण संरक्षण, स्व-बोध, नागरिक कर्तव्य"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Article — Keshav Samvad"} hi={"लेख — केशव संवाद"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-11.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-11.jpg")} alt="केशव संवाद — वेदों में पंच परिवर्तन" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Keshav Samvad — Panch Parivartan in the Vedas"} hi={"केशव संवाद — वेदों में पंच परिवर्तन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Cover"} hi={"आवरण"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-12.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-12.jpg")} alt="वेदों में पंच परिवर्तन — ऋग्वेद · यजुर्वेद · सामवेद · अथर्ववेद" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Panch Parivartan in the Vedas — Rigveda · Yajurveda · Samaveda · Atharvaveda"} hi={"वेदों में पंच परिवर्तन — ऋग्वेद · यजुर्वेद · सामवेद · अथर्ववेद"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Article — Keshav Samvad"} hi={"लेख — केशव संवाद"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-13.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-13.jpg")} alt="वेदों में पंच परिवर्तन" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Panch Parivartan in the Vedas"} hi={"वेदों में पंच परिवर्तन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Article — Keshav Samvad"} hi={"लेख — केशव संवाद"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-14.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-14.jpg")} alt="वेदों में पंच परिवर्तन" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Panch Parivartan in the Vedas"} hi={"वेदों में पंच परिवर्तन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Article — Keshav Samvad"} hi={"लेख — केशव संवाद"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-15.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-15.jpg")} alt="स्वामी देव दयानन्द सरस्वती के अखण्ड राष्ट्र के स्वर" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Swami Dev Dayanand Saraswati's voice for an undivided nation"} hi={"स्वामी देव दयानन्द सरस्वती के अखण्ड राष्ट्र के स्वर"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Article"} hi={"लेख"} />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
          <L en={"04 · Articles published in other newspapers"} hi={"04 · अन्य समाचार पत्रों में प्रकाशित लेख"} />
        </div>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "26px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L en={"Articles published in newspapers"} hi={"समाचार पत्रों में प्रकाशित लेख"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"Newspaper articles"} hi={"समाचार पत्रों में लेख"} />
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "18px" }}>
          <a href={asset("/assets/pdfimg/rp-16.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-16.jpg")} alt="भारतीय ज्ञान परम्परा के पुनर्जागरण विषयक विविध समाचार" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Various reports on the revival of the Indian knowledge tradition"} hi={"भारतीय ज्ञान परम्परा के पुनर्जागरण विषयक विविध समाचार"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-17.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-17.jpg")} alt="नवरात्रि, उपवास एवं व्रत तथा देवी दुर्गा" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Navratri, fasting and vows, and Goddess Durga"} hi={"नवरात्रि, उपवास एवं व्रत तथा देवी दुर्गा"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Deenbandhu — special"} hi={"दीनबन्धु — स्पेशल"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-18.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-18.jpg")} alt="नवरात्रि, उपवास एवं व्रत — लेख का शेष भाग" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Navratri, fasting and vows — rest of the article"} hi={"नवरात्रि, उपवास एवं व्रत — लेख का शेष भाग"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Deenbandhu"} hi={"दीनबन्धु"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-19.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-19.jpg")} alt="दीपावली विशेष" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"Deepawali special"} hi={"दीपावली विशेष"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Deenbandhu — special"} hi={"दीनबन्धु — स्पेशल"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-20.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-20.jpg")} alt="युवा-शक्ति राष्ट्रधर्म धरातल की गौरवमयी अभिव्यक्ति बने" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"May youth power become a proud expression of the nation's dharma"} hi={"युवा-शक्ति राष्ट्रधर्म धरातल की गौरवमयी अभिव्यक्ति बने"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Deenbandhu — special"} hi={"दीनबन्धु — स्पेशल"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-21.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-21.jpg")} alt="सात्त्विक, सात्विक व संयमी युवा-शक्ति की कहानी" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"The story of pure, virtuous and self-restrained youth power"} hi={"सात्त्विक, सात्विक व संयमी युवा-शक्ति की कहानी"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Aviral Times"} hi={"अविरल टाइम्स"} />
              </div>
            </div>
          </a>
          <a href={asset("/assets/pdfimg/rp-22.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <img src={asset("/assets/pdfimg/rp-22.jpg")} alt="सदाचारी, सात्त्विक व संयमी युवा-शक्ति की कहानी रचती है राष्ट्र की रवानी" loading="lazy" style={{ width: "100%", height: "clamp(198px, 22.9vw, 330px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
            <div style={{ padding: "18px 20px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"The story of virtuous, pure and self-restrained youth power shapes the nation's flow"} hi={"सदाचारी, सात्त्विक व संयमी युवा-शक्ति की कहानी रचती है राष्ट्र की रवानी"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                <L en={"Deenbandhu — special"} hi={"दीनबन्धु — स्पेशल"} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
