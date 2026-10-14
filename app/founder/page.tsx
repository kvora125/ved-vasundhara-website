import L from "../lang";
import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "संस्थापक · Founder" };

export default function FounderPage() {
  return (
    <>
      <div className="rg1" style={{ display: "grid", gridTemplateColumns: "520px minmax(0,1fr)", minHeight: "clamp(384px, 44.4vw, 640px)" }}>
        <div style={{ position: "relative", background: "#EDE5D6" }}>
          <img src={asset("/assets/founder-portrait-2.jpg")} alt="डॉ. प्रवीण सत्येन्द्र विद्यालंकार" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        </div>
        <div style={{ padding: "clamp(26px, 5vw, 72px) clamp(20px, 3.9vw, 56px)", background: "#FFFCF6" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            <L en={"Founder & Visionary"} hi={"संस्थापक एवं परिकल्पनाकार"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(23px, 2.9vw, 42px)", fontWeight: "600", lineHeight: "1.25", marginBottom: "6px" }}>
            <L en={"Dr. Praveen Satyendra Vidyalankar"} hi={"डॉ. प्रवीण सत्येन्द्र विद्यालंकार"} />
          </div>
          <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(20px, 1.7vw, 24px)", color: "#6E6459", marginBottom: "10px" }}>
            <L en={"डॉ. प्रवीण सत्येन्द्र विद्यालंकार"} hi={"Dr. Praveen Satyendra Vidyalankar"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#9B1C1C", marginBottom: "clamp(16px, 1.9vw, 28px)" }}>
            <L en={"Author · Social worker · Vedic lecturer"} hi={"लेखक · समाजसेवी · वैदिक व्याख्याता"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.75", color: "#16110D", marginBottom: "26px", textWrap: "pretty" }}>
            <L en={"\"My journey began with a question — should our young people only become job-seekers, or can they become the makers of their own lives and creators of opportunity in society?\""} hi={"\"मेरी यात्रा एक प्रश्न से शुरू हुई — क्या हमारे युवा केवल रोजगार खोजने वाले बनें, या वे स्वयं अपने जीवन के निर्माता और समाज में अवसरों के सृजक बन सकते हैं?\""} />
          </div>
          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#6E6459", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
            <L en={"That question led to joining education, values, culture, skill, self-reliance and leadership into a single line of thought. Drawing on study, reflection and lived experience of the Indian knowledge tradition, the idea gradually took shape as the Veda Vasundhara Model."} hi={"इसी प्रश्न ने शिक्षा, संस्कार, संस्कृति, कौशल, आत्मनिर्भरता और नेतृत्व को एक विचार-सूत्र में जोड़ने की प्रेरणा दी। भारतीय ज्ञान परंपरा के अध्ययन, चिंतन और जीवनानुभव से यह विचार धीरे-धीरे वेद वसुंधरा मॉडल के रूप में आकार लेता गया।"} />
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ borderTop: "2px solid #16110D", paddingTop: "16px" }}>
              <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "10px" }}>
                <L en={"My Philosophy"} hi={"मेरा दर्शन"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                <L en={"\"I claim no new knowledge. An ocean of knowledge already exists in the Vedas; I have only tried to dive into it and gather a few pearls.\""} hi={"\"मैं कोई नए ज्ञान का दावा नहीं करती। वेदों में ज्ञान का सागर पहले से विद्यमान है; मैंने तो केवल उसमें डुबकी लगाकर कुछ मोतियों को चुनने का प्रयास किया है।\""} />
              </div>
            </div>
            <div style={{ borderTop: "2px solid #16110D", paddingTop: "16px" }}>
              <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(18px, 1.5vw, 22px)", marginBottom: "10px" }}>
                <L en={"My Work"} hi={"मेरा कार्य"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
                <L en={"\"At the centre of my work — connecting Indian knowledge, modern skills and youth leadership with life and nation-building.\""} hi={"\"मेरे कार्य का केंद्र है — भारतीय ज्ञान, आधुनिक कौशल और युवा नेतृत्व को जीवन एवं राष्ट्र-निर्माण से जोड़ना।\""} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px)", background: "#16110D", color: "#F6F1E7" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "clamp(16px, 2.8vw, 40px)", marginBottom: "clamp(16px, 2.2vw, 32px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "12px" }}>
              <L en={"Featured in print"} hi={"पत्रिका में प्रकाशित"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.5vw, 36px)", fontWeight: "600", lineHeight: "1.35" }}>
              <L en={"A heritage of the Indian knowledge tradition"} hi={"भारतीय ज्ञान-परंपरा की धरोहर"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", color: "#DCD2C2", marginTop: "8px" }}>
              <L en={"The inspiring life story of Dr. Praveen Satyendra Vidyalankar"} hi={"डॉ० प्रवीण सत्येन्द्र विद्यालंकार की प्रेरक जीवन गाथा"} />
            </div>
          </div>
          <div className="tr" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#B7AC9C", textAlign: "right" }}>
            <L en={"Prerna Vichar (monthly) · Uttar Pradesh: Matrishakti special issue"} hi={"प्रेरणा विचार (मासिक) · उत्तर प्रदेश : मातृशक्ति विशेषांक"} />
            <br />
            <L en={"October 2026 · pages 79–80 · RNI No. UPHIN/2023/84344"} hi={"अक्टूबर 2026 · पृष्ठ 79–80 · RNI No. UPHIN/2023/84344"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "24px" }}>
          <a href={asset("/assets/prerna-cover.jpg")} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#FFFCF6", padding: "10px", textDecoration: "none", color: "#16110D" }}>
            <img src={asset("/assets/prerna-cover.jpg")} alt="प्रेरणा विचार — मातृशक्ति विशेषांक, अक्टूबर 2026 (आवरण)" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", padding: "10px 4px 2px" }}>
              <L en={"Cover page"} hi={"आवरण पृष्ठ"} />
            </div>
          </a>
          <a href={asset("/assets/prerna-p79.jpg")} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#FFFCF6", padding: "10px", textDecoration: "none", color: "#16110D" }}>
            <img src={asset("/assets/prerna-p79.jpg")} alt="प्रेरणा विचार, पृष्ठ 79" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", padding: "10px 4px 2px" }}>
              <L en={"Page 79"} hi={"पृष्ठ 79"} />
            </div>
          </a>
          <a href={asset("/assets/prerna-p80.jpg")} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#FFFCF6", padding: "10px", textDecoration: "none", color: "#16110D" }}>
            <img src={asset("/assets/prerna-p80.jpg")} alt="प्रेरणा विचार, पृष्ठ 80" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }} />
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", padding: "10px 4px 2px" }}>
              <L en={"Page 80"} hi={"पृष्ठ 80"} />
            </div>
          </a>
        </div>
      </div>

      <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px)", background: "#F6F1E7", borderTop: "1px solid #E2D9C8" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(16px, 2.2vw, 32px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "12px" }}>
              <L en={"Published works"} hi={"प्रकाशित कृतियाँ"} />
            </div>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
              <L en={"Books & recognition"} hi={"पुस्तकें एवं सम्मान"} />
            </div>
          </div>
          <div style={{ fontSize: "14px", color: "#6E6459" }}>
            <L en={"Walnut Publication · India · UK · USA"} hi={"Walnut Publication · भारत · यूके · यूएसए"} />
          </div>
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "220px 220px minmax(0,1fr)", gap: "clamp(16px, 2.2vw, 32px)", alignItems: "start" }}>
          <div>
            <div style={{ aspectRatio: "2/3", border: "1px solid #E2D9C8", marginBottom: "14px" }}>
              <img src={asset("/assets/book-jalta.jpg")} alt="जलता दीया हवाओं पर" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.45" }}>
              <L en={"Jalta Diya Hawaon Par"} hi={"जलता दीया हवाओं पर"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459", marginTop: "4px" }}>
              <L en={"जलता दीया हवाओं पर"} hi={"Jalta Diya Hawaon Par"} />
            </div>
          </div>
          <div>
            <div style={{ aspectRatio: "2/3", border: "1px solid #E2D9C8", marginBottom: "14px" }}>
              <img src={asset("/assets/book-mitti.jpg")} alt="मिट्टी के रंग, जीवन के संग" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", lineHeight: "1.45" }}>
              <L en={"Mitti Ke Rang, Jivan Ke Sang"} hi={"मिट्टी के रंग, जीवन के संग"} />
            </div>
            <div style={{ fontSize: "13px", color: "#6E6459", marginTop: "4px" }}>
              <L en={"मिट्टी के रंग, जीवन के संग · ISBN 978-935911759-1"} hi={"Mitti Ke Rang, Jivan Ke Sang · ISBN 978-935911759-1"} />
            </div>
          </div>
          <div style={{ borderLeft: "3px solid #C8651B", paddingLeft: "clamp(16px, 2.2vw, 32px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: "1.7", color: "#16110D", marginBottom: "22px", textWrap: "pretty" }}>
              <L en={"\"Your principal works, ‘Jalta Diya Hawaon Par’ and ‘Mitti Ke Rang Jivan Ke Sang’, will surely inspire young people to choose the right direction.\""} hi={"\"आपकी प्रमुख कृतियाँ ‘जलता दीया हवाओं पर’ एवं ‘मिट्टी के रंग जीवन के संग’ निश्चित रूप से युवाओं को सही दिशा अपनाने के लिए प्रेरित करेंगी।\""} />
            </div>
            <div style={{ fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9287", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
              <L en={"Publisher’s note, Walnut Publication"} hi={"प्रकाशक की टिप्पणी, Walnut Publication"} />
            </div>
            <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "22px" }}>
              <div style={{ borderTop: "2px solid #16110D", paddingTop: "14px" }}>
                <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "8px" }}>
                  <L en={"Eco Learning Award, 2004"} hi={"इको लर्निंग अवॉर्ड, 2004"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                  <L en={"Honoured by Indian Ecology & Environment, New Delhi, at the India International Centre — for a research paper on environmental studies in the light of Maharshi Dayanand's \"Yajurveda Bhashya\"."} hi={"भारतीय पारिस्थितिकी एवं पर्यावरण, नई दिल्ली द्वारा इंडिया इंटरनेशनल सेंटर में सम्मानित — महर्षि दयानंद रचित \"यजुर्वेद भाष्य\" के आलोक में पर्यावरण अध्ययन पर शोध पत्र हेतु।"} />
                </div>
              </div>
              <div style={{ borderTop: "2px solid #16110D", paddingTop: "14px" }}>
                <div style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "8px" }}>
                  <L en={"Education"} hi={"शिक्षा"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.75", color: "#4A423A" }}>
                  <L en={"Graduate of Kanya Gurukul Hathras (Gurukul Kangri University); Master's in Philosophy from the University of Allahabad; Master's in Ecology & Environment, New Delhi; B.Ed. from Chhatrapati Shahu Ji Maharaj University, Kanpur."} hi={"कन्या गुरुकुल हाथरस (गुरुकुल कांगड़ी विश्वविद्यालय) से स्नातक; इलाहाबाद विश्वविद्यालय से दर्शनशास्त्र में परास्नातक; पारिस्थितिकी एवं पर्यावरण, नई दिल्ली से परास्नातक; छत्रपति शाहू जी महाराज विश्वविद्यालय, कानपुर से बी.एड.।"} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "26px", display: "flex", gap: "10px", flexWrap: "wrap", fontSize: "14px" }}>
              <a href="https://www.walnutpublication.com" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid #16110D", color: "#16110D", padding: "12px 22px", fontWeight: "600", textDecoration: "none" }}>
                <L en={"View books ↗"} hi={"पुस्तकें देखें ↗"} />
              </a>
              <span style={{ border: "1px solid #DED5C6", color: "#6E6459", padding: "12px 22px" }}>
                <L en={"Vedic lectures"} hi={"वैदिक व्याख्यान"} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(19px, 3.6vw, 52px) clamp(20px, 3.9vw, 56px)", background: "#F6F1E7", borderTop: "1px solid #E2D9C8" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)" }}>
            <L en={"From the dais"} hi={"मंच से"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"Lectures, addresses and public platforms"} hi={"व्याख्यान, संबोधन एवं सार्वजनिक मंच"} />
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "16px" }}>
          <img src={asset("/assets/founder-speak-1.png")} alt="संबोधन" style={{ width: "100%", height: "clamp(168px, 19.4vw, 280px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <img src={asset("/assets/founder-speak-3.png")} alt="मंच से व्याख्यान" style={{ width: "100%", height: "clamp(168px, 19.4vw, 280px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <img src={asset("/assets/founder-speak-2.png")} alt="सार्वजनिक संबोधन" style={{ width: "100%", height: "clamp(168px, 19.4vw, 280px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <img src={asset("/assets/founder-speak-4.jpg")} alt="मंच से संबोधन" style={{ width: "100%", height: "clamp(168px, 19.4vw, 280px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <img src={asset("/assets/founder-pagdi.jpg")} alt="डॉ. प्रवीण सत्येन्द्र विद्यालंकार" style={{ width: "100%", height: "clamp(168px, 19.4vw, 280px)", objectFit: "cover", objectPosition: "top", display: "block" }} />
        </div>
      </div>

      <div className="rg1" style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: "clamp(19px, 3.6vw, 52px)", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "18px" }}>
            <L en={"Inspiration, guru and resolve"} hi={"प्रेरणा, गुरु और संकल्प"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.9", color: "#16110D", marginBottom: "22px", textWrap: "pretty" }}>
            <L en={"I believe that whenever ideas or work of renewal for society or the nation take shape within a person, the main inspiration belongs to those through whom the Vedas took root in me in many ways."} hi={"मेरा मानना है कि जब भी व्यक्ति के अंदर समाज या राष्ट्र के प्रति नवनिर्माणात्मक विचारों अथवा कार्यों का सृजन होता है, तो मुख्य प्रेरणा उन्हीं की है — जिनके कारण वेदों का अंकुरण मुझ में विभिन्न माध्यमों से हुआ।"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.9", color: "#16110D", textWrap: "pretty" }}>
            <L en={"Maharshi Dayanand Saraswati's"} hi={"महर्षि दयानंद सरस्वती का"} />
            {" "}
            <strong style={{ fontWeight: "600" }}>
              <L en={"\"Go back to the Vedas\""} hi={"\"वेदों की ओर लौटो\""} />
            </strong>
            {" "}
            <L en={"call, and Swami Vivekananda's thoughts on the universality of the Vedas, have been my principal sources of inspiration; my first introduction to the Vedas, and the direction on this path, came from my"} hi={"का आह्वान और स्वामी विवेकानंद के वेदों की सार्वभौमिकता संबंधी विचार मेरे प्रमुख प्रेरणा-स्रोत रहे; वहीं वेदों से मेरा प्रथम परिचय और इस मार्ग की दिशा देने वाले मेरे"} />
            {" "}
            <strong style={{ fontWeight: "600" }}>
              <L en={"father, my first guru"} hi={"पिताजी मेरे प्राथमिक गुरु"} />
            </strong>
            {" "}
            <L en={". From these inspirations took shape my resolve to bring the life-giving knowledge of the Vedas to young people in a modern context."} hi={"रहे। इन्हीं प्रेरणाओं से वेदों के जीवनोपयोगी ज्ञान को आधुनिक संदर्भ में युवाओं तक पहुँचाने का मेरा संकल्प आकार लिया।"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <div style={{ background: "#FFFCF6", borderLeft: "3px solid #C8651B", padding: "26px clamp(16px, 1.9vw, 28px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Maharshi Dayanand Saraswati"} hi={"महर्षि दयानंद सरस्वती"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"\"Go back to the Vedas\" — not merely a sentence, but an inspiration to understand deeply the remarkable knowledge and vision held within this extraordinary message."} hi={"\"वेदों की ओर लौटो\" — केवल एक वाक्य नहीं, इस महान विलक्षण संदेश में निहित अद्भुत ज्ञान और दृष्टि को गहराई से समझने की प्रेरणा।"} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", borderLeft: "3px solid #C8651B", padding: "26px clamp(16px, 1.9vw, 28px)", marginTop: "14px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Swami Vivekananda"} hi={"स्वामी विवेकानंद"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"\"The Vedas are the root of all religions.\""} hi={"\"वेद सभी धर्मों के मूल हैं।\""} />
            </div>
          </div>
          <div style={{ background: "#FFFCF6", borderLeft: "3px solid #C8651B", padding: "26px clamp(16px, 1.9vw, 28px)", marginTop: "14px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Father — first guru"} hi={"पिताजी — प्राथमिक गुरु"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.8", color: "#4A423A" }}>
              <L en={"First introduction to the Vedas and the direction of this path."} hi={"वेदों से प्रथम परिचय और इस मार्ग की दिशा।"} />
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(23px, 4.4vw, 64px)" }}>
        <div>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "20px" }}>
            <L en={"The question that shaped the model"} hi={"वह प्रश्न जिसने मॉडल को आकार दिया"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", lineHeight: "1.6", textWrap: "pretty" }}>
            <L en={"\"Do the Vedas really contain anything about how young people should see their lives?\""} hi={"\"क्या वास्तव में वेदों में युवाओं की जीवन-दृष्टि से संबंधित बातें भी हैं?\""} />
          </div>
          <div style={{ fontSize: "15px", color: "#B7AC9C", marginTop: "18px", lineHeight: "1.7" }}>
            <L en={"Asked by students during a university dialogue. The question hardened the resolve and set the direction of the work that followed."} hi={"एक विश्वविद्यालय संवाद में विद्यार्थियों द्वारा पूछा गया प्रश्न। इस प्रश्न ने संकल्प को दृढ़ किया और आगे के कार्य की दिशा तय की।"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ borderLeft: "2px solid #4A4238", paddingLeft: "22px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "6px" }}>
              <L en={"Swami Dayanand's call"} hi={"स्वामी दयानंद का आह्वान"} />
            </div>
            <div style={{ fontSize: "15px", color: "#B7AC9C", lineHeight: "1.7" }}>
              <L en={"Read not as a single sentence but as an invitation to understand the knowledge held within it."} hi={"केवल एक वाक्य के रूप में नहीं, बल्कि उसमें निहित ज्ञान को समझने के निमंत्रण के रूप में पढ़ा गया।"} />
            </div>
          </div>
          <div style={{ borderLeft: "2px solid #4A4238", paddingLeft: "22px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "6px" }}>
              <L en={"Swami Vivekananda"} hi={"स्वामी विवेकानंद"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", color: "#E5DDCE", lineHeight: "1.7" }}>
              <L en={"\"The Vedas are the root of all religions.\""} hi={"\"वेद सभी धर्मों के मूल हैं।\""} />
            </div>
          </div>
          <div style={{ borderLeft: "2px solid #4A4238", paddingLeft: "22px" }}>
            <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(16px, 1.4vw, 20px)", marginBottom: "6px" }}>
              <L en={"Nari–Yuva Shakti Mahotsav"} hi={"नारी–युवा शक्ति महोत्सव"} />
            </div>
            <div style={{ fontSize: "15px", color: "#B7AC9C", lineHeight: "1.7" }}>
              <L en={"Veda-based programmes run in universities, where the idea was first tested with young people."} hi={"विश्वविद्यालयों में संचालित वेद-आधारित कार्यक्रम, जहाँ इस विचार को पहली बार युवाओं के साथ परखा गया।"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
