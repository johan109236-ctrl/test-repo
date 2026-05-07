'use client';

import Link from 'next/link';

// ── EDIT CONTENT HERE ─────────────────────────────────────────────────────────
// To reuse this template for another trek, change the values below.

const TREK = {
  title: 'Everest Base Camp Trek',         // Page heading
  duration: '16 Days',
  difficulty: 'Challenging',
  elevation: '5,545 m / 18,192 ft',
  season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
  groupSize: '2 or more',
  activity: 'Trekking / Hiking',
  accommodation: 'Tea House & Hotel',
  heroImage: '/package/everest-base.jpg',  // Image path in /public

  // Breadcrumb — adjust per region
  breadcrumb: [
    { label: 'Nepal', href: '/Nepal' },
    { label: 'Everest', href: '/Nepal#trekking' },
    { label: 'Everest Base Camp Trek', href: '#' },
  ],

  // Short description under title
  description: `The Everest Base Camp (EBC) trek is a demanding high-altitude journey that requires
careful preparation, primarily focused on altitude acclimatization. The trek typically starts after
a flight to Lukla (2,860m) and reaches EBC at 5,364m, often including a climb to Kala Patthar
(5,545m) for the best views. This 16-day adventure is more than reaching a landmark — it's a deep
connection with the colossal power of the world's highest mountains and the rich, resilient Buddhist
culture of the Sherpa people.`,

  // Bullet highlights
  highlights: [
    'Stand at Everest Base Camp (5,364m) — the legendary starting point of Everest expeditions',
    'Climb Kala Patthar (5,545m) for the most iconic sunrise view of Mount Everest',
    'Take the thrilling scenic flight to Lukla airport, gateway to the Khumbu region',
    'Explore Namche Bazaar, the vibrant Sherpa capital with its weekend market',
    'Essential acclimatization days ensure your safety at high altitude',
    'Experience authentic Sherpa culture, monasteries, and Buddhist traditions',
    'Trek through Sagarmatha National Park, a UNESCO World Heritage Site',
    'Witness panoramic views of Ama Dablam, Lhotse, Nuptse, and countless Himalayan giants',
    'Optional alternative routes available for experienced trekkers',
  ],

  // Overview paragraphs — add as many as needed
  overview: [
    `The Everest Base Camp trek is an iconic journey of challenge and discovery in the high Himalayas.
The adventure begins with a thrilling flight to Lukla, the starting point for trekking through the
protected Sagarmatha National Park. Over two weeks, the trail leads through traditional Sherpa villages
like Phakding and across dramatic suspension bridges to the vibrant hub of Namche Bazaar.`,

    `This itinerary is deliberately paced with essential acclimatization days in Namche and Dingboche,
ensuring safety and providing spectacular views of peaks such as Ama Dablam as you ascend. Success on
the EBC trek relies heavily on physical and logistical preparation — begin a rigorous training regimen
2–3 months before your trip, focusing on cardiovascular endurance and leg strength.`,

    `The trek culminates at Everest Base Camp (5,364m), followed by the unforgettable pre-dawn climb
to Kala Patthar (approx. 5,545m). This vantage point offers the most spectacular and humbling sight:
sunrise over Mount Everest. The final leg is a reflective descent and a flight back to Kathmandu,
completing this immensely rewarding Himalayan odyssey.`,

    `NOTE: We strive to stick to our planned itinerary, but sometimes things happen beyond our control —
flight issues, bad weather, natural disasters, or a trekker's health. When these arise, we'll find the
best possible solutions. We highly recommend arriving a day or two early to rest and prepare.`,
  ],

  // Day-by-day itinerary
  itinerary: [
    { day: 1,  title: 'Arrival in Kathmandu (1,400 m / 4,593 ft)',                          description: 'Airport pick-up and transportation provided to hotel.' },
    { day: 2,  title: 'Half-day city tour & trek briefing',                                  description: 'Afternoon trek briefing & preparation. Welcome dinner at a traditional Nepali restaurant.' },
    { day: 3,  title: 'Fly to Lukla (2,840 m). Trek to Phakding (2,610 m)',                  description: '3–4 hours of trekking through the Dudh Koshi valley.' },
    { day: 4,  title: 'Trek to Namche Bazaar (3,450 m / 11,318 ft)',                         description: '6–7 hours. Cross dramatic suspension bridges over the Dudh Koshi river.' },
    { day: 5,  title: 'Namche Bazaar — Acclimatization Rest Day',                            description: 'Explore Namche, visit the Sherpa museum, or hike to Everest View Hotel for panoramic peaks.' },
    { day: 6,  title: 'Trek to Phortse (3,810 m / 12,500 ft)',                               description: '5–6 hours through rhododendron forests with views of Ama Dablam.' },
    { day: 7,  title: 'Trek to Dingboche (4,350 m / 14,271 ft)',                             description: '5–6 hours. The terrain becomes increasingly alpine and dramatic.' },
    { day: 8,  title: 'Dingboche — Acclimatization Rest Day',                                description: 'Short acclimatization hike to Nagarjun Hill for views of Island Peak and Makalu.' },
    { day: 9,  title: 'Trek to Lobuche (4,910 m / 16,108 ft)',                               description: '5–6 hours along the Khumbu glacier moraine. Views of Nuptse and Pumori.' },
    { day: 10, title: 'Trek to Gorakshep & Everest Base Camp (5,364 m)',                     description: '3 hours to Gorakshep, then 4 hours to EBC and back. Overnight at Gorakshep.' },
    { day: 11, title: 'Kala Patthar sunrise (5,545 m). Trek to Pheriche (4,240 m)',          description: 'Early morning climb for the iconic Everest sunrise. Descend to Pheriche (5–6 hours total).' },
    { day: 12, title: 'Trek to Namche Bazaar (3,450 m)',                                     description: 'Long descent day back to the comforts of Namche.' },
    { day: 13, title: 'Trek to Phakding (2,610 m / 8,562 ft)',                               description: 'Relaxed descent through familiar valleys and villages.' },
    { day: 14, title: 'Trek to Lukla (2,840 m / 9,317 ft)',                                  description: 'Final trekking day — celebrate your achievement!' },
    { day: 15, title: 'Return flight to Kathmandu',                                           description: 'Scenic flight back. Free afternoon for shopping or relaxation.' },
    { day: 16, title: 'Departure Day',                                                        description: 'Transportation provided to Tribhuvan International Airport. Safe travels!' },
  ],

  // Included in price
  included: [
    'All essential permits (Sagarmatha National Park + Khumbu Pasang Lhamu Rural Municipality)',
    'Airport transportation to/from Kathmandu hotels per arrival/departure dates',
    'Three-star, twin-bed hotel accommodation in Kathmandu (4 & 5-star available at extra charge)',
    'Welcome dinner at a traditional Nepali restaurant',
    'Half-day guided Kathmandu sightseeing tour (entrance fees + 1 UNESCO site)',
    'All government and local taxes',
    'All ground transportation to/from destinations listed in itinerary',
    'Teahouse overnight accommodation in twin-bed room (shared)',
    'Professional, expert trekking Guide/Group Leader and Porter (related expenses)',
    'Meals during trek: breakfast, lunch, and dinner',
    'Health & Safety Equipment: oxygen cans, medical kit, oximeter, blood pressure monitor, satellite phone',
    'Sleeping bag and down jacket provided during trek',
    'Nepal Himal Adventures souvenirs: Duffel bag, T-shirt, Sun hat, Trekking Map, Buff, Sleeping Bag, Trip completion certificate',
  ],

  // Excluded from price
  excluded: [
    'Nepal visa fees',
    'All personal expenses including food while not on trek',
    'International flight fares',
    'Emergency medical rescue / evacuation expenses',
    'Staff tipping',
    'Extra night accommodation in Kathmandu on early arrival or late departures',
    'Travel or medical insurance',
    'Optional tours, sightseeing, or activities during free time',
    'Snacks during trek',
    'Other personal expenses — laundry, battery charges, hot shower, etc.',
  ],

  // Important notes
  notes: [
    'For every two participants, one porter is assigned. Each porter carries a maximum of 25 kg / 55 lbs.',
    'Your duffel bag should weigh no more than 12.5 kg / 27.56 lbs. per client.',
    'You must bring your own daypack with waterproof cover for daily necessities.',
    'Non-trekking luggage can be stored at your hotel in Kathmandu.',
    'Down jacket included — USD 150 charge applies for loss or significant damage.',
    'Sleeping bag included — USD 150 charge applies for loss or significant damage.',
  ],
};
// ── END EDIT ──────────────────────────────────────────────────────────────────

