import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import OrnamentDivider from '../components/OrnamentDivider.jsx';
import './Home.css';

const ARMENIAN_ALPHABET_ROW = 'Ա Բ Գ Դ Ե Զ Է Ը Թ Ժ Ի Լ Խ Ծ Կ Հ Ձ Ղ Ճ Մ';

const galleryPreview = [
  { file: '/images/gallery/event-1.jpg', key: 'event1' },
  { file: '/images/gallery/event-2.jpg', key: 'event2' },
  { file: '/images/gallery/event-3.jpg', key: 'event3' },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">{t('school.type')} · {t('school.city')}</p>
            <h1 className="hero__title">
              {t('school.name')}
            </h1>
            <p className="hero__tagline">{t('home.heroTagline')}</p>
            <p className="hero__lead">{t('home.heroLead')}</p>
            <div className="hero__actions">
              <Link to="/registration" className="btn btn-primary">{t('home.ctaRegister')}</Link>
              <Link to="/about" className="btn btn-outline">{t('home.ctaAbout')}</Link>
            </div>
          </div>

          <div className="hero__emblem" aria-hidden="true">
            <div className="hero__emblem-glow" />
            <img src="/logo.png" alt="" className="hero__emblem-img" />
          </div>
        </div>

        <p className="letter-frieze hero__frieze" aria-hidden="true">{ARMENIAN_ALPHABET_ROW}</p>
      </section>

      <section className="section facts">
        <div className="container facts__grid">
          <div className="facts__item">
            <span className="facts__value">{t('home.fact1Value')}</span>
            <span className="facts__label">{t('home.fact1Label')}</span>
          </div>
          <div className="facts__item">
            <span className="facts__value">{t('home.fact2Value')}</span>
            <span className="facts__label">{t('home.fact2Label')}</span>
          </div>
          <div className="facts__item">
            <span className="facts__value">{t('home.fact3Value')}</span>
            <span className="facts__label">{t('home.fact3Label')}</span>
          </div>
          <div className="facts__item">
            <span className="facts__value">{t('home.fact4Value')}</span>
            <span className="facts__label">{t('home.fact4Label')}</span>
          </div>
        </div>
      </section>

      <section className="section section-alt mission">
        <div className="container mission__grid">
          <div className="mission__copy">
            <p className="eyebrow">{t('home.missionTitle')}</p>
            <h2 className="section-title">{t('home.missionTitle')}</h2>
            <p className="section-lead">{t('home.missionText')}</p>
          </div>
          <blockquote className="mission__quote">
            <span className="mission__quote-mark" aria-hidden="true">Ա</span>
            <p>{t('home.quoteText')}</p>
            <cite>— {t('home.quoteAuthor')}</cite>
          </blockquote>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="container">
          <div className="gallery-preview__head">
            <div>
              <p className="eyebrow">{t('nav.gallery')}</p>
              <h2 className="section-title">{t('home.galleryTitle')}</h2>
            </div>
            <Link to="/gallery" className="btn btn-outline">{t('home.galleryCta')}</Link>
          </div>

          <div className="gallery-preview__grid">
            {galleryPreview.map((item) => (
              <figure key={item.key} className="gallery-preview__item">
                <img src={item.file} alt={t(`gallery.${item.key}`)} loading="lazy" />
                <figcaption>{t(`gallery.${item.key}`)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <OrnamentDivider />
      </div>
    </>
  );
}
