import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OrnamentDivider from './OrnamentDivider.jsx';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <OrnamentDivider />
      <div className="container site-footer__grid">
        <div className="site-footer__col">
          <div className="site-footer__brand">
            <img src="/logo.png" alt="" width="40" height="40" />
            <span>{t('school.name')}<br /><small>{t('school.type')} · {t('school.city')}</small></span>
          </div>
          <p className="site-footer__tagline">{t('footer.tagline')}</p>
        </div>

        <div className="site-footer__col">
          <h3>{t('footer.quickLinks')}</h3>
          <nav className="site-footer__links">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/gallery">{t('nav.gallery')}</NavLink>
            <NavLink to="/registration">{t('nav.registration')}</NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
          </nav>
        </div>

        <div className="site-footer__col">
          <h3>{t('contact.title')}</h3>
          <p>Praha, Česká republika</p>
          <a href="mailto:info@example.com">info@example.com</a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {year} {t('school.name')} — {t('footer.rights')}</span>
      </div>
    </footer>
  );
}
