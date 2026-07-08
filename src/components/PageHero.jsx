import OrnamentDivider from './OrnamentDivider.jsx';
import './PageHero.css';

export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
      <div className="page-hero__divider">
        <OrnamentDivider />
      </div>
    </section>
  );
}
