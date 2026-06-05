export interface UITranslation {
  selectCharacter: string;
  selectDescription: string;
  skipToBoss: string;
  fastTravel: string;
  returnToMap: string;
  portalOpening: string;
  teleporting: string;
  doorPrompt: string;
  interactPrompt: string;
  movementControls: string;
  exploreInstructions: string;
  activeCharacter: string;
  close: string;
  experience: string;
  projects: string;
  education: string;
  languages: string;
  contactMe: string;
  sendEmail: string;
  connectLinkedin: string;
  supportMe: string;
  buyCoffee: string;
  bookMeeting: string;
  skillTreeTitle: string;
  skillTreeDesc: string;
  experienceDesign: string;
  narrativeArchitecture: string;
  strategicLeadership: string;
  technicalBase: string;
  calendlyTitle: string;
  questLogTitle: string;
  questTavern: string;
  questWorkshop: string;
  questLibrary: string;
  questCafe: string;
  visitedLabel: string;
}

export const translations: { en: UITranslation; tr: UITranslation } = {
  en: {
    selectCharacter: "CHOOSE YOUR AVATAR",
    selectDescription: "Select the avatar you'll guide through Alper's world. Your choice determines which skill tree glows in the CV!",
    skipToBoss: "Skip to Boss Battle (Classic CV)",
    fastTravel: "Fast Travel (Classic CV)",
    returnToMap: "Return to Map (RPG)",
    portalOpening: "PORTAL OPENING...",
    teleporting: "TELEPORTING...",
    doorPrompt: "YOU ARE AT THE ENTRANCE OF",
    interactPrompt: "Press [E] / [SPACE] or Click Here to Enter!",
    movementControls: "Movement: W-A-S-D / Arrow Keys or Click to Move",
    exploreInstructions: "Explore 4 buildings on the map!",
    activeCharacter: "Active Character",
    close: "CLOSE",
    experience: "PROFESSIONAL EXPERIENCE",
    projects: "CREATIVE PROJECTS",
    education: "EDUCATION",
    languages: "LANGUAGES",
    contactMe: "Quick Contact",
    sendEmail: "Send Email",
    connectLinkedin: "LinkedIn Connect",
    supportMe: "Support Me",
    buyCoffee: "Buy Me a Coffee",
    bookMeeting: "Book a 30-min Chat",
    skillTreeTitle: "SKILL TREE",
    skillTreeDesc: "Your active avatar's skill tree will pulse with light!",
    experienceDesign: "Experience Design",
    narrativeArchitecture: "Narrative Architecture",
    strategicLeadership: "Strategic Leadership",
    technicalBase: "Common Supporting Skills (Technical Base)",
    calendlyTitle: "Calendly Scheduler",
    questLogTitle: "MAP GUIDE",
    questTavern: "Tavern (Narrative Design)",
    questWorkshop: "Workshop (Experience)",
    questLibrary: "Library (Creative Writing)",
    questCafe: "Cafe (Contact & Coffee)",
    visitedLabel: "COMPLETED"
  },
  tr: {
    selectCharacter: "KARAKTERİNİ SEÇ",
    selectDescription: "Alper'in dünyasında gezineceğin avatarı seç. Seçimin, CV'de hangi yetenek ağacının parlayacağını belirleyecek!",
    skipToBoss: "Skip to Boss Battle (Klasik CV)",
    fastTravel: "Fast Travel (Klasik CV)",
    returnToMap: "Return to Map (RPG)",
    portalOpening: "KAPILAR AÇILIYOR...",
    teleporting: "IŞINLANIYOR...",
    doorPrompt: "BİNANIN GİRİŞİNDESİN:",
    interactPrompt: "İçeri Girmek İçin [E] / [BOŞLUK] Tuşuna Bas veya Buraya Tıkla!",
    movementControls: "Hareket: W-A-S-D / Yön Tuşları veya Fare Tıklaması",
    exploreInstructions: "Haritada 4 binayı keşfet!",
    activeCharacter: "Karakteriniz",
    close: "KAPAT",
    experience: "MESLEKİ DENEYİM",
    projects: "YARATICI PROJELER",
    education: "EĞİTİM",
    languages: "DİLLER",
    contactMe: "Hızlı İletişim",
    sendEmail: "E-posta Gönder",
    connectLinkedin: "LinkedIn'den Ulaş",
    supportMe: "Destek Ol",
    buyCoffee: "Bir Kahve Ismarla",
    bookMeeting: "Tanışma Randevusu Al",
    skillTreeTitle: "YETENEK AĞACI",
    skillTreeDesc: "Seçtiğiniz karakterin yetenek dalları parlama efektiyle parlayacaktır!",
    experienceDesign: "Deneyim Tasarımı",
    narrativeArchitecture: "Anlatı Mimarlığı",
    strategicLeadership: "Stratejik Liderlik",
    technicalBase: "Ortak Destekleyici Yetenekler (Technical Base)",
    calendlyTitle: "Calendly Randevu Planlayıcı",
    questLogTitle: "HARİTA REHBERİ",
    questTavern: "Han (Anlatı Tasarımı)",
    questWorkshop: "Atölye (Deneyim)",
    questLibrary: "Kütüphane (Yazarlık)",
    questCafe: "Kafe (İletişim & Kahve)",
    visitedLabel: "TAMAMLANDI"
  }
};
export default translations;
