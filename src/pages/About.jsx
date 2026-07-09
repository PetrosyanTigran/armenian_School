import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero.jsx';
import { asset } from '../utils/asset.js';
import './About.css';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { key: 'value1', letter: 'Ա' },
    { key: 'value2', letter: 'Բ' },
    { key: 'value3', letter: 'Գ' },
  ];

  const teachers = ['teacher1', 'teacher2', 'teacher3'];

  return (
    <>
      <PageHero eyebrow={t('nav.about')} title={t('about.title')} lead={t('about.leadText')} />

      <section className="section">
        <div className="container about__history">
          <div className="about__history-copy">
            <h2 className="section-title">{t('about.historyTitle')}</h2>
            <p className="section-lead">{t('about.historyText')}</p>
          </div>
          <div className="about__history-figure" aria-hidden="true">
          <img src={assetet('logo.png')} alt="" width="40" height="40" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">{t('about.missionTitle')}</p>
          <h2 className="section-title">{t('about.missionTitle')}</h2>
          <p className="section-lead" style={{ marginBottom: 40 }}>{t('about.missionText')}</p>

          <div className="about__values">
            {values.map((v) => (
              <div className="about__value-card" key={v.key}>
                <span className="about__value-letter" aria-hidden="true">{v.letter}</span>
                <h3>{t(`about.${v.key}Title`)}</h3>
                <p>{t(`about.${v.key}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{t('about.teachersTitle')}</p>
          <h2 className="section-title">{t('about.teachersTitle')}</h2>
          <p className="section-lead" style={{ marginBottom: 40 }}>{t('about.teachersText')}</p>

          <div className="about__teachers">
            {teachers.map((tk) => (
              <div className="about__teacher-card" key={tk}>
                <div className="about__teacher-avatar" aria-hidden="true" />
                <h3>{t(`about.${tk}`)}</h3>
                <p>{t(`about.${tk}Role`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
