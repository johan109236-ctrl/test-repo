'use client';

import Link from 'next/link';

// ── EDIT CONTENT HERE ─────────────────────────────────────────────────────────
const TREK = {
  title: 'Everest High Passes and Island Peak',
  duration: '24 Days',
  difficulty: 'Challenging / Semi-Technical',
  elevation: '6,187 m / 20,299 ft',
  season: 'Feb–Jun & Sep–Dec',
  groupSize: '2 or more',
  activity: 'Multi-Activity',
  accommodation: 'Tea House & Hotel',

  heroImages: [
    '/assets/images/everest-high-passes.jpg',
    '/assets/images/island-peak.jpg',
    '/assets/images/gokyo-lakes.jpg'
  ],

  breadcrumb: [
    { label: 'Nepal', href: '/Nepal' },
    { label: 'Everest', href: '/Nepal#trekking' },
    { label: 'Everest High Passes and Island Peak', href: '#' },
  ],

  description: `The ultimate Himalayan gauntlet, conquering three formidable high passes and the glaciated summit of Island Peak for the most comprehensive experience in the Everest region. This 24-day expedition combines the legendary Everest Base Camp route, the pristine Gokyo Valley, and a technical summit ascent to Island Peak (6,187m), creating the definitive Everest grand circuit.`,

  highlights: [
    'Scenic Lukla flight into the legendary Khumbu region',
    'Conquer the Three High Passes: Renjo La, Cho La, and Kongma La',
    'Experience the serenity of the turquoise Gokyo Lakes',
    'Climb Gokyo Ri for panoramic views of Everest, Lhotse, Makalu, and Cho Oyu',
    'Reach Everest Base Camp (5,364m)',
    'Witness the unforgettable Kala Patthar sunrise over Mount Everest',
    'Summit Island Peak (6,187m) — a technical mountaineering achievement',
    'Sustained trekking above 4,000m for true high-altitude immersion',
    'Complete the ultimate Khumbu Grand Slam adventure',
  ],

  overview: [
    `The Everest High Passes and Island Peak expedition is a premier high-altitude challenge requiring exceptional endurance and basic technical mountaineering skills. Beginning with a dramatic flight to Lukla (2,846m), the journey ventures deep into the Khumbu region to conquer the legendary Three Passes — Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) — before culminating with the ascent of Island Peak (6,187m).`,

    `This carefully designed itinerary prioritizes strategic acclimatization, essential for safely crossing multiple 5,000m+ passes and reaching a 6,000m summit. Success depends on strong physical conditioning, cardiovascular fitness, lower-body strength, and preparation for rugged terrain and high-altitude exposure. Familiarity with crampons and ice axes is highly beneficial for the summit push.`,

    `The adventure extends far beyond the standard Everest Base Camp trek, leading through remote alpine valleys, the pristine turquoise Gokyo Lakes, and the immense Ngozumpa Glacier. Along the way, trekkers enjoy unmatched views of Everest, Lhotse, Makalu, and Cho Oyu — four of the world’s six highest mountains.`,

    `The expedition reaches its dramatic climax atop Island Peak (6,187m), rewarding climbers with breathtaking close-up views of the towering Lhotse South Wall. From sacred monasteries in Tengboche to the raw glaciated terrain of the high Himalayas, this journey represents one of the most complete and rewarding adventures in Nepal.`,

    `NOTE: While we strive to follow the planned itinerary, unforeseen circumstances such as weather conditions, flight delays, political changes, natural disasters, or health concerns may require adjustments. We highly recommend arriving one or two days early to prepare and allow flexibility for delays.`,
  ],

  itinerary: [
    {
      day: 1,
      title: 'Arrival in Kathmandu (1,400 m)',
      description: 'Arrival at Tribhuvan International Airport and transfer to hotel.'
    },
    {
      day: 2,
      title: 'Kathmandu City Tour & Trek Briefing',
      description: 'Half-day guided city tour, trek briefing, preparation, and welcome dinner at a traditional Nepali restaurant.'
    },
    {
      day: 3,
      title: 'Fly to Lukla (2,840 m) & Trek to Phakding (2,610 m)',
      description: '35-minute flight or drive via Manthali/Ramechhap, followed by a 3–4 hour trek to Phakding.'
    },
    {
      day: 4,
      title: 'Trek to Namche Bazaar (3,440 m)',
      description: '5–6 hours through forests and suspension bridges into the Sherpa capital.'
    },
    {
      day: 5,
      title: 'Acclimatization Day in Namche Bazaar',
      description: 'Hike to Hotel Everest View (3,880 m) and return for acclimatization.'
    },
    {
      day: 6,
      title: 'Trek to Phortse Thanga (3,680 m)',
      description: '5–6 hours through scenic alpine terrain.'
    },
    {
      day: 7,
      title: 'Trek to Machherma (4,470 m)',
      description: '5–6 hours trekking deeper into the Gokyo Valley.'
    },
    {
      day: 8,
      title: 'Trek to Gokyo (4,800 m)',
      description: '5–6 hours with spectacular mountain scenery.'
    },
    {
      day: 9,
      title: 'Gokyo Ri (5,483 m) Excursion',
      description: 'Hike to Gokyo Ri for panoramic Himalayan views before returning to Gokyo.'
    },
    {
      day: 10,
      title: 'Trek to Thangna (4,500 m)',
      description: '4–5 hours descending toward Cho La Pass.'
    },
    {
      day: 11,
      title: 'Cross Cho La Pass (5,368 m) & Trek to Dzongla (4,830 m)',
      description: '7–8 hours crossing one of the expedition’s major high passes.'
    },
    {
      day: 12,
      title: 'Trek to Lobuche (4,910 m)',
      description: '4–5 hours trekking through glacial landscapes.'
    },
    {
      day: 13,
      title: 'Kala Patthar (5,555 m) & Gorak Shep',
      description: 'Trek to Gorak Shep and hike Kala Patthar for iconic Everest views.'
    },
    {
      day: 14,
      title: 'Everest Base Camp (5,364 m) & Return to Lobuche',
      description: '8–9 hour journey to Everest Base Camp and return to Lobuche.'
    },
    {
      day: 15,
      title: 'Cross Kongma La Pass (5,535 m) & Trek to Chukhung (4,710 m)',
      description: '8–9 hours traversing another major high-altitude pass.'
    },
    {
      day: 16,
      title: 'Trek to Island Peak Base Camp (5,240 m)',
      description: '4–5 hours trek to base camp. Overnight in tented camp.'
    },
    {
      day: 17,
      title: 'Acclimatization Day at Island Peak Base Camp',
      description: 'Preparation and acclimatization for summit push.'
    },
    {
      day: 18,
      title: 'Summit Island Peak (6,187 m) & Return to Chukhung',
      description: '9–10 hour summit climb and descent back to Chukhung.'
    },
    {
      day: 19,
      title: 'Contingency / Spare Day',
      description: 'Reserved in case of harsh weather or climbing delays.'
    },
    {
      day: 20,
      title: 'Trek to Tengboche (3,860 m)',
      description: '6–7 hours descending through the Imja Valley.'
    },
    {
      day: 21,
      title: 'Trek to Namche Bazaar (3,440 m)',
      description: '5–6 hours via Khumjung village.'
    },
    {
      day: 22,
      title: 'Trek to Lukla (2,840 m)',
      description: '6–7 hour final trekking day.'
    },
    {
      day: 23,
      title: 'Fly Back to Kathmandu',
      description: 'Flight from Lukla or via Manthali/Ramechhap and overnight in Kathmandu.'
    },
    {
      day: 24,
      title: 'Departure Day',
      description: 'Transfer to Tribhuvan International Airport for your final departure.'
    },
  ],

  included: [
    'All essential permits including Island Peak climbing permit',
    'Airport transportation to/from Kathmandu hotels and airport',
    'Three-star twin-sharing hotel accommodation in Kathmandu',
    'Welcome dinner at a traditional Nepali restaurant',
    'Half-day guided Kathmandu sightseeing tour including entrance fees and one UNESCO heritage site',
    'All government and local taxes',
    'All ground transportation listed in itinerary',
    'Teahouse accommodation during trek and tented camp at Island Peak Base Camp',
    'Professional trekking guide/group leader and porter (related expenses included)',
    'Meals during trek: breakfast, lunch, and dinner',
    'Health & safety equipment: oxygen cans, medical kit, oximeter, blood pressure monitor, satellite phone',
    'Sleeping bag and down jacket during trek',
    'Nepal Himal Adventures souvenirs: Duffel bag, T-shirt, Sun hat, Trekking Map, Buff, Sleeping Bag, Trip completion certificate',
  ],

  excluded: [
    'Nepali visa fees',
    'Personal expenses including food while not trekking',
    'International airfare',
    'Emergency medical rescue or evacuation expenses',
    'Staff tipping',
    'Extra night accommodation in Kathmandu for early arrival or delayed departure',
    'Travel or medical insurance (high-altitude coverage strongly recommended)',
    'Optional sightseeing tours or activities',
    'Donations to locals or organizations',
    'Snacks during trek',
    'Laundry, charging, showers, and other personal expenses',
  ],

  notes: [
    'One porter is assigned for every two trekkers, carrying a maximum of 25 kg / 55 lbs total.',
    'Each client duffel bag should weigh no more than 12.5 kg / 27.56 lbs.',
    'Bring your own waterproof daypack for essentials such as cash, water, camera, sunscreen, and documents.',
    'Non-trekking luggage can be safely stored at the hotel in Kathmandu.',
    'A hooded down jacket is included. USD 150 fee applies for loss or major damage.',
    'A 4-season sleeping bag is included. USD 150 fee applies for loss or major damage.',
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