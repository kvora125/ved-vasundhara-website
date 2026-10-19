import type { Lang } from "../i18n";
import { ORG } from "../org";

const SECTION = { padding: "clamp(28px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px)", maxWidth: "900px" } as const;
const H2 = { fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(20px, 1.9vw, 26px)", margin: "30px 0 10px" } as const;
const P = { fontSize: "17px", lineHeight: 1.8, color: "#4A423A", margin: "0 0 12px" } as const;

const COPY = {
  hi: {
    title: "गोपनीयता नीति",
    updated: "अंतिम अद्यतन: 19 अक्टूबर 2026",
    sections: [
      ["हम कौन हैं", `यह वेबसाइट ${ORG.name.hi} (वेद वसुंधरा मॉडल) द्वारा संचालित है। पंजीकृत कार्यालय: ग्राम सकतपुर, हसनापुर, पो. रसूलाबाद, जिला उन्नाव, उत्तर प्रदेश — 209870। संपर्क: ${ORG.email}, ${ORG.phoneDisplay}।`],
      ["संपर्क एवं साझेदारी फ़ॉर्म", "जब आप फ़ॉर्म भरते हैं, तो आपके द्वारा दी गई जानकारी (नाम, ईमेल, फ़ोन, संस्था, संदेश) FormSubmit (formsubmit.co) सेवा के माध्यम से हमारे ईमेल पर भेजी जाती है। हम इसका उपयोग केवल आपको उत्तर देने के लिए करते हैं; इसे बेचा या किसी अन्य को नहीं दिया जाता।"],
      ["Google Analytics (केवल आपकी सहमति से)", "यदि आप कुकी बैनर पर “स्वीकार करें” चुनते हैं, तो हम Google Analytics 4 का उपयोग यह समझने के लिए करते हैं कि वेबसाइट कैसे उपयोग होती है — देखे गए पृष्ठ, डिवाइस का प्रकार और अनुमानित स्थान। इसके लिए Google “_ga” कुकीज़ लगाता है। “अस्वीकार करें” चुनने पर कोई विश्लेषण कुकी नहीं लगती। विज्ञापन संबंधी सभी सुविधाएँ बंद हैं। आप फ़ुटर में “कुकी सेटिंग्स” से कभी भी अपनी पसंद बदल सकते हैं।"],
      ["आपके ब्राउज़र में संग्रहीत जानकारी", "आपकी भाषा (हिंदी/English) और कुकी संबंधी पसंद आपके ब्राउज़र के local storage में रखी जाती है ताकि अगली बार याद रहे। यह हमारे पास नहीं भेजी जाती।"],
      ["अन्य सेवाएँ", "वीडियो के थंबनेल YouTube (Google) से लोड होते हैं, और वीडियो/सोशल लिंक YouTube, Facebook या Instagram पर खुलते हैं — वहाँ उनकी अपनी गोपनीयता नीतियाँ लागू होती हैं। वेबसाइट GitHub Pages पर होस्ट है, जो सुरक्षा हेतु तकनीकी लॉग (जैसे IP पता) रख सकता है।"],
      ["आपके अधिकार", `अपनी भेजी गई जानकारी देखने, सुधारने या हटवाने के लिए ${ORG.email} पर लिखें।`],
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "Last updated: 19 October 2026",
    sections: [
      ["Who we are", `This website is run by ${ORG.name.en} (Veda Vasundhara Model). Registered office: Gram Sakatpur, Hasanapur, Post Rasoolabad, District Unnao, Uttar Pradesh — 209870. Contact: ${ORG.email}, ${ORG.phoneDisplay}.`],
      ["Contact and partner forms", "When you submit a form, the details you enter (name, email, phone, organisation, message) are sent to our email through the FormSubmit service (formsubmit.co). We use them only to reply to you; they are not sold or shared with anyone else."],
      ["Google Analytics (only with your consent)", "If you choose “Accept” on the cookie banner, we use Google Analytics 4 to understand how the website is used — pages viewed, device type and approximate location. Google sets “_ga” cookies for this. If you choose “Reject”, no analytics cookies are set. All advertising features are switched off. You can change your choice at any time via “Cookie settings” in the footer."],
      ["Stored in your browser", "Your language choice (Hindi/English) and your cookie choice are kept in your browser's local storage so they are remembered next time. They are not sent to us."],
      ["Other services", "Video thumbnails load from YouTube (Google), and video and social links open on YouTube, Facebook or Instagram, where their own privacy policies apply. The site is hosted on GitHub Pages, which may keep technical logs (such as IP addresses) for security."],
      ["Your rights", `To see, correct or delete details you have sent us, write to ${ORG.email}.`],
    ],
  },
} as const;

export default function PrivacyContent({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <div style={SECTION}>
      <h1 style={{ fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(28px, 3.2vw, 44px)", margin: "0 0 8px" }}>{c.title}</h1>
      <p style={{ ...P, fontSize: "14px", color: "#9C9287" }}>{c.updated}</p>
      {c.sections.map(([h, body]) => (
        <section key={h}>
          <h2 style={H2}>{h}</h2>
          <p style={P}>{body}</p>
        </section>
      ))}
    </div>
  );
}
