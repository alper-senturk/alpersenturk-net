import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';
import RetroAudio from '../utils/RetroAudio';
import { Volume2, VolumeX, ArrowLeft, Coffee } from 'lucide-react';
import fionaSprite from '../assets/characters/svg/fiona-spritesheet.svg';
import markSprite from '../assets/characters/svg/mark-spritesheet.svg';
import olenaSprite from '../assets/characters/svg/olena-spritesheet.svg';
import ContactForm from '../components/ContactForm';

const spriteMap: Record<string, string> = {
  fiona: fionaSprite,
  mark: markSprite,
  olena: olenaSprite
};

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { selectedChar, lang, isMuted, toggleMute, toggleLang } = useAppState();

  const shouldFlipReadingChar = selectedChar === 'fiona';

  const handleBackToMap = () => {
    RetroAudio.playClose();
    navigate('/map');
  };

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
          🌐 {lang.toUpperCase()}
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

        {/* Sticky Character Sidebar */}
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
            {lang === 'en' ? 'writing...' : 'yazıyor...'}
          </div>
          <div 
            className="spritesheet-character"
            style={{
              backgroundImage: `url(${spriteMap[selectedChar]})`,
              backgroundPosition: '0px 0px',
              transformOrigin: 'top center',
              transform: `scale(1.3) ${shouldFlipReadingChar ? 'scaleX(-1)' : 'scaleX(1)'}`
            }} 
          />
        </div>

        {/* Main Contact Form Panel */}
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
                <Coffee size={18} />
                {lang === 'en' ? 'THE CAFE — CONTACT ME' : 'KAFE — İLETİŞİM'}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {lang === 'en' ? 'Send a message, book a meeting, or just say hi!' : 'Mesaj gönderin, toplantı ayarlayın veya sadece merhaba deyin!'}
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

          {/* Contact Content */}
          <ContactForm lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
