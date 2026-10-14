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
            जनसहयोग अभियान · Crowdfunding campaign
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(23px, 2.9vw, 42px)", fontWeight: "600", lineHeight: "1.32", marginBottom: "12px", textWrap: "pretty" }}>
            10,000 युवाओं तक त्रिदिवसीय नेतृत्व कार्यशाला पहुँचाइए
          </div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: "1.4", color: "#6E6459", marginBottom: "clamp(16px, 2.1vw, 30px)" }}>
            Take the three-day leadership workshop to 10,000 young people
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: "12px", height: "clamp(192px, 22.2vw, 320px)" }}>
            <img src={asset("/assets/ev-workshop-school.jpg")} alt="विद्यालय में नेतृत्व कार्यशाला" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", border: "1px solid #E2D9C8" }} />
            <img src={asset("/assets/ev-interview.png")} alt="कार्यक्रम के दौरान मीडिया साक्षात्कार" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% center", display: "block", border: "1px solid #E2D9C8" }} />
          </div>
        </div>
        <div style={{ padding: "clamp(23px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px) clamp(22px, 4.2vw, 60px) 0" }}>
          <div style={{ border: "1px solid #E2D9C8", background: "#F6F1E7", padding: "clamp(16px, 2.2vw, 32px)" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "700", marginBottom: "16px" }}>
              दान एवं सहयोग हेतु
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "700" }}>
              संस्कारित युवा आदर्श समिति
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", fontStyle: "italic", color: "#6E6459", marginBottom: "18px" }}>
              (12A एवं अन्य वैधानिक पंजीकरणों से युक्त संस्था)
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", color: "#2B241C", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px", textWrap: "pretty" }}>
              <div style={{ fontWeight: "700" }}>
                वेद वसुंधरा मॉडल के सामाजिक कार्यक्रमों हेतु आपका सहयोग आमंत्रित है।
              </div>
              <div>
                आपकी सहयोग राशि सीधे
                {" "}
                <span style={{ fontWeight: "700" }}>
                  संस्कारित युवा आदर्श समिति के आधिकारिक बैंक खाते
                </span>
                {" "}
                में प्राप्त होगी।
              </div>
              <div>
                आपका
                {" "}
                <span style={{ fontWeight: "700" }}>
                  अमूल्य सहयोग राष्ट्र निर्माण तथा युवा-युवतियों के जीवन-निर्माण में एक सार्थक आहुति
                </span>
                {" "}
                होगा। आपके सहयोग से शिक्षा, संस्कार, संस्कृति, युवा सशक्तिकरण, नारी शक्ति एवं राष्ट्र निर्माण से जुड़े सामाजिक कार्यक्रमों को आगे बढ़ाने में सहायता मिलेगी।
              </div>
            </div>
            <div className="rg1" style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "18px", alignItems: "center", marginBottom: "20px" }}>
              <img src={asset("/assets/qr-boi.png")} alt="Bank of India UPI QR — Sanskarit Yuva Aadarsh Samiti" style={{ width: "150px", height: "auto", display: "block" }} />
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>
                कृपया QR Code स्कैन करके सहयोग प्रदान करें।
              </div>
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", lineHeight: "1.8", border: "1px solid #E2D9C8", background: "#FFFCF6", padding: "14px 16px", marginBottom: "16px" }}>
              <div style={{ fontSize: "18px", fontWeight: "700", marginBottom: "6px" }}>
                बैंक विवरण
              </div>
              <ul style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    खाता धारक:
                  </span>
                  {" "}
                  संस्कारित युवा आदर्श समिति
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    बैंक:
                  </span>
                  {" "}
                  Bank of India
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    खाता संख्या:
                  </span>
                  {" "}
                  730120110000129
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    IFSC Code:
                  </span>
                  {" "}
                  BKID0007301
                </li>
                <li>
                  <span style={{ fontWeight: "700" }}>
                    UPI ID:
                  </span>
                  {" "}
                  boim-730131790129@boi
                </li>
              </ul>
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "700", lineHeight: "1.7", color: "#9B1C1C", borderTop: "1px solid #E2D9C8", paddingTop: "16px" }}>
              आपका सहयोग — राष्ट्र निर्माण की दिशा में आपकी एक आहुति।
              <br />
              सादर धन्यवाद।
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
              संस्थागत दाताओं हेतु · For institutional donors
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 2.4vw, 34px)", fontWeight: "600" }}>
              CSR अधिकारी वेबसाइट पर मुख्यतः ये देखेंगे
            </div>
          </div>
          <div style={{ fontSize: "14px", color: "#9C9287" }}>
            प्रत्येक बिंदु का उत्तर एक क्लिक पर
          </div>
        </div>
        <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "2px", background: "#2B241C" }}>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              संस्था वास्तविक है या नहीं
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              Society registration, PAN, 12A —
              {" "}
              <span style={{ color: "#E8B24C" }}>
                प्रमाण पृष्ठ
              </span>
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              संस्था का उद्देश्य क्या है
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              Signature philosophy —
              {" "}
              <span style={{ color: "#E8B24C" }}>
                दर्शन पृष्ठ
              </span>
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              आपका मॉडल क्या है
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              Veda Vasundhara 1.0 / 2.0 / 3.0
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              पहले क्या काम किया है
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              नारी–युवा शक्ति महोत्सव —
              {" "}
              <span style={{ color: "#E8B24C" }}>
                कार्य इतिहास
              </span>
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              कार्यक्रमों के प्रमाण / फोटो / वीडियो
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              Media &amp; documentation gallery
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              measurable impact क्या है
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              Youth Leadership Index — 5 dimensions
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              governance एवं transparency
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              Audited accounts, annual report
            </div>
          </div>
          <div style={{ background: "#1C1712", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px" }}>
              संपर्क एवं documentation
            </div>
            <div style={{ fontSize: "14px", color: "#9C9287" }}>
              Contact page · downloadable PDFs
            </div>
          </div>
          <div style={{ background: "#9B1C1C", padding: "24px 26px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", marginBottom: "8px", color: "#FDF6EA" }}>
              CSR partnership का प्रस्ताव
            </div>
            <Link href="/contact" style={{ fontSize: "14px", color: "#F3D9D9", display: "block" }}>
              CSR-1 registered ·
              {" "}
              <Link href="/contact" style={{ fontWeight: "600", display: "inline-block", color: "inherit" }}>
                प्रस्ताव मंगाएँ ↓
              </Link>
            </Link>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(20px, 3.9vw, 56px)" }}>
        <div>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.1vw, 30px)", marginBottom: "20px" }}>
            वैधानिक स्थिति · Legal standing
          </div>
          <div style={{ border: "1px solid #E2D9C8", background: "#FFFCF6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span>
                सोसाइटी पंजीकरण
              </span>
              <span style={{ fontWeight: "600" }}>
                3826 · 05-02-2009
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E2D9C8", fontSize: "15px", background: "#F9F5EC" }}>
              <span>
                12A — Form 10AC
              </span>
              <span style={{ fontWeight: "600" }}>
                AAPAS6190RE20251
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E2D9C8", fontSize: "15px" }}>
              <span>
                80G — Form 10AC
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
                NITI Aayog DARPAN
              </span>
              <span style={{ fontWeight: "600" }}>
                UP/2025/0652369
              </span>
            </div>
          </div>
          <div style={{ marginTop: "12px", fontSize: "13px", color: "#6E6459" }}>
            80G अंतरिम स्वीकृति — निर्धारण वर्ष 2026-27 से 2028-29 तक; सहयोग राशि पर छूट लागू।
          </div>
          <div style={{ marginTop: "clamp(16px, 1.9vw, 28px)", border: "1px solid #E2D9C8", background: "#EDE5D6", padding: "24px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.3vw, 19px)", fontWeight: "600", marginBottom: "8px" }}>
              कंपनी की ओर से सहयोग?
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A423A", marginBottom: "16px" }}>
              Corporate and CSR contributions are handled separately, with a full proposal and utilisation certificate.
            </div>
            <Link href="/contact" style={{ display: "inline-block", border: "1px solid #16110D", padding: "12px 22px", fontSize: "14px", fontWeight: "600", color: "inherit" }}>
              CSR प्रस्ताव मंगाएँ · Request proposal
            </Link>
          </div>
        </div>
      </div>

      <div className="rf" style={{ background: "#9B1C1C", color: "#FDF6EA", padding: "clamp(16px, 3.1vw, 44px) clamp(20px, 3.9vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.9vw, 28px)", fontWeight: "600", marginBottom: "6px" }}>
            संस्कारित एवं सशक्त नारी–युवा, सशक्त राष्ट्र
          </div>
          <div style={{ fontSize: "15px", opacity: ".85" }}>
            80G छूट · तत्काल रसीद · अंकेक्षित लेखा
          </div>
        </div>
        <div style={{ background: "#FDF6EA", color: "#9B1C1C", padding: "16px clamp(16px, 2.2vw, 32px)", fontSize: "16px", fontWeight: "700" }}>
          अब सहयोग करें · Donate now
        </div>
      </div>
    </>
  );
}
