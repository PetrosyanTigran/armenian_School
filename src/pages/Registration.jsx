import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero.jsx';
import './Registration.css';

// Replace this with your own Formspree form ID (see README for setup steps).
// Sign up free at https://formspree.io, create a form, and paste its ID here.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const initialForm = {
  childName: '',
  childDob: '',
  childLevel: '',
  parentName: '',
  phone: '',
  email: '',
  message: '',
  consent: false,
};

export default function Registration() {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <PageHero eyebrow={t('nav.registration')} title={t('registration.title')} lead={t('registration.leadText')} />
        <section className="section">
          <div className="container">
            <div className="registration__success card">
              <span className="registration__success-mark" aria-hidden="true">Ա</span>
              <h2>{t('registration.successTitle')}</h2>
              <p>{t('registration.successText')}</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow={t('nav.registration')} title={t('registration.title')} lead={t('registration.leadText')} />

      <section className="section">
        <div className="container">
          <form className="reg-form card" onSubmit={handleSubmit}>
            <fieldset className="reg-form__section">
              <legend>{t('registration.childSection')}</legend>

              <div className="reg-form__field">
                <label htmlFor="childName">{t('registration.childName')} *</label>
                <input id="childName" name="childName" type="text" required value={form.childName} onChange={handleChange} />
              </div>

              <div className="reg-form__row">
                <div className="reg-form__field">
                  <label htmlFor="childDob">{t('registration.childDob')} *</label>
                  <input id="childDob" name="childDob" type="date" required value={form.childDob} onChange={handleChange} />
                </div>

                <div className="reg-form__field">
                  <label htmlFor="childLevel">{t('registration.childLevel')}</label>
                  <select id="childLevel" name="childLevel" value={form.childLevel} onChange={handleChange}>
                    <option value="">{t('registration.levelPlaceholder')}</option>
                    <option value="beginner">{t('registration.levelBeginner')}</option>
                    <option value="intermediate">{t('registration.levelIntermediate')}</option>
                    <option value="advanced">{t('registration.levelAdvanced')}</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="reg-form__section">
              <legend>{t('registration.parentSection')}</legend>

              <div className="reg-form__field">
                <label htmlFor="parentName">{t('registration.parentName')} *</label>
                <input id="parentName" name="parentName" type="text" required value={form.parentName} onChange={handleChange} />
              </div>

              <div className="reg-form__row">
                <div className="reg-form__field">
                  <label htmlFor="phone">{t('registration.phone')} *</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
                </div>

                <div className="reg-form__field">
                  <label htmlFor="email">{t('registration.email')} *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                </div>
              </div>

              <div className="reg-form__field">
                <label htmlFor="message">{t('registration.message')}</label>
                <textarea id="message" name="message" rows="4" placeholder={t('registration.messagePlaceholder')} value={form.message} onChange={handleChange} />
              </div>
            </fieldset>

            <label className="reg-form__consent">
              <input type="checkbox" name="consent" required checked={form.consent} onChange={handleChange} />
              <span>{t('registration.consent')}</span>
            </label>

            {status === 'error' && <p className="reg-form__error">{t('registration.errorText')}</p>}

            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? t('registration.submitting') : t('registration.submit')}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
