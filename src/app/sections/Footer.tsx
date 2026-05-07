'use client';


import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });


  return (
    <footer>
      <style>{`
        footer {
          background-color: #050505;
          border-top: 1px solid #1a1a1a;
        }

        /* ── Top banner ───────────────────────────────── */
        .ft-banner {
          border-bottom: 1px solid #1a1a1a;
          padding: 3rem 0;
        }

        .ft-banner-inner {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .ft-banner-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 0.5rem;
        }

        .ft-banner-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
        }

        .ft-banner-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .ft-banner-btn {
          display: inline-block;
          padding: 1rem 3rem;
          background-color: #c9a84c;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.3s;
          white-space: nowrap;
        }

        .ft-banner-btn:hover { background-color: #e8c97a; }

        /* ── Main grid ────────────────────────────────── */
        .ft-main {
          max-width: 80rem;
          margin: 0 auto;
          padding: 5rem 1.5rem;
          display: grid;
          grid-template-columns: 1.8fr 0.8fr 0.8fr 0.8fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 1024px) {
          .ft-main { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .ft-main { grid-template-columns: 1fr; }
          .ft-banner-inner { flex-direction: column; align-items: flex-start; }
        }

        /* Brand col */
        .ft-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: #f5f0e8;
          line-height: 1;
        }

        .ft-brand-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 1.25rem;
        }

        .ft-brand-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          color: rgba(245, 240, 232, 0.4);
          line-height: 1.8;
          letter-spacing: 0.03em;
          margin-bottom: 1.5rem;
        }

        .ft-socials {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ft-social-btn {
          width: 2rem;
          height: 2rem;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(245, 240, 232, 0.4);
          text-decoration: none;
          transition: border-color 0.3s, color 0.3s;
        }

        .ft-social-btn:hover {
          border-color: #c9a84c;
          color: #c9a84c;
        }

        /* Stats in brand col */
        .ft-stats {
          display: flex;
          gap: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid #1a1a1a;
        }

        .ft-stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #c9a84c;
          line-height: 1;
        }

        .ft-stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.4);
          margin-top: 0.2rem;
        }

        /* Link cols */
        .ft-col-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 1.5rem;
        }

        .ft-col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ft-col-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          color: rgba(245, 240, 232, 0.5);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.3s;
        }

        .ft-col-link:hover { color: #c9a84c; }

        /* Contact col */
        .ft-contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          margin-bottom: 1rem;
        }

        .ft-contact-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.6);
        }

        .ft-contact-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          color: rgba(245, 240, 232, 0.5);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.3s;
          word-break: break-all;
        }

        .ft-contact-value:hover { color: #c9a84c; }

        /* ── Bottom bar ───────────────────────────────── */
        .ft-bottom {
          border-top: 1px solid #1a1a1a;
          padding: 1.5rem 0;
        }

        .ft-bottom-inner {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .ft-copyright {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          color: rgba(245, 240, 232, 0.3);
          letter-spacing: 0.05em;
        }

        .ft-legal {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .ft-legal-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          color: rgba(245, 240, 232, 0.3);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.3s;
        }

        .ft-legal-link:hover { color: #c9a84c; }

        .ft-top-btn {
          width: 2rem;
          height: 2rem;
          border: 1px solid #2a2a2a;
          background: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(245, 240, 232, 0.4);
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
          font-size: 0.75rem;
        }

        .ft-top-btn:hover {
          border-color: #c9a84c;
          color: #c9a84c;
        }
      `}</style>

      {/* Top banner */}

      {pathname !== '/contact' && (
  <div className="ft-banner">
    <div className="ft-banner-inner">
      <div>
        <p className="ft-banner-label">Don&apos;t just dream it</p>
        <h3 className="ft-banner-heading">
          Conquer the <em className="ft-banner-gold">Himalayas</em>
        </h3>
      </div>
      <a href="/contact" className="ft-banner-btn">Book Your Adventure</a>
    </div>
  </div>
)}


      


      {/* Main */}
      <div className="ft-main">

        {/* Brand */}
        <div>
          <div className="ft-brand-name">NEPAL HIMAL</div>
          <div className="ft-brand-sub">Adventures</div>
          <p className="ft-brand-desc">
            Experience the difference with Nepal&apos;s premier adventure company.
            Your epic journey awaits in the majestic Himalayas.
          </p>
          <div className="ft-socials">
            <a href="https://www.instagram.com/nepal_himaladventures/" className="ft-social-btn" aria-label="Instagram" target="blank">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583171200916" className="ft-social-btn" aria-label="Facebook" target="blank">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@NepalHimalAdventures" className="ft-social-btn" aria-label="YouTube" target="blank">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
          <div className="ft-stats">
            <div>
              <div className="ft-stat-value">200+</div>
              <div className="ft-stat-label">Happy Trekkers</div>
            </div>
            <div>
              <div className="ft-stat-value">4+</div>
              <div className="ft-stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="ft-col-title">Destinations</h4>
          <ul className="ft-col-list">
            <li>
              <a href="https://www.nepalhimaladventures.com/nepal" className="ft-col-link">Nepal</a>
            </li>
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h4 className="ft-col-title">Activities</h4>
          <ul className="ft-col-list">
            {['Trekking in Nepal', 'Climbing & Expedition', 'Cultural Tours'].map((item) => (
              <li key={item}>
                <a href="#treks" className="ft-col-link">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="ft-col-title">Company</h4>
          <ul className="ft-col-list">
            {[
              { label: 'About Us',      href: 'https://www.nepalhimaladventures.com/company/about' },
              { label: 'Meet Our Team', href: 'https://www.nepalhimaladventures.com/company/team' },
              { label: 'Why Choose Us', href: 'https://www.nepalhimaladventures.com/company/why-nha' },
              { label: 'Reviews',       href: 'https://www.nepalhimaladventures.com/company/reviews' },
              { label: 'Documents',     href: 'https://www.nepalhimaladventures.com/company/documents' },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="ft-col-link">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="ft-col-title">Contact &amp; Info</h4>
          <div className="ft-contact-item">
            <span className="ft-contact-label">Phone</span>
            <a href="tel:+9779808968520" className="ft-contact-value">+977 9808968520</a>
          </div>
          <div className="ft-contact-item">
            <span className="ft-contact-label">Email</span>
            <a href="mailto:nepalhimaladventures431@gmail.com" className="ft-contact-value">
              nepalhimaladventures431@gmail.com
            </a>
          </div>
          <div className="ft-contact-item">
            <span className="ft-contact-label">Location</span>
            <span className="ft-contact-value">Lazimpat, Kathmandu, Nepal</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <p className="ft-copyright">
            © 2026 Nepal Himal Adventures. All rights reserved. | Experience the difference...
          </p>
          <div className="ft-legal">
            {[
              { label: 'Terms & Conditions', href: 'https://www.nepalhimaladventures.com/company/terms' },
              { label: 'Privacy Policy',     href: '#' },
              { label: 'Sustainable Policy', href: '#' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="ft-legal-link">{item.label}</a>
            ))}
          </div>
          
        </div>
      </div>

    </footer>
  );
}