'use client';

import Link from 'next/link';

export type TrekData = {
  title: string;
  duration: string;
  difficulty: string;
  elevation: string;
  season: string;
  groupSize: string;
  activity: string;
  accommodation: string;
  heroImages: [string, string, string];
  breadcrumb: { label: string; href: string }[];
  description: string;
  highlights: string[];
  overview: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
  notes: string[];
  ctaText?: string;
};

export default function ExpeditionPage({ data }: { data: TrekData }) {
  const cta = data.ctaText ?? data.title.split(' ')[0];

  return (
    <main id="trek-page">
            <style>{`
        #trek-page {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* --- HERO GRID --- */
        .tp-hero {
          position: relative;
          height: 75vh;
          min-height: 500px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 10px;
          padding: 10px;
          background-color: #0a0a0a;
          overflow: hidden;
        }

        .tp-hero-main { position: relative; height: 100%; }
        .tp-hero-side { display: grid; grid-template-rows: 1fr 1fr; gap: 10px; height: 100%; }
        
        .tp-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* --- TITLE SECTION BELOW IMAGES --- */
        .tp-hero-content {
          position: relative;
          z-index: 3;
          max-width: 80rem;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
          width: 100%;
        }

        .tp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.1;
          margin: 0.5rem 0 0;
        }

        .tp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .tp-breadcrumb a { color: inherit; text-decoration: none; transition: 0.3s; }
        .tp-breadcrumb a:hover { color: #c9a84c; }

        /* --- UNIFORM INFO BAR --- */
        .tp-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .tp-info-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #111;
  border: 1px solid #1f1f1f;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 4rem;
}

        .tp-info-item {
  padding: 2rem 1.5rem;
  border: none;
}

        .tp-info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 0.5rem;
        }

        .tp-info-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          color: #f5f0e8;
        }

        /* --- SECTIONS --- */
        .tp-top { display: grid; grid-template-columns: 1fr auto; gap: 3rem; padding: 4rem 0; border-bottom: 1px solid #1a1a1a; }
        .tp-desc { font-family: 'Montserrat', sans-serif; font-size: 0.9rem; color: rgba(245,240,232,0.6); line-height: 1.9; }
        .tp-book-col { display: flex; flex-direction: column; gap: 0.75rem; min-width: 220px; }

        .tp-btn-primary { background: #c9a84c; color: #000; padding: 1rem; text-align: center; text-decoration: none; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.2em; transition: 0.3s; }
        .tp-btn-outline { border: 1px solid #c9a84c; color: #c9a84c; padding: 1rem; text-align: center; text-decoration: none; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; transition: 0.3s; }

        .tp-section { padding: 5rem 0; border-bottom: 1px solid #1a1a1a; }
        .tp-section-header { display: flex; gap: 1.5rem; margin-bottom: 3rem; }
        .tp-section-number { color: rgba(201,168,76,0.4); font-size: 10px; letter-spacing: 0.4em; }
        .tp-section-title { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 300; }

        .tp-highlight-item { display: flex; gap: 0.75rem; margin-bottom: 1rem; font-size: 0.85rem; color: rgba(245,240,232,0.7); }
        .tp-highlight-dot { width: 6px; height: 6px; background: #c9a84c; border-radius: 50%; margin-top: 7px; }

        .tp-day { display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; padding: 1.5rem 0; border-bottom: 1px solid #1a1a1a; }
        .tp-day-number { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: #c9a84c; }
        .tp-day-title { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; }
        .tp-day-desc { font-size: 0.8rem; color: rgba(245,240,232,0.5); }

        .tp-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .tp-list-heading { color: #c9a84c; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 2rem; }
        .tp-list { list-style: none; padding: 0; }
        .tp-list-item { font-size: 0.8rem; margin-bottom: 0.8rem; color: rgba(245,240,232,0.6); display: flex; gap: 0.5rem; }

        .tp-cta { padding: 8rem 0; text-align: center; }
        .tp-cta-heading { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 300; margin-bottom: 2rem; }
        .tp-gold { font-style: italic; color: #c9a84c; }

        @media (max-width: 768px) {
          .tp-hero { grid-template-columns: 1fr; height: 50vh; }
          .tp-hero-side { display: none; }
          .tp-info-bar { grid-template-columns: 1fr 1fr; }
          .tp-top, .tp-two-col { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* 1. Hero Grid */}
      <div className="tp-hero">
        <div className="tp-hero-main">
          <img src={data.heroImages[0]} alt={data.title} />
        </div>
        <div className="tp-hero-side">
          <img src={data.heroImages[1]} alt="Trek detail 1" />
          <img src={data.heroImages[2]} alt="Trek detail 2" />
        </div>
      </div>

      {/* 2. Title Section */}
      <div className="tp-hero-content">
        <div className="tp-breadcrumb">
          {data.breadcrumb.map((crumb, i) => (
            <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {i > 0 && <span>›</span>}
              {crumb.href === '#'
                ? <span>{crumb.label}</span>
                : <Link href={crumb.href}>{crumb.label}</Link>
              }
            </span>
          ))}
        </div>
        <h1 className="tp-hero-title">{data.title}</h1>
      </div>

      {/* 3. Main Body */}
      <div className="tp-container">
        <div className="tp-info-bar">
          {[
            { label: 'Duration',      value: data.duration },
            { label: 'Difficulty',    value: data.difficulty },
            { label: 'Elevation',     value: data.elevation },
            { label: 'Season',        value: data.season },
            { label: 'Group',         value: data.groupSize },
            { label: 'Activity',      value: data.activity },
          ].map((item) => (
            <div key={item.label} className="tp-info-item">
              <div className="tp-info-label">{item.label}</div>
              <div className="tp-info-value">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="tp-top">
          <p className="tp-desc">{data.description}</p>
          <div className="tp-book-col">
            <Link href="/contact" className="tp-btn-primary">Book Now</Link>
            <Link href="/contact" className="tp-btn-outline">Inquire Now</Link>
          </div>
        </div>

        {/* Highlights */}
        <section className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">01</span>
            <h2 className="tp-section-title">Highlights</h2>
          </div>
          <div>
            {data.highlights.map((h, i) => (
              <div key={i} className="tp-highlight-item">
                <div className="tp-highlight-dot" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">02</span>
            <h2 className="tp-section-title">Overview</h2>
          </div>
          <div className="tp-desc">
            {data.overview.map((p, i) => (
              <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">03</span>
            <h2 className="tp-section-title">Itinerary</h2>
          </div>
          {data.itinerary.map((day) => (
            <div key={day.day} className="tp-day">
              <div className="tp-day-number">{String(day.day).padStart(2, '0')}</div>
              <div>
                <div className="tp-day-title">{day.title}</div>
                <div className="tp-day-desc">{day.description}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Inclusions */}
        <section className="tp-section">
          <div className="tp-two-col">
            <div>
              <h3 className="tp-list-heading">What&apos;s Included</h3>
              <ul className="tp-list">
                {data.included.map((item, i) => (
                  <li key={i} className="tp-list-item"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="tp-list-heading">What&apos;s Excluded</h3>
              <ul className="tp-list">
                {data.excluded.map((item, i) => (
                  <li key={i} className="tp-list-item"><span>✕</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">04</span>
            <h2 className="tp-section-title">Important Notes</h2>
          </div>
          <ul className="tp-list">
            {data.notes.map((note, i) => (
              <li key={i} className="tp-list-item"><span>◆</span> {note}</li>
            ))}
          </ul>
        </section>

        {/* Final CTA */}
        <div className="tp-cta">
          <h2 className="tp-cta-heading">
            Ready for <br /><span className="tp-gold">{cta}?</span>
          </h2>
          <div className="tp-book-col" style={{ margin: '0 auto' }}>
            <Link href="/contact" className="tp-btn-primary">Reserve Your Spot</Link>
          </div>
        </div>
      </div>
    </main>
  );
}