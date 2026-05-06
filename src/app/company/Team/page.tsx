'use client';

import Image from 'next/image';

const team = [
  { name: 'Rajendra Neupane', role: 'Trekking Guide', image: '/team/rajendra.jpg' },
  { name: 'Milan Adhikari',   role: 'Trekking Guide', image: '/team/milan.jpg' },
  { name: 'Pasang Dawa Sherpa', role: 'Trekking Guide', image: '/team/pasang.jpg' },
];

export default function MeetOurTeam() {
  return (
    <main id="team-page">
      <style>{`
        #team-page {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* Hero */
        .tm-hero {
          position: relative;
          padding: 10rem 1.5rem 6rem;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }

        .tm-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .tm-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .tm-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .tm-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .tm-hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 0.95;
          margin: 0 0 2rem;
        }

        .tm-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .tm-hero-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          letter-spacing: 0.03em;
          max-width: 52rem;
          margin: 0 auto;
        }

        /* About text block */
        .tm-about {
          max-width: 72rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          border-bottom: 1px solid #1a1a1a;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .tm-about { grid-template-columns: 1fr; gap: 2rem; padding: 4rem 1.5rem; }
        }

        .tm-about-label {
          position: sticky;
          top: 6rem;
        }

        .tm-about-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(201, 168, 76, 0.4);
          margin-bottom: 0.6rem;
        }

        .tm-about-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
          line-height: 1.2;
        }

        .tm-about-title em { font-style: italic; color: #c9a84c; }

        .tm-about-content p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          letter-spacing: 0.02em;
          margin: 0 0 1.25rem;
        }

        .tm-about-content p:last-child { margin: 0; }

        /* Team grid */
        .tm-grid-wrap {
          max-width: 80rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
        }

        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .tm-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .tm-card {
          border: 1px solid #1a1a1a;
          overflow: hidden;
          background-color: #0d0d0d;
          transition: border-color 0.3s;
        }

        .tm-card:hover { border-color: rgba(201, 168, 76, 0.25); }

        .tm-card-img {
          position: relative;
          aspect-ratio: 4 / 5;
          background-color: #111111;
          overflow: hidden;
        }

        .tm-card-img img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .tm-card:hover .tm-card-img img { transform: scale(1.04); }

        .tm-card-info {
          padding: 1.5rem;
          text-align: center;
          border-top: 1px solid #1a1a1a;
        }

        .tm-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 300;
          color: #f5f0e8;
          letter-spacing: 0.05em;
          margin: 0 0 0.35rem;
        }

        .tm-card-role {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c9a84c;
        }
      `}</style>

      {/* Hero */}
      <div className="tm-hero">
        <div className="tm-eyebrow">
          <span className="tm-eyebrow-line" />
          <span className="tm-eyebrow-text">The People</span>
          <span className="tm-eyebrow-line" />
        </div>
        <h1 className="tm-hero-heading">
          Meet Our <em className="tm-gold">Team</em>
        </h1>
        <p className="tm-hero-text">
          Our passionate team of mountain guides comes from the heart of Nepal&apos;s trekking regions,
          bringing authentic local knowledge and generations of mountaineering expertise.
        </p>
      </div>

      {/* About text */}
      <div className="tm-about">
        <div className="tm-about-label">
          <h2 className="tm-about-title">Our<br /><em>Guides</em></h2>
        </div>
        <div className="tm-about-content">
          <p>
            Each guide is licensed by Nepal&apos;s Ministry of Tourism and holds wilderness first aid certifications
            to ensure your safety on every trail. What sets our guides apart is their genuine love for sharing
            Nepal&apos;s hidden treasures with travelers.
          </p>
          <p>
            They don&apos;t just lead treks — they open doors to local communities, share ancient mountain stories,
            and reveal breathtaking viewpoints that only locals know about. As you journey together, you&apos;ll
            discover their unique personalities, hear about their families and traditions, and gain insights
            into the Himalayan way of life.
          </p>
          <p>
            With warm hospitality and excellent interpersonal skills, our team creates a comfortable, friendly
            atmosphere that turns challenging mountain trails into unforgettable adventures.
          </p>
        </div>
      </div>

      {/* Team cards */}
      <div className="tm-grid-wrap">
        <div className="tm-grid">
          {team.map((member) => (
            <div key={member.name} className="tm-card">
              <div className="tm-card-img">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="tm-card-info">
                <h3 className="tm-card-name">{member.name}</h3>
                <p className="tm-card-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}