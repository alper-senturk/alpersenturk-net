import React, { useState } from 'react';
import { Mail, Link, Coffee, Calendar, Send, FileText, ShieldAlert } from 'lucide-react';
import translations from '../data/translations';
import RetroAudio from '../utils/RetroAudio';
import confetti from 'canvas-confetti';

interface ContactFormProps {
  lang: 'en' | 'tr';
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      RetroAudio.playError();
      setFormError(lang === 'en' ? 'Please fill in all scroll spaces!' : 'Lütfen tüm parşömen alanlarını doldurun!');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      RetroAudio.playError();
      setFormError(lang === 'en' ? 'The magical address format seems invalid!' : 'Büyülü adres formatı geçersiz görünüyor!');
      return;
    }
    setFormError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || (lang === 'en' ? 'Pigeon lost in transit!' : 'Güvercin yolda kayboldu!'));
      }

      setIsSubmitting(false);
      setFormSubmitted(true);
      RetroAudio.playSuccess();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch (err: any) {
      setIsSubmitting(false);
      RetroAudio.playError();
      setFormError(err.message || (lang === 'en' ? 'Failed to dispatch pigeon!' : 'Güvercin gönderilemedi!'));
    }
  };

  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', width: '100%' }}>
      {/* Left: Contact Form */}
      <div style={{ flex: '1 1 350px' }}>
        {formSubmitted ? (
          <div className="pixel-box" style={{
            padding: '30px',
            textAlign: 'center',
            background: 'rgba(104, 211, 145, 0.1)',
            borderColor: 'var(--accent-green)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0', color: 'var(--accent-green)' }}>
              <Mail size={48} />
            </div>
            <h3 className="retro-header-text" style={{ fontSize: '13px', color: 'var(--accent-green)' }}>
              {lang === 'en' ? 'CARRIER PIGEON DISPATCHED!' : 'POSTA GÜVERCİNİ UÇURULDU!'}
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {lang === 'en'
                ? 'Your message has been sent to Alper\'s inbox. He will respond as soon as possible!'
                : 'Mesajınız Alper\'in gelen kutusuna iletildi. En kısa sürede yanıt verecektir!'}
            </p>
            <button
              className="pixel-btn"
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
              style={{ fontSize: '11px', padding: '8px 14px', marginTop: '8px' }}
            >
              <FileText size={12} style={{ marginRight: '6px' }} />
              {lang === 'en' ? 'Write Another Message' : 'Yeni Mesaj Yaz'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h4 className="retro-header-text" style={{ fontSize: '13px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FileText size={14} style={{ color: 'var(--accent-blue)' }} />
              {lang === 'en' ? 'SEND A MESSAGE' : 'MESAJ GÖNDER'}
            </h4>

            <input
              className="pixel-input"
              type="text"
              placeholder={lang === 'en' ? 'Your Name (Adventurer Name)' : 'Adınız (Maceracı Adı)'}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              className="pixel-input"
              type="email"
              placeholder={lang === 'en' ? 'Your Email (Magical Address)' : 'E-postanız (Büyülü Adres)'}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              className="pixel-input"
              placeholder={lang === 'en' ? 'Your Message (Write your scroll here...)' : 'Mesajınız (Parşömeninizi buraya yazın...)'}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              style={{ resize: 'vertical' }}
            />

            {formError && (
              <div style={{
                fontSize: '12px',
                color: '#fc8181',
                background: 'rgba(254, 178, 178, 0.1)',
                padding: '8px 12px',
                border: '2px solid #fc8181',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <ShieldAlert size={14} />
                <span>{formError}</span>
              </div>
            )}

            <button
              className={`pixel-btn ${isSubmitting ? '' : 'btn-solid-green'}`}
              type="submit"
              disabled={isSubmitting}
              style={{
                fontSize: '12px',
                padding: '12px 18px',
                justifyContent: 'center',
                ...(isSubmitting ? {
                  background: '#4a5568',
                  color: '#a0aec0',
                  borderColor: '#2d3748',
                  cursor: 'wait'
                } : {
                  cursor: 'pointer'
                })
              }}
            >
              {isSubmitting ? (
                <>
                  <Send size={14} className="animate-pulse" style={{ marginRight: '6px' }} />
                  {lang === 'en' ? 'Sending pigeon...' : 'Güvercin gönderiliyor...'}
                </>
              ) : (
                <>
                  <Send size={14} style={{ marginRight: '6px' }} />
                  {lang === 'en' ? 'Send Carrier Pigeon' : 'Posta Güvercini Gönder'}
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Right: Quick Links & Calendly */}
      <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 className="retro-header-text" style={{ fontSize: '13px' }}>
          {t.contactMe}
        </h4>

        <a
          href="mailto:alper@alpersenturk.net"
          className="pixel-btn btn-outline-blue"
          style={{
            fontSize: '12px',
            padding: '10px 14px',
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
          <Mail size={14} style={{ marginRight: '6px' }} />
          {t.sendEmail}
        </a>

        <a
          href="https://www.linkedin.com/in/alpersenturk"
          target="_blank"
          rel="noreferrer"
          className="pixel-btn btn-outline-blue"
          style={{
            fontSize: '12px',
            padding: '10px 14px',
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
          <Link size={14} style={{ marginRight: '6px' }} />
          {t.connectLinkedin}
        </a>

        <hr style={{ border: 0, borderTop: '2px dashed var(--glass-border)', margin: '4px 0' }} />

        <h4 className="retro-header-text" style={{ fontSize: '13px' }}>
          {t.supportMe}
        </h4>

        <a
          href="https://www.buymeacoffee.com/alpersenturk"
          target="_blank"
          rel="noreferrer"
          className="pixel-btn btn-outline-gold"
          style={{
            fontSize: '12px',
            padding: '10px 14px',
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
          <Coffee size={14} style={{ marginRight: '6px' }} />
          {t.buyCoffee}
        </a>

        <hr style={{ border: 0, borderTop: '2px dashed var(--glass-border)', margin: '4px 0' }} />

        {/* Calendly Section */}
        <h4 className="retro-header-text" style={{ fontSize: '13px' }}>
          {t.calendlyTitle}
        </h4>
        <div className="pixel-box" style={{
          padding: '20px',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center'
        }}>
          <Calendar size={32} style={{ color: 'var(--accent-gold)' }} />
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            {lang === 'en'
              ? 'Schedule a 30-minute call to discuss projects, workshops, or collaborations.'
              : 'Projeler, atölyeler veya işbirlikleri hakkında konuşmak için 30 dakikalık bir görüşme ayarlayın.'}
          </p>
          <a
            href="https://calendly.com/alpersenturk"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn btn-solid-green"
            style={{
              fontSize: '11px',
              padding: '10px 14px',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            <Calendar size={12} style={{ marginRight: '6px' }} />
            {t.bookMeeting}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
