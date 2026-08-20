import React from 'react';
import { personalDetails } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container footer-container">

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div className="brand-small">AJ</div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© {new Date().getFullYear()} {personalDetails.name}. Built with React.js & Passion.</span>
        </div>

        <button onClick={scrollToTop} className="btn-icon" title="Back to Top" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>↑</button>

      </div>
    </footer>
  );
}
