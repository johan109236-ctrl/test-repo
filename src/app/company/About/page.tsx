'use client';

export default function AboutUs() {
  return (
    <main id="about">
      <style>{`
        #about {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        .ab-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }

        .ab-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .ab-hero-image {
          width: 100%;
          height: 100%;
        }

        .ab-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .ab-hero-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6rem 3rem 3.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
        }

        .ab-hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .ab-hero-eyebrow-line {
          display: block;
          height: 1px;
          width: 2.5rem;
          background-color: #c9a84c;
        }

        .ab-hero-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .ab-hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 0.95;
          margin: 0;
        }

        .ab-hero-heading em {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }



        .ab-sections {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .ab-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ab-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .ab-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .ab-block {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          padding: 6rem 0;
          border-bottom: 1px solid #1a1a1a;
          align-items: start;
        }

        @media (max-width: 768px) {
          .ab-block { grid-template-columns: 1fr; gap: 2rem; padding: 4rem 0; }
          .ab-hero { height: 60vw; min-height: 300px; }
          .ab-hero-overlay { padding: 4rem 1.5rem 2rem; }
        }

        .ab-block-label {
          position: sticky;
          top: 6rem;
        }

        .ab-block-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(201, 168, 76, 0.4);
          margin-bottom: 0.75rem;
        }

        .ab-block-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.15;
          margin: 0;
        }

        .ab-block-title em {
          font-style: italic;
          color: #c9a84c;
        }

        .ab-block-content {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.6);
          line-height: 1.9;
          letter-spacing: 0.03em;
        }

        .ab-block-content p + p {
          margin-top: 1.25rem;
        }

        .ab-quote {
          border-left: 1px solid #c9a84c;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(245, 240, 232, 0.8);
          line-height: 1.6;
        }

        /* ── CTA block ────────────────────────────────── */
        .ab-cta {
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .ab-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 1.5rem;
          line-height: 1.1;
        }

        .ab-cta-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.5);
          line-height: 1.8;
          max-width: 36rem;
          margin: 0 auto 3rem;
          letter-spacing: 0.03em;
        }

        .ab-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .ab-btn-primary {
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

        .ab-btn-primary:hover { background-color: #e8c97a; }

        .ab-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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

        .ab-btn-outline:hover {
          background-color: #c9a84c;
          border-color: #c9a84c;
          color: #000;
        }

        /* ── Small why us link ────────────────────────── */
        .ab-why-us {
          text-align: center;
          padding: 0 0 5rem;
          border-top: 1px solid #1a1a1a;
          padding-top: 3rem;
          margin-top: 1rem;
        }

        .ab-why-us-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.35);
          text-decoration: none;
          transition: color 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ab-why-us-link:hover { color: #c9a84c; }
      `}</style>

      <div className="ab-hero">
        <div className="ab-hero-image">
          <img src="/assets/images/dhaulagiri2.jpg" alt="Nepal Himal Adventures" />
        </div>
        <div className="ab-hero-overlay">
          <div className="ab-hero-eyebrow">
            <span className="ab-hero-eyebrow-line" />
            <span className="ab-hero-eyebrow-text">Our Story</span>
          </div>
          <h1 className="ab-hero-heading">
            About <em>Nepal Himal Adventures</em>
            
          </h1>
        </div>
      </div>

      <div className="ab-sections">

        <div className="ab-block">
          <div className="ab-block-label">
            <div className="ab-block-number">01</div>
            <h2 className="ab-block-title">Our<br /><em>Journey</em></h2>
          </div>
          <div className="ab-block-content">
            <p>
              Founded in 2022 by Jalandhar Sanjel, our company is the result of over 25 years of frontline
              experience in the Himalayas. Before launching his own venture, Jalandhar spent decades serving
              as a trekking guide for some of the industry&apos;s top-tier companies, gaining an intimate
              understanding of the mountains and the people who climb them.
            </p>

            <p>
              Throughout those 25 years, he grew frustrated with systemic flaws: guides who couldn&apos;t communicate
              effectively in English, disorganized management, and a reckless &ldquo;rush&rdquo; that ignored the signs of
              altitude sickness and stroke in beginners. Driven by a mission to make the user experience better
              and safer, Jalandhar moved on from the corporate giants to build a company where health is never
              sacrificed for speed. Today, he uses his lifetime of expertise to personally train his guides, ensuring
              that every client benefits from the highest standards of safety and professional care.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="ab-block">
          <div className="ab-block-label">
            <div className="ab-block-number">02</div>
            <h2 className="ab-block-title">Our<br /><em>Vision</em></h2>
          </div>
          <div className="ab-block-content">
            <p>
              Our vision is to redefine the adventure tourism landscape by becoming the global gold standard for
              safe, ethical, and immersive travel experiences. We believe that the thrill of exploration should
              never come at the cost of personal safety or peace of mind.
            </p>
            <p>
              By continuously innovating our health protocols and investing in the professional development of our
              local guides, we aim to bridge the gap between rugged adventure and world-class hospitality.
              We don&apos;t just want to take you to your destination — we want to ensure you return home stronger,
              healthier, and inspired, knowing you were supported by the most prepared team in the industry.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="ab-cta">
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-line" />
            <span className="ab-eyebrow-text">Ready to Explore</span>
            <span className="ab-eyebrow-line" />
          </div>
          <h2 className="ab-cta-heading">
            Ready to Create
            <br />
            <em className="ab-gold">Your Own Story?</em>
          </h2>
          <p className="ab-cta-text">
            Join hundreds of satisfied trekkers who have experienced the adventure of a lifetime
            with Nepal Himal Adventures.
          </p>
          <div className="ab-cta-btns">
            <a href="/nepal" className="ab-btn-primary">View Trek Packages</a>
            <a href="/contact" className="ab-btn-outline">Contact Us →</a>
          </div>
        </div>

      </div>
    </main>
  );
}