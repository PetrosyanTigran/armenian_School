import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './Header.css';

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', key: 'home' },
    { to: '/about', key: 'about' },
    { to: '/gallery', key: 'gallery' },
    { to: '/contact', key: 'contact' },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <NavLink to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="site-header__logo" width="48" height="48" />
          <span className="site-header__brand-text">
            <span className="site-header__brand-name">{t('school.name')}</span>
            <span className="site-header__brand-type">{t('school.type')} · {t('school.city')}</span>
          </span>
        </NavLink>

        <button
          className="site-header__toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.key}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `site-header__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
          <NavLink to="/registration" className="btn btn-primary site-header__cta" onClick={() => setOpen(false)}>
            {t('nav.registerCta')}
          </NavLink>
          <div className="site-header__lang-mobile">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="site-header__lang-desktop">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
