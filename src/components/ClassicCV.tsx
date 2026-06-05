import React from 'react';
import { Mail, MapPin, Calendar, Award, BookOpen, ChevronLeft } from 'lucide-react';
import { cvData } from '../data/cvData';
import type { SkillNode } from '../data/cvData';
import RetroAudio from '../utils/RetroAudio';
import translations from '../data/translations';
import fionaSprite from '../assets/characters/svg/fiona-spritesheet.svg';
import markSprite from '../assets/characters/svg/mark-spritesheet.svg';
import olenaSprite from '../assets/characters/svg/olena-spritesheet.svg';

const spriteMap = {
  fiona: fionaSprite,
  mark: markSprite,
  olena: olenaSprite
};

interface ClassicCVProps {
  selectedChar: 'fiona' | 'mark' | 'olena';
  onBackToGame: () => void;
  lang: 'en' | 'tr';
}

export const ClassicCV: React.FC<ClassicCVProps> = ({ selectedChar, onBackToGame, lang }) => {
  const handleBack = () => {
    RetroAudio.playTeleport();
    onBackToGame();
  };

  const data = cvData[lang];
  const t = translations[lang];

  // Group skills by category
  const expSkills = data.skills.filter(s => s.category === 'experience');
  const narrativeSkills = data.skills.filter(s => s.category === 'narrative');
  const strategySkills = data.skills.filter(s => s.category === 'strategy');
  const technicalSkills = data.skills.filter(s => s.category === 'technical');

  // Check if a skill should glow
  const getGlowClass = (skill: SkillNode) => {
    if (skill.highlightFor.includes(selectedChar)) {
      return `glow-${selectedChar}`;
    }
    return '';
  };

  return (
    <div className="classic-cv-container" style={{
      width: '100vw',
      height: '100vh',
      overflowY: 'auto',
      background: '#0f172a',
      color: '#f8fafc',
      padding: '40px 20px',
      position: 'relative'
    }}>
      {/* Return to Map Button (Overlay) */}
      <div className="overlay-ui top-left">
        <button 
          className="pixel-btn" 
          onClick={handleBack}
          style={{ fontSize: '12px', padding: '10px 16px' }}
        >
          <ChevronLeft size={16} /> {t.returnToMap}
        </button>
      </div>

      <div className="classic-cv-grid" style={{
        maxWidth: '1100px',
        margin: '60px auto 0 auto',
        display: 'flex',
        gap: '30px',
        alignItems: 'flex-start',
        position: 'relative'
      }}>
        {/* Sticky Character Side-car (Hidden on screens <= 1024px) */}
        <div className="cv-character-sticky">
          <div className="pixel-box" style={{
            padding: '6px 12px',
            fontSize: '13px',
            background: 'rgba(0,0,0,0.8)',
            border: '2px solid var(--accent-gold)',
            color: 'var(--accent-gold)',
            textAlign: 'center',
            borderRadius: '4px',
            maxWidth: '120px',
            marginBottom: '20px',
            boxShadow: 'none',
            whiteSpace: 'nowrap'
          }}>
            {lang === 'en' ? "reading..." : "okuyor..."}
          </div>
          <div 
            className="spritesheet-character"
            style={{
              backgroundImage: `url(${spriteMap[selectedChar]})`,
              backgroundPosition: `0px 0px`, // front facing idle
              transform: `scale(1.5) ${selectedChar === 'fiona' ? 'scaleX(-1)' : 'scaleX(1)'}`, // face right (towards CV)
              transformOrigin: 'bottom center'
            }}
          />
        </div>

        {/* Main Content Column */}
        <div style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
        
        {/* Header Block */}
        <div className="pixel-box glass-window classic-cv-box" style={{ padding: '30px', borderRadius: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h1 className="retro-header-text" style={{ fontSize: '26px', color: 'var(--accent-gold)' }}>
                {data.name}
              </h1>
              <h2 className="retro-body-text" style={{ fontSize: '20px', color: '#fff', marginTop: '6px' }}>
                {data.title}
              </h2>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                marginTop: '15px'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={16} /> {data.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Calendar size={16} /> {data.born}
                </span>
                <a href={`mailto:${data.email}`} style={{ color: 'var(--accent-gold)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Mail size={16} /> {data.email}
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <hr style={{ border: '0', borderTop: '2px dashed var(--glass-border)', margin: '20px 0' }} />
          
          <p style={{
            fontSize: '15.5px',
            lineHeight: '1.7',
            color: 'var(--text-primary)'
          }}>
            {data.profile}
          </p>
        </div>

        {/* INTERACTIVE SKILL TREE SECTION */}
        <div className="pixel-box glass-window classic-cv-box" style={{ padding: '30px', borderRadius: '12px' }}>
          <h2 className="retro-header-text" style={{ fontSize: '15px', color: 'var(--accent-gold)', marginBottom: '10px', textAlign: 'center' }}>
            {t.skillTreeTitle}
          </h2>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            {lang === 'en' ? 'Active Character: ' : 'Aktif Karakteriniz: '}
            <strong style={{ color: selectedChar === 'fiona' ? 'var(--accent-green)' : selectedChar === 'mark' ? 'var(--accent-orange)' : 'var(--accent-blue)' }}>
              {selectedChar.toUpperCase()}
            </strong>
            {lang === 'en' ? '. Relevant skill branches will glow!' : '. İlgili yetenek dalları parlayacaktır!'}
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            position: 'relative'
          }}>
            {/* Main Tree Branches */}
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}>
              
              {/* Branch 1: Experience Design */}
              <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 className="retro-header-text" style={{ fontSize: '13px', color: 'var(--accent-green)', textAlign: 'center', marginBottom: '8px' }}>
                  {t.experienceDesign}
                </h3>
                {expSkills.map(s => {
                  const glow = getGlowClass(s);
                  return (
                    <div 
                      key={s.id} 
                      className={`pixel-box ${glow}`} 
                      style={{
                        padding: '10px',
                        fontSize: '12.5px',
                        background: 'rgba(255,255,255,0.03)',
                        borderColor: glow ? 'transparent' : 'var(--glass-border)',
                        boxShadow: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <strong style={{ display: 'block' }}>{s.label}</strong>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>{s.description}</span>
                    </div>
                  );
                })}
              </div>

              {/* Branch 2: Narrative Design */}
              <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 className="retro-header-text" style={{ fontSize: '13px', color: 'var(--accent-orange)', textAlign: 'center', marginBottom: '8px' }}>
                  {t.narrativeArchitecture}
                </h3>
                {narrativeSkills.map(s => {
                  const glow = getGlowClass(s);
                  return (
                    <div 
                      key={s.id} 
                      className={`pixel-box ${glow}`} 
                      style={{
                        padding: '10px',
                        fontSize: '12.5px',
                        background: 'rgba(255,255,255,0.03)',
                        borderColor: glow ? 'transparent' : 'var(--glass-border)',
                        boxShadow: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <strong style={{ display: 'block' }}>{s.label}</strong>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>{s.description}</span>
                    </div>
                  );
                })}
              </div>

              {/* Branch 3: Strategy & Scaling */}
              <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 className="retro-header-text" style={{ fontSize: '13px', color: 'var(--accent-blue)', textAlign: 'center', marginBottom: '8px' }}>
                  {t.strategicLeadership}
                </h3>
                {strategySkills.map(s => {
                  const glow = getGlowClass(s);
                  return (
                    <div 
                      key={s.id} 
                      className={`pixel-box ${glow}`} 
                      style={{
                        padding: '10px',
                        fontSize: '12.5px',
                        background: 'rgba(255,255,255,0.03)',
                        borderColor: glow ? 'transparent' : 'var(--glass-border)',
                        boxShadow: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <strong style={{ display: 'block' }}>{s.label}</strong>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>{s.description}</span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Base Branch: Technical */}
            <div className="pixel-box" style={{ padding: '20px', background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="retro-header-text" style={{ fontSize: '11px', color: 'var(--accent-gold)', marginBottom: '15px', textAlign: 'center' }}>
                {t.technicalBase}
              </h3>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                {technicalSkills.map(s => {
                  const glow = getGlowClass(s);
                  return (
                    <div 
                      key={s.id}
                      className={`pixel-box ${glow}`}
                      style={{
                        padding: '8px 12px',
                        fontSize: '12px',
                        background: 'rgba(255,255,255,0.05)',
                        borderColor: glow ? 'transparent' : 'var(--glass-border)',
                        boxShadow: 'none'
                      }}
                    >
                      <strong>{s.label}</strong>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="pixel-box glass-window classic-cv-box" style={{ padding: '30px', borderRadius: '12px' }}>
          <h2 className="retro-header-text" style={{ fontSize: '15px', color: 'var(--accent-gold)', marginBottom: '25px' }}>
            {t.experience}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {data.experiences.map((exp, idx) => (
              <div key={idx} style={{
                borderBottom: idx === data.experiences.length - 1 ? 'none' : '1px dashed var(--glass-border)',
                paddingBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>{exp.role}</h3>
                    <h4 style={{ fontSize: '15px', color: 'var(--accent-gold)', marginTop: '2px' }}>{exp.organization}</h4>
                  </div>
                  <span style={{
                    fontSize: '12px',
                    color: 'var(--accent-green)',
                    background: 'rgba(104,211,145,0.1)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace'
                  }}>{exp.period}</span>
                </div>
                
                <ul style={{
                  paddingLeft: '20px',
                  marginTop: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {exp.highlights.map((h, hIdx) => {
                    const parts = h.split(':');
                    return (
                      <li key={hIdx}>
                        {parts.length > 1 ? (
                          <>
                            <strong style={{ color: 'var(--text-primary)' }}>{parts[0]}:</strong>
                            {parts.slice(1).join(':')}
                          </>
                        ) : h}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="pixel-box glass-window classic-cv-box" style={{ padding: '30px', borderRadius: '12px' }}>
          <h2 className="retro-header-text" style={{ fontSize: '15px', color: 'var(--accent-gold)', marginBottom: '25px' }}>
            {t.projects}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {data.projects.map((proj, idx) => (
              <div key={idx} style={{
                borderBottom: idx === data.projects.length - 1 ? 'none' : '1px dashed var(--glass-border)',
                paddingBottom: '20px'
              }}>
                <h3 style={{ fontSize: '17px', color: '#fff', fontWeight: '600' }}>{proj.title}</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.5' }}>
                  {proj.description}
                </p>
                <ul style={{
                  paddingLeft: '20px',
                  marginTop: '10px',
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  {proj.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION & LANGUAGES */}
        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          {/* Education */}
          <div className="pixel-box glass-window classic-cv-box" style={{ flex: '1 1 400px', padding: '25px', borderRadius: '12px' }}>
            <h2 className="retro-header-text" style={{ fontSize: '12px', color: 'var(--accent-gold)', marginBottom: '15px' }}>
              {t.education}
            </h2>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <BookOpen size={20} style={{ color: 'var(--accent-gold)', marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '14.5px', color: '#fff' }}>
                  {data.education.split('|')[0].trim()}
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {data.education.split('|')[1].trim()}
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="pixel-box glass-window classic-cv-box" style={{ flex: '1 1 200px', padding: '25px', borderRadius: '12px' }}>
            <h2 className="retro-header-text" style={{ fontSize: '12px', color: 'var(--accent-gold)', marginBottom: '15px' }}>
              {t.languages}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {data.languages.map((langVal, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px' }}>
                  <Award size={16} style={{ color: 'var(--accent-green)' }} />
                  <span>{langVal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};
export default ClassicCV;
