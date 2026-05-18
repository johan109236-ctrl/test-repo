'use client';

import Link from 'next/link';
import { useState } from 'react';


const TREK = {
  title: 'Everest Base Camp Trek',
  duration: '16 Days',
  difficulty: 'Strenuous / Challenging',
  activity: 'Trekking / Hiking',
  maxElevation: '5,416 m / 17,769 ft',
  season: 'Feb, May–Sep, Dec',
  accommodation: 'Tea House & Hotel',
  meals: 'Included',
  startEnd: 'Kathmandu',
  price: 'USD 1,499',
  pricePerLabel: '/ person',
  heroImages: [
    '/assets/images/everest-base-camp.jpg',
    '/assets/images/hbg.jpg',
    '/assets/images/gokyo-lakes.jpg',
  ],
  breadcrumb: [
    { label: 'Nepal', href: '/Nepal' },
    { label: 'Everest', href: '/Nepal#trekking' },
    { label: 'Everest Base Camp Trek', href: '#' },
  ],
  description: `A monumental trek on the legendary path of pioneers to the majestic foothills of the world's highest peak, Mount Everest. The 16-day Everest Base Camp Trek is an iconic journey of challenge and discovery in the high Himalayas, combining breathtaking Himalayan panoramas, Sherpa culture, and one of the world's most legendary trekking experiences.`,
  highlights: [
    'Everest Base Camp (5,364m) — stand at the legendary starting point of Everest expeditions',
    'Kala Patthar Sunrise/Viewpoint (5,545m) for spectacular Mount Everest sunrise views',
    'Thrilling scenic Lukla flight into the Khumbu region',
    'Explore Namche Bazaar, the vibrant Sherpa hub of the Himalayas',
    'High-altitude acclimatization days for safe trekking',
    'Immerse yourself in authentic Sherpa culture and Buddhist traditions',
    'Experience diverse scenery from forests to glaciers',
    'Witness incredible Himalayan panoramas including Ama Dablam, Lhotse, and Nuptse',
    'Alternative route options available for experienced trekkers',
  ],
  overview: [
    `The Everest Base Camp (EBC) trek is a demanding high-altitude journey that requires careful preparation, primarily focused on altitude acclimatization. The trek typically starts after a flight to Lukla (2,860m) and reaches Everest Base Camp at 5,364m, often including a climb to Kala Patthar (5,545m) for the best views. The standard itinerary is deliberately paced with acclimatization days in Namche Bazaar and Dingboche, which are essential for your body to adjust to lower oxygen levels.`,
    `Acute Mountain Sickness (AMS) can affect anyone regardless of fitness level, making acclimatization critical. Symptoms such as headaches, dizziness, or nausea should never be ignored. Staying hydrated by drinking 3–4 liters of water daily, avoiding alcohol, and following the "climb high, sleep low" principle are among the most effective ways to ensure a safe trek.`,
    `Success on the Everest Base Camp trek depends heavily on physical and logistical preparation. Begin endurance and strength training 2–3 months prior to your trek and invest in proper trekking gear, including quality trekking boots and layered clothing suitable for cold, high-altitude conditions. Licensed guides and porters are highly recommended for navigation, safety, and carrying gear.`,
    `The trek begins with an exciting flight to Lukla and passes through Sherpa villages like Phakding, dramatic suspension bridges, and the bustling center of Namche Bazaar. The journey culminates at Everest Base Camp (5,364m), followed by a pre-dawn ascent to Kala Patthar (approx. 5,545m) for unforgettable sunrise views of Mount Everest.`,
    `NOTE: While we strive to follow the planned itinerary, circumstances beyond our control such as weather, flight delays, natural disasters, political changes, or health concerns may require adjustments. We highly recommend arriving one or two days before your trek begins.`,
  ],
  itinerary: [
    { day: 1,  title: 'Arrival in Kathmandu (1,400 m / 4,593 ft)', description: 'Airport pick-up and transportation provided to hotel.' },
    { day: 2,  title: 'Half-day city tour & trek briefing', description: 'Afternoon trek briefing and preparation. Welcome dinner at a traditional Nepali restaurant.' },
    { day: 3,  title: 'Fly to Lukla (2,840 m) & Trek to Phakding (2,610 m)', description: '3–4 hours of trekking after a scenic mountain flight.' },
    { day: 4,  title: 'Trek to Namche Bazaar (3,450 m / 11,318 ft)', description: '6–7 hours crossing suspension bridges and entering the Sherpa capital.' },
    { day: 5,  title: 'Namche Bazaar — Acclimatization Day', description: 'Rest and acclimatization day to help your body adjust to the altitude.' },
    { day: 6,  title: 'Trek to Phortse (3,810 m / 12,500 ft)', description: '5–6 hours of trekking through stunning Himalayan landscapes.' },
    { day: 7,  title: 'Trek to Dingboche (4,350 m / 14,271 ft)', description: '5–6 hours through increasingly alpine scenery.' },
    { day: 8,  title: 'Dingboche — Acclimatization Day', description: 'Rest and acclimatization to prepare for higher elevation trekking.' },
    { day: 9,  title: 'Trek to Lobuche (4,910 m / 16,108 ft)', description: '5–6 hours trekking alongside the Khumbu glacier.' },
    { day: 10, title: 'Trek to Gorakshep & Everest Base Camp (5,364 m)', description: '3 hours to Gorakshep, then 4 hours to Everest Base Camp. Overnight at Gorakshep.' },
    { day: 11, title: 'Kala Patthar (5,545 m) & Trek to Pheriche (4,240 m)', description: 'Morning sunrise hike followed by descent to Pheriche (5–6 hours).' },
    { day: 12, title: 'Trek to Namche Bazaar (3,450 m / 11,318 ft)', description: 'Descend back through the Khumbu region.' },
    { day: 13, title: 'Trek to Phakding (2,610 m / 8,562 ft)', description: 'Continue descending through familiar villages and valleys.' },
    { day: 14, title: 'Trek to Lukla (2,840 m / 9,317 ft)', description: 'Final trekking day and celebration of your achievement.' },
    { day: 15, title: 'Return Flight to Kathmandu', description: 'Transportation provided to hotel upon arrival.' },
    { day: 16, title: 'Departure Day', description: 'Transportation provided to Tribhuvan International Airport.' },
  ],
  included: [
    'All essential permits',
    'Airport transportation to/from Kathmandu hotels per package dates',
    'Three-star, twin-bed hotel in Kathmandu (4/5-star at extra cost)',
    'Welcome dinner at a traditional Nepali restaurant',
    'Half-day guided Kathmandu sightseeing tour incl. UNESCO site',
    'All government and local taxes',
    'Ground transportation to/from all itinerary destinations',
    'Teahouse accommodation in twin-bed room (shared)',
    'Professional trekking guide/group leader and porter',
    'Trek meals: breakfast, lunch, and dinner',
    'Health & Safety: oxygen cans, medical kit, oximeter, pressure machine, satellite phone',
    'Sleeping bag and down jacket during trek',
    'Nepal Himal Adventures souvenirs: duffel bag, T-shirt, sun hat, map, buff, certificate',
  ],
  excluded: [
    'Nepali visa fees',
    'Personal expenses including food while not on trek',
    'International flight fares',
    'Emergency medical rescue/evacuation',
    'Staff tipping',
    'Extra nights in Kathmandu for early arrivals/late departures',
    'Travel or medical insurance',
    'Optional tours and activities during free time',
    'Snacks during trek',
    'Personal expenses: laundry, battery charging, showers, etc.',
  ],
  notes: [
    'One porter assigned per two participants. Max load: 25 kg / 55 lbs total.',
    'Your duffel bag should weigh no more than 12.5 kg / 27.56 lbs per client.',
    'Bring a waterproof daypack for cash, documents, water, camera, and daily essentials.',
    'Non-trekking luggage can be stored at the hotel in Kathmandu.',
    'High-quality hooded down jacket included. USD 150 fee for loss or significant damage.',
    '4-season sleeping bag included. USD 150 fee for loss or significant damage.',
  ],
  experts: [
    { name: 'Pasang', src: '/assets/images/expert-pasang.jpg', initials: 'PA', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
    { name: 'Rina',   src: '/assets/images/expert-rina.jpg',   initials: 'RI', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520 ' },
    { name: 'Sujan',  src: '/assets/images/expert-sujan.jpg',  initials: 'SU', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
    { name: 'Karma',  src: '/assets/images/expert-karma.jpg',  initials: 'KA', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
    { name: 'Dawa',   src: '/assets/images/expert-dawa.jpg',   initials: 'DA', country: 'Nepal', flag: '🇳🇵', whatsapp: '9779808968520' },
  ],
  defaultExpertIndex: 2, 
};

const INFO_GRID = [
  { label: 'Trek Duration',  value: TREK.duration },
  { label: 'Difficulty',     value: TREK.difficulty },
  { label: 'Activity',       value: TREK.activity },
  { label: 'Max Elevation',  value: TREK.maxElevation },
  { label: 'Best Season',    value: TREK.season },
  { label: 'Accommodation',  value: TREK.accommodation },
  { label: 'Meals',          value: TREK.meals },
  { label: 'Start / End',    value: TREK.startEnd },
  null,
];


function ExpertAvatar({
  expert,
  size,
  isActive,
  onClick,
}: {
  expert: typeof TREK.experts[0];
  size: 'sm' | 'lg';
  isActive: boolean;
  onClick: () => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const dim = size === 'lg' ? 76 : 54;
  const border = isActive ? '3px solid #c9a84c' : '3px solid #111';
  const shadow = isActive ? '0 0 0 2px #111, 0 6px 20px rgba(0,0,0,0.55)' : 'none';

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
          border,
          boxShadow: shadow,
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


function Sidebar() {
  const [activeIdx, setActiveIdx] = useState(TREK.defaultExpertIndex);
  const active = TREK.experts[activeIdx];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

      <div className="sb-card" style={{ padding: '1.6rem 1.6rem 1.4rem' }}>
        <div className="sb-price-row">
          <span className="sb-price-num">{TREK.price}</span>
          <span className="sb-price-per">{TREK.pricePerLabel}</span>
        </div>
        <Link href="/contact" className="sb-btn sb-btn--solid">Book Now</Link>
        <Link href="/contact" className="sb-btn sb-btn--ghost">Inquire Now</Link>
      </div>

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
            {TREK.experts.map((e, i) => (
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.103 1.515 5.833L.057 23.535a.75.75 0 0 0 .921.904l5.909-1.55A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.497-5.228-1.368l-.374-.217-3.87 1.015 1.04-3.785-.234-.388A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor"/>
          </svg>
          <span className="sb-wa-label">WhatsApp</span>
          <span className="sb-wa-num" key={active.whatsapp}>{active.whatsapp}</span>
        </a>
      </div>

      <div className="sb-card sb-prep-card">
        <Link href="/preparation-guide" className="sb-prep-btn">
          <span style={{ fontSize: '1.05rem' }}>📋</span>
          Preparation Guide
        </Link>
      </div>

    </div>
  );
}


export default function EverestBaseCampPage() {
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

        /* HERO */
        .tp-hero {
          height: 75vh; min-height: 500px;
          display: grid; grid-template-columns: 2fr 1fr;
          gap: 10px; padding: 10px;
          background: #0a0a0a; overflow: hidden;
        }
        .tp-hero-main { height: 100%; }
        .tp-hero-side { display: grid; grid-template-rows: 1fr 1fr; gap: 10px; height: 100%; }
        .tp-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* OUTER */
        .tp-outer {
          max-width: 80rem; margin: 0 auto; padding: 0 1.5rem;
          display: grid; grid-template-columns: 1fr 360px;
          gap: 3.5rem; align-items: start;
        }
        .tp-left { min-width: 0; }

        /* TITLE */
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

        /* INFO GRID */
        .tp-info-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid #1f1f1f; border-radius: 10px;
          overflow: hidden; background: #111; margin: 2.5rem 0 4.5rem;
        }
        .tp-info-cell { padding: 1.2rem 1.35rem; border-right: 1px solid #1f1f1f; border-bottom: 1px solid #1f1f1f; }
        .tp-info-cell:nth-child(3n)  { border-right: none; }
        .tp-info-cell:nth-child(n+7) { border-bottom: none; }
        .tp-info-cell--empty { background: transparent; }
        .tp-info-label { font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase; color: #c9a84c; margin-bottom: 0.35rem; }
        .tp-info-value { font-size: 0.79rem; color: #f5f0e8; line-height: 1.4; }

        /* SECTIONS */
        .tp-section { padding: 4rem 0; border-top: 1px solid #1a1a1a; }
        .tp-section-header { display: flex; align-items: baseline; gap: 1.2rem; margin-bottom: 2.25rem; }
        .tp-section-num { font-size: 10px; letter-spacing: 0.4em; color: rgba(201,168,76,0.4); }
        .tp-section-title { font-family: 'Cormorant Garamond', serif; font-size: 2.1rem; font-weight: 300; margin: 0; }
        .tp-prose { font-size: 0.865rem; color: rgba(245,240,232,0.6); line-height: 1.9; }
        .tp-prose p { margin: 0 0 1.4rem; }
        .tp-prose p:last-child { margin-bottom: 0; }
        .tp-highlight { display: flex; gap: 0.75rem; margin-bottom: 0.9rem; font-size: 0.83rem; color: rgba(245,240,232,0.72); }
        .tp-dot { width: 6px; height: 6px; background: #c9a84c; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
        .tp-day { display: grid; grid-template-columns: 68px 1fr; gap: 1.2rem; padding: 1.3rem 0; border-bottom: 1px solid #1a1a1a; }
        .tp-day:first-of-type { border-top: 1px solid #1a1a1a; }
        .tp-day-num { font-family: 'Cormorant Garamond', serif; font-size: 1.55rem; color: #c9a84c; line-height: 1; }
        .tp-day-title { font-weight: 600; font-size: 0.84rem; margin-bottom: 0.35rem; }
        .tp-day-desc { font-size: 0.77rem; color: rgba(245,240,232,0.46); line-height: 1.6; }
        .tp-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .tp-list-head { font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: #c9a84c; margin-bottom: 1.4rem; }
        .tp-list { list-style: none; padding: 0; margin: 0; }
        .tp-list li { font-size: 0.77rem; margin-bottom: 0.7rem; color: rgba(245,240,232,0.6); display: flex; gap: 0.55rem; line-height: 1.55; }
        .tp-cta { padding: 6rem 0; border-top: 1px solid #1a1a1a; text-align: center; }
        .tp-cta-title { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300; margin: 0 0 2rem; }
        .tp-gold { font-style: italic; color: #c9a84c; }
        .tp-btn-reserve {
          display: block; background: #c9a84c; color: #000; padding: 1rem;
          text-align: center; text-decoration: none; font-weight: 700;
          text-transform: uppercase; font-size: 11px; letter-spacing: 0.22em;
          border-radius: 3px; max-width: 280px; margin: 0 auto;
        }

        /* SIDEBAR */
        .tp-sidebar { position: sticky; top: 1.5rem; padding-top: 4rem; }

        /* CARDS */
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
        .sb-btn--solid  { background: #f5f0e8; color: #0a0a0a; }
        .sb-btn--gold   { background: #c9a84c; color: #0a0a0a; }
        .sb-btn--ghost  { background: transparent; color: #c9a84c; border: 1px solid #c9a84c; }

        /* EXPERT CARD */
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

        /* PREP */
        .sb-prep-card { background: #111; }
        .sb-prep-btn {
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          padding: 1rem 1.5rem; text-decoration: none;
          color: rgba(245,240,232,0.65); font-size: 0.85rem; font-weight: 500;
          transition: color 0.2s, background 0.2s; width: 100%;
        }
        .sb-prep-btn:hover { color: #c9a84c; background: #161616; }

        /* RESPONSIVE */
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

      <div className="tp-hero">
        <div className="tp-hero-main"><img src={TREK.heroImages[0]} alt={TREK.title} /></div>
        <div className="tp-hero-side">
          <img src={TREK.heroImages[1]} alt="Trek view 1" />
          <img src={TREK.heroImages[2]} alt="Trek view 2" />
        </div>
      </div>

      <div className="tp-outer">

        <div className="tp-left">
          <div className="tp-title-block">
            <div className="tp-breadcrumb">
              {TREK.breadcrumb.map((c, i) => (
                <span key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {i > 0 && <span>›</span>}
                  {c.href === '#' ? <span>{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
                </span>
              ))}
            </div>
            <h1 className="tp-page-title">{TREK.title}</h1>
            <p className="tp-description">{TREK.description}</p>
          </div>

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

          <section className="tp-section">
            <div className="tp-section-header"><span className="tp-section-num">01</span><h2 className="tp-section-title">Highlights</h2></div>
            {TREK.highlights.map((h, i) => (
              <div key={i} className="tp-highlight"><div className="tp-dot" /><span>{h}</span></div>
            ))}
          </section>

          <section className="tp-section">
            <div className="tp-section-header"><span className="tp-section-num">02</span><h2 className="tp-section-title">Overview</h2></div>
            <div className="tp-prose">{TREK.overview.map((p, i) => <p key={i}>{p}</p>)}</div>
          </section>

          <section className="tp-section">
            <div className="tp-section-header"><span className="tp-section-num">03</span><h2 className="tp-section-title">Itinerary</h2></div>
            {TREK.itinerary.map((d) => (
              <div key={d.day} className="tp-day">
                <div className="tp-day-num">{String(d.day).padStart(2, '0')}</div>
                <div>
                  <div className="tp-day-title">{d.title}</div>
                  <div className="tp-day-desc">{d.description}</div>
                </div>
              </div>
            ))}
          </section>

          <section className="tp-section">
            <div className="tp-two-col">
              <div>
                <h3 className="tp-list-head">What's Included</h3>
                <ul className="tp-list">
                  {TREK.included.map((x, i) => <li key={i}><span style={{color:'#c9a84c',flexShrink:0}}>✓</span>{x}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="tp-list-head">What's Excluded</h3>
                <ul className="tp-list">
                  {TREK.excluded.map((x, i) => <li key={i}><span style={{color:'rgba(245,240,232,0.28)',flexShrink:0}}>✕</span>{x}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section className="tp-section">
            <div className="tp-section-header"><span className="tp-section-num">04</span><h2 className="tp-section-title">Important Notes</h2></div>
            <ul className="tp-list">
              {TREK.notes.map((n, i) => <li key={i}><span style={{color:'#c9a84c',flexShrink:0}}>◆</span>{n}</li>)}
            </ul>
          </section>

          <div className="tp-cta">
            <h2 className="tp-cta-title">Ready for <br /><span className="tp-gold">Everest?</span></h2>
            <Link href="/contact" className="tp-btn-reserve">Reserve Your Spot</Link>
          </div>
        </div>

        <div className="tp-sidebar">
          <Sidebar />
        </div>

      </div>
    </main>
  );
}