'use client';

import { useState } from 'react';

const countries = [
  'Nepal', 'United States', 'United Kingdom', 'Canada',
  'Australia', 'Germany', 'France', 'India', 'Other',
];

const packages = [
  'Everest Base Camp Trek',
  'Everest Three Passes Trek',
  'Gokyo Lakes Trek',
  'Langtang Valley Trek',
  'Langtang Heritage Trek',
  'Langtang - Gosaikunda Trek',
  'Langtang - Gosaikunda - Hellambu Trek',
  'Upper Mustang Trek',
  'Other',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    email:    '',
    country:  '',
    mobileNo: '',
    package:  '',
    comments: '',
  });
  const [status,   setStatus]   = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('success');
      setForm({ fullName: '', email: '', country: '', mobileNo: '', package: '', comments: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  return (
    <>
      <style>{`
        .cf-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 900px) {
          .cf-wrap { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* ── Form side ──────────────────────────────── */
        .cf-form-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 2rem;
        }

        .cf-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 600px) { .cf-row { grid-template-columns: 1fr; } }

        .cf-field { display: flex; flex-direction: column; gap: 0.4rem; }

        .cf-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.7);
        }

        .cf-input,
        .cf-select,
        .cf-textarea {
          background-color: #111111;
          border: 1px solid #2a2a2a;
          color: #f5f0e8;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          padding: 0.85rem 1rem;
          outline: none;
          transition: border-color 0.3s;
          width: 100%;
        }

        .cf-input::placeholder,
        .cf-textarea::placeholder { color: rgba(245,240,232,0.2); }

        .cf-input:focus,
        .cf-select:focus,
        .cf-textarea:focus { border-color: #c9a84c; }

        .cf-select { appearance: none; cursor: pointer; }
        .cf-select option { background-color: #111111; }
        .cf-textarea { resize: none; }

        .cf-submit {
          padding: 1rem;
          background-color: #c9a84c;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 100%;
        }

        .cf-submit:hover:not(:disabled) { background-color: #e8c97a; }
        .cf-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        .cf-note {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          color: rgba(245,240,232,0.25);
          text-align: center;
        }

        .cf-success {
          padding: 2rem;
          border: 1px solid rgba(201,168,76,0.3);
          background-color: rgba(201,168,76,0.05);
          text-align: center;
        }

        .cf-success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 300;
          color: #c9a84c;
          margin: 0 0 0.75rem;
        }

        .cf-success-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: rgba(245,240,232,0.5);
          line-height: 1.7;
        }

        .cf-error-msg {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: #f87171;
          padding: 0.75rem;
          border: 1px solid rgba(248,113,113,0.2);
          background-color: rgba(248,113,113,0.04);
          text-align: center;
        }

        /* ── Info side ──────────────────────────────── */
        .cf-info-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0 0 2rem;
        }

        .cf-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #1a1a1a;
        }

        .cf-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .cf-info-icon {
          width: 2.25rem;
          height: 2.25rem;
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c9a84c;
        }

        .cf-info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.6);
          margin-bottom: 0.25rem;
        }

        .cf-info-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(245,240,232,0.65);
          text-decoration: none;
          transition: color 0.3s;
        }

        .cf-info-value:hover { color: #c9a84c; }

        .cf-whatsapp {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border: 1px solid rgba(37,211,102,0.2);
          background-color: rgba(37,211,102,0.03);
          text-decoration: none;
          transition: border-color 0.3s;
          margin-bottom: 1.5rem;
        }

        .cf-whatsapp:hover { border-color: rgba(37,211,102,0.5); }

        .cf-whatsapp-icon { color: #25D366; flex-shrink: 0; }

        .cf-whatsapp-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f5f0e8;
        }

        .cf-whatsapp-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          color: rgba(245,240,232,0.35);
          margin-top: 0.15rem;
        }

        .cf-whatsapp-arrow {
          margin-left: auto;
          color: #c9a84c;
          transition: transform 0.3s;
        }

        .cf-whatsapp:hover .cf-whatsapp-arrow { transform: translateX(4px); }

        .cf-emergency {
          border: 1px solid rgba(239,68,68,0.2);
          background-color: rgba(239,68,68,0.04);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .cf-emergency-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ef4444;
          flex-shrink: 0;
          margin-top: 4px;
          animation: cfPulse 1.5s ease-in-out infinite;
        }

        @keyframes cfPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .cf-emergency-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #ef4444;
          margin-bottom: 0.25rem;
        }

        .cf-emergency-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(245,240,232,0.65);
          text-decoration: none;
        }
      `}</style>

      <div className="cf-wrap">

        {/* Form */}
        <div>
          <h2 className="cf-form-heading">Plan Your Journey</h2>

          {status === 'success' ? (
            <div className="cf-success">
              <p className="cf-success-title">Inquiry Sent ✓</p>
              <p className="cf-success-text">
                Thank you! We&apos;ve received your inquiry and will be in touch within 24 hours.
                Check your inbox for a confirmation email.
              </p>
            </div>
          ) : (
            <form className="cf-form" onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label">Full Name *</label>
                  <input className="cf-input" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Email *</label>
                  <input className="cf-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>

              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label">Country *</label>
                  <select className="cf-select" name="country" value={form.country} onChange={handleChange} required>
                    <option value="">Select country...</option>
                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="cf-field">
                  <label className="cf-label">Mobile / WhatsApp *</label>
                  <input className="cf-input" name="mobileNo" value={form.mobileNo} onChange={handleChange} placeholder="+1 234 567 8900" required />
                </div>
              </div>

              <div className="cf-field">
                <label className="cf-label">Preferred Package *</label>
                <select className="cf-select" name="package" value={form.package} onChange={handleChange} required>
                  <option value="">Select a package...</option>
                  {packages.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="cf-field">
                <label className="cf-label">Message / Comments</label>
                <textarea className="cf-textarea" name="comments" rows={4} value={form.comments} onChange={handleChange} placeholder="Preferred dates, group size, special requirements..." />
              </div>

              {status === 'error' && <div className="cf-error-msg">{errorMsg}</div>}

              <button className="cf-submit" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>

              <p className="cf-note">We respond within 24 hours. No spam, ever.</p>
            </form>
          )}
        </div>

        {/* Info */}
        <div>
          <h2 className="cf-info-heading">Contact Us</h2>

          <div className="cf-info-list">
            <div className="cf-info-item">
              <div className="cf-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <div className="cf-info-label">Working Hours</div>
                <span className="cf-info-value">10:00 AM – 6:00 PM (Holiday on Saturday)</span>
              </div>
            </div>
            <div className="cf-info-item">
              <div className="cf-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="cf-info-label">Head Office</div>
                <span className="cf-info-value">Lazimpat, Kathmandu, Nepal</span>
              </div>
            </div>
            <div className="cf-info-item">
              <div className="cf-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </div>
              <div>
                <div className="cf-info-label">Phone</div>
                <a href="tel:+9779808968520" className="cf-info-value">+977 9808968520</a>
              </div>
            </div>
            <div className="cf-info-item">
              <div className="cf-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="cf-info-label">Email</div>
                <a href="mailto:nepalhimaladventures431@gmail.com" className="cf-info-value">nepalhimaladventures431@gmail.com</a>
              </div>
            </div>
          </div>

          <a href="https://wa.me/9779808968520" target="_blank" rel="noopener noreferrer" className="cf-whatsapp">
            <svg className="cf-whatsapp-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.528 5.856L.057 23.882l6.198-1.625A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.034-1.378l-.36-.214-3.733.979.999-3.647-.235-.374A9.86 9.86 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
            </svg>
            <div>
              <div className="cf-whatsapp-title">Chat on WhatsApp</div>
              <div className="cf-whatsapp-sub">Instant response · Available 24/7</div>
            </div>
            <span className="cf-whatsapp-arrow">→</span>
          </a>

          <div className="cf-emergency">
            <div className="cf-emergency-dot" />
            <div>
              <div className="cf-emergency-label">Emergency SOS (24/7)</div>
              <a href="tel:+9779808968520" className="cf-emergency-value">+977 9808968520</a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}