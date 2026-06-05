import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';
import RetroAudio from '../utils/RetroAudio';
import { Volume2, VolumeX, ArrowLeft, Globe, Hammer } from 'lucide-react';

export const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, isMuted, toggleMute, toggleLang } = useAppState();

  const handleBackToMap = () => {
    RetroAudio.playClose();
    navigate('/map');
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--bg-color)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      position: 'relative'
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

      {/* Retro Construction Sign */}
      <div className="pixel-box glass-window" style={{
        padding: '50px 40px',
        textAlign: 'center',
        maxWidth: '550px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        animation: 'sparkle 3s infinite ease-in-out'
      }}>
        <div style={{ animation: 'bounce 1.5s infinite alternate', display: 'flex', justifyContent: 'center' }}>
          <Hammer size={64} style={{ color: 'var(--accent-gold)' }} />
        </div>

        <h2 className="retro-header-text" style={{ fontSize: '14px' }}>
          {lang === 'en' ? 'GAME ZONE' : 'OYUN ALANI'}
        </h2>

        <div style={{
          fontFamily: 'var(--font-retro-body)',
          fontSize: '22px',
          color: 'var(--accent-gold)',
          textShadow: '2px 2px #000',
          lineHeight: '1.4'
        }}>
          {lang === 'en' ? 'UNDER CONSTRUCTION' : 'YAPIM AŞAMASINDA'}
        </div>

        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          maxWidth: '400px'
        }}>
          {lang === 'en'
            ? 'A mini 8-bit game is being forged in the depths of the developer dungeon. Check back soon, adventurer!'
            : 'Geliştirici zindanının derinliklerinde 8-bit mini oyun dövülüyor. Yakında tekrar gel, maceracı!'}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="tag-pill ux">COMING SOON</span>
          <span className="tag-pill narrative">8-BIT</span>
          <span className="tag-pill strategy">MINI GAME</span>
        </div>
      </div>

      {/* Return Button */}
      <button
        className="pixel-btn"
        onClick={handleBackToMap}
        style={{
          padding: '12px 20px',
          fontSize: '10px',
          borderColor: 'var(--accent-gold)'
        }}
      >
        <ArrowLeft size={14} style={{ marginRight: '6px' }} />
        {lang === 'en' ? 'Return to Map' : 'Haritaya Dön'}
      </button>
    </div>
  );
};

export default GamePage;
