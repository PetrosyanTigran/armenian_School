import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero.jsx';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero eyebrow={t('nav.contact')} title={t('contact.title')} lead={t('contact.leadText')} />

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__details">
            <div className="contact__item">
              <span className="contact__label">{t('contact.addressLabel')}</span>
              <p>Základní a mateřská škola sv. Augustina<br />Praha, Česká republika</p>
            </div>
            <div className="contact__item">
              <span className="contact__label">{t('contact.emailLabel')}</span>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
            <div className="contact__item">
              <span className="contact__label">{t('contact.phoneLabel')}</span>
              <p><a href="tel:+420000000000">+420 000 000 000</a></p>
            </div>
            <div className="contact__item">
              <span className="contact__label">{t('contact.hoursLabel')}</span>
              <p>{t('contact.hoursValue')}</p>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=50.0394102,14.4567587&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
