'use client';

import { useState, useRef } from 'react';

// {add/delete garne bhaye reviews tala ko matrai betn two []}

const reviews = [
  {
    name: 'Rexon Bajimaya',
    initials: 'RB',
    trek: 'Nepal Trek',
    rating: 5,
    text: 'Such a great experience with Nepal Himal Adventures!! Every detail was taken care of, and our guide made the journey truly unforgettable. The mountains were breathtaking and the entire team was incredibly professional.',
    date: 'March 2025',
  },
  {
    name: 'Lakpa Sherpa',
    initials: 'LS',
    trek: 'Gosaikunda Trek',
    rating: 5,
    text: "Reaching Gosaikunda was tough, but the first glimpse of that turquoise lake nestled beneath snowy peaks felt like magic. Our guide's warm stories and steady encouragement made every icy step feel worth it.",
    date: 'January 2025',
  },
  {
    name: 'Pemba Tamang',
    initials: 'PT',
    trek: 'Annapurna Circuit',
    rating: 5,
    text: "Stepping into the Annapurna foothills felt instantly uplifting — the towering snow-capped peaks and lush rhododendron forests took my breath away. Our guide's expert pacing and heartfelt tales of local villages made every step feel meaningful.",
    date: 'February 2025',
  },
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    trek: 'Everest Base Camp',
    rating: 5,
    text: 'Nepal Himal Adventures provided an exceptional trekking experience! Our guide was incredibly knowledgeable about the local culture and terrain. I felt safe and well-cared for every step of the way. Highly recommend!',
    date: 'March 2025',
  },
  {
    name: 'David Chen',
    initials: 'DC',
    trek: 'Nepal Trek',
    rating: 5,
    text: 'Our guide was exceptional — brimming with local knowledge, patient answers to every question, and a warm encouraging presence that turned a tough hike into an inspiring adventure.',
    date: 'April 2025',
  },
  {
    name: 'Maria Rodriguez',
    initials: 'MR',
    trek: 'Upper Mustang',
    rating: 5,
    text: "Stepping into those vast windswept valleys was nothing short of magical — quiet, rugged, and utterly mesmerizing. Our guide's stories brought the ancient cliffs and hidden gompas to life, leaving our hearts full of wonder.",
    date: 'April 2025',
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX; };
  const handleTouchMove  = (e: React.TouchEvent) => { touchEndX.current  = e.targetTouches[0].clientX; };
  const handleTouchEnd   = () => {
    const dist = touchStartX.current - touchEndX.current;
    if (dist > 50)  next();
    if (dist < -50) prev();
  };

  const r = reviews[current];

  return (
    <section id="reviews">
      <style>{`
        #reviews {
          padding: 8rem 0;
          background-color: #111111;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          position: relative;
          overflow: hidden;
        }

        #reviews::before {
          content: '"';
          position: absolute;
          top: 5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 20rem;
          color: rgba(201, 168, 76, 0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .rv-container {
          max-width: 56rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
        }

        /* Header */
        .rv-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .rv-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .rv-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .rv-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .rv-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 6vw, 3.75rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
          line-height: 1.1;
        }

        .rv-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        /* Fixed-height card area */
        .rv-stage {
          height: 340px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          animation: rvFade 0.4s ease;
        }

        @keyframes rvFade {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .rv-stars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1.75rem;
        }

        .rv-star {
          width: 16px;
          height: 16px;
          fill: #c9a84c;
          color: #c9a84c;
        }

        .rv-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 300;
          color: #f5f0e8;
          font-style: italic;
          line-height: 1.6;
          margin: 0 0 2rem;
          /* clamp long reviews to 4 lines */
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .rv-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .rv-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: rgba(201, 168, 76, 0.15);
          border: 1px solid rgba(201, 168, 76, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #c9a84c;
          flex-shrink: 0;
        }

        .rv-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: #f5f0e8;
          letter-spacing: 0.05em;
          text-align: left;
        }

        .rv-meta {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          color: rgba(201, 168, 76, 0.7);
          letter-spacing: 0.05em;
          text-align: left;
          margin-top: 0.2rem;
        }

        /* Navigation */
        .rv-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .rv-btn {
          width: 2.5rem;
          height: 2.5rem;
          border: 1px solid #2a2a2a;
          background: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(245, 240, 232, 0.5);
          cursor: pointer;
          font-size: 1.1rem;
          transition: border-color 0.3s, color 0.3s;
        }

        .rv-btn:hover {
          border-color: #c9a84c;
          color: #c9a84c;
        }

        .rv-dot {
          height: 0.5rem;
          width: 0.5rem;
          border: none;
          cursor: pointer;
          background-color: #2a2a2a;
          padding: 0;
          transition: width 0.3s, background-color 0.3s;
        }

        .rv-dot--active {
          background-color: #c9a84c;
          width: 2rem;
        }
      `}</style>

      <div
        className="rv-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header aile ko lagi mathi ko text change garne bhaye */}
        <div className="rv-header">
          <div className="rv-eyebrow">
            <span className="rv-line" />
            <span className="rv-eyebrow-text">Traveler Stories</span>
            <span className="rv-line" />
          </div>
          <h2 className="rv-heading">
            Voices from the
            <br />
            <em className="rv-gold">Mountains</em>
          </h2>
        </div>

        {/* ESLAI na chala */}
        <div key={current} className="rv-stage">
          <div className="rv-stars">
            {Array.from({ length: r.rating }).map((_, i) => (
              <svg key={i} className="rv-star" viewBox="0 0 24 24">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>

          <blockquote className="rv-quote">&ldquo;{r.text}&rdquo;</blockquote>

          <div className="rv-author">
            <div className="rv-avatar">{r.initials}</div>
            <div>
              <div className="rv-name">{r.name}</div>
              <div className="rv-meta">{r.trek} · {r.date}</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="rv-nav">
          <button className="rv-btn" onClick={prev} aria-label="Previous">‹</button>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`rv-dot ${i === current ? 'rv-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
          <button className="rv-btn" onClick={next} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  );
}