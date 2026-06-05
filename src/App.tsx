import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import CharacterSelect from './components/CharacterSelect';
import QuestBoard from './components/QuestBoard';
import ClassicCV from './components/ClassicCV';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import GamePage from './pages/GamePage';
import { useAppState } from './context/AppStateContext';
import RetroAudio from './utils/RetroAudio';
import translations from './data/translations';
import { Volume2, VolumeX, Globe } from 'lucide-react';

export const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedChar,
    setSelectedChar,
    lang,
    isMuted,
    toggleMute,
    toggleLang,
    visitedBuildings,
    setVisitedBuildings
  } = useAppState();

  // Castle Gate Transition State
  const [gateStatus, setGateStatus] = useState<'open' | 'closed'>('open');

  // Teleport transition function (castle gate closing/opening)
  const transitionTo = (path: string) => {
    setGateStatus('closed');
    RetroAudio.playTeleport();

    setTimeout(() => {
      navigate(path);
      setGateStatus('open');
    }, 600);
  };

  const handleCharacterSelect = (charId: 'fiona' | 'mark' | 'olena') => {
    setSelectedChar(charId);
    transitionTo('/map');
  };

  const t = translations[lang];

  // Determine current mode from path for overlay controls
  const currentPath = location.pathname;
  const isSelectScreen = currentPath === '/' || currentPath === '/select';
  const isCVScreen = currentPath === '/cv';

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>

      {/* Select Screen Controls (Top-Left) */}
      {isSelectScreen && (
        <div className="overlay-ui top-left" style={{ pointerEvents: 'auto' }}>
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
      )}

      {/* CV Screen Controls (Top-Right language toggle) */}
      {isCVScreen && (
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
      )}

      {/* Route-based Screen Content */}
      <Routes>
        <Route path="/" element={
          <CharacterSelect onSelect={handleCharacterSelect} lang={lang} />
        } />
        <Route path="/select" element={
          <CharacterSelect onSelect={handleCharacterSelect} lang={lang} />
        } />
        <Route path="/map" element={
          <QuestBoard
            selectedChar={selectedChar}
            onEnterBuilding={(route: string) => transitionTo(route)}
            onOpenClassicCV={() => transitionTo('/cv')}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            lang={lang}
            onToggleLang={toggleLang}
            visitedBuildings={visitedBuildings}
            setVisitedBuildings={setVisitedBuildings}
          />
        } />
        <Route path="/cv" element={
          <ClassicCV
            selectedChar={selectedChar}
            onBackToGame={() => transitionTo('/map')}
            lang={lang}
          />
        } />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Castle Gate Animation Overlay */}
      <div className={`castle-gate-overlay ${gateStatus === 'closed' ? 'closed' : ''}`}>
        <div className="castle-gate-top">
          <div style={{
            fontFamily: 'var(--font-retro-header)',
            color: 'var(--accent-gold)',
            fontSize: '12px',
            textShadow: '2px 2px #000',
            transform: 'translateY(40px)'
          }}>
            {t.portalOpening}
          </div>
        </div>
        <div className="castle-gate-bottom">
          <div style={{
            fontFamily: 'var(--font-retro-header)',
            color: 'var(--accent-gold)',
            fontSize: '12px',
            textShadow: '2px 2px #000',
            transform: 'translateY(-40px)'
          }}>
            {t.teleporting}
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
