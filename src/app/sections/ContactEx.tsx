'use client';

export default function Contact() {
  return (
    <section id="contact">
      <style>{`
        #contact {
          padding: 8rem 0;
          background-color: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .ct-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ── Header ─────────────────────────────────────── */
        .ct-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .ct-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ct-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .ct-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .ct-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 1rem;
          line-height: 1.1;
        }

        .ct-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .ct-subtext {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.5);
          letter-spacing: 0.05em;
          max-width: 32rem;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Speak to Expert card ───────────────────────── */
        .ct-expert {
          border: 1px solid #1a1a1a;
          background-color: #111111;
          padding: 3rem;
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* dot pattern background */
        .ct-expert::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .ct-expert-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .ct-expert-inner { grid-template-columns: 1fr; gap: 2rem; }
          .ct-expert { padding: 2rem; }
        }

        /* left */
        .ct-expert-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .ct-expert-icon {
          color: #c9a84c;
        }

        .ct-expert-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
        }

        .ct-expert-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(245, 240, 232, 0.5);
          line-height: 1.8;
          letter-spacing: 0.03em;
          margin: 0 0 1.5rem;
        }

        .ct-expert-badges {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .ct-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.4);
        }

        .ct-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #c9a84c;
          flex-shrink: 0;
        }

        /* right — expert card */
        .ct-expert-card {
          border: 1px solid rgba(201, 168, 76, 0.2);
          padding: 2rem;
          text-align: center;
          background-color: rgba(201, 168, 76, 0.03);
        }

        .ct-expert-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 0.5rem;
        }

        .ct-expert-card-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(245, 240, 232, 0.5);
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .ct-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 1px solid rgba(37, 211, 102, 0.3);
          color: #25D366;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: background-color 0.3s, border-color 0.3s;
        }

        .ct-whatsapp-btn:hover {
          background-color: rgba(37, 211, 102, 0.08);
          border-color: #25D366;
        }

        /* ── Bottom grid ────────────────────────────────── */
        .ct-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .ct-bottom { grid-template-columns: 1fr; }
        }

        /* left — office info */
        .ct-office {
          border: 1px solid #1a1a1a;
          background-color: #111111;
          padding: 2.5rem;
        }

        .ct-office-badge {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a84c;
          border: 1px solid rgba(201, 168, 76, 0.3);
          padding: 0.3rem 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ct-office-address {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.4;
          margin: 0 0 2rem;
        }

        .ct-info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ct-info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .ct-info-icon {
          width: 2rem;
          height: 2rem;
          border: 1px solid rgba(201, 168, 76, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c9a84c;
        }

        .ct-info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.6);
          margin-bottom: 0.2rem;
        }

        .ct-info-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(245, 240, 232, 0.65);
          text-decoration: none;
          transition: color 0.3s;
        }

        .ct-info-value:hover { color: #c9a84c; }

        /* Emergency banner */
        .ct-emergency {
          border: 1px solid rgba(239, 68, 68, 0.2);
          background-color: rgba(239, 68, 68, 0.04);
          padding: 1rem 1.25rem;
          margin-top: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .ct-emergency-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ef4444;
          flex-shrink: 0;
          margin-top: 0.3rem;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .ct-emergency-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #ef4444;
          margin-bottom: 0.25rem;
        }

        .ct-emergency-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(245, 240, 232, 0.65);
          text-decoration: none;
        }

        /* right — map */
        .ct-map {
          border: 1px solid #1a1a1a;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .ct-map iframe {
  width: 100%;
  flex: 1;
  min-height: 100%;
  border: 0;
  display: block;
  /* filter removed for standard appearance */
}
      `}</style>

      <div className="ct-container">

        {/* Header */}
        <div className="ct-header">
          <div className="ct-eyebrow">
            <span className="ct-eyebrow-line" />
            <span className="ct-eyebrow-text">Get In Touch</span>
            <span className="ct-eyebrow-line" />
          </div>
          <h2 className="ct-heading">
            Your Epic
            <br />
            <em className="ct-gold">Adventure Awaits</em>
          </h2>
          <p className="ct-subtext">
            Speak to a Nepal expert. Our team is available 24/7 to help you plan the perfect Himalayan journey.
          </p>
        </div>

        {/* Speak to Expert */}
        <div className="ct-expert">
          <div className="ct-expert-inner">

            {/* Left */}
            <div>
              <div className="ct-expert-title">
                <svg className="ct-expert-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                </svg>
                <h3 className="ct-expert-heading">Speak to an Expert</h3>
              </div>
              <p className="ct-expert-desc">
                Need assistance with your booking? Our travel experts are here to help you plan the perfect
                Himalayan adventure. Get personalized recommendations and instant support.
              </p>
              <div className="ct-expert-badges">
                <span className="ct-badge"><span className="ct-badge-dot" />Available 24/7</span>
                <span className="ct-badge"><span className="ct-badge-dot" />Instant Response</span>
              </div>
            </div>

            {/* Right */}
            <div className="ct-expert-card">
              <h4 className="ct-expert-card-title">Nepal Expert</h4>
              <div className="ct-expert-card-name">
                {/* Replace [Expert Name] with actual name when ready */}
                <span>SEN</span>
                <span>🇳🇵</span>
              </div>
              <a href="https://wa.me/9779808968520" target="_blank" rel="noopener noreferrer" className="ct-whatsapp-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.528 5.856L.057 23.882l6.198-1.625A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 0 1-5.034-1.378l-.36-.214-3.733.979.999-3.647-.235-.374A9.86 9.86 0 0 1 2.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
                </svg>
                +977 9808968520
              </a>
            </div>

          </div>
        </div>

        {/* Bottom: Office info left, Map right */}
        <div className="ct-bottom">

          {/* Office info */}
          <div className="ct-office">
            <span className="ct-office-badge">Head Office</span>
            <p className="ct-office-address">
              Lazimpat P.O. Box 8128,<br />Kathmandu, Nepal
            </p>

            <ul className="ct-info-list">
              <li className="ct-info-item">
                <div className="ct-info-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info-label">Phone</div>
                  <a href="tel:+9779808968520" className="ct-info-value">+977 9808968520</a>
                </div>
              </li>
              <li className="ct-info-item">
                <div className="ct-info-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info-label">Email</div>
                  <a href="mailto:nepalhimaladventures431@gmail.com" className="ct-info-value">nepalhimaladventures431@gmail.com</a>
                </div>
              </li>
              <li className="ct-info-item">
                <div className="ct-info-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info-label">Office Hours</div>
                  <span className="ct-info-value">10:00 AM – 6:00 PM (NPT)</span>
                </div>
              </li>
            </ul>

            {/* Emergency */}
            <div className="ct-emergency">
              <div className="ct-emergency-dot" />
              <div>
                <div className="ct-emergency-label">Emergency SOS (24/7)</div>
                <a href="tel:+9779808968520" className="ct-emergency-number">+977 9808968520</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="ct-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8503.770659866084!2d85.31503810064255!3d27.72188357942836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1919f7dd0685%3A0xc59baa0caae9c83d!2sLazimpat%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1777641582757!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nepal Himal Adventures Location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}