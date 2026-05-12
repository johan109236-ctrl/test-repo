'use client';

import Link from 'next/link';

// ── EDIT CONTENT HERE ─────────────────────────────────────────────────────────
const TREK = {
  title: 'Ama Dablam Expedition',
  duration: '29 Days',
  difficulty: 'Physically Demanding / Technically Difficult',
  elevation: '6,856 m / 22,487 ft',
  season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
  groupSize: '2 or more',
  activity: 'Trekking / Climbing',
  accommodation: 'Tea House / Hotel & Base Camp (Mini Tented Village)',

  heroImages: [
    '/assets/images/ama-dablam.jpg',
    '/assets/images/ama-dablam-climb.jpg',
    '/assets/images/khumbu.jpg'
  ],

  breadcrumb: [
    { label: 'Nepal', href: '/Nepal' },
    { label: 'Expeditions', href: '/Nepal#expeditions' },
    { label: 'Ama Dablam Expedition', href: '#' },
  ],

  description: `Between the whisper of prayer flags and the roar of mountain wind lies one of the Himalayas’ most iconic climbing challenges. The 29-day Ama Dablam Expedition blends cultural trekking through the Khumbu with one of the world’s most technically beautiful alpine ascents, culminating at the sharp summit of Ama Dablam (6,856m).`,

  highlights: [
    'Summit Ama Dablam (6,856m), one of the world’s most aesthetic peaks',
    'Witness the iconic “Mother’s Necklace” hanging glacier (Dablam)',
    'Climb the legendary Yellow Tower — the expedition’s most famous technical section',
    'Experience dramatic bird’s-eye views from high camps',
    'Enjoy unrivaled 360-degree Himalayan panoramas',
    'Trek through traditional Sherpa villages of the Khumbu region',
    'Visit Tengboche Monastery and experience Himalayan Buddhist culture',
    'A true “grail expedition” for seasoned climbers and alpinists',
  ],

  overview: [
    `The Ama Dablam Expedition is a world-renowned mountaineering challenge considered a rite of passage for experienced climbers. Rising to 6,856m, its iconic pyramid shape demands advanced technical ability across steep rock, ice, and mixed terrain. The journey begins with a flight to Lukla (2,846m) and follows the classic Khumbu route before diverting to Ama Dablam Base Camp.`,

    `This expedition requires strong technical proficiency, including confidence on fixed ropes, steep ice pitches, and exposed rock sections. Climbers should prepare with elite-level training at least six months prior, emphasizing cardiovascular endurance, upper-body strength, and climbing precision. Proper acclimatization and technical readiness are essential for safely navigating the mountain.`,

    `The itinerary is carefully designed to maximize acclimatization and climbing success. After trekking through Namche Bazaar, Tengboche, and Pangboche, climbers establish themselves at Ama Dablam Base Camp before beginning rotations through higher camps. The mountain’s legendary sections, including the Yellow Tower and exposed ridges, provide one of the most exciting technical climbing experiences in the Himalayas.`,

    `The expedition culminates at the breathtaking summit of Ama Dablam, offering unmatched close-up views of Everest, Lhotse, and Makalu. More than simply reaching the top, standing on the summit represents technical mastery, discipline, and resilience in one of the world’s most dramatic alpine environments.`,

    `NOTE: While we strive to follow the planned itinerary, circumstances beyond our control such as weather delays, flight cancellations, political conditions, natural events, or health concerns may require modifications. We strongly recommend arriving in Nepal one or two days early to allow flexibility and proper preparation.`,
  ],

  itinerary: [
    {
      day: 1,
      title: 'Arrival in Kathmandu (1,400 m / 4,593 ft)',
      description: 'Airport pick-up and transportation provided to hotel.'
    },
    {
      day: 2,
      title: 'Kathmandu City Tour & Trek Briefing',
      description: 'Half-day city tour, afternoon trek briefing, and welcome dinner at a traditional Nepali restaurant.'
    },
    {
      day: 3,
      title: 'Final Preparation Day in Kathmandu',
      description: 'Equipment checks, expedition briefing, and final preparations. Overnight at hotel.'
    },
    {
      day: 4,
      title: 'Fly to Lukla (2,840 m) & Trek to Phakding (2,610 m)',
      description: 'Flight to Lukla or via Manthali/Ramechhap followed by a 3–4 hour trek to Phakding.'
    },
    {
      day: 5,
      title: 'Trek to Namche Bazaar (3,440 m)',
      description: '5–6 hours through forests and suspension bridges to the Sherpa capital.'
    },
    {
      day: 6,
      title: 'Acclimatization Day in Namche Bazaar',
      description: 'Rest and acclimatization with optional hikes to nearby viewpoints.'
    },
    {
      day: 7,
      title: 'Trek to Tengboche Monastery (3,860 m)',
      description: '5–6 hour trek to the spiritual center of the Khumbu region.'
    },
    {
      day: 8,
      title: 'Trek to Pangboche (3,930 m)',
      description: 'Short 2–3 hour trek through scenic mountain landscapes.'
    },
    {
      day: 9,
      title: 'Trek to Ama Dablam Base Camp (4,600 m)',
      description: '5–6 hour ascent to base camp. Overnight in tented camp.'
    },
    {
      day: 10,
      title: 'Acclimatization & Rest Day',
      description: 'Acclimatization, training, and preparation at base camp.'
    },
    {
      day: 11,
      title: 'Ama Dablam Climbing Rotation Begins',
      description: 'Start of expedition climbing period with acclimatization rotations and camp establishment.'
    },
    {
      day: 12,
      title: 'Ama Dablam Climbing Period',
      description: 'Progressive climbing and acclimatization on the mountain.'
    },
    {
      day: 13,
      title: 'Ama Dablam Climbing Period',
      description: 'Technical climbing through fixed rope sections and ridge systems.'
    },
    {
      day: 14,
      title: 'Ama Dablam Climbing Period',
      description: 'Continued summit preparation and acclimatization.'
    },
    {
      day: 15,
      title: 'Ama Dablam Climbing Period',
      description: 'High camp rotation and technical preparation.'
    },
    {
      day: 16,
      title: 'Ama Dablam Climbing Period',
      description: 'Continued climbing schedule depending on weather and conditions.'
    },
    {
      day: 17,
      title: 'Ama Dablam Climbing Period',
      description: 'Advanced mountain progression and acclimatization.'
    },
    {
      day: 18,
      title: 'Ama Dablam Climbing Period',
      description: 'Potential summit window based on weather conditions.'
    },
    {
      day: 19,
      title: 'Ama Dablam Climbing Period',
      description: 'Additional summit attempt or reserve climbing day.'
    },
    {
      day: 20,
      title: 'Ama Dablam Climbing Period',
      description: 'Expedition flexibility for weather and climbing strategy.'
    },
    {
      day: 21,
      title: 'Ama Dablam Climbing Period',
      description: 'Technical climbing and summit progression.'
    },
    {
      day: 22,
      title: 'Ama Dablam Climbing Period',
      description: 'Continued climbing schedule.'
    },
    {
      day: 23,
      title: 'Ama Dablam Climbing Period',
      description: 'Additional reserve summit opportunity if required.'
    },
    {
      day: 24,
      title: 'Ama Dablam Climbing Period',
      description: 'Summit reserve and expedition contingency.'
    },
    {
      day: 25,
      title: 'Ama Dablam Climbing Period Ends',
      description: 'Final summit window and descent back to base camp.'
    },
    {
      day: 26,
      title: 'Trek Back to Namche Bazaar (3,440 m)',
      description: '6–7 hour descent through Pangboche and Tengboche.'
    },
    {
      day: 27,
      title: 'Trek to Lukla (2,840 m)',
      description: '6–7 hour final trekking day.'
    },
    {
      day: 28,
      title: 'Fly Back to Kathmandu',
      description: 'Flight from Lukla or via Manthali/Ramechhap. Overnight at hotel.'
    },
    {
      day: 29,
      title: 'Departure Day',
      description: 'Transfer to Tribhuvan International Airport for your final departure.'
    },
  ],

  included: [
    'All essential permits including expedition climbing permits',
    'Airport transportation to/from Kathmandu hotels and airport',
    'Three-star twin-sharing hotel accommodation in Kathmandu',
    'Welcome dinner at a traditional Nepali restaurant',
    'Half-day guided Kathmandu sightseeing tour including entrance fees and one UNESCO heritage site',
    'All government and local taxes',
    'All ground transportation listed in itinerary',
    'Tea house accommodation during trek and mini tented village accommodation at base camp',
    'Professional expedition guide/group leader and porter (related expenses included)',
    'Meals during trek: breakfast, lunch, and dinner',
    'Health & Safety Equipment: oxygen cans, medical kit, oximeter, blood pressure monitor, satellite phone',
    'Sleeping bag and down jacket during trek',
    'Nepal Himal Adventures souvenirs: Duffel bag, T-shirt, Sun hat, Trekking Map, Buff, Sleeping Bag, Trip completion certificate',
  ],

  excluded: [
    'Nepali visa fees',
    'Personal expenses including food while not on trek',
    'International flight fares',
    'Emergency medical rescue / evacuation expenses',
    'Staff tipping',
    'Extra night accommodation in Kathmandu on early arrival or late departure',
    'Travel or medical insurance (high-altitude rescue coverage strongly recommended)',
    'Optional tours, sightseeing, and activities during free time',
    'Donations to locals or organizations',
    'Snacks during trek',
    'Other personal expenses such as laundry, charging, showers, etc.',
  ],

  notes: [
    'One porter is assigned for every two trekkers and carries a maximum of 25 kg / 55 lbs total.',
    'Each client duffel bag should weigh no more than 12.5 kg / 27.56 lbs.',
    'Bring a waterproof daypack for essentials including documents, water, camera, sunscreen, and clothing.',
    'Non-trekking luggage can be stored at your Kathmandu hotel.',
    'A high-quality hooded down jacket is included. USD 150 fee applies for loss or significant damage.',
    'A 4-season sleeping bag is included. USD 150 fee applies for loss or significant damage.',
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