'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { expeditions } from '../Nepal/Expeditions/expeditions-data';
import { treks } from '../Nepal/Treks/trek.data';

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
  const [dropdownStyle, setDropdownStyle] =
    useState<React.CSSProperties>({});

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePosition = useCallback(() => {
    if (!wrapperRef.current) return;

    const rect =
      wrapperRef.current.getBoundingClientRect();

    setDropdownStyle({
      position: 'fixed',
      top: rect.bottom + 6,
      left: rect.left,
      width: rect.width,
      zIndex: 99999,
    });
  }, []);

  useEffect(() => {
    if (open) updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      const insideSearch =
        wrapperRef.current?.contains(target);

      const insideDropdown =
        dropdownRef.current?.contains(target);

      if (!insideSearch && !insideDropdown) {
        setOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClick
    );

    window.addEventListener(
      'scroll',
      updatePosition
    );

    window.addEventListener(
      'resize',
      updatePosition
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClick
      );

      window.removeEventListener(
        'scroll',
        updatePosition
      );

      window.removeEventListener(
        'resize',
        updatePosition
      );
    };
  }, [updatePosition]);

 const search = useCallback((q: string) => {
  const searchTerm = q.trim().toLowerCase();

  if (!searchTerm) {
    setResults([]);
    setOpen(false);
    return;
  }

  const ranked = allItems
    .map((item) => {
      const title = item.title.toLowerCase();
      const description =
        item.description.toLowerCase();
      const type = item.type.toLowerCase();

      let score = 0;

      if (title === searchTerm) {
        score = 1000;
      }

      else if (title.startsWith(searchTerm)) {
        score = 800;
      }

      else if (title.includes(searchTerm)) {
        score = 600;
      }

      else if (type.includes(searchTerm)) {
        score = 300;
      }

      else if (
        description.includes(searchTerm)
      ) {
        score = 100;
      }

      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.item);

  setResults(ranked.slice(0, 12));
  setOpen(true);
}, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const q = e.target.value;
    setQuery(q);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      search(q);
    }, 200);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setOpen(false);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
  };

  const dropdown = open && (
    <div
      ref={dropdownRef}
      style={{
        ...dropdownStyle,
        background: 'rgba(12, 12, 12, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid #2a2a2a',
        maxHeight: '60vh',
        overflowY: 'auto',
        overscrollBehavior: 'contain',
      }}
    >
      <div className="hs-dropdown-label">
        {results.length > 0
          ? `${results.length} result${
              results.length > 1 ? 's' : ''
            }`
          : 'No results'}
      </div>

      {results.length === 0 ? (
        <div className="hs-no-results">
          No trips found for &ldquo;{query}
          &rdquo;
        </div>
      ) : (
        results.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hs-item"
            onClick={() => {
              setOpen(false);
              setQuery('');
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="hs-item-img"
            />

            <div className="hs-item-right">
              <div className="hs-item-top">
                <span className="hs-item-title">
                  {item.title}
                </span>

                <span className="hs-item-badge">
                  {item.type}
                </span>
              </div>

              <div className="hs-item-meta">
                {item.duration}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );

  return (
    <>
      <style>{`
        .hs-wrap {
          position: relative;
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
          z-index: 100;
        }

        .hs-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 0.9rem 1.25rem;
          transition: border-color 0.3s,
            background 0.3s;
        }

        .hs-box:focus-within {
          background: rgba(
            255,
            255,
            255,
            0.12
          );
          border-color: rgba(
            201,
            168,
            76,
            0.6
          );
        }

        .hs-input {
          flex: 1;
          border: none;
          outline: none;
          font-family: 'Montserrat',
            sans-serif;
          font-size: 0.85rem;
          color: #f5f0e8;
          background: transparent;
          letter-spacing: 0.03em;
        }

        .hs-input::placeholder {
          color: rgba(
            245,
            240,
            232,
            0.45
          );
        }

        .hs-clear {
          background: none;
          border: none;
          color: rgba(
            245,
            240,
            232,
            0.4
          );
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0;
          line-height: 1;
          transition: color 0.2s;
        }

        .hs-clear:hover {
          color: #f5f0e8;
        }

        .hs-dropdown-label {
          font-family: 'Montserrat',
            sans-serif;
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(
            245,
            240,
            232,
            0.3
          );
          padding: 0.85rem 1rem 0.5rem;
          border-bottom: 1px solid #1a1a1a;
          position: sticky;
          top: 0;
          background: rgba(
            12,
            12,
            12,
            0.97
          );
          z-index: 1;
        }

        .hs-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          text-decoration: none;
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.04);
          transition: background 0.15s;
        }

        .hs-item:last-child {
          border-bottom: none;
        }

        .hs-item:hover {
          background: rgba(
            201,
            168,
            76,
            0.07
          );
        }

        .hs-item-img {
          width: 54px;
          height: 54px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .hs-item-right {
          flex: 1;
          min-width: 0;
        }

        .hs-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.2rem;
        }

        .hs-item-title {
          font-family: 'Montserrat',
            sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #f5f0e8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hs-item-badge {
          font-family: 'Montserrat',
            sans-serif;
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          border: 1px solid rgba(
            201,
            168,
            76,
            0.4
          );
          padding: 0.15rem 0.4rem;
          flex-shrink: 0;
        }

        .hs-item-meta {
          font-family: 'Montserrat',
            sans-serif;
          font-size: 0.68rem;
          color: rgba(
            245,
            240,
            232,
            0.4
          );
        }

        .hs-no-results {
          padding: 2rem 1rem;
          font-family: 'Montserrat',
            sans-serif;
          font-size: 0.78rem;
          color: rgba(
            245,
            240,
            232,
            0.3
          );
          text-align: center;
        }
      `}</style>

      <div
        className="hs-wrap"
        ref={wrapperRef}
      >
        <div className="hs-box">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(245,240,232,0.5)"
            strokeWidth="2.5"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
            />
          </svg>

          <input
            className="hs-input"
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() =>
              results.length > 0 &&
              setOpen(true)
            }
            placeholder="Search treks & expeditions..."
          />

          {query && (
            <button
              className="hs-clear"
              onClick={handleClear}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {typeof window !==
        'undefined' &&
        createPortal(
          dropdown,
          document.body
        )}
    </>
  );
}