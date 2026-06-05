import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';
import RetroAudio from '../utils/RetroAudio';
import { Volume2, VolumeX, ArrowLeft, Briefcase, BookOpen, Globe } from 'lucide-react';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { LibraryPortfolio } from '../components/LibraryPortfolio';

export const ExperiencePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedChar, lang, isMuted, toggleMute, toggleLang } = useAppState();

  const activeTab = searchParams.get('tab') === 'portfolio' ? 'portfolio' : 'timeline';

  const handleBackToMap = () => {
    RetroAudio.playClose();
    navigate('/map');
  };

  const handleTabChange = (tab: 'timeline' | 'portfolio') => {
    RetroAudio.playSelect();
    setSearchParams({ tab });
  };

  // Sticky Character reading flip calculations (matches ClassicCV.tsx layout)
  const shouldFlipReadingChar = selectedChar === 'fiona';

  return (
    <div className="page-container" style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--bg-color)',
      overflowY: 'auto',
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      
      {/* Global Control Overlays */}
      <div className="overlay-ui top-right" style={{ pointerEvents: 'auto' }}>
        <button 
          className="pixel-btn" 
          onClick={toggleMute}
          style={{ padding: '8px 12px' }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <button 
          className="pixel-btn" 
          onClick={toggleLang}
          style={{ padding: '8px 12px', minWidth: '75px', justifyContent: 'center' }}
        >
          <Globe size={14} style={{ marginRight: '6px' }} /> {lang.toUpperCase()}
        </button>
      </div>

      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '1050px',
        alignItems: 'flex-start',
        position: 'relative',
        marginTop: '20px'
      }}>
        
        {/* Sticky Character Sidebar (Left Panel) */}
        <div className="cv-character-sticky">
          <div style={{
            background: 'rgba(0,0,0,0.7)',
            border: '2px solid var(--accent-gold)',
            borderRadius: '4px',
            padding: '6px 12px',
            color: 'var(--accent-gold)',
            fontSize: '11px',
            fontFamily: 'monospace',
            textAlign: 'center',
            marginBottom: '4px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap'
          }}>
            {lang === 'en' ? 'reading...' : 'okuyor...'}
          </div>
          <div 
            className="spritesheet-character"
            style={{
              backgroundImage: `url(${selectedChar === 'fiona' ? '/src/assets/characters/svg/fiona-spritesheet.svg' : selectedChar === 'mark' ? '/src/assets/characters/svg/mark-spritesheet.svg' : '/src/assets/characters/svg/olena-spritesheet.svg'})`,
              backgroundPosition: '0px 0px', // Idle standing frame
              transformOrigin: 'top center',
              transform: `scale(1.3) ${shouldFlipReadingChar ? 'scaleX(-1)' : 'scaleX(1)'}`
            }} 
          />
        </div>

        {/* Main Experience Window (Right Panel) */}
        <div className="pixel-box glass-window" style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          padding: '24px',
          minHeight: '600px',
          position: 'relative'
        }}>
          {/* Header Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid var(--glass-border)',
            paddingBottom: '16px',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <h2 className="retro-header-text" style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={18} />
                {lang === 'en' ? 'WORKSHOP & LIBRARY' : 'DENEYİM ATÖLYESİ & KÜTÜPHANE'}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {lang === 'en' ? 'Professional chronology and narrative projects showcase' : 'Profesyonel geçmiş ve yaratıcı anlatı projeleri vitrini'}
              </p>
            </div>

            <button 
              className="pixel-btn" 
              onClick={handleBackToMap}
              style={{ padding: '8px 12px', fontSize: '11px', borderColor: 'var(--accent-gold)' }}
            >
              <ArrowLeft size={12} style={{ marginRight: '6px' }} />
              {lang === 'en' ? 'Return to Map' : 'Haritaya Dön'}
            </button>
          </div>

          {/* Section Selector Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '2px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
            <button
              className="pixel-btn"
              onClick={() => handleTabChange('timeline')}
              style={{
                fontSize: '11px',
                padding: '8px 14px',
                background: activeTab === 'timeline' ? 'var(--accent-green)' : '#2d3748',
                color: activeTab === 'timeline' ? '#000' : '#fff',
                borderColor: activeTab === 'timeline' ? '#48bb78' : '#1a202c',
                boxShadow: 'none'
              }}
            >
              <Briefcase size={12} style={{ marginRight: '6px' }} />
              {lang === 'en' ? 'Professional Timeline' : 'Deneyim Kronolojisi'}
            </button>
            <button
              className="pixel-btn"
              onClick={() => handleTabChange('portfolio')}
              style={{
                fontSize: '11px',
                padding: '8px 14px',
                background: activeTab === 'portfolio' ? 'var(--accent-gold)' : '#2d3748',
                color: activeTab === 'portfolio' ? '#000' : '#fff',
                borderColor: activeTab === 'portfolio' ? '#d69e2e' : '#1a202c',
                boxShadow: 'none'
              }}
            >
              <BookOpen size={12} style={{ marginRight: '6px' }} />
              {lang === 'en' ? 'Creative Portfolio' : 'Yaratıcı Portfolyo'}
            </button>
          </div>

          {/* Tab 1: Experience Timeline */}
          {activeTab === 'timeline' && (
            <ExperienceTimeline lang={lang} selectedChar={selectedChar} />
          )}

          {/* Tab 2: Creative Portfolio Bookshelf */}
          {activeTab === 'portfolio' && (
            <LibraryPortfolio lang={lang} />
          )}

        </div>

      </div>

    </div>
  );
};

export default ExperiencePage;
