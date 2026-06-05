import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Award, Compass, BookOpen, Calendar, ChevronRight, Swords, Shield, Coffee, Globe } from 'lucide-react';
import fionaSprite from '../assets/characters/svg/fiona-spritesheet.svg';
import markSprite from '../assets/characters/svg/mark-spritesheet.svg';
import olenaSprite from '../assets/characters/svg/olena-spritesheet.svg';
import RetroAudio from '../utils/RetroAudio';
import translations from '../data/translations';

type CharacterType = 'fiona' | 'mark' | 'olena';
type LangType = 'en' | 'tr';

interface QuestBoardProps {
  selectedChar: CharacterType;
  onEnterBuilding: (route: string) => void;
  onOpenClassicCV: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  lang: LangType;
  onToggleLang: () => void;
  visitedBuildings: string[];
  setVisitedBuildings: React.Dispatch<React.SetStateAction<string[]>>;
}

interface QuestItem {
  id: string;
  key: string;
  titleEn: string;
  titleTr: string;
  descEn: string;
  descTr: string;
  route: string;
  icon: React.ReactNode;
  color: string;
  tagEn: string;
  tagTr: string;
  xp: number;
}

export const QuestBoard: React.FC<QuestBoardProps> = ({
  selectedChar,
  onEnterBuilding,
  onOpenClassicCV,
  isMuted,
  onToggleMute,
  lang,
  onToggleLang,
  visitedBuildings,
  setVisitedBuildings
}) => {
  const [activeFrame, setActiveFrame] = useState(1);
  const [hoveredQuest, setHoveredQuest] = useState<string | null>(null);

  // Character sprite frame cycle for idle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % 3);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  const spriteMap = {
    fiona: fionaSprite,
    mark: markSprite,
    olena: olenaSprite
  };

  // Character dialog configuration
  const dialogues: Record<CharacterType, Record<string, { en: string; tr: string }>> = {
    fiona: {
      default: {
        en: "Greetings, traveler! Ready to check Alper's scrolls? His world is full of experience design quests.",
        tr: "Selam maceracı! Alper'in parşömenlerini incelemeye hazır mısın? Dünyası deneyim tasarımıyla dolu."
      },
      tavern: {
        en: "The Tavern archives hold Alper's scrolls of history. Let's see where his design path has led him!",
        tr: "Han arşivleri Alper'in tarih parşömenlerini saklar. Tasarım yolunun onu nerelere götürdüğünü görelim!"
      },
      workshop: {
        en: "The Workshop timeline is where Alper forged real projects. Highly recommended for managers!",
        tr: "Atölye kronolojisi Alper'in gerçek projeleri dövdüğü yerdir. Yöneticiler için şiddetle tavsiye edilir!"
      },
      library: {
        en: "Ah, the Scroll Library! My favorite place to study tabletop rule systems and storytelling design.",
        tr: "Ah, Kütüphane! Masaüstü kural sistemlerini ve hikaye anlatım tasarımlarını incelemek için en sevdiğim yer."
      },
      cafe: {
        en: "Let's visit the Cafe. It's the best place to sit down, share coffee, and schedule a meeting with Alper!",
        tr: "Kafeye gidelim. Oturup bir kahve paylaşmak ve Alper ile bir randevu planlamak için en iyi yer!"
      }
    },
    mark: {
      default: {
        en: "An adventurer always needs a solid story. Let's inspect these quest boards to understand Alper's narrative style.",
        tr: "Bir maceracının her zaman sağlam bir hikayeye ihtiyacı vardır. Alper'in anlatı tarzını anlamak için bu panoları inceleyelim."
      },
      tavern: {
        en: "Taverns are where legendary tales are recorded. Open his Tavern CV to read his professional accomplishments!",
        tr: "Hanlar efsanevi öykülerin kaydedildiği yerlerdir. Mesleki başarılarını okumak için Han CV'sini aç!"
      },
      workshop: {
        en: "The timeline of works holds deep narrative architecture logs. A decade of structural experiences!",
        tr: "Çalışmaların kronolojisi derin anlatı mimarisi kayıtları içerir. On yıllık yapısal deneyimler!"
      },
      library: {
        en: "The library contains tabletop rule structures and creative books Alper wrote. Fascinating lore!",
        tr: "Kütüphane, Alper'in yazdığı masaüstü kural yapılarını ve yaratıcı kitapları barındırır. Büyüleyici bilgiler!"
      },
      cafe: {
        en: "Ready to summon Alper for a project? Send a carrier pigeon or check the cafe's meeting schedule.",
        tr: "Bir proje için Alper'i çağırmaya hazır mısın? Bir posta güvercini gönder veya kafenin randevu takvimine bak."
      }
    },
    olena: {
      default: {
        en: "A good strategist plans ahead. Review Alper's achievements, choose a quest, and level up your team.",
        tr: "İyi bir stratejist önceden plan yapar. Alper'in başarılarını inceleyin, bir görev seçin ve takımınızın seviyesini yükseltin."
      },
      tavern: {
        en: "To analyze a lead, one must review their track record. The Tavern scroll lists his entire career path.",
        tr: "Bir lideri analiz etmek için geçmiş performansını incelemek gerekir. Han parşömeni tüm kariyer yolunu listeler."
      },
      workshop: {
        en: "Product design leadership, facilitation methodologies, and decade-long milestones lie in the Workshop.",
        tr: "Ürün tasarımı liderliği, kolaylaştırıcılık metodolojileri ve on yıllık dönüm noktaları Atölyede yer alıyor."
      },
      library: {
        en: "Intellectual rule engines, collaborative rulebooks, and creative systems are stored in the library vaults.",
        tr: "Entelektüel kural motorları, işbirlikçi kural kitapları ve yaratıcı sistemler kütüphane kasalarında saklanır."
      },
      cafe: {
        en: "Want to align goals or discuss workshops? Schedule a chat using the Cafe's magical scroll scheduler.",
        tr: "Hedefleri hizalamak veya atölyeleri tartışmak mı istiyorsunuz? Kafenin büyülü planlayıcısını kullanarak bir görüşme ayarlayın."
      }
    }
  };

  const currentDialogue = dialogues[selectedChar][hoveredQuest || 'default'][lang];

  // Quests Configuration
  const quests: QuestItem[] = [
    {
      id: 'tavern',
      key: 'questTavern',
      titleEn: "Tavern Chronicles (Classic CV)",
      titleTr: "Han Günlükleri (Klasik CV)",
      descEn: "Examine Alper's career timeline scroll. Discover core competencies and skill trees.",
      descTr: "Alper'in kariyer kronolojisi parşömenini incele. Temel yetkinlikleri ve uzmanlık ağaçlarını keşfet.",
      route: '/cv',
      icon: <Award size={20} />,
      color: 'var(--accent-blue)',
      tagEn: "STORY",
      tagTr: "ÖZGEÇMİŞ",
      xp: 1500
    },
    {
      id: 'workshop',
      key: 'questWorkshop',
      titleEn: "Developer Workshop (Experience)",
      titleTr: "Geliştirici Atölyesi (Deneyim)",
      descEn: "Explore the chronological timeline of product design and team facilitation logs.",
      descTr: "Ürün tasarımı ve ekip kolaylaştırıcılığı çalışmalarının kronolojik zaman akışını keşfet.",
      route: '/experience?tab=timeline',
      icon: <Compass size={20} />,
      color: 'var(--accent-green)',
      tagEn: "CHRONOLOGY",
      tagTr: "KRONOLOJİ",
      xp: 2500
    },
    {
      id: 'library',
      key: 'questLibrary',
      titleEn: "Scroll Library (Creative Portfolio)",
      titleTr: "Kütüphane Parşömenleri (Portfolyo)",
      descEn: "Inspect tabletop rule systems, storytelling frameworks, and creative software guides.",
      descTr: "Masaüstü kural sistemlerini, hikaye anlatı çerçevelerini ve yazılım rehberlerini incele.",
      route: '/experience?tab=portfolio',
      icon: <BookOpen size={20} />,
      color: 'var(--accent-gold)',
      tagEn: "PORTFOLIO",
      tagTr: "PORTFÖY",
      xp: 3000
    },
    {
      id: 'cafe',
      key: 'questCafe',
      titleEn: "Mystic Cafe (Contact & Coffee)",
      titleTr: "Mistik Kafe (İletişim & Randevu)",
      descEn: "Send a carrier pigeon directly to Alper's inbox or schedule a meeting session.",
      descTr: "Alper'in gelen kutusuna doğrudan posta güvercini gönder veya randevu oturumu ayarla.",
      route: '/contact',
      icon: <Calendar size={20} />,
      color: '#fc8181',
      tagEn: "COMMUNICATION",
      tagTr: "İLETİŞİM",
      xp: 1000
    }
  ];

  const handleAcceptQuest = (quest: QuestItem) => {
    RetroAudio.playEnter();
    if (!visitedBuildings.includes(quest.id)) {
      setVisitedBuildings(prev => [...prev, quest.id]);
    }
    onEnterBuilding(quest.route);
  };

  const handleBackToSelect = () => {
    RetroAudio.playClose();
    onEnterBuilding('/select');
  };

  // Offset position in spritesheet
  const bgPosY = '0px'; // Downward facing frame
  const bgPosX = `-${activeFrame * 66.6}px`;

  const shouldFlipPlayer = selectedChar === 'fiona';

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0d1117',
        backgroundImage: `radial-gradient(circle at center, #1a202c 0%, #0d1117 100%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px'
      }}
    >
      {/* BACKGROUND FLOATING DECORATIONS (8-BIT PARTICLES) */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05 }}>
        <div style={{ position: 'absolute', top: '10%', left: '20%' }}><Swords size={40} style={{ color: 'var(--text-secondary)' }} /></div>
        <div style={{ position: 'absolute', top: '70%', left: '15%' }}><Shield size={45} style={{ color: 'var(--text-secondary)' }} /></div>
        <div style={{ position: 'absolute', top: '25%', left: '80%' }}><BookOpen size={50} style={{ color: 'var(--text-secondary)' }} /></div>
        <div style={{ position: 'absolute', top: '80%', left: '85%' }}><Coffee size={40} style={{ color: 'var(--text-secondary)' }} /></div>
      </div>

      {/* TOP LEFT CONTROLS */}
      <div className="overlay-ui top-left" style={{ pointerEvents: 'auto' }}>
        <button
          className="pixel-btn"
          onClick={(e) => { e.stopPropagation(); onToggleMute(); }}
          style={{ padding: '8px 12px' }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <button
          className="pixel-btn"
          onClick={(e) => { e.stopPropagation(); onToggleLang(); }}
          style={{ padding: '8px 12px', minWidth: '75px', justifyContent: 'center' }}
        >
          <Globe size={14} style={{ marginRight: '6px' }} /> {lang.toUpperCase()}
        </button>
      </div>

      {/* TOP RIGHT SKIP BUTTON */}
      <div className="overlay-ui top-right">
        <button
          className="pixel-btn"
          onClick={(e) => { e.stopPropagation(); RetroAudio.playTeleport(); onOpenClassicCV(); }}
          style={{ borderColor: 'var(--accent-blue)', fontSize: '12px' }}
        >
          {translations[lang].skipToBoss}
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 350px) 1fr',
          gap: '30px',
          zIndex: 10,
          alignItems: 'stretch'
        }}
        className="quest-board-grid"
      >
        {/* LEFT PANEL: PLAYER PROFILE & BUBBLE */}
        <div
          className="pixel-box glass-window"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '30px 24px',
            textAlign: 'center',
            borderColor: 'var(--accent-gold)'
          }}
        >
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span
              className="retro-header-text"
              style={{ fontSize: '14px', color: 'var(--accent-gold)', marginBottom: '4px' }}
            >
              {lang === 'en' ? 'GUILD MEMBER' : 'LONCA ÜYESİ'}
            </span>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '16px',
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {selectedChar} (Lv. 10)
            </span>

            {/* SPEECH BUBBLE */}
            <div
              className="speech-bubble-container"
              style={{
                position: 'relative',
                background: 'rgba(0,0,0,0.6)',
                border: '2px solid var(--glass-border)',
                padding: '16px',
                borderRadius: '8px',
                marginTop: '20px',
                marginBottom: '20px',
                width: '100%',
                minHeight: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-retro-body)',
                  fontSize: '20px',
                  color: 'var(--text-primary)',
                  lineHeight: '1.5',
                  margin: 0
                }}
              >
                "{currentDialogue}"
              </p>
              {/* Bubble Arrow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '10px solid var(--glass-border)'
                }}
              />
            </div>

            {/* CHARACTER SPRITE FRAME */}
            <div
              style={{
                width: '120px',
                height: '180px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                marginTop: '10px'
              }}
            >
              <div
                className="spritesheet-character"
                style={{
                  backgroundImage: `url(${spriteMap[selectedChar]})`,
                  backgroundPosition: `${bgPosX} ${bgPosY}`,
                  transform: `scale(2) ${shouldFlipPlayer ? 'scaleX(-1)' : 'scaleX(1)'}`,
                  transformOrigin: 'center center'
                }}
              />
            </div>
          </div>

          <button
            className="pixel-btn"
            onClick={handleBackToSelect}
            style={{
              marginTop: '30px',
              padding: '10px 16px',
              fontSize: '11px',
              borderColor: 'var(--text-secondary)',
              color: 'var(--text-secondary)',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            {lang === 'en' ? '◀ CHANGE CHARACTER' : '◀ KARAKTER DEĞİŞTİR'}
          </button>
        </div>

        {/* RIGHT PANEL: TAVERN QUEST BOARD */}
        <div
          className="pixel-box"
          style={{
            background: '#23150d',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.15) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.15) 2px, transparent 2px)',
            backgroundSize: '40px 40px',
            border: '6px solid #4a2810',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px'
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: 'center',
              borderBottom: '4px double #4a2810',
              paddingBottom: '16px',
              marginBottom: '20px'
            }}
          >
            <h1
              className="retro-header-text"
              style={{
                fontSize: '18px',
                color: 'var(--accent-gold)',
                letterSpacing: '2px',
                textShadow: '3px 3px #000',
                margin: 0
              }}
            >
              {lang === 'en' ? 'TAVERN QUEST BOARD' : 'LONCA GÖREV PANOSU'}
            </h1>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#a0aec0',
                marginTop: '4px',
                textTransform: 'uppercase'
              }}
            >
              {lang === 'en' ? 'Select a quest to explore Alper\'s scrolls' : 'Alper\'in parşömenlerini keşfetmek için görev seçin'}
            </p>
          </div>

          {/* Quests List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flexGrow: 1,
              overflowY: 'auto',
              maxHeight: '480px',
              paddingRight: '6px'
            }}
          >
            {quests.map((quest) => {
              const isCompleted = visitedBuildings.includes(quest.id);
              const title = lang === 'en' ? quest.titleEn : quest.titleTr;
              const desc = lang === 'en' ? quest.descEn : quest.descTr;
              const tag = lang === 'en' ? quest.tagEn : quest.tagTr;

              return (
                <div
                  key={quest.id}
                  className="pixel-box"
                  onMouseEnter={() => setHoveredQuest(quest.id)}
                  onMouseLeave={() => setHoveredQuest(null)}
                  onClick={() => handleAcceptQuest(quest)}
                  style={{
                    background: 'rgba(239, 230, 215, 0.95)',
                    border: '3px solid #8c6239',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                    color: '#2a1a08',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    transform: hoveredQuest === quest.id ? 'translateY(-2px)' : 'none',
                    borderColor: hoveredQuest === quest.id ? quest.color : '#8c6239'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexGrow: 1 }}>
                    {/* Icon container */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: '#2a1a08',
                        color: quest.color,
                        border: '2px solid #8c6239',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)'
                      }}
                    >
                      {quest.icon}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span
                          style={{
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: '15px',
                            color: '#2a1a08'
                          }}
                        >
                          {title}
                        </span>
                        <span
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '11px',
                            padding: '1px 5px',
                            background: quest.color,
                            color: quest.id === 'library' || quest.id === 'cafe' ? '#000' : '#fff',
                            fontWeight: 'bold'
                          }}
                        >
                          {tag}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-retro-body)',
                          fontSize: '18px',
                          color: '#5c4021',
                          lineHeight: '1.4'
                        }}
                      >
                        {desc}
                      </span>
                    </div>
                  </div>

                  {/* Actions & Status */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '6px',
                      minWidth: '110px'
                    }}
                  >
                    {isCompleted ? (
                      <span
                        style={{
                          fontSize: '11px',
                          color: '#22c55e',
                          fontWeight: 'bold',
                          fontFamily: 'monospace',
                          border: '1px solid #22c55e',
                          padding: '1px 6px',
                          background: 'rgba(34, 197, 94, 0.1)'
                        }}
                      >
                        ✓ {lang === 'en' ? 'COMPLETED' : 'TAMAMLANDI'}
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: '11px',
                          color: '#a0aec0',
                          fontWeight: 'bold',
                          fontFamily: 'monospace',
                          border: '1px dashed #a0aec0',
                          padding: '1px 6px'
                        }}
                      >
                        {lang === 'en' ? 'AVAILABLE' : 'AKTİF'}
                      </span>
                    )}

                    <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#8c6239' }}>
                      +{quest.xp} XP
                    </span>

                    <button
                      className="pixel-btn"
                      style={{
                        padding: '4px 8px',
                        fontSize: '11px',
                        background: hoveredQuest === quest.id ? quest.color : '#2a1a08',
                        color: hoveredQuest === quest.id ? (quest.id === 'library' || quest.id === 'cafe' ? '#000' : '#fff') : 'var(--accent-gold)',
                        borderColor: '#2a1a08',
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px'
                      }}
                    >
                      <span>{lang === 'en' ? 'ACCEPT' : 'KABUL ET'}</span>
                      <ChevronRight size={10} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive adjustments CSS */}
      <style>{`
        @media (max-width: 768px) {
          .quest-board-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default QuestBoard;