export default function EverestBaseCampPage() {
  return (
    <main id="trek-page">
      <style>{`
        #trek-page {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* Hero */
        .tp-hero {
          position: relative;
          height: 65vh;
          min-height: 440px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding-bottom: 3rem;
        }

        .tp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%);
        }

        .tp-hero-content {
          position: relative;
          z-index: 2;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
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
          margin-bottom: 1rem;
        }

        .tp-breadcrumb a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.3s;
        }

        .tp-breadcrumb a:hover { color: #c9a84c; }

        .tp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
          line-height: 1.05;
        }

        /* Container */
        .tp-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Quick info bar */
        .tp-info-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background-color: #1a1a1a;
          margin-bottom: 5rem;
        }

        @media (max-width: 768px) { .tp-info-bar { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .tp-info-bar { grid-template-columns: 1fr; } }

        .tp-info-item {
          background-color: #0d0d0d;
          padding: 1.5rem;
        }

        .tp-info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.6);
          margin-bottom: 0.35rem;
        }

        .tp-info-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: #f5f0e8;
          letter-spacing: 0.03em;
        }

        /* Top section — desc + book */
        .tp-top {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: start;
          padding: 4rem 0;
          border-bottom: 1px solid #1a1a1a;
        }

        @media (max-width: 768px) { .tp-top { grid-template-columns: 1fr; } }

        .tp-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245,240,232,0.6);
          line-height: 1.9;
          letter-spacing: 0.02em;
        }

        .tp-book-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 200px;
        }

        .tp-btn-primary {
          display: block;
          padding: 1rem 2rem;
          background-color: #c9a84c;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          transition: background-color 0.3s;
        }

        .tp-btn-primary:hover { background-color: #e8c97a; }

        .tp-btn-outline {
          display: block;
          padding: 1rem 2rem;
          border: 1px solid rgba(201,168,76,0.4);
          color: #c9a84c;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          transition: background-color 0.3s, color 0.3s;
        }

        .tp-btn-outline:hover { background-color: #c9a84c; color: #000; }

        /* Section blocks */
        .tp-section {
          padding: 5rem 0;
          border-bottom: 1px solid #1a1a1a;
        }

        .tp-section-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .tp-section-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(201,168,76,0.4);
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .tp-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
        }

        /* Highlights */
        .tp-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tp-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(245,240,232,0.65);
          line-height: 1.7;
        }

        .tp-highlight-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #c9a84c;
          flex-shrink: 0;
          margin-top: 6px;
        }

        /* Overview */
        .tp-overview p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245,240,232,0.6);
          line-height: 1.9;
          margin: 0 0 1.25rem;
        }

        /* Itinerary */
        .tp-itinerary {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tp-day {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid #1a1a1a;
          align-items: start;
        }

        .tp-day:last-child { border-bottom: none; }

        .tp-day-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #c9a84c;
          line-height: 1;
        }

        .tp-day-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.5);
        }

        .tp-day-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #f5f0e8;
          letter-spacing: 0.03em;
          margin-bottom: 0.35rem;
        }

        .tp-day-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: rgba(245,240,232,0.5);
          line-height: 1.7;
        }

        /* Included / Excluded */
        .tp-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        @media (max-width: 768px) { .tp-two-col { grid-template-columns: 1fr; } }

        .tp-list-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 1.5rem;
        }

        .tp-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tp-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: rgba(245,240,232,0.55);
          line-height: 1.6;
        }

        .tp-list-icon-yes { color: #34d399; flex-shrink: 0; margin-top: 2px; }
        .tp-list-icon-no  { color: #f87171; flex-shrink: 0; margin-top: 2px; }

        /* Notes */
        .tp-notes {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tp-note {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border: 1px solid rgba(201,168,76,0.15);
          background-color: rgba(201,168,76,0.03);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: rgba(245,240,232,0.55);
          line-height: 1.6;
        }

        .tp-note-icon {
          color: #c9a84c;
          flex-shrink: 0;
          margin-top: 1px;
          font-size: 0.7rem;
          letter-spacing: 0;
        }

        /* CTA */
        .tp-cta {
          padding: 5rem 0 6rem;
          text-align: center;
        }

        .tp-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 1.5rem;
          line-height: 1.1;
        }

        .tp-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .tp-cta-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245,240,232,0.5);
          max-width: 36rem;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
        }

        .tp-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>

      {/* Hero */}
      <div className="tp-hero">
        <img src={TREK.heroImage} alt={TREK.title} className="tp-hero-img" />
        <div className="tp-hero-overlay" />
        <div className="tp-hero-content">
          <div className="tp-breadcrumb">
            {TREK.breadcrumb.map((crumb, i) => (
              <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {i > 0 && <span>›</span>}
                {crumb.href === '#'
                  ? <span style={{ color: 'rgba(255,255,255,0.3)' }}>{crumb.label}</span>
                  : <Link href={crumb.href}>{crumb.label}</Link>
                }
              </span>
            ))}
          </div>
          <h1 className="tp-hero-title">{TREK.title}</h1>
        </div>
      </div>

      {/* Quick info bar */}
      <div className="tp-container">
        <div className="tp-info-bar">
          {[
            { label: 'Duration',      value: TREK.duration },
            { label: 'Difficulty',    value: TREK.difficulty },
            { label: 'Max Elevation', value: TREK.elevation },
            { label: 'Best Season',   value: TREK.season },
            { label: 'Group Size',    value: TREK.groupSize },
            { label: 'Activity',      value: TREK.activity },
          ].map((item) => (
            <div key={item.label} className="tp-info-item">
              <div className="tp-info-label">{item.label}</div>
              <div className="tp-info-value">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Description + Book */}
        <div className="tp-top">
          <p className="tp-desc">{TREK.description}</p>
          <div className="tp-book-col">
            <Link href="/contact" className="tp-btn-primary">Book Now</Link>
            <Link href="/contact" className="tp-btn-outline">Inquire Now</Link>
          </div>
        </div>

        {/* 01 Highlights */}
        <div className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">01</span>
            <h2 className="tp-section-title">Trek Highlights</h2>
          </div>
          <div className="tp-highlights">
            {TREK.highlights.map((h, i) => (
              <div key={i} className="tp-highlight-item">
                <span className="tp-highlight-dot" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 02 Overview */}
        <div className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">02</span>
            <h2 className="tp-section-title">Trek Overview</h2>
          </div>
          <div className="tp-overview">
            {TREK.overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* 03 Itinerary */}
        <div className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">03</span>
            <h2 className="tp-section-title">Detailed Itinerary</h2>
          </div>
          <div className="tp-itinerary">
            {TREK.itinerary.map((day) => (
              <div key={day.day} className="tp-day">
                <div>
                  <div className="tp-day-label">Day</div>
                  <div className="tp-day-number">{String(day.day).padStart(2, '0')}</div>
                </div>
                <div>
                  <div className="tp-day-title">{day.title}</div>
                  <div className="tp-day-desc">{day.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 04 Included / Excluded */}
        <div className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">04</span>
            <h2 className="tp-section-title">What&apos;s Included</h2>
          </div>
          <div className="tp-two-col">
            <div>
              <div className="tp-list-heading">Included</div>
              <ul className="tp-list">
                {TREK.included.map((item, i) => (
                  <li key={i} className="tp-list-item">
                    <span className="tp-list-icon-yes">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="tp-list-heading">Excluded</div>
              <ul className="tp-list">
                {TREK.excluded.map((item, i) => (
                  <li key={i} className="tp-list-item">
                    <span className="tp-list-icon-no">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 05 Important Notes */}
        <div className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">05</span>
            <h2 className="tp-section-title">Important Information</h2>
          </div>
          <div className="tp-notes">
            {TREK.notes.map((note, i) => (
              <div key={i} className="tp-note">
                <span className="tp-note-icon">◆</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="tp-cta">
          <h2 className="tp-cta-heading">
            Ready for Your
            <br />
            <em className="tp-gold">Everest Adventure?</em>
          </h2>
          <p className="tp-cta-text">
            Join us for an unforgettable journey to the base of the world&apos;s highest mountain.
          </p>
          <div className="tp-cta-btns">
            <Link href="/contact" className="tp-btn-primary">Book This Trek</Link>
            <Link href="/Nepal" className="tp-btn-outline">View All Treks</Link>
          </div>
        </div>

      </div>
    </main>
  );
}