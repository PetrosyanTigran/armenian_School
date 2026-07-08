import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LANGS = [
  { code: 'hy', label: 'Հայ' },
  { code: 'cs', label: 'CS' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="lang-switcher" role="group" aria-label="Language / Jazyk / Լեզու">
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={`lang-switcher__btn ${i18n.resolvedLanguage === lang.code ? 'is-active' : ''}`}
          onClick={() => i18n.changeLanguage(lang.code)}
          aria-pressed={i18n.resolvedLanguage === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
