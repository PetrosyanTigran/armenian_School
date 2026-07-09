import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero.jsx';
import { asset } from '../utils/asset.js';

import './Gallery.css';

const photos = [
  { file: asset('images/gallery/event-1.jpg'), key: 'event1' },
  { file: asset('images/gallery/event-2.jpg'), key: 'event2' },
  { file: asset('images/gallery/event-3.jpg'), key: 'event3' },
  { file: asset('images/gallery/event-4.jpg'), key: 'event4' },
  { file: asset('images/gallery/event-5.jpg'), key: 'event5' },
  { file: asset('images/gallery/event-6.jpg'), key: 'event6' },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero eyebrow={t('nav.gallery')} title={t('gallery.title')} lead={t('gallery.leadText')} />

      <section className="section gallery-page">
        <div className="container">
          <div className="gallery-page__grid">
            {photos.map((p, i) => (
              <button
                key={p.key}
                type="button"
                className="gallery-page__item"
                onClick={() => setActive(i)}
              >
                <img src={p.file} alt={t(`gallery.${p.key}`)} loading="lazy" />
                <span className="gallery-page__caption">{t(`gallery.${p.key}`)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t(`gallery.${photos[active].key}`)}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}
          >
            ‹
          </button>
          <img
            src={photos[active].file}
            alt={t(`gallery.${photos[active].key}`)}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % photos.length); }}
          >
            ›
          </button>
          <p className="lightbox__caption">{t(`gallery.${photos[active].key}`)}</p>
        </div>
      )}
    </>
  );
}
