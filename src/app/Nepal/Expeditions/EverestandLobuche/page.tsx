'use client';

import Link from 'next/link';

// ── EDIT CONTENT HERE ─────────────────────────────────────────────────────────
const TREK = {
  title: 'Everest Base Camp & Lobuche East Peak',
  duration: '20 Days',
  difficulty: 'Challenging / Semi-Technical',
  elevation: '6,119 m / 20,075 ft',
  season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
  groupSize: '2 or more',
  activity: 'Strenuous Trekking / Moderate Technical Climbing',
  accommodation: 'Tea House & Hotel',
  heroImages: [
    '/assets/images/lobuche-east.jpg',
    '/assets/images/everest-base-camp.jpg',
    '/assets/images/lobuche-summit.jpg'
  ],
  breadcrumb: [
    { label: 'Nepal', href: '/Nepal' },
    { label: 'Everest', href: '/Nepal#trekking' },
    { label: 'Everest Base Camp & Lobuche East Peak', href: '#' },
  ],

  description: `Transition from the iconic trails of the Khumbu to the sharp ridges of Lobuche East, mastering crampons, fixed ropes, and alpine terrain to conquer a true Himalayan 6,000m peak. This expedition blends the legendary Everest Base Camp journey with a rewarding semi-technical summit experience.`,

  highlights: [
    'Summit Lobuche East Peak (6,119m), a true Himalayan mountaineering achievement',
    'Stand at Everest Base Camp (5,364m), the legendary gateway to Everest expeditions',
    'Witness sunrise over Everest from Kala Patthar (5,545m)',
    'Enjoy 360° panoramic views of Everest, Lhotse, Nuptse, Ama Dablam, and Makalu',
    'Experience the spiritual heart of the Khumbu at Tengboche Monastery',
    'Cross the memorial ridge at Thukla Pass honoring Everest climbers',
    'Train with crampons and fixed ropes during the technical climbing phase',
    'Immerse yourself in authentic Sherpa culture and mountain hospitality',
  ],

  overview: [
    `The Everest Base Camp and Lobuche East expedition combines one of the world's most iconic trekking routes with the thrill of a semi-technical Himalayan summit. Beginning with a scenic flight to Lukla, the journey follows the classic Everest trail through Namche Bazaar, Tengboche, and Dingboche before reaching Everest Base Camp (5,364m) and Kala Patthar (5,545m).`,

    `Designed for strong trekkers seeking an introduction to Himalayan mountaineering, this itinerary emphasizes gradual acclimatization before transitioning to Lobuche East Base Camp and High Camp. Climbers gain practical experience with crampons, harnesses, and fixed ropes before making the summit push.`,

    `The dramatic summit of Lobuche East (6,119m) offers one of the finest viewpoints in Nepal, with spectacular close-up panoramas of Everest, Lhotse, Nuptse, Ama Dablam, and the Khumbu Glacier. This expedition bridges the gap between trekking and true alpine climbing, creating an unforgettable Himalayan achievement.`,

    `NOTE: Weather, flight delays, political situations, or health conditions may require itinerary adjustments. We strongly recommend arriving in Kathmandu 1–2 days early and allowing buffer days before international flights to accommodate possible Lukla flight delays.`,
  ],

  itinerary: [
    { day: 1, title: 'Arrival in Kathmandu (1,400 m / 4,593 ft)', description: 'Airport pickup, hotel check-in, and rest.' },

    { day: 2, title: 'Kathmandu Half-Day City Tour', description: 'Visit major cultural sites, trek briefing, gear check, and welcome dinner at a traditional Nepali restaurant.' },

    { day: 3, title: 'Fly to Lukla → Trek to Phakding', description: '35-minute flight (or drive to Ramechhap + short flight). Trek to Phakding (3–4 hrs).' },

    { day: 4, title: 'Trek to Namche Bazaar (3,440 m)', description: '5–6 hours. First major ascent into the Khumbu region.' },

    { day: 5, title: 'Namche Bazaar — Acclimatization Day', description: 'Hike to Everest View Hotel for panoramic mountain views before returning to Namche.' },

    { day: 6, title: 'Trek to Tengboche Monastery (3,860 m)', description: '5–6 hours with stunning views of Ama Dablam.' },

    { day: 7, title: 'Trek to Dingboche (4,410 m)', description: '5–6 hours through alpine terrain.' },

    { day: 8, title: 'Chukhung Valley Acclimatization Day', description: 'Day hike to 4,730m before returning to Dingboche to sleep low.' },

    { day: 9, title: 'Trek to Lobuche (4,930 m)', description: '5–6 hours via the Thukla Pass memorial ridge.' },

    { day: 10, title: 'Everest Base Camp → Gorak Shep', description: 'Trek to Everest Base Camp (5,364m), then return to Gorak Shep. 7–8 hrs.' },

    { day: 11, title: 'Kala Patthar Sunrise → Lobuche', description: 'Pre-dawn hike to Kala Patthar (5,555m) followed by descent to Lobuche.' },

    { day: 12, title: 'Trek to Lobuche East Base Camp', description: 'Move to base camp, equipment check, climbing briefing, and preparation.' },

    { day: 13, title: 'Move to High Camp — Acclimatization', description: 'Short climb to High Camp (~5,400m). Rope and crampon practice if needed.' },

    { day: 14, title: 'Summit Lobuche East (6,119 m)', description: 'Early alpine summit push and descent back to Base Camp. 10–11 hours.' },

    { day: 15, title: 'Spare / Weather Contingency Day', description: 'Reserved for summit flexibility or recovery after climbing.' },

    { day: 16, title: 'Trek to Pangboche (3,930 m)', description: 'Long descent day through alpine valleys.' },

    { day: 17, title: 'Trek to Namche Bazaar (3,440 m)', description: 'Return to the vibrant Sherpa hub.' },

    { day: 18, title: 'Trek to Lukla (2,840 m)', description: 'Final trekking day and celebration with the team.' },

    { day: 19, title: 'Fly Back to Kathmandu', description: 'Morning flight from Lukla and overnight hotel stay in Kathmandu. Farewell dinner.' },

    { day: 20, title: 'Final Departure', description: 'Transfer to Tribhuvan International Airport.' },
  ],

  included: [
    'All essential permits including Sagarmatha National Park, Khumbu Local Permit, and Lobuche East climbing permit',
    'Airport transportation to/from Kathmandu hotels and airport',
    'Three-star, twin-bed hotel accommodation in Kathmandu (4 & 5-star available at extra charge)',
    'Welcome dinner at a traditional Nepali restaurant',
    'Half-day guided Kathmandu sightseeing tour with UNESCO heritage entrance fees',
    'All government and local taxes',
    'All transportation listed in itinerary',
    'Teahouse accommodation during trek and tented accommodation at Lobuche Base Camp',
    'Professional climbing guide, trekking guide, and porter support',
    'Meals during trek: breakfast, lunch, and dinner',
    'Health & safety equipment: oxygen canisters, medical kit, oximeter, blood pressure monitor, satellite phone',
    'Sleeping bag and down jacket during expedition',
    'Nepal Himal Adventures souvenirs: duffel bag, T-shirt, sun hat, trekking map, buff, sleeping bag, trip completion certificate',
  ],

  excluded: [
    'Nepal visa fees',
    'International flight tickets',
    'Personal expenses outside trekking period',
    'Emergency medical rescue or helicopter evacuation',
    'Staff tipping',
    'Extra hotel nights in Kathmandu due to early arrival or delayed departure',
    'Travel and medical insurance',
    'Optional tours and activities during free time',
    'Snacks during trek',
    'Laundry, charging, hot showers, and personal expenses',
  ],

  notes: [
    'One porter is assigned for every two participants (maximum load: 25kg total).',
    'Duffel bag weight should not exceed 12.5kg / 27.5 lbs per participant.',
    'Bring your own waterproof daypack for valuables and daily essentials.',
    'Non-trekking luggage can be safely stored in Kathmandu.',
    'Down jacket included — USD 150 fee applies for loss or severe damage.',
    'Sleeping bag included — USD 150 fee applies for loss or severe damage.',
  ],
};

