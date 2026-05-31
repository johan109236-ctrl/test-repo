'use client';

import Link from 'next/link';
import { useState } from 'react';
import { INCLUDED, EXCLUDED } from '@/app/Nepal/shared/packagedetails';

const PREP_GUIDE_MAP: Record<string, string> = {
  'ghorepani-poon-hill-trek-10-days':        'classic-treks',
  'khopra-danda-trek':                        'classic-treks',
  'langtang-valley-trek':                     'classic-treks',
  'mardi-himal-trek':                         'classic-treks',
  'tsum-valley-trek':                         'classic-treks',
  'upper-mustang-trek-drive-trek':            'classic-treks',
  'upper-mustang-trek-17-days':               'classic-treks',
  'annapurna-base-camp-trek-14-days':         'classic-treks',
  'everest-base-camp-trek':                   'high-altitude-treks',
  'annapurna-circuit-trek-16-days':           'high-altitude-treks',
  'gokyo-lakes-trek':                         'high-altitude-treks',
  'langtang-helambu-trek':                    'high-altitude-treks',
  'gokyo-to-everest-base-camp-trek':          'high-altitude-treks',
  'everest-three-passes-trek':                'extreme-high-altitude-treks',
  'gokyo-renjo-la-pass-trek':                 'extreme-high-altitude-treks',
  'everest-high-passes-island-peak':          'extreme-high-altitude-treks',
  'langtang-valley-ganja-la-pass-trek':       'extreme-high-altitude-treks',
  'kanchenjunga-base-camp-trek-23-days':      'wilderness-expeditions',
  'kanchenjunga-base-camp-trek-22-days':      'wilderness-expeditions',
  'upper-dolpo-trek':                         'wilderness-expeditions',
  'manaslu-circuit-trek':                     'wilderness-expeditions',
  'manaslu-tsum-valley-trek':                 'wilderness-expeditions',
  'dhaulagiri-circuit-trek':                  'wilderness-expeditions',
  'nar-phu-valley-annapurna-circuit-trek':    'wilderness-expeditions',
  'annapurna-circuit-tilicho-lake-trek':      'extreme-high-altitude-treks',
};

// ── TYPES ─────────────────────────────────────────────────────────────────────

export type ExpertData = {
  name: string;
  src: string;
  initials: string;
  country: string;
  flag: string;
  whatsapp: string;
};

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
  included?: string[];
  excluded?: string[];
  notes?: string[];
  ctaText?: string;
  price?: string;
  experts?: ExpertData[];
  prepGuide?: string;
  slug?: string;
};

// ── DEFAULT EXPERTS (fallback if none provided) ───────────────────────────────

