import React, { createContext, useState, useContext, useEffect } from 'react';
import { applyRtlToDocument, isRtlLanguage } from './rtlUtils';
import enTranslations from '../translations/en';
import faTranslations from '../translations/fa';

// Create the context
const LanguageContext = createContext();

// Create available languages object
const languages = {
  en: {
    code: 'en',
    name: 'English',
    translations: enTranslations,
    direction: 'ltr'
  },
  fa: {
    code: 'fa',
    name: 'فارسی',
    translations: faTranslations,
    direction: 'rtl'
  }
};

export const LanguageProvider = ({ children }) => {
  console.log('LanguageProvider initializing');
  
  const getInitialLanguage = () => {
    try {
      return localStorage.getItem('language') || 'fa';
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return 'fa';
    }
  };
  
  const [language, setLanguage] = useState(getInitialLanguage);
  const [translations, setTranslations] = useState(
    languages[getInitialLanguage()]?.translations || languages.fa.translations
  );
  
  const changeLanguage = (lang) => {
    console.log('Changing language to:', lang);
    try {
      if (languages[lang]) {
        setLanguage(lang);
        // The translations and RTL settings will be updated by the useEffect above
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };
  
  // Apply RTL to document on initial load
  useEffect(() => {
    console.log('Applying RTL settings for language:', language);
    try {
      applyRtlToDocument(isRtlLanguage(language));
    } catch (error) {
      console.error('Error applying RTL settings:', error);
    }
  }, [language]);
  
  // Get text for translation key
  const t = (key) => {
    return translations[key] || key;
  };
  
  // Get current direction
  const direction = isRtlLanguage(language) ? 'rtl' : 'ltr';

  // Context value
  const value = {
    language,
    translations,
    changeLanguage,
    t,
    direction,
    languages
  };

  console.log('LanguageProvider rendering with language:', language);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;