'use client';

import './hero.css';
import Herosearch from '../components/Herosearch';


export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-overlay" />

      {/* Decorative corners */}
      <div className="hero-corner hero-corner--tl" />
      <div className="hero-corner hero-corner--tr" />
      <div className="hero-corner hero-corner--bl" />
      <div className="hero-corner hero-corner--br" />

      <div className="hero-container">
        {/* Eyebrow */}
        <div className="hero-eyebrow hero-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="hero-line" />
          <span className="hero-eyebrow-text">Est. 2022 · Kathmandu, Nepal</span>
          <span className="hero-line" />
        </div>

        {/* Heading */}
        <h1 className="hero-heading hero-fade-up" style={{ animationDelay: '0.4s' }}>
          Journey to the
          <br />
          <em className="hero-gold-gradient">Himalayas</em>
        </h1>

        {/* Subtext */}
        <p className="hero-subtext hero-fade-up" style={{ animationDelay: '0.7s' }}>
          Curated expeditions for the discerning adventurer.
          Where ancient peaks meet timeless culture.
        </p>

        {/* Buttons */}
        <div className="hero-fade-up" style={{ animationDelay: '0.9s', width: '100%' }}>
  <Herosearch />
</div>

        {/* Stats */}
        <div className="hero-stats hero-fade-in" style={{ animationDelay: '1.2s' }}>
          {[
            { value: '200+', label: 'Happy Trekkers' },
            { value: '4+', label: 'Years Experience' },
            { value: '12+', label: 'Curated Routes' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Play button */}
        {/* <div className="hero-play-wrap hero-fade-in" style={{ animationDelay: '1.4s' }}>
          <a
            href="https://youtu.be/gCRNEJxDJKM?si=LVAz76iNRGRU6Je3"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-play-btn"
            aria-label="Watch our video"
          />
        </div> */}
      </div>


    </section>
  );
}