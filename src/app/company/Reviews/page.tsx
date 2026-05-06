'use client';

const reviews = [
  {
    name: 'Rexon Bajimaya',
    initials: 'RB',
    trek: 'Everest Base Camp Trek',
    date: 'March 2025',
    rating: 5,
    text: 'Such a great experience with Nepal Himal Adventures!! Every detail was taken care of, and our guide made the journey truly unforgettable. The mountains were breathtaking and the entire team was incredibly professional.',
  },
  {
    name: 'Lakpa Sherpa',
    initials: 'LS',
    trek: 'Gosaikunda Trek',
    date: 'February 2025',
    rating: 5,
    text: "Reaching Gosaikunda was tough, but the first glimpse of that turquoise lake nestled beneath snowy peaks felt like magic. Our guide's warm stories and steady encouragement made every icy step feel worth it.",
  },
  {
    name: 'Pemba Tamang',
    initials: 'PT',
    trek: 'Annapurna Base Camp Trek',
    date: 'January 2025',
    rating: 5,
    text: "Stepping into the Annapurna foothills felt instantly uplifting — the towering snow-capped peaks and lush rhododendron forests took my breath away. Our guide's expert pacing and heartfelt tales of local villages made every step feel meaningful.",
  },
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    trek: 'Langtang Valley Trek',
    date: 'December 2024',
    rating: 5,
    text: 'Nepal Himal Adventures provided an exceptional trekking experience! Our guide was incredibly knowledgeable about the local culture and terrain. I felt safe and well-cared for every step of the way. Highly recommend!',
  },
  {
    name: 'David Chen',
    initials: 'DC',
    trek: 'Manaslu Circuit Trek',
    date: 'November 2024',
    rating: 5,
    text: 'Our guide was exceptional — brimming with local knowledge, patient answers to every question, and a warm encouraging presence that turned a tough hike into an inspiring adventure.',
  },
  {
    name: 'Maria Rodriguez',
    initials: 'MR',
    trek: 'Upper Mustang Trek',
    date: 'October 2024',
    rating: 5,
    text: "Stepping into those vast windswept valleys was nothing short of magical — quiet, rugged, and utterly mesmerizing. Our guide's stories brought the ancient cliffs and hidden gompas to life, leaving our hearts full of wonder.",
  },
  {
    name: 'James Wilson',
    initials: 'JW',
    trek: 'Everest Base Camp Trek',
    date: 'September 2024',
    rating: 5,
    text: 'The entire experience exceeded my expectations. From the initial planning to the final day, everything was perfectly organized. The team\'s attention to detail and genuine care for our wellbeing made this trek unforgettable.',
  },
  {
    name: 'Yuki Tanaka',
    initials: 'YT',
    trek: 'Poon Hill Trek',
    date: 'August 2024',
    rating: 5,
    text: 'Beautiful landscapes, wonderful people, and an amazing guide who made sure we were comfortable every step of the way. This was my first trek in Nepal and it won\'t be my last!',
  },
];

