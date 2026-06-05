export interface Experience {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  link?: string;
}

export interface SkillNode {
  id: string;
  label: string;
  category: 'experience' | 'narrative' | 'strategy' | 'technical';
  description: string;
  highlightFor: ('fiona' | 'mark' | 'olena')[];
}

export interface CVData {
  name: string;
  title: string;
  profile: string;
  email: string;
  linkedin: string;
  born: string;
  location: string;
  education: string;
  languages: string[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillNode[];
  links: {
    calendly: string;
    buymeacoffee: string;
  };
}

export const cvData: { en: CVData; tr: CVData } = {
  en: {
    name: "Alper Şentürk",
    title: "Experience Designer & Narrative Architect | Program Strategist",
    profile: "I design experiences that change how people think, feel, and act. With 16 years of expertise spanning narrative architecture, learning systems design, and strategic management, I build frameworks that translate complex ideas into engaging, narrative-driven realities. Whether designing game-based learning programs, developing AI-native workflows (using Claude, Gemini, Antigravity, and Cursor), or managing high-impact programs, my focus is always on understanding core human motivators and constructing systems to scale them. I operate at the intersection of storytelling, system design, and technology.",
    email: "alpersenturk@gmail.com",
    linkedin: "https://linkedin.com/in/alpersenturk",
    born: "May 17, 1984",
    location: "Istanbul, Turkiye",
    education: "Çankaya University | Bachelor's Degree in International Trade (Full Scholarship), 2010",
    languages: ["Turkish (Native)", "English (Full Professional Proficiency)"],
    links: {
      calendly: "https://calendly.com/alpersenturk/30min",
      buymeacoffee: "https://buymeacoffee.com/alpersenturk"
    },
    experiences: [
      {
        role: "Director of Impact & Talent Programs",
        organization: "Turkiye Entrepreneurship Foundation (GİRVAK)",
        period: "July 2023 – May 2026",
        highlights: [
          "Program Architecture: Orchestrated the end-to-end design, narrative, and delivery of youth programs, directly impacting Turkiye's top young entrepreneurial talent.",
          "System Building (AI Integration): Developed and coded an AI-assisted evaluation system (Vibe Coding with Supabase/React) to streamline participant screening and feedback collection.",
          "Narrative Copywriting: Authored all high-stakes stakeholder communications, including participant onboarding journeys, impact reports, and strategic invitations.",
          "Operational Control: Monitored program metrics and iterated frameworks dynamically based on qualitative feedback, scaling high-impact initiatives and optimizing resource allocation."
        ]
      },
      {
        role: "Managing Director",
        organization: "Bilim Virüsü (Science Virus)",
        period: "Dec 2020 – April 2023",
        highlights: [
          "Organizational Scaling: Joined as the first employee and successfully built the organization’s operational, content, and program systems from the ground up, driving 125% year-on-year growth.",
          "Team Scaling: Established the organizational structure, hiring and growing a multidisciplinary team from scratch into a 6-person operational unit.",
          "B2B Program Strategy: Co-designed social impact programs with major corporate partners, creating custom creative strategies and messaging that doubled program audience reach.",
          "Program Development: Managed the full content pipeline (concept development ➔ creative briefing ➔ production ➔ performance iteration) for multiple concurrent programs for young people aged between 6 to 18."
        ]
      },
      {
        role: "Learning Designer & Consultant",
        organization: "Freelance",
        period: "2019 – 2020",
        highlights: [
          "Consulting & Design: Created bespoke talent development tracks, gamified learning journeys, and communications plans for NGOs and SMEs.",
          "Impact Reporting: Produced detailed research-based reports and strategic implementation frameworks for high-profile social responsibility initiatives."
        ]
      },
      {
        role: "Head of Training Department",
        organization: "Toplum Gönüllüleri Vakfı (TOG)",
        period: "2016 – 2019",
        highlights: [
          "Department Leadership: Headed a core training team of 6, managing the training budget and directing experiential learning initiatives for ~8,000 young change-makers annually across Turkiye.",
          "Learning Systems Design: Engineered structured learning frameworks from scratch, covering needs assessment, content creation, facilitator briefing, and quantitative outcome measurement.",
          "Quality Assurance: Standardized training design and delivery templates, establishing repeatable guidelines that ensured consistent educational quality nationwide."
        ]
      },
      {
        role: "Capacity Building Coordinator | Training Coordinator",
        organization: "Toplum Gönüllüleri Vakfı (TOG)",
        period: "2010 – 2016",
        highlights: [
          "International Workshop Facilitation: Co-designed and facilitated international experiential workshops on human rights, active citizenship, and social entrepreneurship across Europe (partnering with the Council of Europe and Olde Vechte Foundation).",
          "Facilitator Guides: Authored comprehensive workshop facilitation manuals and learning content translated into multiple languages."
        ]
      }
    ],
    projects: [
      {
        title: "Zapır Zupur Kalem (Board Game & Narrative)",
        description: "A story-based board game designed for children and families, narrating Pelin's journey to the Land of Pens. It features a stage booklet, collaborative decision-making, and friendship mechanics.",
        highlights: [
          "Mechanic & Story Integration: Merged collaborative decision-making mechanics with narrative based on Schell's game design principles.",
          "Pedagogical Alignment: Tailored to nurture self-expression, pedagogical alignment, and uniqueness in children."
        ]
      },
      {
        title: "Roleplay-Based Facilitation",
        description: "Immersive narrative-driven roleplaying (RPG) experiences designed for corporate clients to foster team dynamics and ethical decision-making.",
        highlights: [
          "D&D and DM Experience: Adapted years of Dungeon Master experience to corporate talent development workshops."
        ]
      },
      {
        title: "hikayemsen.com",
        description: "A digital story-generation web app designed for parents to co-create age-appropriate, pedagogically aligned stories for their children using AI.",
        highlights: [
          "Product Management & Prototyping: Designed UI/UX and story generation workflows backed by AI and approved by educators."
        ]
      }
    ],
    skills: [
      { id: "ux-design", label: "Experience Design", category: "experience", description: "Structuring a visitor's or participant's emotional and systemic journey from start to finish.", highlightFor: ["fiona"] },
      { id: "learning-journeys", label: "Learning Journeys", category: "experience", description: "Designing progressive development programs for individuals to acquire lasting skills.", highlightFor: ["fiona"] },
      { id: "facilitation", label: "Workshop Facilitation", category: "experience", description: "Methodologies that enable active learning, reflection, and collaboration among participants.", highlightFor: ["fiona"] },
      { id: "needs-assessment", label: "Needs Assessment", category: "experience", description: "Identifying target audience gaps and developmental areas using scientific tools.", highlightFor: ["fiona"] },

      { id: "narrative-arch", label: "Narrative Architecture", category: "narrative", description: "Infusing narrative meaning and world-building into systems, settings, and gameplay.", highlightFor: ["mark"] },
      { id: "gamification", label: "Gamification Mechanics", category: "narrative", description: "Designing gameplay mechanics to boost human motivation based on Schell's framework.", highlightFor: ["mark"] },
      { id: "storytelling", label: "Storytelling & Writing", category: "narrative", description: "Drafting stories with emotional depth aligned with John Truby and Brandon Sanderson models.", highlightFor: ["mark"] },
      { id: "rpg-mechanics", label: "RPG & Board Game Design", category: "narrative", description: "Creating tabletop games, roleplaying scenarios, and interactive decision structures.", highlightFor: ["mark"] },

      { id: "scaling-vision", label: "Program Scaling", category: "strategy", description: "Systematizing boutique impact projects to scale and reach thousands of people.", highlightFor: ["olena"] },
      { id: "leadership", label: "Cross-Functional Leadership", category: "strategy", description: "Directing fast-growing social impact and technology teams toward collective goals.", highlightFor: ["olena"] },
      { id: "budget-management", label: "Budget & Resource Management", category: "strategy", description: "Optimizing organizational budgets to align with strategic goals and runway.", highlightFor: ["olena"] },
      { id: "stakeholder-alignment", label: "Stakeholder & Partner Relations", category: "strategy", description: "Establishing strategic alliances between NGOs, corporate partners, and startups.", highlightFor: ["olena"] },

      { id: "ai-workflows", label: "AI-Native Workflows", category: "technical", description: "Leveraging Claude, Gemini, Antigravity, and Cursor to accelerate operations and workflows.", highlightFor: ["fiona", "mark", "olena"] },
      { id: "rapid-proto", label: "Rapid Prototyping (Vibe Coding)", category: "technical", description: "Building quick functional prototypes using React, TypeScript, Tailwind, and Supabase.", highlightFor: ["fiona", "mark"] },
      { id: "figma-design", label: "Interface Design & Figma", category: "technical", description: "Designing user-friendly interfaces, wireframes, and interactive mockups.", highlightFor: ["fiona"] }
    ]
  },
  tr: {
    name: "Alper Şentürk",
    title: "Deneyim Tasarımcısı & Anlatı Mimarı | Program Stratejisti",
    profile: "İnsanların düşünme, hissetme ve eyleme geçme biçimlerini değiştiren deneyimler tasarlıyorum. Anlatı mimarisi, öğrenme sistemleri tasarımı ve stratejik yönetim alanlarındaki 16 yıllık uzmanlığımla, karmaşık fikirleri çekici, anlatı odaklı gerçekliklere dönüştüren çerçeveler kuruyorum. İster oyun tabanlı öğrenme programları tasarlamak, ister yapay zeka yerel iş akışları geliştirmek ya da yüksek etkili programlar yönetmek olsun, odağım her zaman temel insani motivasyonları anlamak ve bunları ölçeklendirecek sistemler inşa etmektir. Hikaye anlatıcılığı, sistem tasarımı ve teknolojinin kesişiminde faaliyet gösteriyorum.",
    email: "alpersenturk@gmail.com",
    linkedin: "https://linkedin.com/in/alpersenturk",
    born: "17 Mayıs 1984",
    location: "İstanbul, Türkiye",
    education: "Çankaya Üniversitesi | Uluslararası Ticaret Lisans Derecesi (Tam Burslu), 2010",
    languages: ["Türkçe (Anadil)", "İngilizce (Tam Profesyonel Yetkinlik)"],
    links: {
      calendly: "https://calendly.com/alpersenturk/30min",
      buymeacoffee: "https://buymeacoffee.com/alpersenturk"
    },
    experiences: [
      {
        role: "Etki ve Yetenek Programları Direktörü",
        organization: "Türkiye Girişimcilik Vakfı (GİRVAK)",
        period: "Temmuz 2023 – Mayıs 2026",
        highlights: [
          "Program Mimarisi: Türkiye'nin en iyi genç girişimci adaylarını doğrudan etkileyen gençlik programlarının uçtan uca tasarımını, anlatısını ve sunumunu yönetti.",
          "Sistem İnşası (AI Entegrasyonu): Katılımcı taramasını ve geri bildirim toplamayı kolaylaştırmak için AI destekli bir değerlendirme sistemi (Supabase/React ile Vibe Coding) kodladı ve geliştirdi.",
          "Anlatı Kopya Yazarlığı: Katılımcı oryantasyon yolculukları, etki raporları ve stratejik davetiyeler dahil olmak üzere tüm yüksek riskli paydaş iletişimlerini kaleme aldı.",
          "Operasyonel Kontrol: Program metriklerini izledi ve nitel geri bildirimlere dayanarak çerçeveleri dinamik olarak yineledi, yüksek etkili girişimleri ölçeklendirdi ve kaynak dağılımını optimize etti."
        ]
      },
      {
        role: "Genel Müdür (Managing Director)",
        organization: "Bilim Virüsü (Science Virus)",
        period: "Aralık 2020 – Nisan 2023",
        highlights: [
          "Organizasyonel Ölçeklendirme: İlk çalışan olarak katıldı ve organizasyonun operasyonel, içerik ve program sistemlerini sıfırdan kurarak yıldan yıla %125 büyüme sağladı.",
          "Ekip Büyütme: Organizasyonel yapıyı kurdu, disiplinler arası bir ekibi sıfırdan işe alıp büyüterek 6 kişilik operasyonel bir birim haline getirdi.",
          "B2B Program Stratejisi: Büyük kurumsal ortaklarla birlikte sosyal etki programları tasarladı, program izleyici erişimini ikiye katlayan özel yaratıcı stratejiler ve mesajlar oluşturdu.",
          "Program Geliştirme: 6-18 yaş arası gençler için eş zamanlı yürütülen çok sayıda programın tüm içerik hattını (konsept geliştirme ➔ yaratıcı brifing ➔ üretim ➔ performans iterasyonu) yönetti."
        ]
      },
      {
        role: "Öğrenme Tasarımcısı & Danışman",
        organization: "Freelance",
        period: "2019 – 2020",
        highlights: [
          "Danışmanlık ve Tasarım: STK'lar ve KOBİ'ler için özel yetenek geliştirme yolları, oyunlaştırılmış öğrenme yolculukları ve iletişim planları oluşturdu.",
          "Etki Raporlaması: Yüksek profilli sosyal sorumluluk girişimleri için ayrıntılı araştırma tabanlı raporlar ve stratejik uygulama çerçeveleri hazırladı."
        ]
      },
      {
        role: "Eğitim Departmanı Yöneticisi",
        organization: "Toplum Gönüllüleri Vakfı (TOG)",
        period: "2016 – 2019",
        highlights: [
          "Departman Liderliği: 6 kişilik çekirdek bir eğitim ekibine başkanlık etti, eğitim bütçesini yönetti ve Türkiye genelinde yılda yaklaşık 8.000 genç değişim yaratıcıya yönelik deneyimsel öğrenme girişimlerini yönetti.",
          "Öğrenme Sistemleri Tasarımı: İhtiyaç analizi, içerik oluşturma, kolaylaştırıcı bilgilendirmesi ve nicel sonuç ölçümünü kapsayan yapılandırılmış öğrenme çerçevelerini sıfırdan tasarladı.",
          "Kalite Güvencesi: Eğitim tasarımı ve sunum şablonlarını standartlaştırarak ülke genelinde tutarlı eğitim kalitesi sağlayan tekrarlanabilir yönergeler oluşturdu."
        ]
      },
      {
        role: "Kapasite Geliştirme Koordinatörü | Eğitim Koordinatörü",
        organization: "Toplum Gönüllüleri Vakfı (TOG)",
        period: "2010 – 2016",
        highlights: [
          "Uluslararası Atölye Kolaylaştırıcılığı: Avrupa genelinde insan hakları, aktif vatandaşlık ve sosyal girişimcilik konularında uluslararası deneyimsel atölyeler tasarladı ve kolaylaştırdı (Avrupa Konseyi ve Olde Vechte Vakfı ortaklığıyla).",
          "Kolaylaştırıcı Kılavuzları: Birden fazla dile çevrilmiş kapsamlı atölye kolaylaştırma kılavuzları ve öğrenme içerikleri yazdı."
        ]
      }
    ],
    projects: [
      {
        title: "Zapır Zupur Kalem (Kutu Oyunu & Anlatı)",
        description: "Pelin adlı bir çocuğun Kalemler Diyarı'na yaptığı yolculuğu anlatan, ailece oynanan interaktif hikaye tabanlı bir kutu oyunu. Sahne kitapçığı, ortaklaşa karar alma ve dostluk mekanikleri içeriyor.",
        highlights: [
          "Mekanik ve Hikaye Entegrasyonu: Schell oyun tasarımı lensleri doğrultusunda, ortaklaşa karar alma mekanikleriyle anlatıyı birleştirdi.",
          "Pedagojik Hizalama: Çocukların kendini ifade etme ve özgünlük becerilerini geliştirecek şekilde tasarlandı."
        ]
      },
      {
        title: "Roleplay Tabanlı Kolaylaştırıcılık",
        description: "Kurumsal müşteriler için takım dinamiklerini ve etik karar alma süreçlerini teşvik etmek amacıyla tasarlanan yüksek katılımlı, anlatı odaklı rol yapma (RPG) deneyimleri.",
        highlights: [
          "D&D ve RPG DM Deneyimleri: Yıllar süren zindan efendiliği (Dungeon Master) birikimini kurumsal gelişim workshoplarına uyarladı."
        ]
      },
      {
        title: "hikayemsen.com",
        description: "Ebeveynlerin çocukları için pedagojik olarak uyumlu, yaşa uygun hikayeleri birlikte oluşturabilecekleri yapay zeka destekli bir dijital hikaye üretim web uygulaması.",
        highlights: [
          "Ürün Yönetimi ve Prototipleme: AI destekli hikaye üretimi algoritmaları ve pedagog onaylı yönlendirmeler içeren kullanıcı arayüzü tasarımı."
        ]
      }
    ],
    skills: [
      { id: "ux-design", label: "Deneyim Tasarımı (Experience Design)", category: "experience", description: "Ziyaretçi veya katılımcının yolculuğunu başından sonuna kadar duygusal ve sistemsel olarak kurgulama.", highlightFor: ["fiona"] },
      { id: "learning-journeys", label: "Öğrenme Yolculukları (Learning Journeys)", category: "experience", description: "Bireylerin kalıcı beceriler edinmesi için tasarlanan aşamalı gelişim programları.", highlightFor: ["fiona"] },
      { id: "facilitation", label: "Atölye Kolaylaştırıcılığı (Facilitation)", category: "experience", description: "Katılımcıların aktif öğrenmesini ve iş birliği yapmasını sağlayan metodolojiler.", highlightFor: ["fiona"] },
      { id: "needs-assessment", label: "İhtiyaç Analizi (Needs Assessment)", category: "experience", description: "Hedef kitlenin eksikliklerini ve gelişim alanlarını bilimsel araçlarla saptama.", highlightFor: ["fiona"] },

      { id: "narrative-arch", label: "Anlatı Mimarisi (Narrative Architecture)", category: "narrative", description: "Ortamlara, sistemlere ve oyunlara hikayesel anlam kazandırma, evren kurma (world-building).", highlightFor: ["mark"] },
      { id: "gamification", label: "Oyunlaştırma Mekanikleri (Gamification)", category: "narrative", description: "Jesse Schell frameworkü temelinde insan motivasyonunu artıran oyun mekanikleri tasarımı.", highlightFor: ["mark"] },
      { id: "storytelling", label: "Storytelling & Hikaye Yazımı", category: "narrative", description: "John Truby ve Brandon Sanderson ilkeleri doğrultusunda duygusal derinliği olan hikayeler kaleme alma.", highlightFor: ["mark"] },
      { id: "rpg-mechanics", label: "RPG & Board Game Tasarımı", category: "narrative", description: "Karar alma mekanikleri, rol yapma senaryoları ve masaüstü oyun tasarımları oluşturma.", highlightFor: ["mark"] },

      { id: "scaling-vision", label: "Program Ölçeklendirme (Program Scaling)", category: "strategy", description: "Butik etki projelerini binlerce insana ulaşacak şekilde sistemleştirip büyütme vizyonu.", highlightFor: ["olena"] },
      { id: "leadership", label: "Disiplinlerarası Ekip Liderliği", category: "strategy", description: "Hızlı büyüyen sosyal etki ve teknoloji ekiplerini ortak hedefler doğrultusunda yönetme.", highlightFor: ["olena"] },
      { id: "budget-management", label: "Bütçe ve Kaynak Yönetimi", category: "strategy", description: "Departman veya kurum bütçelerini stratejik hedefler doğrultusunda optimize etme.", highlightFor: ["olena"] },
      { id: "stakeholder-alignment", label: "Paydaş ve Partner Yönetimi", category: "strategy", description: "STK, kurumsal ortaklar ve girişimciler arasında stratejik ortaklıklar kurma.", highlightFor: ["olena"] },

      { id: "ai-workflows", label: "AI Yerel İş Akışları (AI-Native Workflows)", category: "technical", description: "Claude, Gemini, Antigravity ve Cursor kullanarak iş süreçlerini ve prototiplemeyi hızlandırma.", highlightFor: ["fiona", "mark", "olena"] },
      { id: "rapid-proto", label: "Hızlı Prototipleme (Vibe Coding)", category: "technical", description: "React, TypeScript, Tailwind ve Supabase kullanarak hızlıca fikirleri çalışan ürünlere dönüştürme.", highlightFor: ["fiona", "mark"] },
      { id: "figma-design", label: "Arayüz Tasarımı & Figma", category: "technical", description: "Kullanıcı dostu arayüz prototipleri ve tel kafes (wireframe) çalışmaları tasarlama.", highlightFor: ["fiona"] }
    ]
  }
};
