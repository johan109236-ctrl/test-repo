'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { expeditions } from '../Nepal/Expeditions/expeditions-data';
import { treks } from 'app/Nepal/Treks/trek.data';


const allItems = [
  ...Object.entries(treks).map(([slug, data]) => ({
    title: data.title,
    description: data.description,
    image: data.heroImages[0],
    href: `/Nepal/Treks/${slug}`,
    duration: data.duration,
    type: 'Trek',
  })),
  ...Object.entries(expeditions).map(([slug, data]) => ({
    title: data.title,
    description: data.description,
    image: data.heroImages[0],
    href: `/Nepal/Expeditions/${slug}`,
    duration: data.duration,
    type: 'Expedition',
  })),
];

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof allItems>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    if (q.trim().length === 0) {
      setResults([]);
      setOpen(false);
      return;
    }
    const filtered = allItems.filter((item) =>
      item.title.toLowerCase().includes(q.toLowerCase()) ||
      item.description.toLowerCase().includes(q.toLowerCase()) ||
      item.type.toLowerCase().includes(q.toLowerCase())
    );
    setResults(filtered.slice(0, 8));
    setOpen(true);
  };

  return (
    <>
      <style>{`
        .hs-wrap {
          position: relative;
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
          z-index: 50;
        }

        .hs-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.97);
          padding: 0.9rem 1.25rem;
          border-radius: 3px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.25);
        }

        .hs-input {
          flex: 1;
          border: none;
          outline: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          color: #111;
          background: transparent;
        }

        .hs-input::placeholder { color: rgba(0,0,0,0.35); }

        .hs-clear {
          background: none;
          border: none;
          color: rgba(0,0,0,0.3);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0;
          line-height: 1;
        }

        .hs-clear:hover { color: rgba(0,0,0,0.6); }

        .hs-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #fff;
          border-radius: 3px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
          max-height: 440px;
          overflow-y: auto;
          z-index: 999;
        }

        .hs-dropdown-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
          padding: 0.85rem 1rem 0.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .hs-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: background 0.15s;
        }

        .hs-item:last-child { border-bottom: none; }
        .hs-item:hover { background: rgba(201,168,76,0.07); }

        .hs-item-img {
          width: 54px;
          height: 54px;
          object-fit: cover;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .hs-item-right { flex: 1; min-width: 0; }

        .hs-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.2rem;
        }

        .hs-item-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #111;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hs-item-badge {
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          border: 1px solid rgba(201,168,76,0.4);
          padding: 0.15rem 0.4rem;
          flex-shrink: 0;
        }

        .hs-item-meta {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.68rem;
          color: rgba(0,0,0,0.4);
        }

        .hs-no-results {
          padding: 2rem 1rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          color: rgba(0,0,0,0.35);
          text-align: center;
        }
      `}</style>

      <div className="hs-wrap" ref={ref}>
        <div className="hs-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            className="hs-input"
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() => results.length > 0 && setOpen(true)}
            placeholder="Search treks & expeditions..."
          />
          {query && (
            <button
              className="hs-clear"
              onClick={() => { setQuery(''); setResults([]); setOpen(false); }}
            >
              ✕
            </button>
          )}
        </div>

        {open && (
          <div className="hs-dropdown">
            <div className="hs-dropdown-label">
              {results.length > 0 ? `${results.length} result${results.length > 1 ? 's' : ''}` : 'All Trips'}
            </div>
            {results.length === 0 ? (
              <div className="hs-no-results">No trips found for &ldquo;{query}&rdquo;</div>
            ) : (
              results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hs-item"
                  onClick={() => { setOpen(false); setQuery(''); }}
                >
                  <img src={item.image} alt={item.title} className="hs-item-img" />
                  <div className="hs-item-right">
                    <div className="hs-item-top">
                      <span className="hs-item-title">{item.title}</span>
                      <span className="hs-item-badge">{item.type}</span>
                    </div>
                    <div className="hs-item-meta">{item.duration}</div>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}