export default function EverestBaseCampPage() {
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
          <img src={TREK.heroImages[0]} alt={TREK.title} />
        </div>
        <div className="tp-hero-side">
          <img src={TREK.heroImages[1]} alt="Trek detail 1" />
          <img src={TREK.heroImages[2]} alt="Trek detail 2" />
        </div>
      </div>

      {/* 2. Title Section */}
      <div className="tp-hero-content">
        <div className="tp-breadcrumb">
          {TREK.breadcrumb.map((crumb, i) => (
            <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {i > 0 && <span>›</span>}
              {crumb.href === '#' 
                ? <span>{crumb.label}</span> 
                : <Link href={crumb.href}>{crumb.label}</Link>
              }
            </span>
          ))}
        </div>
        <h1 className="tp-hero-title">{TREK.title}</h1>
      </div>

      {/* 3. Main Body */}
      <div className="tp-container">
        <div className="tp-info-bar">
          {[
            { label: 'Duration', value: TREK.duration },
            { label: 'Difficulty', value: TREK.difficulty },
            { label: 'Elevation', value: TREK.elevation },
            { label: 'Season', value: TREK.season },
            { label: 'Group', value: TREK.groupSize },
            { label: 'Activity', value: TREK.activity },
          ].map((item) => (
            <div key={item.label} className="tp-info-item">
              <div className="tp-info-label">{item.label}</div>
              <div className="tp-info-value">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="tp-top">
          <p className="tp-desc">{TREK.description}</p>
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
          <div className="tp-highlights">
            {TREK.highlights.map((h, i) => (
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
            {TREK.overview.map((p, i) => <p key={i} style={{marginBottom: '1.5rem'}}>{p}</p>)}
          </div>
        </section>

        {/* Itinerary */}
        <section className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">03</span>
            <h2 className="tp-section-title">Itinerary</h2>
          </div>
          {TREK.itinerary.map((day) => (
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
              <h3 className="tp-list-heading">What's Included</h3>
              <ul className="tp-list">
                {TREK.included.map((item, i) => <li key={i} className="tp-list-item"><span>✓</span> {item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="tp-list-heading">What's Excluded</h3>
              <ul className="tp-list">
                {TREK.excluded.map((item, i) => <li key={i} className="tp-list-item"><span>✕</span> {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Important Info */}
        <section className="tp-section">
          <div className="tp-section-header">
            <span className="tp-section-number">04</span>
            <h2 className="tp-section-title">Important Notes</h2>
          </div>
          <ul className="tp-list">
            {TREK.notes.map((note, i) => <li key={i} className="tp-list-item"><span>◆</span> {note}</li>)}
          </ul>
        </section>

        {/* Final CTA */}
        <div className="tp-cta">
          <h2 className="tp-cta-heading">Ready for <br/><span className="tp-gold">Everest?</span></h2>
          <div className="tp-book-col" style={{ margin: '0 auto' }}>
            <Link href="/contact" className="tp-btn-primary">Reserve Your Spot</Link>
          </div>
        </div>
      </div>
    </main>
  );
}