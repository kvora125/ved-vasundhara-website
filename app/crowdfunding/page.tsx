import L from "../lang";
import { asset } from "../asset";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "जन-सहयोग · Crowdfunding" };

export default function CrowdfundingPage() {
  return (
    <>
      <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(17px, 3.3vw, 48px) clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)" }}>
          <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#C8651B", marginBottom: "18px" }}>
            <L en={"Crowdfunding campaign"} hi={"जनसहयोग अभियान"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(23px, 2.9vw, 42px)", fontWeight: "600", lineHeight: "1.32", marginBottom: "12px", textWrap: "pretty" }}>
            <L en={"Take the three-day leadership workshop to 10,000 young people"} hi={"10,000 युवाओं तक त्रिदिवसीय नेतृत्व कार्यशाला पहुँचाइए"} />
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: "1.4", color: "#6E6459", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
            <L en={"10,000 युवाओं तक त्रिदिवसीय नेतृत्व कार्यशाला पहुँचाइए"} hi={"Take the three-day leadership workshop to 10,000 young people"} />
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: "12px", height: "clamp(192px, 22.2vw, 320px)" }}>
            <img src={asset("/assets/ev-workshop-school.jpg")} alt="विद्यालय में नेतृत्व कार्यशाला" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", border: "1px solid #E2D9C8" }} />
            <img src={asset("/assets/ev-interview.png")} alt="कार्यक्रम के दौरान मीडिया साक्षात्कार" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% center", display: "block", border: "1px solid #E2D9C8" }} />
          </div>
        </div>
        <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px) 0" }}>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "700", marginBottom: "16px" }}>
              <L en={"For donations and support"} hi={"दान एवं सहयोग हेतु"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "700" }}>
              <L en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", fontStyle: "italic", color: "#6E6459", marginBottom: "18px" }}>
              <L en={"(an organisation holding 12A and other statutory registrations)"} hi={"(12A एवं अन्य वैधानिक पंजीकरणों से युक्त संस्था)"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#2B241C", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px", textWrap: "pretty" }}>
              <div style={{ fontWeight: "700" }}>
                <L en={"Your support is invited for the social programmes of the Veda Vasundhara Model."} hi={"वेद वसुंधरा मॉडल के सामाजिक कार्यक्रमों हेतु आपका सहयोग आमंत्रित है।"} />
              </div>
              <div>
                <L en={"Your contribution will be received directly in the"} hi={"आपकी सहयोग राशि सीधे"} />
                {" "}
                <span style={{ fontWeight: "700" }}>
                  <L en={"official bank account of Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति के आधिकारिक बैंक खाते"} />
                </span>
                {" "}
                <L en={"."} hi={"में प्राप्त होगी।"} />
              </div>
              <div>
                <L en={"Your"} hi={"आपका"} />
                {" "}
                <span style={{ fontWeight: "700" }}>
                  <L en={"invaluable support will be a meaningful offering to nation-building and to shaping the lives of young men and women"} hi={"अमूल्य सहयोग राष्ट्र निर्माण तथा युवा-युवतियों के जीवन-निर्माण में एक सार्थक आहुति"} />
                </span>
                {" "}
                <L en={". Your support will help take forward social programmes in education, values, culture, youth empowerment, women's empowerment and nation-building."} hi={"होगा। आपके सहयोग से शिक्षा, संस्कार, संस्कृति, युवा सशक्तिकरण, नारी शक्ति एवं राष्ट्र निर्माण से जुड़े सामाजिक कार्यक्रमों को आगे बढ़ाने में सहायता मिलेगी।"} />
              </div>
            </div>
            <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "18px", alignItems: "center", marginBottom: "20px" }}>
              <img src={asset("/assets/qr-boi.png")} alt="Bank of India UPI QR — Sanskarit Yuva Aadarsh Samiti" style={{ width: "150px", height: "auto", display: "block" }} />
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>
                <L en={"Please scan the QR code to contribute."} hi={"कृपया QR Code स्कैन करके सहयोग प्रदान करें।"} />
              </div>
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", border: "1px solid #E2D9C8", background: "#FFFCF6", padding: "14px 16px", marginBottom: "16px" }}>
              <div style={{ fontSize: "18px", fontWeight: "700", marginBottom: "6px" }}>
                <L en={"Bank details"} hi={"बैंक विवरण"} />
              </div>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    <L en={"Account holder:"} hi={"खाता धारक:"} />
                  </span>
                  {" "}
                  <L en={"Sanskarit Yuva Aadarsh Samiti"} hi={"संस्कारित युवा आदर्श समिति"} />
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    <L en={"Bank:"} hi={"बैंक:"} />
                  </span>
                  {" "}
                  Bank of India
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    <L en={"Account number:"} hi={"खाता संख्या:"} />
                  </span>
                  {" "}
                  730120110000129
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    <L en={"IFSC Code:"} hi={"IFSC कोड:"} />
                  </span>
                  {" "}
                  BKID0007301
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    <L en={"UPI ID:"} hi={"UPI आईडी:"} />
                  </span>
                  {" "}
                  boim-730131790129@boi
                </li>
              </ul>
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "700", lineHeight: "1.7", color: "#9B1C1C", borderTop: "1px solid #E2D9C8", paddingTop: "16px" }}>
              <L en={"Your support — an offering towards nation-building."} hi={"आपका सहयोग — राष्ट्र निर्माण की दिशा में आपकी एक आहुति।"} />
              <br />
              <L en={"With sincere thanks."} hi={"सादर धन्यवाद।"} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
              <L en={"For institutional donors"} hi={"संस्थागत दाताओं हेतु"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.4vw, 34px)", fontWeight: "600" }}>
              <L en={"What CSR officers mainly look for on a website"} hi={"CSR अधिकारी वेबसाइट पर मुख्यतः ये देखेंगे"} />
            </div>
          </div>
          <div style={{ fontSize: "14px", color: "#9C9287" }}>
            <L en={"Each point answered in one click"} hi={"प्रत्येक बिंदु का उत्तर एक क्लिक पर"} />
          </div>
        </div>
        <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "2px", background: "#2B241C" }}>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"Is the organisation genuine?"} hi={"संस्था वास्तविक है या नहीं"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Society registration, PAN, 12A —"} hi={"सोसाइटी पंजीकरण, PAN, 12A —"} />
              {" "}
              <span style={{ color: "#E8B24C" }}>
                <L en={"Credentials page"} hi={"प्रमाण पृष्ठ"} />
              </span>
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"What is the organisation's purpose?"} hi={"संस्था का उद्देश्य क्या है"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Signature philosophy —"} hi={"हस्ताक्षर दर्शन —"} />
              {" "}
              <span style={{ color: "#E8B24C" }}>
                <L en={"Philosophy page"} hi={"दर्शन पृष्ठ"} />
              </span>
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"What is your model?"} hi={"आपका मॉडल क्या है"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Veda Vasundhara 1.0 / 2.0 / 3.0"} hi={"वेद वसुंधरा 1.0 / 2.0 / 3.0"} />
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"What work has been done before?"} hi={"पहले क्या काम किया है"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Nari–Yuva Shakti Mahotsav —"} hi={"नारी–युवा शक्ति महोत्सव —"} />
              {" "}
              <span style={{ color: "#E8B24C" }}>
                <L en={"Track record"} hi={"कार्य इतिहास"} />
              </span>
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"Evidence of programmes / photos / videos"} hi={"कार्यक्रमों के प्रमाण / फोटो / वीडियो"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Media & documentation gallery"} hi={"मीडिया एवं दस्तावेज़ीकरण दीर्घा"} />
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"What is the measurable impact?"} hi={"मापनीय प्रभाव क्या है"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Youth Leadership Index — 5 dimensions"} hi={"युवा नेतृत्व सूचकांक — 5 आयाम"} />
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"Governance & transparency"} hi={"शासन एवं पारदर्शिता"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Audited accounts, annual report"} hi={"अंकेक्षित लेखा, वार्षिक रिपोर्ट"} />
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              <L en={"Contact & documentation"} hi={"संपर्क एवं दस्तावेज़ीकरण"} />
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              <L en={"Contact page · downloadable PDFs"} hi={"संपर्क पृष्ठ · डाउनलोड योग्य PDF"} />
            </div>
          </div>
          <div style={{ background: "#9B1C1C", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px", color: "#FDF6EA" }}>
              <L en={"CSR partnership proposal"} hi={"CSR साझेदारी का प्रस्ताव"} />
            </div>
            <div style={{ fontSize: "14px", color: "#F3D9D9" }}>
              <L en={"CSR-1 registered ·"} hi={"CSR-1 पंजीकृत ·"} />
              {" "}
              <Link href="/contact" style={{ fontWeight: "600", display: "inline-block", color: "inherit" }}>
                <L en={"Request proposal ↓"} hi={"प्रस्ताव मंगाएँ ↓"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)" }}>
        <div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "20px" }}>
            <L en={"Legal standing"} hi={"वैधानिक स्थिति"} />
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span>
                <L en={"Society registration"} hi={"सोसाइटी पंजीकरण"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                3826 · 05-02-2009
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E2D9C8", fontSize: "15px", background: "#F9F5EC" }}>
              <span>
                <L en={"12A — Form 10AC"} hi={"12A — फॉर्म 10AC"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                AAPAS6190RE20251
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span>
                <L en={"80G — Form 10AC"} hi={"80G — फॉर्म 10AC"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                AAPAS6190RF20251
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E2D9C8", fontSize: "15px", background: "#F9F5EC" }}>
              <span>
                PAN
              </span>
              <span style={{ fontWeight: "600" }}>
                AAPAS6190R
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", fontSize: "15px" }}>
              <span>
                <L en={"NITI Aayog DARPAN"} hi={"नीति आयोग DARPAN"} />
              </span>
              <span style={{ fontWeight: "600" }}>
                UP/2025/0652369
              </span>
            </div>
          </div>
          <div style={{ marginTop: "12px", fontSize: "13px", color: "#6E6459" }}>
            <L en={"80G provisional approval — assessment years 2026-27 to 2028-29; tax exemption applies to contributions."} hi={"80G अंतरिम स्वीकृति — निर्धारण वर्ष 2026-27 से 2028-29 तक; सहयोग राशि पर छूट लागू।"} />
          </div>
          <div style={{ marginTop: "clamp(16px, 1.9vw, 28px)", border: "1px solid #E2D9C8", background: "#EDE5D6", padding: "24px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", marginBottom: "8px" }}>
              <L en={"Contributing as a company?"} hi={"कंपनी की ओर से सहयोग?"} />
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A423A", marginBottom: "16px" }}>
              <L en={"Corporate and CSR contributions are handled separately, with a full proposal and utilisation certificate."} hi={"कॉर्पोरेट एवं CSR सहयोग पृथक रूप से संचालित होता है — पूर्ण प्रस्ताव एवं उपयोगिता प्रमाण-पत्र के साथ।"} />
            </div>
            <Link href="/contact" style={{ display: "inline-block", border: "1px solid #16110D", padding: "12px 22px", fontSize: "14px", fontWeight: "600", color: "inherit" }}>
              <L en={"Request a CSR proposal"} hi={"CSR प्रस्ताव मंगाएँ"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="rf" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 3.1vw, 44px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600", marginBottom: "6px" }}>
            <L en={"Empowered, value-rooted women and youth — an empowered nation"} hi={"संस्कारित एवं सशक्त नारी–युवा, सशक्त राष्ट्र"} />
          </div>
          <div style={{ fontSize: "15px", opacity: ".85" }}>
            <L en={"80G exemption · instant receipt · audited accounts"} hi={"80G छूट · तत्काल रसीद · अंकेक्षित लेखा"} />
          </div>
        </div>
        <div style={{ background: "#FDF6EA", color: "#9B1C1C", padding: "16px clamp(16px, 2.2vw, 32px)", fontSize: "16px", fontWeight: "700" }}>
          <L en={"Donate now"} hi={"अब सहयोग करें"} />
        </div>
      </div>
    </>
  );
}
