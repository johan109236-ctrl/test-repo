'use client';

import Image from 'next/image';

const govDocs = [
  { title: 'Company Registration Certificate', image: '/assets/images/company-register.jpg' },
  { title: 'Nepal Rastra Bank License', image: '/assets/images/NRB.jpg' },
  { title: 'PAN', image: '/assets/images/PAN.jpg' },
  { title: 'Tourism Board License', image: '/assets/images/VTO.jpg' },
];

const membershipCerts = [
  { title: 'First Aid Certificate', image: '/assets/images/first-aid-cert.jpg' },
  { title: 'KEEP Certificate',      image: '/assets/images/keep-cert.jpg' },
  { title: 'TAAN Certificate',      image: '/assets/images/TAAN.jpg' },
];

export default function Documents() {
  return (
    <main id="documents">
      <style>{`
        #documents {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* Hero */
        .doc-hero {
          position: relative;
          padding: 10rem 1.5rem 6rem;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }

        .doc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .doc-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .doc-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .doc-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .doc-hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 0.95;
          margin: 0 0 2rem;
        }

        .doc-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .doc-hero-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          letter-spacing: 0.03em;
          max-width: 52rem;
          margin: 0 auto;
        }

        /* Sections */
        .doc-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
        }

        .doc-section {
          margin-bottom: 6rem;
        }

        .doc-section-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #1a1a1a;
        }

        .doc-section-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(201, 168, 76, 0.4);
        }

        .doc-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
        }

        /* Cards */
        .doc-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .doc-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .doc-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .doc-grid-3 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .doc-grid-4,
          .doc-grid-3 { grid-template-columns: 1fr; }
        }

        .doc-card {
          border: 1px solid #1a1a1a;
          background-color: #0d0d0d;
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .doc-card:hover {
          border-color: rgba(201, 168, 76, 0.3);
        }

        .doc-card-img {
          position: relative;
          aspect-ratio: 3 / 4;
          background-color: #111111;
          overflow: hidden;
        }

        .doc-card-img img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .doc-card:hover .doc-card-img img {
          transform: scale(1.03);
        }

        .doc-card-label {
          padding: 1rem 1.25rem;
          border-top: 1px solid #1a1a1a;
          text-align: center;
        }

        .doc-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.6);
        }
      `}</style>

      {/* Hero */}
      <div className="doc-hero">
        <div className="doc-eyebrow">
          <span className="doc-eyebrow-line" />
          <span className="doc-eyebrow-text">Transparency</span>
          <span className="doc-eyebrow-line" />
        </div>
        <h1 className="doc-hero-heading">
          Legal <em className="doc-gold">Documents</em>
        </h1>
        <p className="doc-hero-text">
          Nepal Himal Adventures is a trading name of Nepal Himal Adventures Trekking Pvt. Ltd and Nepal Himal
          Adventures Tours and Travels Pvt. Ltd. We are committed to ensuring you have a safe and enjoyable
          holiday — therefore all travel arrangements prepared by us are completely secure.
          <br /><br />
          We are a well-known government licensed trekking and touring company in Nepal. Please find the details
          of government licenses and authorities that Nepal Himal Adventures holds below.
        </p>
      </div>

      <div className="doc-container">

        {/* Government Documents */}
        <div className="doc-section">
          <div className="doc-section-header">
            <span className="doc-section-number">01</span>
            <h2 className="doc-section-title">Documents from Government Authorities</h2>
          </div>
          <div className="doc-grid-4">
            {govDocs.map((doc) => (
              <div key={doc.title} className="doc-card">
                <div className="doc-card-img">
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="doc-card-label">
                  <span className="doc-card-title">{doc.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Certificates */}
        <div className="doc-section">
          <div className="doc-section-header">
            <span className="doc-section-number">02</span>
            <h2 className="doc-section-title">Membership Certificates</h2>
          </div>
          <div className="doc-grid-3">
            {membershipCerts.map((cert) => (
              <div key={cert.title} className="doc-card">
                <div className="doc-card-img">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="doc-card-label">
                  <span className="doc-card-title">{cert.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}