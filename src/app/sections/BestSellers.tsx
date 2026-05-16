'use client';

import './bestSellers.css';

const bestSellers = [
  {
    title: 'Everest Base Camp',
    subtitle: 'The Legendary Pilgrimage',
    duration: '16 Days',
    difficulty: 'Challenging',
    elevation: '5,364m',
    price: 'From $1,890',
    image: 'assets/images/everest-base-camp.jpg',
    description: "A monumental trek on the legendary path of pioneers to the majestic foothills of the world's highest peak.",
    badge: 'Most Popular',
    difficultyClass: 'difficulty-hard',
  },
  {
    title: 'Annapurna Circuit',
    subtitle: 'The Grand Odyssey',
    duration: '16 Days',
    difficulty: 'Moderate–Hard',
    elevation: '5,416m',
    price: 'From $1,650',
    image: '/assets/images/annapurna-circuit.jpg',
    description: 'An exhilarating odyssey through diverse landscapes to the awe-inspiring Annapurna giants.',
    badge: 'Best Seller',
    difficultyClass: 'difficulty-moderate-hard',
  },
  {
    title: 'Gokyo Lakes',
    subtitle: 'Turquoise Jewels of the Himalayas',
    duration: '14 Days',
    difficulty: 'Moderate',
    elevation: '5,357m',
    price: 'From $1,490',
    image: '/assets/images/gokyo-lakes.jpg',
    description: 'A spectacular journey to the turquoise jewels of the Himalayas, culminating in panoramic Everest views.',
    badge: 'Hidden Gem',
    difficultyClass: 'difficulty-moderate',
  },
  {
    title: 'Upper Mustang',
    subtitle: 'The Forbidden Kingdom',
    duration: '17 Days',
    difficulty: 'Challenging',
    elevation: '3,840m',
    price: 'From $2,490',
    image: '/assets/images/upper-mustang.jpg',
    description: "An expedition into Nepal's Forbidden Kingdom of Lo — Tibetan culture and the ancient walled city of Lo Manthang.",
    badge: 'Exclusive',
    difficultyClass: 'difficulty-hard',
  },
];

export default function Treks() {
  return (
    <section id="treks" className="treks-section">
      <div className="treks-container">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="treks-header treks-fade-up">
          <div className="treks-eyebrow">
            <span className="treks-line" />
            <span className="treks-eyebrow-text">Signature Expeditions</span>
            <span className="treks-line" />
          </div>
          <h2 className="treks-heading">
            Best Sellers for <em className="treks-gold">2025</em>
          </h2>
          <p className="treks-subtext">
            Handcrafted journeys through Nepal&apos;s most breathtaking landscapes, guided by
            local experts born from the heart of the Himalayas.
          </p>
        </div>

        {/* ── Trek Cards ──────────────────────────────────── */}
        <div className="treks-grid">
          {bestSellers.map((trek) => (
            <div key={trek.title} className="trek-card">
              <div className="trek-card-inner">

                {/* Image */}
                <img
                  src={trek.image}
                  alt={trek.title}
                  className="trek-card-img"
                />
                <div className="trek-card-overlay" />

                {/* Badge */}
                <div className="trek-badge">{trek.badge}</div>

                {/* Price */}
                <div className="trek-price">{trek.price}</div>

                {/* Content */}
                <div className="trek-content">
                  <p className="trek-subtitle">{trek.subtitle}</p>
                  <h3 className="trek-title">{trek.title}</h3>
                  <p className="trek-desc">{trek.description}</p>

                  {/* Meta */}
                  <div className="trek-meta">
                    {/* Clock icon */}
                    <div className="trek-meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>{trek.duration}</span>
                    </div>
                    {/* Mountain icon */}
                    <div className="trek-meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                        <polygon points="12 2 22 22 2 22"/>
                      </svg>
                      <span>{trek.elevation}</span>
                    </div>
                    <span className={`trek-difficulty ${trek.difficultyClass}`}>
                      {trek.difficulty}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="trek-cta">
                    <span>View Itinerary</span>
                    <span className="trek-arrow">→</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── View All ────────────────────────────────────── */}
        <div className="treks-view-all">
          <a href="/Nepal" className="treks-view-all-btn">
            View All Expeditions
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}