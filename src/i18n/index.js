import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import hy from './hy.json';
import en from './en.json';
import cs from './cs.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      hy: { translation: hy },
      en: { translation: en },
      cs: { translation: cs },
    },
    fallbackLng: 'hy',
    supportedLngs: ['hy', 'en', 'cs'],
    lng: localStorage.getItem('smm_school_lang') || 'hy',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'smm_school_lang',
    },
    interpolation: {
      escapeValue: false,
    },
  });

document.documentElement.lang = i18n.language || 'hy';
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
