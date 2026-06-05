import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, PenTool, Dices, Globe, Mail, Bot, Shield, Palette, Settings, FileText, Calendar, Play } from 'lucide-react';
import RetroAudio from '../utils/RetroAudio';

interface LibraryPortfolioProps {
  lang: 'en' | 'tr';
}

export const LibraryPortfolio: React.FC<LibraryPortfolioProps> = ({ lang }) => {
  const [selectedBook, setSelectedBook] = useState<'zapir' | 'roleplay' | 'hikayemsen' | null>(null);
  const [hoveredBook, setHoveredBook] = useState<'zapir' | 'roleplay' | 'hikayemsen' | null>(null);
  const [simulatedAction, setSimulatedAction] = useState<string | null>(null);

  const books = [
    {
      id: 'zapir' as const,
      titleEN: 'Zapır Zupur Kalem',
      titleTR: 'Zapır Zupur Kalem',
      color: '#8c2424', // deep red
      accent: '#feb2b2',
      spineText: 'ZAPIR ZUPUR',
      icon: <PenTool size={32} style={{ color: '#feb2b2' }} />
    },
    {
      id: 'roleplay' as const,
      titleEN: 'RPG Facilitation',
      titleTR: 'Rol Yapma Kolaylaştırıcılık',
      color: '#c05621', // warm gold/orange
      accent: '#fbd38d',
      spineText: 'ROLEPLAY',
      icon: <Dices size={32} style={{ color: '#fbd38d' }} />
    },
    {
      id: 'hikayemsen' as const,
      titleEN: 'hikayemsen.com',
      titleTR: 'hikayemsen.com',
      color: '#2b6cb0', // rich blue
      accent: '#90cdf4',
      spineText: 'HİKAYEMSEN',
      icon: <Globe size={32} style={{ color: '#90cdf4' }} />
    }
  ];

  const getParchmentContent = () => {
    if (!selectedBook) return null;
    if (selectedBook === 'zapir') {
      return {
        id: 'zapir',
        title: lang === 'en' ? 'Zapır Zupur Kalem' : 'Zapır Zupur Kalem',
        subtitle: lang === 'en' ? 'Board Game & Narrative' : 'Kutu Oyunu & Anlatı Evreni',
        desc: lang === 'en'
          ? "A story-based board game designed for children and families, narrating Pelin's journey to the Land of Pens."
          : "Pelin'in Kalemler Diyarı'na yaptığı yolculuğu anlatan, ailece oynanan hikaye tabanlı bir kutu oyunu.",
        role: lang === 'en' ? "UX Architecture, Board Game Mechanics & Storytelling" : "UX Mimarisi, Kutu Oyunu Mekanikleri ve Anlatı Tasarımı",
        skin: lang === 'en' 
          ? "Embark on Pelin's journey to the Land of Pens. Designed to nurture emotional self-expression and friendship dynamics in children through shared narrative checkpoints."
          : "Pelin'in Kalemler Diyarı'na yaptığı duygusal yolculuk. Çocuklarda duygusal öz-ifadeyi ve arkadaşlık bağlarını güçlendirmek için tasarlandı.",
        skeleton: lang === 'en'
          ? "Built using Jesse Schell's game design principles. Incorporates collaborative decision loops, choice nodes, and structured stage booklet mechanics."
          : "Jesse Schell'in oyun tasarımı lensleri ile geliştirildi. İşbirlikçi karar döngüleri, seçim düğümleri ve sahne kitapçığı mekanikleri içerir.",
        tags: ['boardgame', 'pedagogical'],
        badgeText: lang === 'en' ? 'BOARD GAME' : 'KUTU OYUNU'
      };
    }
    if (selectedBook === 'roleplay') {
      return {
        id: 'roleplay',
        title: lang === 'en' ? 'RPG Facilitation' : 'Rol Yapma Tabanlı Kolaylaştırıcılık',
        subtitle: lang === 'en' ? 'Immersive Corporate Workshops' : 'Katılımcı Kurumsal Atölyeler',
        desc: lang === 'en'
          ? "Immersive narrative-driven roleplaying (RPG) experiences designed for corporate clients to foster team dynamics."
          : "Kurumsal müşteriler için takım dinamiklerini ve karar alma süreçlerini teşvik eden anlatı odaklı rol yapma (RPG) deneyimleri.",
        role: lang === 'en' ? "Game Mastering (DM), Experience Design & Workshop Facilitation" : "Oyun Yöneticiliği (DM), Deneyim Tasarımı ve Kolaylaştırıcılık",
        skin: lang === 'en'
          ? "Puts corporate teams into interactive, high-stakes fantasy scenarios. Highlights real-world communications and personal motivations under pressure."
          : "Kurumsal ekipleri heyecanlı fantezi senaryolarının ortasına bırakır. Baskı altında gerçek dünya iletişimini ve kişisel motivasyonları açığa çıkarır.",
        skeleton: lang === 'en'
          ? "Tabletop RPG (D&D) rule frameworks adapted to corporate needs. Tracks player decision logs, leadership shifts, and cooperative conflict outcomes."
          : "Masaüstü RPG (D&D) kural setlerinin kurumsal ihtiyaçlara göre uyarlanması. Oyuncu karar günlüklerini, liderlik değişimlerini ve işbirlikçi çözüm sonuçlarını izler.",
        tags: ['workshop', 'rpg'],
        badgeText: lang === 'en' ? 'TABLETOP RPG' : 'MASAÜSTÜ RPG'
      };
    }
    return {
      id: 'hikayemsen',
      title: 'hikayemsen.com',
      subtitle: lang === 'en' ? 'AI Storytelling Platform for Kids' : 'Çocuklar İçin AI Hikaye Platformu',
      desc: lang === 'en'
        ? "A digital story-generation web app designed for parents to co-create age-appropriate, pedagogically aligned stories for their children using AI."
        : "Ebeveynlerin çocukları için pedagojik olarak uyumlu, yaşa uygun hikayeleri birlikte oluşturabilecekleri yapay zeka destekli web uygulaması.",
      role: lang === 'en' ? "Product Management, UI/UX Design & AI Prompt Engineering" : "Ürün Yönetimi, UI/UX Tasarımı ve Yapay Zeka Prompt Mühendisliği",
      skin: lang === 'en'
        ? "Allows parents to easily co-create educator-approved stories for children. Brings bedtime storytelling closer to parent-child interaction without direct screen exposure."
        : "Ebeveynlerin çocuklarıyla birlikte pedagog onaylı hikayeler üretmesini kolaylaştırır. Uyku öncesi masalları ekran süresine boğulmadan ebeveyn-çocuk etkileşimine dönüştürür.",
      skeleton: lang === 'en'
        ? "Integrated OpenAI API pipelines with strict content safety rules, customized prompts, React frontend logic, and rapid prototyping workflows."
        : "Sıkı içerik güvenliği, özel prompt yapılandırmaları, React ön yüz mantığı ve hızlı prototipleme iş akışları ile OpenAI API entegrasyonu.",
      tags: ['ai-native', 'web-app'],
      badgeText: 'AI PLATFORM',
      link: 'https://hikayemsen.com'
    };
  };

  const parchment = getParchmentContent();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
      <div>
        <h3 className="retro-header-text" style={{ fontSize: '12px', color: 'var(--accent-gold)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <BookOpen size={12} />
          {lang === 'en' ? 'Writing Library & Land of Pens' : 'Yazarlık Kütüphanesi & Kalemler Diyarı'}
        </h3>
        <p style={{ lineHeight: '1.6', fontSize: '16px', color: 'var(--text-primary)' }}>
          {lang === 'en'
            ? 'Welcome to the creative repository where ideas crystallize into stories. Select a book from the shelf to read its parchment log.'
            : 'Fikirlerin hikayelere dönüştüğü yaratıcı kütüphaneme hoş geldin. Parşömen günlüğünü okumak için kitaplıktan bir kitap seçebilirsin.'}
        </p>
      </div>

      {/* Responsive Book Cover Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          width: '100%',
          marginTop: '10px'
        }}
      >
        {books.map((book) => {
          const isSelected = selectedBook === book.id;
          const isHovered = hoveredBook === book.id;
          const title = lang === 'en' ? book.titleEN : book.titleTR;

          return (
            <div
              key={book.id}
              className="pixel-box"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
              onClick={() => {
                RetroAudio.playSelect();
                setSelectedBook(book.id);
              }}
              style={{
                background: book.color,
                border: '4px solid #1a202c',
                boxShadow: isHovered || isSelected 
                  ? `0 0 15px ${book.accent}, 4px 4px 0px rgba(0,0,0,0.6)` 
                  : '4px 4px 0px rgba(0,0,0,0.4)',
                cursor: 'pointer',
                minHeight: '260px',
                position: 'relative',
                transition: 'all 0.15s ease',
                transform: isHovered || isSelected ? 'translateY(-8px)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 15px',
                userSelect: 'none',
                overflow: 'hidden'
              }}
            >
              {/* Left Cilt/Sırt Deri Efekti (Leather Binding Spine) */}
              <div 
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '18px',
                  background: 'rgba(0,0,0,0.3)',
                  borderRight: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: 'inset -3px 0 5px rgba(0,0,0,0.2)'
                }}
              />

              {/* Altın İç Çerçeve Süslemesi (Inset Frame) */}
              <div 
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '26px',
                  right: '10px',
                  bottom: '10px',
                  border: '2px double var(--accent-gold)',
                  pointerEvents: 'none',
                  opacity: 0.75
                }}
              />

              {/* Icon at the top */}
              <div style={{ zIndex: 2, marginTop: '8px' }}>
                {book.icon}
              </div>

              {/* Title in Center - Styled like classic serif book title */}
              <div 
                style={{
                  zIndex: 2,
                  textAlign: 'center',
                  paddingLeft: '14px', // Offset for the spine
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flexGrow: 1,
                  width: '100%'
                }}
              >
                <h4 
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: '#fff',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    lineHeight: '1.4',
                    margin: 0
                  }}
                >
                  {title}
                </h4>
              </div>

              {/* Examine Button */}
              <div 
                className="pixel-box"
                style={{
                  zIndex: 2,
                  background: isHovered || isSelected ? 'var(--accent-gold)' : 'rgba(0,0,0,0.4)',
                  color: isHovered || isSelected ? '#000' : 'var(--accent-gold)',
                  borderColor: isHovered || isSelected ? '#b7791f' : 'var(--accent-gold)',
                  padding: '4px 10px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  boxShadow: 'none',
                  borderWidth: '2px',
                  borderRadius: '2px',
                  marginLeft: '14px', // Offset for the spine
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{lang === 'en' ? 'EXAMINE' : 'İNCELE'}</span>
                <BookOpen size={10} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Parchment Scroll Detail Overlay */}
      {selectedBook && parchment && createPortal(
        <div 
          className="parchment-scroll-container" 
          onClick={() => {
            RetroAudio.playClose();
            setSelectedBook(null);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#f5ecd5',
              color: '#2a1a0c',
              width: '100%',
              maxWidth: '860px',
              maxHeight: '85vh',
              border: '8px double #8a6f44',
              borderRadius: '2px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.95), inset 0 0 50px rgba(138, 111, 68, 0.35)',
              padding: '28px',
              overflowY: 'auto',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '6px',
              left: '6px',
              right: '6px',
              bottom: '6px',
              border: '1px dashed rgba(138, 111, 68, 0.4)',
              pointerEvents: 'none'
            }} />

            {/* Simulated action overlay popup */}
            {simulatedAction && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.85)',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <div className="pixel-box" style={{
                  background: '#2d3748',
                  color: '#fff',
                  padding: '20px',
                  maxWidth: '420px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  borderColor: 'var(--accent-gold)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
                    <Mail size={32} style={{ animation: 'sparkle 1s infinite alternate', color: 'var(--accent-gold)' }} />
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', fontFamily: 'monospace' }}>
                    {simulatedAction}
                  </p>
                  <button 
                    className="pixel-btn" 
                    onClick={() => {
                      RetroAudio.playClose();
                      setSimulatedAction(null);
                    }}
                    style={{ fontSize: '11px', padding: '6px 12px', alignSelf: 'center' }}
                  >
                    {lang === 'en' ? 'UNDERSTOOD' : 'ANLAŞILDI'}
                  </button>
                </div>
              </div>
            )}

            {/* Header */}
            <div style={{ borderBottom: '2px solid rgba(138, 111, 68, 0.3)', paddingBottom: '8px', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 'bold', margin: '0 0 6px 0', letterSpacing: '0.5px' }}>
                {parchment.title}
              </h4>
              <span style={{ fontSize: '13px', fontStyle: 'italic', color: '#6d4c2b', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 'bold' }}>
                {parchment.subtitle}
              </span>
            </div>

            {/* Redesigned Split Showcase Layout */}
            <div className="portfolio-showcase-split retro-scroll-content">
              
              {/* Left Panel: Visual Mockup Frame */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {parchment.id === 'zapir' && (
                  <div className="project-visual-container">
                    <div className="mockup-header">
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                      <span style={{ fontSize: '11px', color: '#8a6f44', marginLeft: 'auto', fontFamily: 'monospace' }}>ZAPIR_BOARD.EXE</span>
                    </div>
                    <div className="mockup-screen" style={{ background: '#7e5a3c', border: '3px solid #4a2f16', color: '#fff' }}>
                      <div style={{ animation: 'bounce 1s infinite alternate', color: '#feb2b2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Dices size={40} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-retro-header)', fontSize: '11px', marginTop: '12px', color: '#fff', textAlign: 'center' }}>
                        {lang === 'en' ? 'PENS KINGDOM BOARD' : 'KALEMLER DİYARI HARİTASI'}
                      </span>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '16px' }}>
                        <span className="tag-pill ux">BOARD GAME</span>
                        <span className="tag-pill narrative">CHILD UX</span>
                      </div>
                    </div>
                  </div>
                )}

                {parchment.id === 'roleplay' && (
                  <div className="project-visual-container">
                    <div className="mockup-header">
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                      <span style={{ fontSize: '11px', color: '#8a6f44', marginLeft: 'auto', fontFamily: 'monospace' }}>DM_LOGS.TXT</span>
                    </div>
                    <div className="mockup-screen" style={{ background: '#1c1c1c', border: '2px dashed #8a6f44', color: '#00ff00', fontFamily: 'monospace', alignItems: 'flex-start', padding: '12px' }}>
                      <div style={{ fontSize: '12px', color: '#00ff00' }}>$ cat alper_dm_stats.json</div>
                      <div style={{ fontSize: '12px', color: '#b89c6f', marginTop: '6px', lineHeight: '1.4' }}>
                        {lang === 'en' ? 'CLASS: Dungeon Master' : 'SINIF: Zindan Efendisi'}<br/>
                        {lang === 'en' ? 'CHARISMA: 18 (Facilitator)' : 'KARİZMA: 18 (Kolaylaştırıcı)'}<br/>
                        {lang === 'en' ? 'DECISION_NODES: COOPERATIVE' : 'KARAR_DÜĞÜMLERİ: İŞBİRLİKÇİ'}<br/>
                        {lang === 'en' ? 'WORKSHOPS: ACTIVE' : 'ATÖLYELER: AKTİF'}
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '15px' }}>
                        <span className="tag-pill narrative">RPG MASTER</span>
                        <span className="tag-pill strategy">HR DESIGN</span>
                      </div>
                    </div>
                  </div>
                )}

                {parchment.id === 'hikayemsen' && (
                  <div className="project-visual-container">
                    <div className="mockup-header">
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                      <span style={{ fontSize: '11px', color: '#8a6f44', marginLeft: 'auto', fontFamily: 'monospace' }}>HIKAYEMSEN.COM</span>
                    </div>
                    <div className="mockup-screen" style={{ background: '#0d1117', border: '2px solid #30363d', color: '#58a6ff' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#58a6ff' }}>
                        <Bot size={36} />
                      </div>
                      <span style={{ fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'bold', color: '#f0f6fc', marginTop: '8px' }}>
                        AI Bedtime Stories
                      </span>
                      <span style={{ fontSize: '11px', color: '#8b949e', marginTop: '4px', textAlign: 'center', fontFamily: 'monospace' }}>
                        Prompt: "A brave pencil travels..."
                      </span>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '16px' }}>
                        <span className="tag-pill ux">AI NATIVE</span>
                        <span className="tag-pill strategy">WEB APP</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Role Details */}
                <div className="pixel-box" style={{ padding: '12px', background: 'rgba(0,0,0,0.05)', borderColor: 'rgba(138, 111, 68, 0.25)', boxShadow: 'none' }}>
                  <span style={{ fontSize: '13px', textTransform: 'uppercase', color: '#6d4c2b', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
                    <Shield size={14} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle', color: '#6d4c2b' }} /> {lang === 'en' ? "Alper's Role:" : "Alper'in Rolü:"}
                  </span>
                  <strong style={{ fontSize: '14.5px', color: '#2a1a0c', fontFamily: 'Georgia, serif' }}>
                    {parchment.role}
                  </strong>
                </div>
              </div>

              {/* Right Panel: Product Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
                  
                  <p style={{ fontWeight: '500', fontSize: '16px', fontStyle: 'italic', borderLeft: '2px solid #6d4c2b', paddingLeft: '10px' }}>
                    "{parchment.desc}"
                  </p>

                  {/* Skin vs Skeleton Split */}
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', color: '#c05621', letterSpacing: '0.5px' }}>
                      <Palette size={14} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle' }} /> {lang === 'en' ? 'The Experience / Story (Skin):' : 'Deneyim / Hikaye (Skin):'}
                    </strong>
                    <p style={{ fontSize: '15px', color: '#4a3622', marginTop: '2px' }}>
                      {parchment.skin}
                    </p>
                  </div>

                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', color: '#2b6cb0', letterSpacing: '0.5px' }}>
                      <Settings size={14} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle' }} /> {lang === 'en' ? 'The Mechanics / Strategy (Skeleton):' : 'Mekanikler / Strateji (Skeleton):'}
                    </strong>
                    <p style={{ fontSize: '15px', color: '#4a3622', marginTop: '2px' }}>
                      {parchment.skeleton}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
                      {parchment.id === 'zapir' && (
                        <>
                          <button
                            className="pixel-btn btn-red"
                            onClick={() => {
                              RetroAudio.playSelect();
                              setSimulatedAction(lang === 'en' 
                                ? "Carrier pigeon dispatched! Fetching the Zapır Zupur Kalem Rulebook scrolls..." 
                                : "Posta güvercini uçuruldu! Zapır Zupur Kalem Kural Kitapçığı parşömenleri getiriliyor..."
                              );
                            }}
                            style={{ flex: '1 1 45%', fontSize: '11px', padding: '8px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                          >
                            <BookOpen size={12} /> {lang === 'en' ? 'Read Rules Guide' : 'Kural Kitabını Oku'}
                          </button>
                          <button
                            className="pixel-btn btn-orange"
                            onClick={() => {
                              RetroAudio.playSelect();
                              setSimulatedAction(lang === 'en' 
                                ? "Request received! Pigeons will deliver physical board game production news to your inbox." 
                                : "Talep alındı! Kutu oyunu basım/dağıtım gelişmeleri posta kutunuza ulaştırılacaktır."
                              );
                            }}
                            style={{ flex: '1 1 45%', fontSize: '11px', padding: '8px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                          >
                            <Mail size={12} /> {lang === 'en' ? 'Request Game Info' : 'Kutu Oyunu Bilgisi İste'}
                          </button>
                        </>
                      )}

                      {parchment.id === 'roleplay' && (
                        <>
                          <button
                            className="pixel-btn btn-orange"
                            onClick={() => {
                              RetroAudio.playSelect();
                              setSimulatedAction(lang === 'en' 
                                ? "Preparing the RPG Corporate Facilitation PDF brochure scroll..." 
                                : "RPG Kurumsal Atölyeler PDF broşür parşömeni hazırlanıyor..."
                              );
                            }}
                            style={{ flex: '1 1 45%', fontSize: '11px', padding: '8px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                          >
                            <FileText size={12} /> {lang === 'en' ? 'Download Brochure' : 'Broşürü İndir'}
                          </button>
                          <button
                            className="pixel-btn btn-blue"
                            onClick={() => {
                              RetroAudio.playSelect();
                              setSimulatedAction(lang === 'en' 
                                ? "Loading the scheduler mirror... You can book a workshop directly via the scheduler in the Cafe!" 
                                : "Büyülü toplantı aynası yükleniyor... Ayrıca Kafe'deki randevu ekranını kullanabilirsiniz!"
                              );
                            }}
                            style={{ flex: '1 1 45%', fontSize: '11px', padding: '8px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                          >
                            <Calendar size={12} /> {lang === 'en' ? 'Book a DM Workshop' : 'DM Atölyesi Ayarla'}
                          </button>
                        </>
                      )}

                      {parchment.id === 'hikayemsen' && (
                        <>
                          {parchment.link && (
                            <a
                              href={parchment.link}
                              target="_blank"
                              rel="noreferrer"
                              className="pixel-btn btn-blue"
                              onClick={() => RetroAudio.playSelect()}
                              style={{
                                flex: '1 1 45%',
                                fontSize: '11px',
                                padding: '8px 10px',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <Globe size={12} /> {lang === 'en' ? 'Visit Live Web App' : 'Siteyi Ziyaret Et'}
                            </a>
                          )}
                          <button
                            className="pixel-btn btn-brown"
                            onClick={() => {
                              RetroAudio.playSelect();
                              setSimulatedAction(lang === 'en' 
                                ? "Casting illusion magic! Streaming the hikayemsen.com product overview video..." 
                                : "İllüzyon büyüsü yapılıyor! hikayemsen.com tanıtım videosu yansıtılıyor..."
                              );
                            }}
                            style={{ flex: '1 1 45%', fontSize: '11px', padding: '8px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                          >
                            <Play size={12} /> {lang === 'en' ? 'View Demo Video' : 'Tanıtım Videosunu İzle'}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

            </div>

            {/* Return Button */}
            <button
              className="pixel-btn"
              onClick={() => {
                RetroAudio.playClose();
                setSelectedBook(null);
              }}
              style={{
                background: '#8a6f44',
                borderColor: '#4d3a22',
                color: '#fff',
                fontSize: '12px',
                padding: '10px 14px',
                boxShadow: 'inset -3px -3px 0px 0px #4d3a22, inset 3px 3px 0px 0px #b89c6f',
                justifyContent: 'center',
                marginTop: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                alignSelf: 'center',
                cursor: 'pointer'
              }}
            >
              <BookOpen size={12} style={{ marginRight: '6px' }} /> {lang === 'en' ? 'Put Back on Shelf' : 'Kitabı Rafa Koy'}
            </button>

          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default LibraryPortfolio;
