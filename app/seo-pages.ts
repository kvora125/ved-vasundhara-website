import type { Lang } from "./i18n";

export type PageKey =
  | "home"
  | "philosophy"
  | "vision-mission"
  | "model"
  | "work-areas"
  | "veda-vasundhara-1"
  | "impact"
  | "initiatives"
  | "founder"
  | "research"
  | "organisation"
  | "media"
  | "partner"
  | "crowdfunding"
  | "credentials"
  | "testimonials"
  | "contact"
  | "updates"
  | "events"
  | "gallery"
  | "privacy";

type Copy = { title: string; description: string; crumb: string };

// Search-result copy per page and language. Titles ≤ 60 characters, descriptions 120–160.
export const PAGES: Record<PageKey, { path: string } & Record<Lang, Copy>> = {
  home: {
    path: "/",
    hi: {
      title: "वेद वसुंधरा मॉडल — युवा एवं नारी नेतृत्व का राष्ट्रीय अभियान",
      description:
        "वेद से प्रेरणा, आधुनिकता से संवाद — संस्कारित युवा आदर्श समिति, लखनऊ का राष्ट्रीय अभियान: विद्यालयों व महाविद्यालयों में युवा एवं नारी नेतृत्व कार्यशालाएँ।",
      crumb: "मुख पृष्ठ",
    },
    en: {
      title: "Veda Vasundhara Model — Youth & Women Leadership Campaign",
      description:
        "Inspired by the Vedas, in dialogue with modernity: Sanskarit Yuva Aadarsh Samiti's national campaign of leadership workshops for youth and women in UP.",
      crumb: "Home",
    },
  },
  philosophy: {
    path: "/philosophy",
    hi: {
      title: "हस्ताक्षर दर्शन: Westernization नहीं, Modernization",
      description:
        "भारत की शाश्वत ज्ञान परंपरा का आधुनिक अनुप्रयोग — वेद वसुंधरा नाम क्यों, मॉडल की आधारभूमि और शिक्षा, संस्कार, संस्कृति व कौशल के प्रमुख कार्यक्षेत्र।",
      crumb: "दर्शन",
    },
    en: {
      title: "Philosophy: Modernization, Not Westernization",
      description:
        "The modern application of India's timeless knowledge tradition — why the name Veda Vasundhara, the model's foundation and its focus on education, values and skills.",
      crumb: "Philosophy",
    },
  },
  "vision-mission": {
    path: "/vision-mission",
    hi: {
      title: "दृष्टि, ध्येय एवं आठ मूल मूल्य | वेद वसुंधरा मॉडल",
      description:
        "संस्कारवान, कुशल, आत्मनिर्भर युवा एवं सशक्त नारी शक्ति का विकास — वेद वसुंधरा मॉडल की दृष्टि, ध्येय, ब्रांड सूत्र और ज्ञान से लोक कल्याण तक आठ मूल मूल्य।",
      crumb: "दृष्टि एवं ध्येय",
    },
    en: {
      title: "Vision, Mission & Core Values | Veda Vasundhara Model",
      description:
        "Developing value-rooted, skilled, self-reliant youth and empowered women — the Veda Vasundhara Model's vision, mission, brand line and eight core values.",
      crumb: "Vision & Mission",
    },
  },
  model: {
    path: "/model",
    hi: {
      title: "वेद वसुंधरा मॉडल क्या है? ग्यारह उत्तर एवं तीन चरण",
      description:
        "वेद वसुंधरा मॉडल युवाओं को दिशा का बोध देता है — ज्ञान से जीवन, कौशल, आत्मनिर्भरता और राष्ट्र-निर्माण तक; कार्यशाला, डिजिटल मंच और राष्ट्रीय अभियान के तीन चरण।",
      crumb: "मॉडल",
    },
    en: {
      title: "What Is the Veda Vasundhara Model? 11 Answers, 3 Stages",
      description:
        "A sense of direction for youth — from knowledge to skill, self-reliance and nation-building, in three stages: workshops, a digital platform, a national campaign.",
      crumb: "The Model",
    },
  },
  "work-areas": {
    path: "/work-areas",
    hi: {
      title: "कार्यक्षेत्र: युवा विकास, नारी सशक्तिकरण व संस्कार",
      description:
        "सात कार्यक्षेत्र — युवा विकास, शिक्षा एवं जीवन कौशल, संस्कार, भारतीय ज्ञान परंपरा, नेतृत्व, नारी सशक्तिकरण और पर्यावरणीय उत्तरदायित्व; वैदिक संस्कार के वीडियो सहित।",
      crumb: "कार्यक्षेत्र",
    },
    en: {
      title: "Work Areas: Youth, Women Empowerment & Values",
      description:
        "Seven work areas — youth development, life skills, character, Indian knowledge, leadership, women's empowerment and social responsibility, with videos.",
      crumb: "Work Areas",
    },
  },
  "veda-vasundhara-1": {
    path: "/veda-vasundhara-1",
    hi: {
      title: "वेद वसुंधरा 1.0 — नारी युवा शक्ति महोत्सव",
      description:
        "एक-वर्षीय संरचित युवा विकास कार्यक्रम: नायक दिवस, वीरांगना दिवस, चौदह उद्देश्य, लक्षित समूह, निगरानी एवं मूल्यांकन तथा 2040 तक की दीर्घकालिक दृष्टि।",
      crumb: "वेद वसुंधरा 1.0",
    },
    en: {
      title: "Veda Vasundhara 1.0 — Nari Yuva Shakti Mahotsav",
      description:
        "A one-year structured youth-development programme: Nayak Diwas, Veerangana Diwas, fourteen objectives, target groups, monitoring and a long-term vision to 2040.",
      crumb: "Veda Vasundhara 1.0",
    },
  },
  impact: {
    path: "/impact",
    hi: {
      title: "मेरा संदेश एवं हमारा प्रभाव | वेद वसुंधरा मॉडल",
      description:
        "संस्थापक का संदेश और दस आयामों में समेकित प्रभाव — नारी सशक्तीकरण, युवा नेतृत्व, चरित्र, सामाजिक व सांस्कृतिक जागरूकता तथा दीर्घकालिक युवा नेतृत्व तंत्र।",
      crumb: "प्रभाव",
    },
    en: {
      title: "Founder's Message & Our Impact | Veda Vasundhara",
      description:
        "The founder's message and our impact in ten dimensions — women's empowerment, youth leadership, character, and social and cultural awareness.",
      crumb: "Impact",
    },
  },
  initiatives: {
    path: "/initiatives",
    hi: {
      title: "पहल: नारी युवा शक्ति महोत्सव, आदर्श युवा व आयोजन",
      description:
        "वेद वसुंधरा 1.0, 2.0 एवं 3.0 की पहलें — राष्ट्रीय युवा उत्कृष्टता मंच, संपन्न आयोजन (भोपाल, लखनऊ, मेरठ) और मंच से व्याख्यानों की वीडियो रिकॉर्डिंग।",
      crumb: "पहल",
    },
    en: {
      title: "Initiatives: Mahotsav, Youth Excellence & Events",
      description:
        "Veda Vasundhara 1.0, 2.0 and 3.0 — the National Youth Excellence platform, events in Bhopal, Lucknow and Meerut, and recordings from the dais.",
      crumb: "Initiatives",
    },
  },
  founder: {
    path: "/founder",
    hi: {
      title: "डॉ. प्रवीण सत्येन्द्र विद्यालंकार — संस्थापक",
      description:
        "लेखिका, समाजसेवी एवं वैदिक व्याख्याता डॉ. प्रवीण सत्येन्द्र विद्यालंकार — उनका दर्शन, कार्य, प्रकाशित पुस्तकें, सम्मान, शिक्षा और मंच से दिए गए व्याख्यान।",
      crumb: "संस्थापक",
    },
    en: {
      title: "Dr. Praveen Satyendra Vidyalankar — Founder",
      description:
        "Author, social worker and Vedic lecturer Dr. Praveen Satyendra Vidyalankar — her philosophy, work, published books, awards, education and addresses from the dais.",
      crumb: "Founder",
    },
  },
  research: {
    path: "/research",
    hi: {
      title: "शोध, प्रकाशन एवं साहित्य — भैषज्य दीप, पुस्तकें",
      description:
        "शोध लेख 'कोरोना में हितकारी भैषज्य दीप', पुस्तकें 'जलता दीया हवाओं पर' व 'मिट्टी के रंग, जीवन के संग', केशव संवाद लेख और समाचार पत्रों में प्रकाशित लेख।",
      crumb: "शोध एवं प्रकाशन",
    },
    en: {
      title: "Research, Books & Writing — Bhaishajya Deep",
      description:
        "Research on the Bhaishajya Deep, the books 'Jalta Diya Hawaon Par' and 'Mitti Ke Rang, Jivan Ke Sang', the Keshav Samvad series and newspaper articles.",
      crumb: "Research",
    },
  },
  organisation: {
    path: "/organisation",
    hi: {
      title: "संस्कारित युवा आदर्श समिति — संस्था परिचय",
      description:
        "वेद वसुंधरा मॉडल को अमल में लाने वाली संस्था — 2009 से पंजीकृत, उन्नाव (उ.प्र.); कार्यशाला संचालन, संस्थागत समन्वय, मूल्यांकन एवं सार्वजनिक दस्तावेज़।",
      crumb: "संस्था",
    },
    en: {
      title: "Sanskarit Yuva Aadarsh Samiti — About the Organisation",
      description:
        "The organisation behind the Veda Vasundhara Model — registered since 2009 in Unnao, UP; workshops, institutional partnerships, assessment and public documents.",
      crumb: "Organisation",
    },
  },
  media: {
    path: "/media",
    hi: {
      title: "मीडिया, साक्षात्कार एवं प्रेस कवरेज | वेद वसुंधरा",
      description:
        "दूरदर्शन उत्तर प्रदेश 'UP Namaste' सीधा प्रसारण, प्रेरणा मीडिया साक्षात्कार, कार्यक्रमों के वीडियो और नायक दिवस सहित समाचार पत्रों में प्रकाशित कवरेज।",
      crumb: "मीडिया",
    },
    en: {
      title: "Media, Interviews & Press Coverage | Veda Vasundhara",
      description:
        "Doordarshan UP 'UP Namaste' live telecast, Prerna Media interviews, programme videos and newspaper coverage, including Nayak Diwas in Bhopal.",
      crumb: "Media",
    },
  },
  partner: {
    path: "/partner",
    hi: {
      title: "CSR साझेदारी एवं सहयोग — कार्यशाला प्रायोजित करें",
      description:
        "CSR अनुदान, कार्यशाला आयोजन, स्वयंसेवा या सहयोग राशि — CSR-1 पंजीकृत, 80G छूट व अंकेक्षित लेखा सहित वेद वसुंधरा मॉडल के साथ साझेदारी करें।",
      crumb: "सहयोग",
    },
    en: {
      title: "CSR Partnership — Fund a Youth Leadership Workshop",
      description:
        "Partner through a CSR grant, by hosting a workshop, volunteering or donating — CSR-1 registered, 80G exemption and audited accounts. Request the project proposal.",
      crumb: "Partner",
    },
  },
  crowdfunding: {
    path: "/crowdfunding",
    hi: {
      title: "दान करें — 10,000 युवाओं तक नेतृत्व कार्यशाला (80G)",
      description:
        "संस्कारित युवा आदर्श समिति को सीधे बैंक खाते या UPI/QR से सहयोग करें; 80G कर छूट उपलब्ध। आपका सहयोग युवाओं व नारी शक्ति के नेतृत्व विकास में आहुति है।",
      crumb: "जन-सहयोग",
    },
    en: {
      title: "Donate — Take Leadership Workshops to 10,000 Youth",
      description:
        "Support Sanskarit Yuva Aadarsh Samiti by bank transfer or UPI/QR; 80G tax exemption applies. Every contribution helps young people and women grow as leaders.",
      crumb: "Donate",
    },
  },
  credentials: {
    path: "/credentials",
    hi: {
      title: "पंजीकरण एवं प्रमाण-पत्र: 12A, 80G, CSR-1, DARPAN",
      description:
        "संस्कारित युवा आदर्श समिति के सभी वैधानिक पंजीकरण — सोसाइटी पंजीकरण, 12A, 80G, CSR-1, नीति आयोग DARPAN, ट्रस्ट डीड और अंकेक्षित लेखा, डाउनलोड हेतु।",
      crumb: "प्रमाण",
    },
    en: {
      title: "Registrations & Certificates: 12A, 80G, CSR-1",
      description:
        "All statutory registrations of Sanskarit Yuva Aadarsh Samiti — society, 12A, 80G, CSR-1, NITI Aayog DARPAN, trust deed and audited accounts.",
      crumb: "Credentials",
    },
  },
  testimonials: {
    path: "/testimonials",
    hi: {
      title: "प्रशंसा एवं शुभकामना संदेश — राज्यपाल, रक्षा मंत्री",
      description:
        "माननीया राज्यपाल श्रीमती आनंदीबेन पटेल एवं रक्षा मंत्री श्री राजनाथ सिंह जी के संदेश, पंजीकरण अभिलेख और 2023 से अब तक के कार्यों का अभिलेख।",
      crumb: "प्रशंसा-पत्र",
    },
    en: {
      title: "Testimonials — Messages from the Governor & Ministers",
      description:
        "Messages from UP Governor Smt. Anandiben Patel and Defence Minister Shri Rajnath Singh, registration records and a record of our work from 2023 onwards.",
      crumb: "Testimonials",
    },
  },
  contact: {
    path: "/contact",
    hi: {
      title: "संपर्क करें — अभियान कार्यालय, लखनऊ | वेद वसुंधरा",
      description:
        "कार्यशाला, संस्थागत सहयोग, CSR या मीडिया हेतु संपर्क करें — फ़ोन 99363 53179, ईमेल syuvaadarshsamiti@gmail.com; पंजीकृत कार्यालय उन्नाव, उत्तर प्रदेश।",
      crumb: "संपर्क",
    },
    en: {
      title: "Contact Us — Campaign Office, Lucknow | Veda Vasundhara",
      description:
        "Get in touch about workshops, institutional tie-ups, CSR or media — phone 99363 53179, email syuvaadarshsamiti@gmail.com; registered office in Unnao, Uttar Pradesh.",
      crumb: "Contact",
    },
  },
  updates: {
    path: "/updates",
    hi: {
      title: "समाचार एवं अपडेट | वेद वसुंधरा मॉडल",
      description:
        "वेद वसुंधरा मॉडल एवं संस्कारित युवा आदर्श समिति के नवीनतम कार्यक्रम, कार्यशालाएँ, उपलब्धियाँ और घोषणाएँ — तिथि अनुसार, चित्रों सहित।",
      crumb: "अपडेट",
    },
    en: {
      title: "News & Updates | Veda Vasundhara Model",
      description:
        "The latest programmes, workshops, milestones and announcements from the Veda Vasundhara Model and Sanskarit Yuva Aadarsh Samiti, by date and with photos.",
      crumb: "Updates",
    },
  },
  events: {
    path: "/events",
    hi: {
      title: "कार्यक्रम एवं आगामी कार्यशालाएँ | वेद वसुंधरा",
      description:
        "आगामी कार्यशालाएँ, सम्मेलन एवं सांस्कृतिक कार्यक्रम — तिथि, स्थान और पंजीकरण विवरण सहित; साथ ही संपन्न कार्यक्रमों का अभिलेख।",
      crumb: "कार्यक्रम",
    },
    en: {
      title: "Events & Upcoming Workshops | Veda Vasundhara",
      description:
        "Upcoming workshops, conferences and cultural programmes with date, venue and registration details, plus a record of past events.",
      crumb: "Events",
    },
  },
  gallery: {
    path: "/gallery",
    hi: {
      title: "फोटो गैलरी — कार्यक्रमों की झलकियाँ | वेद वसुंधरा",
      description:
        "वेद वसुंधरा मॉडल की कार्यशालाओं, यज्ञ, सम्मेलनों और सांस्कृतिक कार्यक्रमों के फोटो एल्बम — विद्यालयों, विश्वविद्यालयों और समुदायों के बीच।",
      crumb: "गैलरी",
    },
    en: {
      title: "Photo Gallery — Programme Highlights | Veda Vasundhara",
      description:
        "Photo albums from Veda Vasundhara Model workshops, yajnas, conferences and cultural programmes in schools, universities and communities.",
      crumb: "Gallery",
    },
  },
  privacy: {
    path: "/privacy",
    hi: {
      title: "गोपनीयता नीति | वेद वसुंधरा मॉडल",
      description:
        "यह वेबसाइट कौन-सी जानकारी एकत्र करती है — संपर्क फ़ॉर्म, आपकी सहमति से Google Analytics कुकीज़ — और आप अपनी सहमति कैसे बदल सकते हैं।",
      crumb: "गोपनीयता नीति",
    },
    en: {
      title: "Privacy Policy | Veda Vasundhara Model",
      description:
        "What this website collects — enquiry forms and, only with your consent, Google Analytics cookies — how it is used, and how to change your choice at any time.",
      crumb: "Privacy",
    },
  },
};
