import React, { useState, useEffect } from 'react';
import { personalDetails } from '../../data/portfolioData';
import './Navbar.css';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        background: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.85rem 0' : '1.25rem 0'
      }}
    >
      <div className="container header-container">
        {/* Logo */}
        <a href="#home" className="brand">
          <div className="brand-logo">AJ</div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.01em' }}>{personalDetails.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      padding: '0.4rem 0'
                    }}
                    className={isActive ? 'active' : ''}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          background: 'var(--accent-cyan)',
                          borderRadius: '2px',
                          boxShadow: '0 0 8px var(--accent-cyan)'
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
            <span>Hire Me</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(13, 17, 26, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'block'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
}