const stats = [
  { value: '200+', label: 'Happy Trekkers' },
  { value: '5.0',  label: 'Average Rating' },
  { value: '40+',  label: 'Trek Routes' },
  { value: '4+',   label: 'Years Experience' },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c" stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main id="reviews-page">
      <style>{`
        #reviews-page {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* Hero */
        .rp-hero {
          position: relative;
          padding: 10rem 1.5rem 6rem;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }

        .rp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .rp-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .rp-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .rp-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .rp-hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 0.95;
          margin: 0 0 2rem;
        }

        .rp-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .rp-hero-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          letter-spacing: 0.03em;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* Grid */
        .rp-grid-wrap {
          max-width: 80rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
        }

        .rp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5px;
          background-color: #1a1a1a;
        }

        @media (max-width: 768px) {
          .rp-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .rp-card {
          background-color: #0a0a0a;
          padding: 2.5rem;
          transition: background-color 0.3s;
        }

        .rp-card:hover { background-color: #0f0f0f; }

        .rp-card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .rp-avatar {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background-color: rgba(201, 168, 76, 0.12);
          border: 1px solid rgba(201, 168, 76, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          color: #c9a84c;
          flex-shrink: 0;
        }

        .rp-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: #f5f0e8;
          letter-spacing: 0.05em;
        }

        .rp-date {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          color: rgba(245, 240, 232, 0.35);
          letter-spacing: 0.05em;
          margin-top: 0.15rem;
        }

        .rp-trek-badge {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.7);
          border: 1px solid rgba(201, 168, 76, 0.2);
          padding: 0.2rem 0.6rem;
          margin-bottom: 1rem;
        }

        .rp-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(245, 240, 232, 0.65);
          line-height: 1.7;
          margin: 0;
        }

        /* Stats */
        .rp-stats {
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          background-color: #0d0d0d;
          padding: 4rem 1.5rem;
        }

        .rp-stats-inner {
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        @media (max-width: 640px) {
          .rp-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }

        .rp-stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 300;
          color: #c9a84c;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .rp-stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.4);
        }

        /* CTA */
        .rp-cta {
          max-width: 56rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          text-align: center;
        }

        .rp-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 1.5rem;
          line-height: 1.1;
        }

        .rp-cta-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.5);
          line-height: 1.8;
          max-width: 36rem;
          margin: 0 auto 3rem;
          letter-spacing: 0.03em;
        }

        .rp-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .rp-btn-primary {
          display: inline-block;
          padding: 1rem 2.5rem;
          background-color: #c9a84c;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.3s;
        }

        .rp-btn-primary:hover { background-color: #e8c97a; }

        .rp-btn-outline {
          display: inline-block;
          padding: 1rem 2.5rem;
          border: 1px solid rgba(201, 168, 76, 0.4);
          color: #c9a84c;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.3s, border-color 0.3s, color 0.3s;
        }

        .rp-btn-outline:hover {
          background-color: #c9a84c;
          border-color: #c9a84c;
          color: #000;
        }
      `}</style>

      {/* Hero */}
      <div className="rp-hero">
        <div className="rp-eyebrow">
          <span className="rp-eyebrow-line" />
          <span className="rp-eyebrow-text">Traveler Stories</span>
          <span className="rp-eyebrow-line" />
        </div>
        <h1 className="rp-hero-heading">
          Voices from the
          <br />
          <em className="rp-gold">Mountains</em>
        </h1>
        <p className="rp-hero-text">
          Read what our trekkers have to say about their adventures with Nepal Himal Adventures.
          These reviews are from real travelers who have experienced the magic of the Himalayas with us.
        </p>
      </div>

      {/* Reviews grid */}
      <div className="rp-grid-wrap">
        <div className="rp-grid">
          {reviews.map((r) => (
            <div key={r.name} className="rp-card">
              <div className="rp-card-top">
                <div className="rp-avatar">{r.initials}</div>
                <div>
                  <div className="rp-name">{r.name}</div>
                  <div className="rp-date">{r.date}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Stars count={r.rating} />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <span className="rp-trek-badge">{r.trek}</span>
              </div>
              <p className="rp-text">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="rp-stats">
        <div className="rp-stats-inner">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="rp-stat-value">{s.value}</div>
              <div className="rp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rp-cta">
        <div className="rp-eyebrow">
          <span className="rp-eyebrow-line" />
          <span className="rp-eyebrow-text">Ready to Explore</span>
          <span className="rp-eyebrow-line" />
        </div>
        <h2 className="rp-cta-heading">
          Ready to Create
          <br />
          <em className="rp-gold">Your Own Story?</em>
        </h2>
        <p className="rp-cta-text">
          Join hundreds of satisfied trekkers who have experienced the adventure of a lifetime
          with Nepal Himal Adventures.
        </p>
        <div className="rp-btns">
          <a href="/nepal" className="rp-btn-primary">View Trek Packages</a>
          <a href="/contact" className="rp-btn-outline">Contact Us →</a>
        </div>
      </div>

    </main>
  );
}