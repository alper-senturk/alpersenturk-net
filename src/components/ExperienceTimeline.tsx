import React from 'react';
import { Briefcase } from 'lucide-react';
import { cvData } from '../data/cvData';

interface ExperienceTimelineProps {
  lang: 'en' | 'tr';
  selectedChar: 'fiona' | 'mark' | 'olena';
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang, selectedChar }) => {
  const data = cvData[lang];

  const getGlowClass = (skillHighlight: ('fiona' | 'mark' | 'olena')[]) => {
    if (skillHighlight.includes(selectedChar)) {
      return `glow-${selectedChar}`;
    }
    return '';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p style={{ lineHeight: '1.6', fontSize: '16px', color: 'var(--text-primary)' }}>
        {lang === 'en'
          ? 'Throughout my career at GİRVAK, Bilim Virüsü, and Toplum Gönüllüleri Vakfı, I have designed programs, managed high-impact learning systems, and shaped entrepreneurship tracks. Explore my timeline below:'
          : 'GİRVAK, Bilim Virüsü ve TOG bünyesinde tasarladığım gençlik ve girişimcilik programları ile binlerce gencin gelişim yolculuğunu şekillendirdim. Profesyonel deneyim geçmişimi aşağıda inceleyebilirsiniz:'}
      </p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Timeline Column */}
        <div className="pixel-box" style={{ flex: '1 1 450px', padding: '20px', background: 'rgba(0,0,0,0.2)', maxHeight: '600px', overflowY: 'auto' }}>
          <h4 className="retro-header-text" style={{ fontSize: '13px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Briefcase size={14} />
            {lang === 'en' ? 'EXPERIENCE CHRONOLOGY' : 'KRONOLOJİK GEÇMİŞ'}
          </h4>
          {data.experiences.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '24px', borderLeft: '2px dashed var(--accent-green)', paddingLeft: '16px', position: 'relative' }}>
              {/* Bullet point node */}
              <div style={{
                position: 'absolute',
                left: '-6px',
                top: '4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--accent-green)',
                border: '2px solid var(--bg-color)'
              }} />
              <span style={{ fontSize: '13px', color: 'var(--accent-green)', fontWeight: 'bold' }}>{exp.period}</span>
              <strong style={{ display: 'block', fontSize: '17px', margin: '4px 0', color: 'var(--accent-gold)' }}>{exp.role}</strong>
              <em style={{ fontSize: '15px', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>{exp.organization}</em>
              <ul style={{ fontSize: '14.5px', color: 'var(--text-secondary)', paddingLeft: '14px', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Column */}
        <div className="pixel-box" style={{ flex: '1 1 250px', padding: '20px', background: 'rgba(0,0,0,0.2)' }}>
          <h4 className="retro-header-text" style={{ fontSize: '13px', marginBottom: '16px' }}>
            {lang === 'en' ? '🧬 ASSOCIATED SKILLS' : '🧬 İLİŞKİLİ YETENEKLER'}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.skills.filter(s => s.category === 'experience' || s.category === 'strategy').map(skill => {
              const glow = getGlowClass(skill.highlightFor);
              return (
                <div 
                  key={skill.id} 
                  className={`pixel-box ${glow}`} 
                  style={{
                    padding: '10px',
                    fontSize: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: glow ? 'transparent' : 'var(--glass-border)',
                    boxShadow: 'none'
                  }}
                >
                  <strong>{skill.label}</strong>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {skill.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
