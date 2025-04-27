import React from 'react';
import { useLanguage } from '../../utils/LanguageContext';

const LanguageSwitcher = () => {
  const { language } = useLanguage();

  const switchToEnglish = () => {
    console.log("Switching to English");
    localStorage.setItem('language', 'en');
    window.location.reload();
  };

  const switchToFarsi = () => {
    console.log("Switching to Farsi");
    localStorage.setItem('language', 'fa');
    window.location.reload();
  };

  return (
    <div 
      style={{
        display: 'inline-flex',
        position: 'relative',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={switchToEnglish}
        style={{
          background: language === 'en' ? 'rgba(255,255,255,0.3)' : 'transparent',
          color: '#fff',
          padding: '6px 10px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: language === 'en' ? 'bold' : 'normal'
        }}
      >
        EN
      </button>
      <button
        onClick={switchToFarsi}
        style={{
          background: language === 'fa' ? 'rgba(255,255,255,0.3)' : 'transparent', 
          color: '#fff',
          padding: '6px 10px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontFamily: 'Vazirmatn, sans-serif',
          fontWeight: language === 'fa' ? 'bold' : 'normal'
        }}
      >
        فا
      </button>
    </div>
  );
};

export default LanguageSwitcher;