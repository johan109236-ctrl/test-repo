'use client';

const reasons = [
  {
    id: 1,
    title: '48-Hour Adaptation',
    description: 'Your body needs time to adjust to the climate, and it requires time to recover from the physical stress of long trips.',
    points: [
      'Jet Lag Recovery: When you arrive in Kathmandu, we include a two-day rest period to help your body adjust to the new time zone.',
      'Climate Priming: These 48 hours help your body get used to the local air and environment, reducing altitude risk.',
    ],
  },
  {
    id: 2,
    title: 'Proactive Clinical Pre-Screening',
    description: 'Before you put on your boots, we make sure you have everything you need for the trip.',
    points: [
      'Pre-Trek Health Check: Identifying possible risks in advance so you can start with confidence.',
      'Risk Awareness: Clear explanations of risks and how to manage them to stay safe.',
    ],
  },
  {
    id: 3,
    title: 'Dedicated Medical Support',
    description: 'In the Himalayas, it is hard to find a doctor or a hospital. We bring the support to you.',
    points: [
      'Assigned Medical Liaison: Access to a dedicated professional during your journey.',
      'Safe Descent Protocols: A "safety first" approach to bring you down to a safer altitude quickly if needed.',
    ],
  },
  {
    id: 4,
    title: 'Exclusive "3x3" Safety Protocol',
    description: 'We use real-time health data to monitor your condition and ensure your safety throughout.',
    points: [
      'Morning Warm-up: Stretching, Yoga Asanas, and Pranayama to improve oxygen intake.',
      'Triple-Vitals Monitoring: Checking blood pressure and SpO2 levels three times a day.',
      'Headquarters Reporting: Readings shared daily with our Kathmandu medical team.',
    ],
  },
  {
    id: 5,
    title: 'Local Roots, Genuine Connections',
    description: 'We are a 100% Nepali-owned company with deep roots in the communities we pass through.',
    points: [
      'Personalized Experience: Tailored journeys based on your health and hiking pace.',
      'Responsible Tourism: Supporting local communities to preserve Nepal\'s beauty.',
    ],
  },
  {
    id: 6,
    title: 'Expert and Caring Guides',
    description: 'Our guides are experienced, medically trained, and truly care about your journey.',
    points: [
      'Medical Training: Guides are trained in basic medical care and altitude management.',
      'Comfort & Confidence: Making families and solo travelers feel secure throughout.',
    ],
  },
];

const stats = [
  { value: '4+',   label: 'Years Experience' },
  { value: '200+', label: 'Happy Trekkers' },
  { value: '100%', label: 'Safety Record' },
  { value: '40+',  label: 'Trek Routes' },
];

export default function WhyUs() {
  return (
    <main id="why-us-page">
      <style>{`
        #why-us-page {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* ── Hero ─────────────────────────────────────── */
        .wu-hero {
          position: relative;
          padding: 10rem 1.5rem 6rem;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }

        .wu-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .wu-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .wu-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .wu-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .wu-hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 0.95;
          margin: 0 0 2rem;
        }

        .wu-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .wu-hero-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          letter-spacing: 0.03em;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* ── Cards grid ───────────────────────────────── */
        .wu-grid-wrap {
          max-width: 80rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
        }

        .wu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5px;
          background-color: #1a1a1a;
        }

        @media (max-width: 768px) {
          .wu-grid { grid-template-columns: 1fr; }
        }

        .wu-card {
          background-color: #0a0a0a;
          padding: 2.5rem;
          transition: background-color 0.3s;
          cursor: default;
        }

        .wu-card:hover {
          background-color: #111111;
        }

        .wu-card-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(201, 168, 76, 0.4);
          margin-bottom: 1rem;
        }

        .wu-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 0.75rem;
          line-height: 1.2;
        }

        .wu-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          color: rgba(245, 240, 232, 0.45);
          line-height: 1.8;
          letter-spacing: 0.02em;
          margin: 0 0 1.25rem;
        }

        .wu-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .wu-point {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: rgba(245, 240, 232, 0.4);
          line-height: 1.6;
        }

        .wu-point-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: #c9a84c;
        }

        /* ── Stats ────────────────────────────────────── */
        .wu-stats {
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          background-color: #0d0d0d;
          padding: 4rem 1.5rem;
        }

        .wu-stats-inner {
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        @media (max-width: 640px) {
          .wu-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }

        .wu-stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 300;
          color: #c9a84c;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .wu-stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.4);
        }

        /* ── CTA ──────────────────────────────────────── */
        .wu-cta {
          max-width: 56rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          text-align: center;
        }

        .wu-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 1.5rem;
          line-height: 1.1;
        }

        .wu-cta-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.5);
          line-height: 1.8;
          max-width: 36rem;
          margin: 0 auto 3rem;
          letter-spacing: 0.03em;
        }

        .wu-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .wu-btn-primary {
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

        .wu-btn-primary:hover { background-color: #e8c97a; }

        .wu-btn-outline {
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

        .wu-btn-outline:hover {
          background-color: #c9a84c;
          border-color: #c9a84c;
          color: #000;
        }
      `}</style>

      {/* Hero */}
      <div className="wu-hero">
        <div className="wu-eyebrow">
          <span className="wu-eyebrow-line" />
          <span className="wu-eyebrow-text">Why Us</span>
          <span className="wu-eyebrow-line" />
        </div>
        <h1 className="wu-hero-heading">
          Why Choose <em className="wu-gold">Nepal Himal</em>
          <br />Adventures?
        </h1>
        <p className="wu-hero-text">
          When you trek with us, you&apos;re not just another tourist. You&apos;re joining a family of mountain
          enthusiasts who are passionate about sharing the magic of the Himalayas with kindred spirits.
          Safety, authenticity, and excellence — always.
        </p>
      </div>

      {/* Cards */}
      <div className="wu-grid-wrap">
        <div className="wu-grid">
          {reasons.map((r) => (
            <div key={r.id} className="wu-card">
              <div className="wu-card-number">{String(r.id).padStart(2, '0')}</div>
              <h3 className="wu-card-title">{r.title}</h3>
              <p className="wu-card-desc">{r.description}</p>
              <ul className="wu-points">
                {r.points.map((point, i) => (
                  <li key={i} className="wu-point">
                    <svg className="wu-point-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="wu-stats">
        <div className="wu-stats-inner">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="wu-stat-value">{s.value}</div>
              <div className="wu-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="wu-cta">
        <div className="wu-eyebrow">
          <span className="wu-eyebrow-line" />
          <span className="wu-eyebrow-text">Start Your Journey</span>
          <span className="wu-eyebrow-line" />
        </div>
        <h2 className="wu-cta-heading">
          Ready to Experience
          <br />
          <em className="wu-gold">the Himalayas?</em>
        </h2>
        <p className="wu-cta-text">
          This is our corner of the world. We know it intimately. We love it passionately,
          and we want to share it with you.
        </p>
        <div className="wu-cta-btns">
          <a href="/nepal" className="wu-btn-primary">View Our Packages</a>
          <a href="/contact" className="wu-btn-outline">Contact Us →</a>
        </div>
      </div>

    </main>
  );
}