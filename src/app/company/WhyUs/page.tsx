'use client';

const reasons = [
  {
    id: 1,
    title: 'The "Soft Landing" Strategy: 48-Hour Adaptation',
    description:
      'Your body needs time to adjust to the climate, and it requires time to recover from the physical stress of long trips, such as when you take a long flight. This is something that your body must do when you travel away to a new place with a different climate.',
    points: [
      'Jet Lag Recovery: When you arrive in Kathmandu, we include a two-day rest period to help your body adjust to the new time zone. Starting a trek while tired can be difficult, so this time allows you to recover properly and feel ready for your journey.',
      'Climate Priming: These 48 hours also help your body get used to the local air and environment, reducing the risk of altitude sickness early on.',
    ],
  },
  {
    id: 2,
    title: 'Proactive Clinical Pre-Screening',
    description:
      'Before you put on your boots, we make sure you have everything you need for the trip.',
    points: [
      'Pre-Trek Health Check: We review your health to identify any possible risks in advance, so you can start your trek with confidence. This way, we can make sure you are ready for the Pre-Trek.',
      'Risk Awareness: We don’t just say it’s safe to clearly explain possible risks and how to manage them. This helps you understand your body and stay safe throughout the trek.',
    ],
  },
  {
    id: 3,
    title: 'Dedicated Medical Support & Physician Access',
    description:
      'In the Himalayas, it is hard to find a doctor or a hospital. This is a problem. We are trying to fix this by giving people a way to get help when they need it, even when they are climbing high up in the mountains. The medical safety net we provide goes with you all the way to the top of the peaks.',
    points: [
      'Assigned Medical Liaison: As a client you will have access to a dedicated Medical Liaison professional during your journey, ready to assist whenever needed.',
      'Safe Descent Protocols: If you feel unwell due to altitude or illness, we follow a clear “safety first” approach to bring you down to a safer altitude quickly and safely. We make sure you get to an altitude when your body needs it. Our Safe Descent Protocols are in place to help you so you can get the help you need and feel better.',
    ],
  },
  {
    id: 4,
    title: 'Our Exclusive "3x3" Daily Safety Protocol',
    description:
      'We use real-time health data to monitor your condition and ensure your safety.',
    points: [
      'The Morning Warm-up: Each day begins with light stretching and breathing exercises to prepare your body and improve oxygen intake. Before you start your day, our guide takes you through some yoga poses, like Yoga Asanas, to stretch your muscles. They also teach you Pranayama, which is just breathing exercises to help you get oxygen and increase your lung capacity. This is about getting your body ready for the day with Yoga Asanas and breathing exercises, like Pranayama.',
      'We do Triple-Vitals Monitoring: We check your blood pressure and oxygen levels (SpO2) three times a day to track your health.',
      'Headquarters Reporting: These readings are shared daily with our Kathmandu team, so we can identify and respond to any issues early. This way, we can see what is going on with the Headquarters data and catch any health issues with the Headquarters’ information before they become serious problems for the Headquarters.',
    ],
  },
  {
    id: 5,
    title: 'Local Roots, Genuine Connections',
    description:
      'We are a 100% Nepali-owned company, and Nepal is our home. We know it deeply.',
    points: [
      'We do not offer one-size-fits-all tours. Instead, we create personalized experiences based on your needs and preferences.',
      'We also work closely with local communities and support responsible and sustainable tourism, helping preserve Nepal’s beauty for future generations.',
    ],
  },
  {
    id: 6,
    title: 'Expert and Caring Guides',
    description:
      'Our guides are experienced, skilled, and truly care about your journey. They are not just guides; they are trained to support, motivate, and ensure your safety. They are also trained in basic medical care, so they can respond quickly if needed. This is why families feel comfortable and confident traveling with us.',
    points: [
      'Our guides are not just people who know a lot about trains. They really know how to deal with people. They have training to help with medical problems and to motivate the group. This means they can make a hike a really great experience that you will always remember.',
      'Our guides are the reason why families feel good about going on an adventure with Mountain Travel Sobek. They trust our guides to take care of them. Families know that our guides will make sure they have time on their adventure with Mountain Travel Sobek.',
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