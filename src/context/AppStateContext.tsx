import React, { createContext, useContext, useState, useEffect } from 'react';
import RetroAudio from '../utils/RetroAudio';

type CharacterType = 'fiona' | 'mark' | 'olena';
type LangType = 'en' | 'tr';

interface AppStateContextProps {
  selectedChar: CharacterType;
  setSelectedChar: (char: CharacterType) => void;
  lang: LangType;
  setLang: (lang: LangType) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  visitedBuildings: string[];
  setVisitedBuildings: React.Dispatch<React.SetStateAction<string[]>>;
  toggleMute: () => void;
  toggleLang: () => void;
}

const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial states from localStorage if available
  const [selectedChar, setSelectedCharState] = useState<CharacterType>(() => {
    const saved = localStorage.getItem('alper_selectedChar');
    return (saved as CharacterType) || 'fiona';
  });

  const [lang, setLangState] = useState<LangType>(() => {
    const saved = localStorage.getItem('alper_lang');
    return (saved as LangType) || 'en';
  });

  const [isMuted, setIsMutedState] = useState<boolean>(() => {
    const saved = localStorage.getItem('alper_isMuted');
    return saved === 'true';
  });

  const [visitedBuildings, setVisitedBuildings] = useState<string[]>(() => {
    const saved = localStorage.getItem('alper_visitedBuildings');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync mute state with audio service
  useEffect(() => {
    RetroAudio.setMute(isMuted);
    localStorage.setItem('alper_isMuted', String(isMuted));
  }, [isMuted]);

  useEffect(() => {
    localStorage.setItem('alper_selectedChar', selectedChar);
  }, [selectedChar]);

  useEffect(() => {
    localStorage.setItem('alper_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('alper_visitedBuildings', JSON.stringify(visitedBuildings));
  }, [visitedBuildings]);

  const setSelectedChar = (char: CharacterType) => {
    setSelectedCharState(char);
  };

  const setLang = (newLang: LangType) => {
    setLangState(newLang);
  };

  const setIsMuted = (muted: boolean) => {
    setIsMutedState(muted);
  };

  const toggleMute = () => {
    const nextMute = RetroAudio.toggleMute();
    setIsMutedState(nextMute);
  };

  const toggleLang = () => {
    RetroAudio.playSelect();
    setLangState((prev) => (prev === 'en' ? 'tr' : 'en'));
  };

  return (
    <AppStateContext.Provider
      value={{
        selectedChar,
        setSelectedChar,
        lang,
        setLang,
        isMuted,
        setIsMuted,
        visitedBuildings,
        setVisitedBuildings,
        toggleMute,
        toggleLang,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
