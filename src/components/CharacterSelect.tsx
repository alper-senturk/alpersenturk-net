import React, { useState, useEffect } from 'react';
import fionaSprite from '../assets/characters/svg/fiona-spritesheet.svg';
import markSprite from '../assets/characters/svg/mark-spritesheet.svg';
import olenaSprite from '../assets/characters/svg/olena-spritesheet.svg';
import RetroAudio from '../utils/RetroAudio';
import translations from '../data/translations';

interface Character {
  id: 'fiona' | 'mark' | 'olena';
  name: string;
  role: string;
  sprite: string;
  focus: string;
  description: string;
}

const getCharacters = (lang: 'en' | 'tr'): Character[] => [
  {
    id: 'fiona',
    name: 'Fiona',
    role: lang === 'en' ? 'Experience Designer' : 'Deneyim Tasarımcısı',
    sprite: fionaSprite,
    focus: lang === 'en' ? 'Learning Design & Facilitation' : 'Öğrenme Tasarımı & Kolaylaştırıcılık',
    description: lang === 'en' 
      ? 'Designs learning journeys, maps needs assessments, and architects educational frameworks.'
      : 'Deneyim yolculukları kurgular, ihtiyaç analizlerini yönetir ve öğrenme sistemleri tasarlar.'
  },
  {
    id: 'mark',
    name: 'Mark',
    role: lang === 'en' ? 'Narrative Architect' : 'Anlatı Mimarı',
    sprite: markSprite,
    focus: lang === 'en' ? 'Gamification & World Building' : 'Oyunlaştırma & Evren Kurulumu',
    description: lang === 'en'
      ? 'Architects interactive story worlds, designs gamification, and writes pedagogical fiction.'
      : 'Anlatı mimarisi kurgular, Jesse Schell frameworküyle oyunlaştırır ve hikayeler yazar.'
  },
  {
    id: 'olena',
    name: 'Olena',
    role: lang === 'en' ? 'Program Strategist' : 'Program Stratejisti',
    sprite: olenaSprite,
    focus: lang === 'en' ? 'Scaling & B2B Strategy' : 'Ölçeklendirme & B2B Stratejisi',
    description: lang === 'en'
      ? 'Scales social impact programs, establishes team systems, and aligns corporate stakeholders.'
      : 'Programları ölçeklendirir, ekipleri liderlikle yönetir ve büyük kurumsal iş birlikleri kurar.'
  }
];

interface CharacterSelectProps {
  onSelect: (characterId: 'fiona' | 'mark' | 'olena') => void;
  lang: 'en' | 'tr';
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({ onSelect, lang }) => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);

  // Cycle sprite frames to animate them standing/breathing
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % 3);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (id: 'fiona' | 'mark' | 'olena') => {
    RetroAudio.playSelect();
    onSelect(id);
  };

  const t = translations[lang];
  const characters = getCharacters(lang);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      padding: '20px',
      background: 'radial-gradient(circle, #1a202c 0%, #0b0c10 100%)',
      overflowY: 'auto'
    }}>
      <div className="pixel-box" style={{
        maxWidth: '900px',
        width: '100%',
        padding: '30px',
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '20px',
        marginTop: '40px' // Leave space for global top-left bar
      }}>
        <h1 className="retro-header-text" style={{ fontSize: '22px', marginBottom: '15px', color: 'var(--accent-gold)' }}>
          {t.selectCharacter}
        </h1>
        <p className="retro-body-text" style={{ fontSize: '24px', marginBottom: '30px', color: 'var(--text-secondary)' }}>
          {t.selectDescription}
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {characters.map((char) => {
            const isHovered = hoveredChar === char.id;
            // Frame positions: column index * width of one cell (66.6px)
            const bgPosX = `-${activeFrame * 66.6}px`;

            return (
              <div
                key={char.id}
                className="pixel-box glass-window"
                onMouseEnter={() => {
                  setHoveredChar(char.id);
                  RetroAudio.playWalk();
                }}
                onMouseLeave={() => setHoveredChar(null)}
                onClick={() => handleSelect(char.id)}
                style={{
                  flex: '1 1 260px',
                  maxWidth: '300px',
                  padding: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  transform: isHovered ? 'translateY(-8px)' : 'none',
                  borderColor: isHovered ? 'var(--accent-gold)' : 'var(--glass-border)',
                  borderWidth: '2px',
                  borderStyle: 'solid'
                }}
              >
                {/* Animated Character Sprite Container */}
                <div style={{
                  width: '66.6px',
                  height: '100px',
                  overflow: 'hidden',
                  background: `url(${char.sprite})`,
                  backgroundPosition: `${bgPosX} 0px`, // Use Row 1 for front facing idle
                  backgroundSize: '200px 200px',
                  marginBottom: '15px'
                }} />

                <h2 className="retro-header-text" style={{ fontSize: '14px', marginBottom: '8px' }}>
                  {char.name}
                </h2>
                <h3 className="retro-body-text" style={{ fontSize: '22px', color: 'var(--accent-gold)', marginBottom: '12px' }}>
                  {char.role}
                </h3>
                
                <hr style={{ width: '80%', border: '0', borderTop: '2px dashed var(--glass-border)', marginBottom: '12px' }} />

                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    lineHeight: '1.5',
                    marginBottom: '15px'
                  }}>
                    {char.description}
                  </p>

                  <div className="pixel-box" style={{
                    padding: '8px 12px',
                    fontSize: '13px',
                    color: char.id === 'fiona' ? 'var(--accent-green)' : char.id === 'mark' ? 'var(--accent-orange)' : 'var(--accent-blue)',
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.3)',
                    borderColor: 'transparent',
                    boxShadow: 'none',
                    fontWeight: 'bold'
                  }}>
                    ✨ {char.focus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
