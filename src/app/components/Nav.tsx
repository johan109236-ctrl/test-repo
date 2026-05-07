'use client';

import { useState, useEffect } from 'react';
import './nav.css';

const companyLinks = [
  { label: 'About Us',           href: '/company/About' },
  { label: 'Our Team',           href: '/company/Team' },
  { label: 'Why Us',             href: '/company/WhyUs' },
  { label: 'Legal Documents',    href: '/company/Documents' },
  { label: 'Reviews',            href: '/company/Reviews' },
  { label: 'Terms & Conditions', href: '/company/Terms' },
];

export default function Nav() {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown,  setMobileDropdown]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.header-dropdown')) setDesktopDropdown(false);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <header id="header" className={scrolled ? 'header-scrolled' : ''}>

      {/* Logo */}
      <a href="/" className="header-logo">
        <span className="header-logo-main">NEPAL HIMAL</span>
        <span className="header-logo-sub">Adventures</span>
      </a>

      {/* Desktop nav */}
      <nav className="header-nav">
        <a href="/Nepal" className="header-nav-link">Nepal</a>

        <div className="header-dropdown">
          <button
            className="header-nav-link"
            onClick={() => setDesktopDropdown(!desktopDropdown)}
          >
            Company <span className="header-dropdown-arrow">▾</span>
          </button>
          {desktopDropdown && (
            <div className="header-dropdown-menu">
              {companyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="header-dropdown-item"
                  onClick={() => setDesktopDropdown(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="#faq" className="header-nav-link">FAQs</a>
      </nav>

      {/* Book Now */}
      <div className="header-right">
        <a href="/contact" className="header-book-btn">Book Now</a>
      </div>

      {/* Mobile css */}
      <button
        className="header-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* + backdrop */}
      {mobileOpen && (
        <>
          {/* Closes when pressed outside */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 997,
              background: 'rgba(0,0,0,0.5)',
            }}
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="header-mobile-menu">

            <a href="/nepal" className="header-mobile-link" onClick={() => setMobileOpen(false)}>
              Nepal
            </a>

            <div className="header-mobile-group">
              <button
                className="header-mobile-link"
                onClick={() => setMobileDropdown(!mobileDropdown)}
              >
                Company <span style={{ fontSize: '0.7em' }}>{mobileDropdown ? '▲' : '▾'}</span>
              </button>
              {mobileDropdown && (
                <div className="header-mobile-submenu">
                  {companyLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="header-mobile-sublink"
                      onClick={() => { setMobileOpen(false); setMobileDropdown(false); }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#faq" className="header-mobile-link" onClick={() => setMobileOpen(false)}>
              FAQs
            </a>

            <a href="#contact" className="header-book-btn" style={{ margin: '1rem 1.5rem' }} onClick={() => setMobileOpen(false)}>
              Book Now
            </a>

          </div>
        </>
      )}

    </header>
  );
}