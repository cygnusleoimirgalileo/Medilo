/**
 * Check if the current language is RTL
 * @param {string} language - The language code (e.g., 'fa', 'ar', etc.)
 * @returns {boolean} - Whether the language is RTL or not
 */
export const isRtlLanguage = (language) => {
  try {
    // Explicitly define RTL languages
    const rtlLanguages = ['fa', 'ar', 'he', 'ur'];
    
    // Check if the language is in the RTL languages list
    return rtlLanguages.includes(language);
  } catch (error) {
    console.error('Error in isRtlLanguage:', error);
    return false; // Default to LTR if there's an error
  }
};

/**
 * Apply RTL styles to document
 * @param {boolean} isRtl - Whether to apply RTL styles or not
 */
export const applyRtlToDocument = (isRtl) => {
  try {
    if (isRtl) {
      document.documentElement.setAttribute('dir', 'rtl');
      document.body.classList.add('rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl');
    }
    console.log('Applied direction to document:', isRtl ? 'RTL' : 'LTR');
  } catch (error) {
    console.error('Error applying RTL to document:', error);
  }
};

/**
 * Get the text direction based on language
 * @param {string} language - The language code
 * @returns {string} - 'rtl' or 'ltr'
 */
export const getDirection = (language) => {
  try {
    return isRtlLanguage(language) ? 'rtl' : 'ltr';
  } catch (error) {
    console.error('Error in getDirection:', error);
    return 'ltr'; // Default to LTR if there's an error
  }
};