import L from "../lang";
import { asset } from "../asset";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "मीडिया · Media" };

export default function MediaPage() {
  return (
    <>
      <div style={{ padding: "clamp(22px, 4.2vw, 60px) clamp(20px, 3.9vw, 56px) clamp(16px, 3.1vw, 44px)", background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
          <L en={"Media, Interviews & Documentation"} hi={"मीडिया, साक्षात्कार एवं दस्तावेजीकरण"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(25px, 3.2vw, 46px)", fontWeight: "600", lineHeight: "1.3", marginBottom: "10px" }}>
          <L en={"मीडिया, साक्षात्कार एवं दस्तावेजीकरण"} hi={"Media, Interviews & Documentation"} />
        </div>
        <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.7vw, 24px)", color: "#6E6459" }}>
          <L en={"Television · Digital media · Press · Programme photographs"} hi={"टेलीविज़न · डिजिटल मीडिया · प्रेस · कार्यक्रम के छायाचित्र"} />
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px) clamp(17px, 3.3vw, 48px)", background: "#16110D", color: "#F6F1E7" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "16px" }}>
          <L en={"Interviews & Broadcasts"} hi={"साक्षात्कार एवं प्रसारण"} />
        </div>
        <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: "600", lineHeight: "1.35", marginBottom: "clamp(16px, 2.4vw, 34px)" }}>
          <L en={"Television, digital media & interviews"} hi={"टेलीविज़न, डिजिटल मीडिया एवं साक्षात्कार"} />
        </div>
        <div className="rg1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)", gap: "clamp(16px, 1.9vw, 28px)", alignItems: "stretch" }}>
          <div style={{ color: "#16110D" }}>
            <a href="https://www.youtube.com/watch?v=E8tBet4yN6I" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
                <img src="https://i.ytimg.com/vi/E8tBet4yN6I/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "72px", height: "72px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(20px, 1.8vw, 26px)", paddingLeft: "4px" }}>
                    ▶
                  </div>
                </div>
                <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                  <L en={"Live telecast"} hi={"सीधा प्रसारण"} />
                </div>
              </div>
              <div style={{ padding: "16px 18px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Television — DD Uttar Pradesh · programme \"UP Namaste\" — live telecast"} hi={"टेलीविज़न — दूरदर्शन उत्तर प्रदेश · कार्यक्रम \"UP Namaste\" — सीधा प्रसारण"} />
                </div>
                <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                  <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
                </div>
              </div>
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ border: "1px solid #3B342B", padding: "clamp(16px, 1.9vw, 28px) 26px", flex: "1" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#E8B24C", marginBottom: "14px" }}>
                <L en={"Television · Doordarshan Uttar Pradesh"} hi={"टेलीविज़न · दूरदर्शन उत्तर प्रदेश"} />
              </div>
              <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.3", marginBottom: "10px" }}>
                UP Namaste
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#B7AC9C" }}>
                <L en={"Live telecast on DD Uttar Pradesh's programme \"UP Namaste\" — television interview."} hi={"दूरदर्शन उत्तर प्रदेश के कार्यक्रम \"UP Namaste\" में सीधा प्रसारण — टेलीविज़न साक्षात्कार।"} />
              </div>
            </div>
            <a href="https://share.google/89QiEh9HotSR8OLXk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#9B1C1C", padding: "clamp(16px, 1.9vw, 28px) 26px", flex: "1" }}>
              <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#FDF6EA", opacity: ".8", marginBottom: "14px" }}>
                <L en={"Digital media"} hi={"डिजिटल मीडिया"} />
              </div>
              <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.3", color: "#FDF6EA", marginBottom: "10px" }}>
                <L en={"Prerna Media"} hi={"प्रेरणा मीडिया"} />
              </div>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", lineHeight: "1.75", color: "#FDF6EA", opacity: ".92" }}>
                <L en={"Prerna Media — digital interview"} hi={"प्रेरणा मीडिया — डिजिटल साक्षात्कार"} />
              </div>
              <div style={{ marginTop: "14px", fontSize: "13px", color: "#FDF6EA", fontWeight: "600" }}>
                <L en={"View ↗"} hi={"देखें ↗"} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div style={{ padding: "clamp(20px, 3.9vw, 56px)" }}>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "26px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L en={"Programme videos"} hi={"कार्यक्रमों के वीडियो"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            YouTube · Facebook
          </div>
        </div>
        <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "20px" }}>
          <a href="https://www.youtube.com/watch?v=JvmtTlnfxF0" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/JvmtTlnfxF0/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Short"} hi={"शॉर्ट"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube Short"} hi={"YouTube शॉर्ट"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=GOQtAuutGrU" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/GOQtAuutGrU/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Short"} hi={"शॉर्ट"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube Short"} hi={"YouTube शॉर्ट"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=VaK3RiPf7UQ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/VaK3RiPf7UQ/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Video"} hi={"वीडियो"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube video"} hi={"YouTube वीडियो"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=8aY0YHhxtUg" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/8aY0YHhxtUg/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Video"} hi={"वीडियो"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube video"} hi={"YouTube वीडियो"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=Su1DFuEapGI" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/Su1DFuEapGI/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Video"} hi={"वीडियो"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube video"} hi={"YouTube वीडियो"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
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
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Video"} hi={"वीडियो"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube video"} hi={"YouTube वीडियो"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=f4eF5LUty6k" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/f4eF5LUty6k/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Video"} hi={"वीडियो"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube video"} hi={"YouTube वीडियो"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=JwfmrNQTlK4" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#16110D", overflow: "hidden" }}>
              <img src="https://i.ytimg.com/vi/JwfmrNQTlK4/hqdefault.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(155,28,28,.92)", color: "#FDF6EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", paddingLeft: "4px" }}>
                  ▶
                </div>
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#16110D", color: "#E8B24C", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", padding: "4px 8px" }}>
                <L en={"Video"} hi={"वीडियो"} />
              </div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                <L en={"YouTube video"} hi={"YouTube वीडियो"} />
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", color: "#9B1C1C", fontWeight: "600" }}>
                <L en={"Watch on YouTube ↗"} hi={"YouTube पर देखें ↗"} />
              </div>
            </div>
          </a>
          <a href="https://www.facebook.com/share/v/ieVSxLLLpLH9aVzW/?mibextid=jmPrMh" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#F6F1E7", background: "#16110D", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "26px 24px", minHeight: "clamp(132px, 15.3vw, 220px)", gridColumn: "span 4" }}>
            <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "20px" }}>
              <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.8vw, 26px)" }}>
                <L en={"Facebook video"} hi={"Facebook वीडियो"} />
              </div>
              <div style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", color: "#E8B24C" }}>
                Facebook
              </div>
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "16px", color: "#B7AC9C" }}>
              <L en={"Programme video — watch on Facebook ↗"} hi={"कार्यक्रम का वीडियो — Facebook पर देखें ↗"} />
            </div>
          </a>
        </div>
      </div>

      <div style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px) 20px" }}>
        <div style={{ fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "16px" }}>
          <L en={"Press coverage"} hi={"प्रेस कवरेज"} />
        </div>
        <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "26px" }}>
          <div style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 2.4vw, 34px)" }}>
            <L en={"Programmes in the newspapers"} hi={"समाचार पत्रों में कार्यक्रम"} />
          </div>
          <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "15px", color: "#6E6459" }}>
            <L en={"Media documentation of our programmes and activities"} hi={"हमारे कार्यक्रमों एवं गतिविधियों का मीडिया दस्तावेजीकरण"} />
          </div>
        </div>
        <div style={{ marginBottom: "clamp(16px, 3.1vw, 44px)" }}>
          <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "18px", borderTop: "2px solid #16110D", paddingTop: "16px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600" }}>
              <L en={"Nayak Diwas, Bhopal — Hon'ble Governor Shri Mangubhai Patel"} hi={"नायक दिवस, भोपाल — माननीय राज्यपाल श्री मंगुभाई पटेल"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#6E6459" }}>
              <L en={"Madhya Pradesh · 26 May 2022"} hi={"मध्य प्रदेश · 26 मई 2022"} />
            </div>
          </div>
          <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "18px" }}>
            <a href={asset("/assets/pdfimg/md-02.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-02.jpg")} alt="युवाओं और भावी पीढ़ी को राष्ट्रीय गौरव की अमूल्य धरोहरों से परिचित कराना जरूरी — राज्यपाल" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"It is essential to introduce youth and future generations to the priceless heritage of national pride — Governor"} hi={"युवाओं और भावी पीढ़ी को राष्ट्रीय गौरव की अमूल्य धरोहरों से परिचित कराना जरूरी — राज्यपाल"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Deenbandhu"} hi={"दीनबन्धु"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-03.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-03.jpg")} alt="नायक दिवस की विभिन्न झलकियाँ" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Glimpses of Nayak Diwas"} hi={"नायक दिवस की विभिन्न झलकियाँ"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Deenbandhu"} hi={"दीनबन्धु"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-06.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-06.jpg")} alt="पत्रिका · दोपहर मेट्रो · स्वदेश · अग्निबाण" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Patrika · Dopahar Metro · Swadesh · Agniban"} hi={"पत्रिका · दोपहर मेट्रो · स्वदेश · अग्निबाण"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-07.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-07.jpg")} alt="नईदुनिया · येलगार टाइम्स" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Naidunia · Yelgaar Times"} hi={"नईदुनिया · येलगार टाइम्स"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-18.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-18.jpg")} alt="Bhopal: Familiarise youth with nation’s heritage, culture, says Governor" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "center", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Bhopal: Familiarise youth with nation’s heritage, culture, says Governor"} hi={"भोपाल: युवाओं को राष्ट्र की विरासत और संस्कृति से परिचित कराएँ — राज्यपाल"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Free Press Journal · 25 May 2022"} hi={"Free Press Journal · 25 मई 2022"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-19.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-19.jpg")} alt="Governor MP — नायक दिवस" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Governor MP — Nayak Diwas"} hi={"Governor MP — नायक दिवस"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  Twitter / X
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-20.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-20.jpg")} alt="Governor of Madhya Pradesh — नायक दिवस" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Governor of Madhya Pradesh — Nayak Diwas"} hi={"Governor of Madhya Pradesh — नायक दिवस"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  Twitter / X
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-22.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-22.jpg")} alt="राज्यपाल श्री पटेल नायक दिवस कार्यक्रम में हुए शामिल" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Governor Shri Patel attends the Nayak Diwas programme"} hi={"राज्यपाल श्री पटेल नायक दिवस कार्यक्रम में हुए शामिल"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  Twitter / X
                </div>
              </div>
            </a>
          </div>
        </div>
        <div style={{ marginBottom: "clamp(16px, 3.1vw, 44px)" }}>
          <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "18px", borderTop: "2px solid #16110D", paddingTop: "16px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600" }}>
              <L en={"Village Nirpura resounds with Vedic chanting"} hi={"वैदिक मंत्रोच्चारण से गूंज उठा गांव निरपुड़ा"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#6E6459" }}>
              <L en={"Three-day Samaveda Parayan Yajna under way in the village"} hi={"गांव में चल रहा तीन दिवसीय सामवेद पारायण यज्ञ"} />
            </div>
          </div>
          <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "18px" }}>
            <a href={asset("/assets/pdfimg/md-08.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-08.jpg")} alt="वैदिक मंत्रोच्चारण से गूंज उठा गांव निरपुड़ा" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Village Nirpura resounds with Vedic chanting"} hi={"वैदिक मंत्रोच्चारण से गूंज उठा गांव निरपुड़ा"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Aaj Ka Khulasa"} hi={"आज का खुलासा"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-09.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-09.jpg")} alt="वैदिक मंत्रोच्चारण से गूंज उठा निरपुड़ा का वातावरण" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Vedic chanting fills the air of Nirpura"} hi={"वैदिक मंत्रोच्चारण से गूंज उठा निरपुड़ा का वातावरण"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Dhara News"} hi={"धारा न्यूज़"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-10.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-10.jpg")} alt="वैदिक मंत्रोच्चारण से गूंज उठा गांव निरपुड़ा" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Village Nirpura resounds with Vedic chanting"} hi={"वैदिक मंत्रोच्चारण से गूंज उठा गांव निरपुड़ा"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Vishwa Manav"} hi={"विश्व मानव"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-11.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-11.jpg")} alt="वैदिक मंत्रोच्चारण से गूंज उठा गांव निरपुड़ा" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Village Nirpura resounds with Vedic chanting"} hi={"वैदिक मंत्रोच्चारण से गूंज उठा गांव निरपुड़ा"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Royal Bulletin"} hi={"रॉयल बुलेटिन"} />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div style={{ marginBottom: "clamp(16px, 3.1vw, 44px)" }}>
          <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "18px", borderTop: "2px solid #16110D", paddingTop: "16px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600" }}>
              <L en={"Matrishakti & women's convention"} hi={"मातृशक्ति एवं नारी सम्मेलन"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#6E6459" }}></div>
          </div>
          <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "18px" }}>
            <a href={asset("/assets/pdfimg/md-05.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-05.jpg")} alt="अहिल्याबाई स्टेडियम में प्रथम बार हुआ भव्य, दिव्य और अलौकिक मातृशक्ति का विशाल सम्मेलन" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"A grand, divine and extraordinary convention of Matrishakti held at Ahilyabai Stadium for the first time"} hi={"अहिल्याबाई स्टेडियम में प्रथम बार हुआ भव्य, दिव्य और अलौकिक मातृशक्ति का विशाल सम्मेलन"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"EPaper · Agra"} hi={"ई-पेपर · आगरा"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-16.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-16.jpg")} alt="आध्यात्मिक ज्ञान से उचित-अनुचित को समझें महिलाएं" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Women should understand right and wrong through spiritual knowledge"} hi={"आध्यात्मिक ज्ञान से उचित-अनुचित को समझें महिलाएं"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-17.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-17.jpg")} alt="महिला समन्वय समिति के तत्वावधान में तरुणी सम्मेलन संपन्न" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Taruni Sammelan concludes under the aegis of the Mahila Samanvay Samiti"} hi={"महिला समन्वय समिति के तत्वावधान में तरुणी सम्मेलन संपन्न"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-04.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-04.jpg")} alt="कार्यक्रम की प्रेस कवरेज" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "center", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Press coverage of the programme"} hi={"कार्यक्रम की प्रेस कवरेज"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div style={{ marginBottom: "clamp(16px, 3.1vw, 44px)" }}>
          <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "18px", borderTop: "2px solid #16110D", paddingTop: "16px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600" }}>
              <L en={"Reflections on women's rights and reservation"} hi={"नारी अधिकार एवं आरक्षण पर विचार"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#6E6459" }}>
              <L en={"Allahabad · 21 August 2015"} hi={"इलाहाबाद · 21 अगस्त 2015"} />
            </div>
          </div>
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "18px" }}>
            <a href={asset("/assets/pdfimg/md-00.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-00.jpg")} alt="महिलाओं को मिलना चाहिए समान अधिकार" loading="lazy" style={{ width: "100%", height: "clamp(204px, 23.6vw, 340px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Women must get equal rights"} hi={"महिलाओं को मिलना चाहिए समान अधिकार"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Allahabad · 21 August 2015"} hi={"इलाहाबाद · 21 अगस्त 2015"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-01.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-01.jpg")} alt="इच्छाशक्ति के अभाव में अटका महिला आरक्षण" loading="lazy" style={{ width: "100%", height: "clamp(204px, 23.6vw, 340px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Women's reservation stalled for lack of will"} hi={"इच्छाशक्ति के अभाव में अटका महिला आरक्षण"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Yuva · 21 August 2015"} hi={"युवा · 21 अगस्त 2015"} />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div style={{ marginBottom: "clamp(16px, 3.1vw, 44px)" }}>
          <div className="rf" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(16px, 2.1vw, 30px)", marginBottom: "18px", borderTop: "2px solid #16110D", paddingTop: "16px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(20px, 1.7vw, 24px)", fontWeight: "600" }}>
              <L en={"Lucknow — various newspapers"} hi={"लखनऊ — विविध समाचार पत्र"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "14px", color: "#6E6459" }}></div>
          </div>
          <div className="rg2 rgw" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "18px" }}>
            <a href={asset("/assets/pdfimg/md-12.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-12.jpg")} alt="आज · दैनिक भास्कर" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Aaj · Dainik Bhaskar"} hi={"आज · दैनिक भास्कर"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-13.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-13.jpg")} alt="अमर उजाला" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Amar Ujala"} hi={"अमर उजाला"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-14.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-14.jpg")} alt="वॉयस ऑफ लखनऊ · स्पष्ट आवाज · राष्ट्रीय स्वरूप" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Voice of Lucknow · Spasht Awaz · Rashtriya Swaroop"} hi={"वॉयस ऑफ लखनऊ · स्पष्ट आवाज · राष्ट्रीय स्वरूप"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
            <a href={asset("/assets/pdfimg/md-15.jpg")} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8" }}>
              <img src={asset("/assets/pdfimg/md-15.jpg")} alt="खरी कसौटी · जनसंदेश टाइम्स" loading="lazy" style={{ width: "100%", height: "clamp(180px, 20.8vw, 300px)", objectFit: "cover", objectPosition: "top", display: "block", borderBottom: "1px solid #E2D9C8" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                  <L en={"Khari Kasauti · Jansandesh Times"} hi={"खरी कसौटी · जनसंदेश टाइम्स"} />
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "13px", color: "#6E6459", marginTop: "6px" }}>
                  <L en={"Newspapers"} hi={"समाचार पत्र"} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="rg1" style={{ background: "#EDE5D6", padding: "clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
        <div style={{ background: "#FFFCF6", padding: "0", border: "1px solid #E2D9C8" }}>
          <img src={asset("/assets/press-pilibhit.jpg")} alt="मान वंदना यात्रा — पीलीभीत" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "22px" }}>
            <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
              <L en={"Press · Divya Prakash, Pilibhit"} hi={"प्रेस · दिव्य प्रकाश, पीलीभीत"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.45", fontWeight: "600" }}>
              <L en={"Maan Vandana Yatra — keynote speaker Dr. Praveen Vidyalankar"} hi={"मान वंदना यात्रा — मुख्य वक्ता डॉ. प्रवीण विद्यालंकार"} />
            </div>
          </div>
        </div>
        <div style={{ background: "#FFFCF6", padding: "0", border: "1px solid #E2D9C8" }}>
          <img src={asset("/assets/ev-sangoshthi.jpg")} alt="शैक्षिक संगोष्ठी" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "22px" }}>
            <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
              <L en={"Seminar · 15 July 2025"} hi={"संगोष्ठी · 15 जुलाई 2025"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.45", fontWeight: "600" }}>
              <L en={"The role of education in character building — Shiksha Sanskriti Utthan Nyas"} hi={"चरित्र निर्माण में शिक्षा की भूमिका — शिक्षा संस्कृति उत्थान न्यास"} />
            </div>
            <div style={{ fontSize: "14px", color: "#6E6459", marginTop: "8px" }}>
              <L en={"Special guest — Dr. Praveen Vidya Satyendra Alankar"} hi={"विशिष्ट अतिथि — डॉ. प्रवीण विद्या सत्येन्द्र अलंकार"} />
            </div>
          </div>
        </div>
        <div style={{ background: "#FFFCF6", padding: "0", border: "1px solid #E2D9C8" }}>
          <img src={asset("/assets/ev-dav-dais.jpg")} alt="व्याख्यान माला, डी.ए.वी. डिग्री कॉलेज लखनऊ" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "22px" }}>
            <div style={{ fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C9287", marginBottom: "10px" }}>
              <L en={"Lecture series · 12 February 2026"} hi={"व्याख्यान माला · 12 फरवरी 2026"} />
            </div>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: "1.45", fontWeight: "600" }}>
              <L en={"202nd birth anniversary of Maharshi Dayanand Saraswati — D.A.V. Degree College, Lucknow"} hi={"महर्षि दयानंद सरस्वती की 202वीं जन्म जयंती — डी.ए.वी. डिग्री कॉलेज, लखनऊ"} />
            </div>
          </div>
        </div>
      </div>

      <div className="rg2 rgw" style={{ padding: "0 clamp(20px, 3.9vw, 56px) clamp(20px, 3.9vw, 56px)", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gridAutoRows: "210px", gap: "16px" }}>
        <div style={{ gridColumn: "span 2", gridRow: "span 2", position: "relative" }}>
          <img src={asset("/assets/ev-prerna-banner.jpg")} alt="प्रेरणा विमर्श 2024" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", background: "linear-gradient(transparent,rgba(20,15,11,.9))", color: "#F6F1E7", padding: "22px 20px 16px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: "600" }}>
              <L en={"Prerna Vimarsh 2024 — Nari Shakti Rashtra Vandan Yajna"} hi={"प्रेरणा विमर्श 2024 — नारी शक्ति राष्ट्र वंदन यज्ञ"} />
            </div>
            <div style={{ fontSize: "13px", color: "#DCD2C2", marginTop: "4px" }}>
              <L en={"Chief guest — Dr. Praveen Vidyalankar"} hi={"मुख्य अतिथि — डॉ. प्रवीण विद्यालंकार"} />
            </div>
          </div>
        </div>
        <div>
          <img src={asset("/assets/ev-yajna.jpg")} alt="यज्ञ संबोधन" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <img src={asset("/assets/ev-kavi-1.jpg")} alt="राष्ट्रीय कवि सम्मेलन" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <img src={asset("/assets/ev-bhopal.jpg")} alt="अखिल भारतीय आर्य महासम्मेलन, भोपाल" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <img src={asset("/assets/ev-plaque.jpg")} alt="सम्मान" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <img src={asset("/assets/ev-book-gift.jpg")} alt="पुस्तक भेंट" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
        </div>
        <div>
          <img src={asset("/assets/ev-aparna.jpg")} alt="उत्तर प्रदेश राज्य महिला आयोग" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <img src={asset("/assets/ev-bharatmata.jpg")} alt="भारत माता पूजन" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ gridColumn: "span 2", position: "relative" }}>
          <img src={asset("/assets/ev-virat-banner.jpg")} alt="विराट हिन्दू सम्मेलन" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", background: "linear-gradient(transparent,rgba(20,15,11,.88))", color: "#F6F1E7", padding: "20px 18px 14px" }}>
            <div style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", fontSize: "18px", fontWeight: "600" }}>
              <L en={"Virat Hindu Sammelan — Abanti Bai Basti, Harigarh"} hi={"विराट हिन्दू सम्मेलन — अबन्ती बाई बस्ती, हरिगढ़"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