const DEFAULT_EXPERTS: ExpertData[] = [
  { name: 'Pasang', src: '/assets/images/expert-pasang.jpg', initials: 'PA', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
  { name: 'Rina',   src: '/assets/images/expert-rina.jpg',   initials: 'RI', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
  { name: 'Sujan',  src: '/assets/images/expert-sujan.jpg',  initials: 'SU', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
  { name: 'Karma',  src: '/assets/images/expert-karma.jpg',  initials: 'KA', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
  { name: 'Dawa',   src: '/assets/images/expert-dawa.jpg',   initials: 'DA', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
];

// ── EXPERT AVATAR ─────────────────────────────────────────────────────────────

function ExpertAvatar({
  expert,
  size,
  isActive,
  onClick,
}: {
  expert: ExpertData;
  size: 'sm' | 'lg';
  isActive: boolean;
  onClick: () => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const dim = size === 'lg' ? 76 : 54;

  return (
    <button
      onClick={onClick}
      title={expert.name}
      style={{
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        flexShrink: 0,
        position: 'relative',
        zIndex: isActive ? 3 : 1,
        transition: 'transform 0.2s',
        transform: isActive ? 'translateY(-4px)' : 'none',
      }}
    >
      <div
        style={{
          width: dim,
          height: dim,
          borderRadius: '50%',
          border: isActive ? '3px solid #c9a84c' : '3px solid #111',
          boxShadow: isActive ? '0 0 0 2px #111, 0 6px 20px rgba(0,0,0,0.55)' : 'none',
          background: '#1e1e1e',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border 0.2s, box-shadow 0.2s, width 0.25s, height 0.25s',
        }}
      >
        {!imgFailed ? (
          <img
            src={expert.src}
            alt={expert.name}
            onError={() => setImgFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <span style={{ fontSize: size === 'lg' ? 18 : 13, fontWeight: 700, color: '#c9a84c' }}>
            {expert.initials}
          </span>
        )}
      </div>
    </button>
  );
}

// ── SIDEBAR ───────────────────────────────────────────────────────────────────



function Sidebar({ price, experts, prepGuide, slug }: { price?: string; experts: ExpertData[]; prepGuide?: string; slug?: string }) {
  const [activeIdx, setActiveIdx] = useState(Math.min(2, experts.length - 1));
  const active = experts[activeIdx];
  const prepSlug = prepGuide ?? (slug ? PREP_GUIDE_MAP[slug] : undefined) ?? 'expeditions';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

      {/* Price + CTA card */}
      <div className="sb-card" style={{ padding: '1.6rem 1.6rem 1.4rem' }}>
        {price && (
          <div className="sb-price-row">
            <span className="sb-price-num">{price}</span>
            <span className="sb-price-per">/ person</span>
          </div>
        )}
        <Link href="/contact" className="sb-btn sb-btn--solid">Book Now</Link>
        <Link href="/contact" className="sb-btn sb-btn--ghost">Inquire Now</Link>
      </div>

      {/* Expert card */}
      <div className="sb-card sb-expert-card">
        <h3 className="sb-expert-heading">Speak to an Expert</h3>

        <div className="sb-map-area">
          <svg className="sb-worldmap" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="wd" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.3" fill="#c9a84c" fillOpacity="0.2" />
              </pattern>
            </defs>
            <ellipse cx="80"  cy="80"  rx="52" ry="38" fill="url(#wd)" />
            <ellipse cx="185" cy="68"  rx="36" ry="52" fill="url(#wd)" />
            <ellipse cx="248" cy="78"  rx="28" ry="36" fill="url(#wd)" />
            <ellipse cx="308" cy="72"  rx="44" ry="38" fill="url(#wd)" />
            <ellipse cx="362" cy="88"  rx="24" ry="28" fill="url(#wd)" />
            <ellipse cx="148" cy="132" rx="18" ry="25" fill="url(#wd)" />
            <ellipse cx="208" cy="142" rx="14" ry="18" fill="url(#wd)" />
          </svg>

          <div style={{
            position: 'relative', zIndex: 2,
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          }}>
            {experts.map((e, i) => (
              <div
                key={i}
                style={{ marginLeft: i === 0 ? 0 : -10, display: 'flex', alignItems: 'flex-end' }}
              >
                <ExpertAvatar
                  expert={e}
                  size={i === activeIdx ? 'lg' : 'sm'}
                  isActive={i === activeIdx}
                  onClick={() => setActiveIdx(i)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="sb-expert-meta" key={active.name}>
          <div className="sb-expert-name">{active.name}</div>
          <div className="sb-expert-country">{active.country} {active.flag}</div>
        </div>

        <a
          href={`https://wa.me/${active.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className="sb-wa-row"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.103 1.515 5.833L.057 23.535a.75.75 0 0 0 .921.904l5.909-1.55A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.497-5.228-1.368l-.374-.217-3.87 1.015 1.04-3.785-.234-.388A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor" />
          </svg>
          <span className="sb-wa-label">WhatsApp</span>
          <span className="sb-wa-num" key={active.whatsapp}>{active.whatsapp}</span>
        </a>
      </div>

      {/* Prep guide */}
      <div className="sb-card sb-prep-card">
        <Link href={`/Nepal/Preparation/${prepSlug}`} className="sb-prep-btn">
          <span style={{ fontSize: '1.05rem' }}>📋</span>
          Preparation Guide
        </Link>
      </div>

    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function ExpeditionPage({ data }: { data: TrekData }) {
  const cta      = data.ctaText ?? data.title.split(' ')[0];
  const included = (data.included && data.included.length > 0) ? data.included : INCLUDED;
  const excluded = (data.excluded && data.excluded.length > 0) ? data.excluded : EXCLUDED;
  const notes    = data.notes ?? [];
  const experts  = data.experts ?? DEFAULT_EXPERTS;

  const INFO_GRID = [
    { label: 'Duration',      value: data.duration },
    { label: 'Difficulty',    value: data.difficulty },
    { label: 'Activity',      value: data.activity },
    { label: 'Max Elevation', value: data.elevation },
    { label: 'Best Season',   value: data.season },
    { label: 'Accommodation', value: data.accommodation },
    { label: 'Group Size',    value: data.groupSize },
    { label: 'Start / End',   value: 'Kathmandu' },
    { label: 'Meals',         value: 'Included' },
  ];

  return (
    <main id="trek-page">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        #trek-page {
          background: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── HERO ── */
        .tp-hero {
          height: 75vh; min-height: 500px;
          display: grid; grid-template-columns: 2fr 1fr;
          gap: 10px; padding: 10px;
          background: #0a0a0a; overflow: hidden;
        }
        .tp-hero-main { height: 100%; overflow: hidden; }
        .tp-hero-side { display: grid; grid-template-rows: 1fr 1fr; gap: 10px; height: 100%; overflow: hidden; }
        .tp-hero-main img { width: 100%; height: 100%; object-fit: cover; object-position: center center; display: block; }
        .tp-hero-side img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 0; }

        /* ── OUTER LAYOUT ── */
        .tp-outer {
          max-width: 80rem; margin: 0 auto; padding: 0 1.5rem;
          display: grid; grid-template-columns: 1fr 360px;
          gap: 3.5rem; align-items: start;
        }
        .tp-left { min-width: 0; }

        /* ── TITLE BLOCK ── */
        .tp-title-block { padding: 4rem 0 2rem; }
        .tp-breadcrumb {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.42); margin-bottom: 0.8rem;
        }
        .tp-breadcrumb a { color: inherit; text-decoration: none; }
        .tp-breadcrumb a:hover { color: #c9a84c; }
        .tp-page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 300; color: #f5f0e8; line-height: 1.1; margin: 0 0 1.4rem;
        }
        .tp-description { font-size: 0.875rem; color: rgba(245,240,232,0.6); line-height: 1.9; margin: 0; }

        /* ── INFO GRID ── */
        .tp-info-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid #1f1f1f; border-radius: 10px;
          overflow: hidden; background: #111; margin: 2.5rem 0 4.5rem;
        }
        .tp-info-cell {
          padding: 1.2rem 1.35rem;
          border-right: 1px solid #1f1f1f;
          border-bottom: 1px solid #1f1f1f;
        }
        .tp-info-cell:nth-child(3n)  { border-right: none; }
        .tp-info-cell:nth-child(n+7) { border-bottom: none; }
        .tp-info-cell--empty { background: transparent; }
        .tp-info-label { font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase; color: #c9a84c; margin-bottom: 0.35rem; }
        .tp-info-value { font-size: 0.79rem; color: #f5f0e8; line-height: 1.4; }

        /* ── SECTIONS ── */
        .tp-section { padding: 4rem 0; border-top: 1px solid #1a1a1a; }
        .tp-section-header { display: flex; align-items: baseline; gap: 1.2rem; margin-bottom: 2.25rem; }
        .tp-section-num { font-size: 10px; letter-spacing: 0.4em; color: rgba(201,168,76,0.4); }
        .tp-section-title { font-family: 'Cormorant Garamond', serif; font-size: 2.1rem; font-weight: 300; margin: 0; }
        .tp-prose { font-size: 0.865rem; color: rgba(245,240,232,0.6); line-height: 1.9; }
        .tp-prose p { margin: 0 0 1.4rem; }
        .tp-prose p:last-child { margin-bottom: 0; }

        /* Highlights */
        .tp-highlight { display: flex; gap: 0.75rem; margin-bottom: 0.9rem; font-size: 0.83rem; color: rgba(245,240,232,0.72); }
        .tp-dot { width: 6px; height: 6px; background: #c9a84c; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }

        /* Itinerary */
        .tp-day { display: grid; grid-template-columns: 68px 1fr; gap: 1.2rem; padding: 1.3rem 0; border-bottom: 1px solid #1a1a1a; }
        .tp-day:first-of-type { border-top: 1px solid #1a1a1a; }
        .tp-day-num { font-family: 'Cormorant Garamond', serif; font-size: 1.55rem; color: #c9a84c; line-height: 1; }
        .tp-day-title { font-weight: 600; font-size: 0.84rem; margin-bottom: 0.35rem; }
        .tp-day-desc { font-size: 0.77rem; color: rgba(245,240,232,0.46); line-height: 1.6; }

        /* Included / Excluded */
        .tp-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .tp-list-head { font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: #c9a84c; margin-bottom: 1.4rem; }
        .tp-list { list-style: none; padding: 0; margin: 0; }
        .tp-list li { font-size: 0.77rem; margin-bottom: 0.7rem; color: rgba(245,240,232,0.6); display: flex; gap: 0.55rem; line-height: 1.55; }

        /* CTA */
        .tp-cta { padding: 6rem 0; border-top: 1px solid #1a1a1a; text-align: center; }
        .tp-cta-title { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300; margin: 0 0 2rem; }
        .tp-gold { font-style: italic; color: #c9a84c; }
        .tp-btn-reserve {
          display: block; background: #c9a84c; color: #000; padding: 1rem;
          text-align: center; text-decoration: none; font-weight: 700;
          text-transform: uppercase; font-size: 11px; letter-spacing: 0.22em;
          border-radius: 3px; max-width: 280px; margin: 0 auto;
        }

        /* ── SIDEBAR ── */
        .tp-sidebar { position: sticky; top: 1.5rem; padding-top: 4rem; }

        .sb-card {
          background: #111; border: 1px solid #222; border-radius: 12px; overflow: hidden;
        }
        .sb-price-row { display: flex; align-items: baseline; gap: 0.45rem; margin-bottom: 1.3rem; }
        .sb-price-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem; font-weight: 400; color: #f5f0e8; line-height: 1;
        }
        .sb-price-per { font-size: 0.82rem; color: rgba(245,240,232,0.45); }

        .sb-btn {
          display: block; width: 100%; padding: 0.88rem 1rem; margin-bottom: 0.6rem;
          text-align: center; text-decoration: none; font-weight: 700; font-size: 11px;
          letter-spacing: 0.15em; text-transform: uppercase; border-radius: 5px;
          transition: opacity 0.2s; border: none; cursor: pointer;
        }
        .sb-btn:last-child { margin-bottom: 0; }
        .sb-btn:hover { opacity: 0.82; }
        .sb-btn--solid { background: #f5f0e8; color: #0a0a0a; }
        .sb-btn--ghost { background: transparent; color: #c9a84c; border: 1px solid #c9a84c; }

        .sb-expert-card { padding: 0; }
        .sb-expert-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 400; text-align: center; color: #f5f0e8;
          padding: 1.35rem 1.5rem 0; margin: 0; letter-spacing: 0.02em;
        }
        .sb-map-area {
          position: relative; padding: 1.25rem 0.75rem 0.5rem;
          min-height: 128px; display: flex; align-items: flex-end;
          justify-content: center; overflow: hidden;
        }
        .sb-worldmap { position: absolute; inset: 0; width: 100%; height: 100%; }
        .sb-expert-meta { text-align: center; padding: 0.9rem 1rem 0; }
        .sb-expert-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 500; color: #f5f0e8; line-height: 1.2;
        }
        .sb-expert-country { font-size: 0.78rem; color: rgba(245,240,232,0.45); margin-top: 2px; }
        .sb-wa-row {
          display: flex; align-items: center; justify-content: center; gap: 0.55rem;
          padding: 1rem 1.5rem 1.4rem; text-decoration: none; color: #f5f0e8;
        }
        .sb-wa-row:hover .sb-wa-num { color: #c9a84c; }
        .sb-wa-label { font-size: 0.8rem; color: rgba(245,240,232,0.45); }
        .sb-wa-num { font-size: 0.9rem; font-weight: 700; color: #f5f0e8; letter-spacing: 0.02em; transition: color 0.2s; }

        .sb-prep-card { background: #111; }
        .sb-prep-btn {
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          padding: 1rem 1.5rem; text-decoration: none;
          color: rgba(245,240,232,0.65); font-size: 0.85rem; font-weight: 500;
          transition: color 0.2s, background 0.2s; width: 100%;
        }
        .sb-prep-btn:hover { color: #c9a84c; background: #161616; }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .tp-outer { grid-template-columns: 1fr; }
          .tp-sidebar { position: static; padding-top: 0; }
        }
        @media (max-width: 640px) {
          .tp-hero { grid-template-columns: 1fr; height: 52vh; }
          .tp-hero-side { display: none; }
          .tp-two-col { grid-template-columns: 1fr; }
          .tp-info-grid { grid-template-columns: 1fr 1fr; }
          .tp-info-cell:nth-child(3n)  { border-right: 1px solid #1f1f1f; }
          .tp-info-cell:nth-child(2n)  { border-right: none; }
          .tp-info-cell:nth-child(n+7) { border-bottom: 1px solid #1f1f1f; }
          .tp-info-cell:nth-child(n+9) { border-bottom: none; }
        }
      `}</style>

      {/* 1 — Hero */}
      <div className="tp-hero">
        <div className="tp-hero-main">
          <img src={data.heroImages[0]} alt={data.title} />
        </div>
        <div className="tp-hero-side">
          <img src={data.heroImages[1]} alt="Trek detail 1" />
          <img src={data.heroImages[2]} alt="Trek detail 2" />
        </div>
      </div>

      {/* 2 — Two-column body */}
      <div className="tp-outer">

        {/* LEFT COLUMN */}
        <div className="tp-left">

          {/* Title block */}
          <div className="tp-title-block">
            <div className="tp-breadcrumb">
              {data.breadcrumb.map((crumb, i) => (
                <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {i > 0 && <span>›</span>}
                  {crumb.href === '#'
                    ? <span>{crumb.label}</span>
                    : <Link href={crumb.href}>{crumb.label}</Link>}
                </span>
              ))}
            </div>
            <h1 className="tp-page-title">{data.title}</h1>
            <p className="tp-description">{data.description}</p>
          </div>

          {/* Info grid */}
          <div className="tp-info-grid">
            {INFO_GRID.map((item, i) =>
              item ? (
                <div key={i} className="tp-info-cell">
                  <div className="tp-info-label">{item.label}</div>
                  <div className="tp-info-value">{item.value}</div>
                </div>
              ) : (
                <div key={i} className="tp-info-cell tp-info-cell--empty" />
              )
            )}
          </div>

          {/* 01 Highlights */}
          <section className="tp-section">
            <div className="tp-section-header">
              <span className="tp-section-num">01</span>
              <h2 className="tp-section-title">Highlights</h2>
            </div>
            {data.highlights.map((h, i) => (
              <div key={i} className="tp-highlight">
                <div className="tp-dot" />
                <span>{h}</span>
              </div>
            ))}
          </section>

          {/* 02 Overview */}
          <section className="tp-section">
            <div className="tp-section-header">
              <span className="tp-section-num">02</span>
              <h2 className="tp-section-title">Overview</h2>
            </div>
            <div className="tp-prose">
              {data.overview.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>

          {/* 03 Itinerary */}
          <section className="tp-section">
            <div className="tp-section-header">
              <span className="tp-section-num">03</span>
              <h2 className="tp-section-title">Itinerary</h2>
            </div>
            {data.itinerary.map((d) => (
              <div key={d.day} className="tp-day">
                <div className="tp-day-num">{String(d.day).padStart(2, '0')}</div>
                <div>
                  <div className="tp-day-title">{d.title}</div>
                  <div className="tp-day-desc">{d.description}</div>
                </div>
              </div>
            ))}
          </section>

          {/* 04 Included / Excluded */}
          <section className="tp-section">
            <div className="tp-section-header">
              <span className="tp-section-num">04</span>
              <h2 className="tp-section-title">What&apos;s Included</h2>
            </div>
            <div className="tp-two-col">
              <div>
                <h3 className="tp-list-head">Included</h3>
                <ul className="tp-list">
                  {included.map((x, i) => (
                    <li key={i}><span style={{ color: '#c9a84c', flexShrink: 0 }}>✓</span>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="tp-list-head">Excluded</h3>
                <ul className="tp-list">
                  {excluded.map((x, i) => (
                    <li key={i}><span style={{ color: 'rgba(245,240,232,0.28)', flexShrink: 0 }}>✕</span>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 05 Important Notes (conditional) */}
          {notes.length > 0 && (
            <section className="tp-section">
              <div className="tp-section-header">
                <span className="tp-section-num">05</span>
                <h2 className="tp-section-title">Important Notes</h2>
              </div>
              <ul className="tp-list">
                {notes.map((n, i) => (
                  <li key={i}><span style={{ color: '#c9a84c', flexShrink: 0 }}>◆</span>{n}</li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA */}
          <div className="tp-cta">
            <h2 className="tp-cta-title">
              Ready for <br /><span className="tp-gold">{cta}?</span>
            </h2>
            <Link href="/contact" className="tp-btn-reserve">Reserve Your Spot</Link>
          </div>

        </div>{/* /tp-left */}

        {/* RIGHT COLUMN — Sidebar */}
        <div className="tp-sidebar">
          <Sidebar price={data.price} experts={experts} prepGuide={data.prepGuide} slug={data.slug} />
        </div>

      </div>{/* /tp-outer */}
    </main>
  );
}