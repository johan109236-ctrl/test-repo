'use client';

import { useState } from 'react';
import type {
  PrepContent,
  PrepGuideData,
  GearBadge,
} from './Preparation-data';

export default function PrepGuide({ data }: { data: PrepGuideData }) {
  const [activeId, setActiveId] = useState(data.sections[0].id);
  const active = data.sections.find((s) => s.id === activeId)!;

  return (
    <main id="prep-guide">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        #prep-guide {
          background: #0d0d0d;
          color: #f5f0e8;
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
          padding-top: 70px;
        }

        /* ── HEADER ── */
        .pg-header {
          background: #111;
          border-bottom: 1px solid #1e1e1e;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .pg-logo-area { display: flex; flex-direction: column; gap: 3px; }
        .pg-logo-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 500; color: #f5f0e8; margin: 0;
        }
        .pg-logo-sub {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(245,240,232,0.38);
        }
        .pg-nha-badge {
          background: #c9a84c; color: #000;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          padding: 0.38rem 0.7rem; border-radius: 3px; flex-shrink: 0;
        }

        /* ── NAV TABS ── */
        .pg-nav {
          background: #111;
          border-bottom: 1px solid #1e1e1e;
          padding: 0 2rem;
          display: flex; overflow-x: auto; scrollbar-width: none;
        }
        .pg-nav::-webkit-scrollbar { display: none; }
        .pg-nav-btn {
          all: unset; cursor: pointer;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(245,240,232,0.38);
          padding: 0.95rem 1.2rem;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .pg-nav-btn:hover { color: rgba(245,240,232,0.65); }
        .pg-nav-btn.active { color: #f5f0e8; border-bottom-color: #c9a84c; }

        /* ── BODY ── */
        .pg-body {
          max-width: 70rem; margin: 0 auto;
          padding: 3rem 2rem 6rem;
        }
        .pg-empty {
          text-align: center; padding: 5rem 2rem;
          color: rgba(245,240,232,0.2); font-size: 0.82rem;
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* ── TWO-COL GRID ── */
        .pg-two-col {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1.25rem; margin-bottom: 1.25rem;
        }
        @media (max-width: 768px) { .pg-two-col { grid-template-columns: 1fr; } }

        /* ── GENERIC CARD ── */
        .pg-card {
          background: #141414; border: 1px solid #1e1e1e;
          border-radius: 8px; padding: 1.4rem;
        }
        .pg-card-head {
          display: flex; align-items: flex-start; gap: 0.75rem;
          margin-bottom: 0.7rem;
        }
        .pg-card-icon { font-size: 1rem; flex-shrink: 0; margin-top: 2px; }
        .pg-card-title {
          font-size: 0.8rem; font-weight: 700; color: #f5f0e8;
          letter-spacing: 0.03em; line-height: 1.4; flex: 1;
        }
        .pg-card-tag {
          margin-left: auto; flex-shrink: 0;
          font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
          color: #c9a84c; border: 1px solid rgba(201,168,76,0.3);
          padding: 0.18rem 0.45rem; border-radius: 2px;
        }
        .pg-card-body {
          font-size: 0.77rem; color: rgba(245,240,232,0.5); line-height: 1.75;
        }

        /* ── CHECKLIST ── */
        .pg-cl-category {
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: #c9a84c; margin-bottom: 0.9rem;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .pg-cl-category::after {
          content: ''; flex: 1; height: 1px; background: rgba(201,168,76,0.15);
        }
        .pg-checklist { list-style: none; padding: 0; margin: 0; }
        .pg-checklist li {
          font-size: 0.77rem; color: rgba(245,240,232,0.55);
          padding: 0.55rem 0; border-bottom: 1px solid #1e1e1e;
          display: flex; align-items: flex-start; gap: 0.65rem; line-height: 1.55;
        }
        .pg-checklist li:last-child { border-bottom: none; }
        .pg-check-box {
          width: 13px; height: 13px; border: 1px solid #2e2e2e;
          border-radius: 2px; flex-shrink: 0; margin-top: 2px;
        }
        .pg-check-sub {
          font-size: 10px; color: rgba(245,240,232,0.28);
          display: block; margin-top: 2px;
        }

        /* ── RISKS ── */
        .pg-risks-label {
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(245,240,232,0.28); margin-bottom: 1rem;
        }
        .pg-risks-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;
        }
        @media (max-width: 900px) { .pg-risks-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .pg-risks-grid { grid-template-columns: 1fr; } }
        .pg-risk {
          background: #141414; border: 1px solid #1e1e1e;
          border-radius: 8px; padding: 1.1rem 1.2rem;
        }
        .pg-risk-head { display: flex; align-items: center; gap: 0.55rem; margin-bottom: 0.45rem; }
        .pg-risk-icon { font-size: 0.95rem; }
        .pg-risk-title { font-size: 0.79rem; font-weight: 700; color: #f5f0e8; }
        .pg-risk-desc { font-size: 0.74rem; color: rgba(245,240,232,0.42); line-height: 1.6; }

        /* ── TRAINING PLAN ── */
        .pg-phase {
          border: 1px solid #1e1e1e; border-radius: 8px;
          overflow: hidden; margin-bottom: 1.25rem;
        }
        .pg-phase-header {
          background: #141414; padding: 1.25rem 1.5rem 1.1rem;
          border-bottom: 1px solid #1e1e1e;
        }
        .pg-phase-eyebrow {
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: #c9a84c; margin-bottom: 0.45rem;
        }
        .pg-phase-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem; font-weight: 400; color: #f5f0e8;
          margin: 0 0 0.5rem; line-height: 1.2;
        }
        .pg-phase-desc {
          font-size: 0.76rem; color: rgba(245,240,232,0.48); line-height: 1.75; margin: 0;
        }
        .pg-day-row {
          display: flex; align-items: baseline;
          border-bottom: 1px solid #1a1a1a;
          padding: 0.7rem 1.5rem;
          transition: background 0.15s;
        }
        .pg-day-row:last-child { border-bottom: none; }
        .pg-day-row:hover { background: rgba(255,255,255,0.018); }
        .pg-day-label {
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(245,240,232,0.32); width: 72px; flex-shrink: 0; padding-top: 1px;
        }
        .pg-day-content { flex: 1; }
        .pg-day-activity { font-size: 0.79rem; color: rgba(245,240,232,0.82); line-height: 1.5; }
        .pg-day-note {
          font-size: 10px; color: rgba(245,240,232,0.3);
          font-style: italic; margin-top: 2px; line-height: 1.5;
        }

        /* ── NUTRITION ── */
        .pg-nut-panel {
          background: #141414; border: 1px solid #1e1e1e;
          border-radius: 8px; padding: 1.4rem;
        }
        .pg-nut-panel-head {
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1.1rem;
          padding-bottom: 0.9rem; border-bottom: 1px solid #1e1e1e;
        }
        .pg-nut-panel-icon { font-size: 1rem; }
        .pg-nut-panel-title {
          font-size: 0.82rem; font-weight: 700; color: #f5f0e8; line-height: 1.3;
        }
        .pg-nut-item {
          display: flex; align-items: flex-start; gap: 0.65rem;
          padding: 0.6rem 0; border-bottom: 1px solid #1a1a1a;
        }
        .pg-nut-item:last-child { border-bottom: none; }
        .pg-nut-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: rgba(245,240,232,0.25); flex-shrink: 0; margin-top: 5px;
        }
        .pg-nut-dot.cross { background: rgba(239,68,68,0.5); border-radius: 1px; }
        .pg-nut-item-title {
          font-size: 0.79rem; font-weight: 700; color: #f5f0e8;
          margin-bottom: 2px; line-height: 1.35;
        }
        .pg-nut-item-body {
          font-size: 0.74rem; color: rgba(245,240,232,0.45); line-height: 1.6;
        }

        /* snacks */
        .pg-snacks {
          background: #141414; border: 1px solid #1e1e1e;
          border-radius: 8px; padding: 1.4rem; margin-top: 1.25rem;
        }
        .pg-snacks-head {
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 0.9rem;
        }
        .pg-snacks-icon { font-size: 1rem; }
        .pg-snacks-title {
          font-size: 0.82rem; font-weight: 700; color: #f5f0e8;
        }
        .pg-snacks-intro {
          font-size: 0.76rem; color: rgba(245,240,232,0.45); line-height: 1.75;
          margin-bottom: 1.1rem;
        }
        .pg-snacks-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem;
        }
        @media (max-width: 600px) { .pg-snacks-grid { grid-template-columns: repeat(2,1fr); } }
        .pg-snack-chip {
          background: #1a1a1a; border: 1px solid #222;
          border-radius: 5px; padding: 0.55rem 0.75rem;
          font-size: 0.74rem; color: rgba(245,240,232,0.65); line-height: 1.4;
          display: flex; align-items: center; gap: 0.45rem;
        }

        /* ── GEAR ── */
        .pg-gear-legend {
          background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.18);
          border-radius: 8px; padding: 0.9rem 1.2rem;
          margin-bottom: 1.5rem;
          font-size: 0.76rem; color: rgba(245,240,232,0.55); line-height: 1.7;
        }
        .pg-badge {
          display: inline-block; border-radius: 20px;
          font-size: 9px; font-weight: 600; letter-spacing: 0.08em;
          padding: 0.15rem 0.55rem; margin: 0 2px;
          vertical-align: middle;
        }
        .pg-badge--nha    { background: rgba(99,190,123,0.15); color: #63be7b; border: 1px solid rgba(99,190,123,0.3); }
        .pg-badge--extra  { background: rgba(251,191,36,0.12); color: #fbbf24; border: 1px solid rgba(251,191,36,0.25); }
        .pg-badge--own    { background: rgba(148,163,184,0.1); color: #94a3b8; border: 1px solid rgba(148,163,184,0.2); }

        .pg-gear-category-label {
          font-size: 9px; letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(245,240,232,0.28); margin: 1.75rem 0 0.75rem;
        }
        .pg-gear-table {
          background: #141414; border: 1px solid #1e1e1e;
          border-radius: 8px; overflow: hidden;
        }
        .pg-gear-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem; padding: 0.85rem 1.25rem;
          border-bottom: 1px solid #1a1a1a;
          transition: background 0.15s;
        }
        .pg-gear-row:last-child { border-bottom: none; }
        .pg-gear-row:hover { background: rgba(255,255,255,0.02); }
        .pg-gear-bullet {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2e2e2e; flex-shrink: 0;
        }
        .pg-gear-info { flex: 1; min-width: 0; }
        .pg-gear-name {
          font-size: 0.79rem; color: rgba(245,240,232,0.82); line-height: 1.4;
        }
        .pg-gear-note {
          font-size: 10px; color: rgba(245,240,232,0.28);
          font-style: italic; margin-top: 2px; line-height: 1.5;
        }
        .pg-gear-badge { flex-shrink: 0; }

        /* ── PANELS (overview) ── */
        .pg-panels-top {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .pg-panels-bottom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        @media (max-width: 768px) {
          .pg-panels-top, .pg-panels-bottom { grid-template-columns: 1fr; }
        }
        .pg-nut-panel-desc {
          font-size: 0.75rem;
          color: rgba(245,240,232,0.38);
          line-height: 1.7;
          margin-bottom: 1rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid #1e1e1e;
        }
      `}</style>

      {/* HEADER */}
      <header className="pg-header">
        <div className="pg-logo-area">
          <h1 className="pg-logo-title">{data.title}</h1>
          <span className="pg-logo-sub">{data.subtitle}</span>
        </div>
        <span className="pg-nha-badge">NHA</span>
      </header>

      {/* NAV TABS */}
      <nav className="pg-nav">
        {data.sections.map((s) => (
          <button
            key={s.id}
            className={`pg-nav-btn${activeId === s.id ? ' active' : ''}`}
            onClick={() => setActiveId(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* CONTENT */}
      <div className="pg-body">
        <SectionContent content={active.content} />
      </div>
    </main>
  );
}

/* ── TRAINING TRACKS ─────────────────────────────────────────────────── */

function TrainingTracksRenderer({
  tracks,
  trainingPlan,
}: {
  tracks: import('./Preparation-data').TrainingTrack[];
  trainingPlan?: import('./Preparation-data').TrainingPhase[];
}) {
  const [activeTrack, setActiveTrack] = useState(0);
  const active = tracks[activeTrack];

  // Track 0 (beginner) falls back to the top-level training_plan array
  const phases =
    activeTrack === 0 && active.phases.length === 0
      ? (trainingPlan ?? [])
      : active.phases;

  return (
    <>
      {/* Info banner */}
      <div style={{
        background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
        borderRadius: 8, padding: '0.9rem 1.1rem', marginBottom: '1.25rem',
        display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
      }}>
        <span style={{ color: 'rgba(59,130,246,0.7)', fontSize: '0.85rem', flexShrink: 0, marginTop: 1 }}>ⓘ</span>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(59,130,246,0.85)', lineHeight: 1.7 }}>
          {tracks[0].description}
        </p>
      </div>

      {/* Toggle buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {tracks.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveTrack(i)}
            style={{
              all: 'unset', cursor: 'pointer',
              padding: '0.5rem 1.1rem', borderRadius: 6, fontSize: '0.8rem', fontWeight: 600,
              border: activeTrack === i ? '2px solid #f5f0e8' : '1px solid #2e2e2e',
              color: activeTrack === i ? '#f5f0e8' : 'rgba(245,240,232,0.35)',
              transition: 'all 0.15s',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Active track description */}
      <div style={{
        background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
        borderRadius: 8, padding: '0.9rem 1.1rem', marginBottom: '1.25rem',
        display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>🚶</span>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(59,130,246,0.85)', lineHeight: 1.7 }}>
          {active.description || tracks[0].description}
        </p>
      </div>

      {/* Phases */}
      {phases.map((phase, i) => (
        <TrainingPhaseBlock key={i} phase={phase} />
      ))}
    </>
  );
}

/* ── TRAINING PHASE BLOCK ────────────────────────────────────────────── */

function TrainingPhaseBlock({ phase }: { phase: import('./Preparation-data').TrainingPhase }) {
  return (
    <div className="pg-phase">
      <div className="pg-phase-header">
        <div className="pg-phase-eyebrow">{phase.phase}</div>
        <h3 className="pg-phase-title">{phase.title}</h3>
        <p className="pg-phase-desc">{phase.description}</p>
      </div>
      {phase.days.map((day, j) => (
        <div key={j} className="pg-day-row">
          <span className="pg-day-label">{day.label}</span>
          <div className="pg-day-content">
            <div className="pg-day-activity">{day.activity}</div>
            {day.note && <div className="pg-day-note">{day.note}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── SECTION RENDERER ─────────────────────────────────────────────────── */

function SectionContent({ content }: { content: PrepContent }) {
  const hasAnything =
    !!content.intro ||
    (content.cards?.length ?? 0) > 0 ||
    (content.checklist?.length ?? 0) > 0 ||
    (content.risks?.length ?? 0) > 0 ||
    (content.training_plan?.length ?? 0) > 0 ||
    (content.training_tracks?.length ?? 0) > 0 ||
    (content.panels?.length ?? 0) > 0 ||
    !!content.nutrition ||
    !!content.gear;

  if (!hasAnything) return <p className="pg-empty">Content coming soon</p>;

  const panelCount = content.panels?.length ?? 0;

  return (
    <>
      {/* INTRO */}
      {content.intro && (
        <div className="pg-card" style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.58)', lineHeight: 1.85, margin: 0 }}>
            {content.intro}
          </p>
        </div>
      )}

      {/* CARDS */}
      {(content.cards?.length ?? 0) > 0 && (
        <div className="pg-two-col">
          {content.cards!.map((card, i) => (
            <div key={i} className="pg-card">
              <div className="pg-card-head">
                {card.icon && <span className="pg-card-icon">{card.icon}</span>}
                <span className="pg-card-title">{card.title}</span>
                {card.tag && <span className="pg-card-tag">{card.tag}</span>}
              </div>
              <p className="pg-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* PANELS — first 2 side by side, remainder below in same 2-col grid */}
      {panelCount > 0 && (() => {
        const renderPanel = (panel: { heading: string; description?: string; items: { title: string; body: string }[] }, i: number) => (
          <div key={i} className="pg-nut-panel">
            <div className="pg-nut-panel-head">
              <span className="pg-nut-panel-title">{panel.heading}</span>
            </div>
            {panel.description && (
              <div className="pg-nut-panel-desc">{panel.description}</div>
            )}
            {panel.items.map((item, j) => (
              <div key={j} className="pg-nut-item">
                <span className="pg-nut-dot" />
                <div>
                  <div className="pg-nut-item-title">{item.title}</div>
                  <div className="pg-nut-item-body">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        );
        const top = content.panels!.slice(0, 2);
        const bottom = content.panels!.slice(2);
        return (
          <>
            <div className="pg-panels-top">{top.map((p, i) => renderPanel(p, i))}</div>
            {bottom.length > 0 && (
              <div className="pg-panels-bottom">{bottom.map((p, i) => renderPanel(p, i + 2))}</div>
            )}
          </>
        );
      })()}

      {/* CHECKLISTS */}
      {content.checklist?.map((group, i) => (
        <div key={i} className="pg-card" style={{ marginBottom: '1.25rem' }}>
          <div className="pg-cl-category">{group.category}</div>
          <ul className="pg-checklist">
            {group.items.map((item, j) => {
              const [main, sub] = item.split('|');
              return (
                <li key={j}>
                  <span className="pg-check-box" />
                  <span>
                    {main.trim()}
                    {sub && <span className="pg-check-sub">{sub.trim()}</span>}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* RISKS */}
      {(content.risks?.length ?? 0) > 0 && (
        <div style={{ marginBottom: '1.25rem' }}>
          <div className="pg-risks-label">⚠ Key risks to be aware of</div>
          <div className="pg-risks-grid">
            {content.risks!.map((r, i) => (
              <div key={i} className="pg-risk">
                <div className="pg-risk-head">
                  {r.icon && <span className="pg-risk-icon">{r.icon}</span>}
                  <span className="pg-risk-title">{r.title}</span>
                </div>
                <p className="pg-risk-desc">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TRAINING TRACKS (toggled) */}
      {(content.training_tracks?.length ?? 0) > 0 && (
        <TrainingTracksRenderer
          tracks={content.training_tracks!}
          trainingPlan={content.training_plan}
        />
      )}

      {/* TRAINING PLAN (standalone, no tracks) */}
      {!content.training_tracks && (content.training_plan?.length ?? 0) > 0 &&
        content.training_plan!.map((phase, i) => (
          <TrainingPhaseBlock key={i} phase={phase} />
        ))
      }

      {/* NUTRITION */}
      {content.nutrition && (
        <>
          <div className="pg-two-col">
            {content.nutrition.panels.map((panel, i) => (
              <div key={i} className="pg-nut-panel">
                <div className="pg-nut-panel-head">
                  {panel.icon && <span className="pg-nut-panel-icon">{panel.icon}</span>}
                  <span className="pg-nut-panel-title">{panel.heading}</span>
                </div>
                {panel.items.map((item, j) => (
                  <div key={j} className="pg-nut-item">
                    <span className={`pg-nut-dot${item.cross ? ' cross' : ''}`} />
                    <div>
                      <div className="pg-nut-item-title">{item.title}</div>
                      <div className="pg-nut-item-body">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {content.nutrition.snacks && (
            <div className="pg-snacks">
              <div className="pg-snacks-head">
                <span className="pg-snacks-title">Trail and high-camp snacks</span>
              </div>
              <p className="pg-snacks-intro">{content.nutrition.snacks.intro}</p>
              <div className="pg-snacks-grid">
                {content.nutrition.snacks.items.map((item, i) => (
                  <div key={i} className="pg-snack-chip">{item}</div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* GEAR */}
      {content.gear && (
        <>
          {content.gear.legend && (
            <div className="pg-gear-legend">
              Items marked <GearBadgeChip badge="provided by NHA" /> are supplied. Items marked{' '}
              <GearBadgeChip badge="additional cost" /> are available through NHA at extra charge.
              All other items must be brought from home.
            </div>
          )}
          {content.gear.categories.map((cat, i) => (
            <div key={i}>
              <div className="pg-gear-category-label">{cat.category}</div>
              <div className="pg-gear-table">
                {cat.items.map((item, j) => (
                  <div key={j} className="pg-gear-row">
                    <span className="pg-gear-bullet" />
                    <div className="pg-gear-info">
                      <div className="pg-gear-name">{item.name}</div>
                      {item.note && <div className="pg-gear-note">{item.note}</div>}
                    </div>
                    <div className="pg-gear-badge">
                      <GearBadgeChip badge={item.badge} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

/* ── GEAR BADGE CHIP ─────────────────────────────────────────────────── */

function GearBadgeChip({ badge }: { badge: GearBadge }) {
  const cls =
    badge === 'provided by NHA'
      ? 'pg-badge pg-badge--nha'
      : badge === 'additional cost'
      ? 'pg-badge pg-badge--extra'
      : 'pg-badge pg-badge--own';
  return <span className={cls}>{badge}</span>;
}