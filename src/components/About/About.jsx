import React from 'react';
import { personalDetails } from '../../data/portfolioData';
import './About.css';

export default function About() {
  const pillars = [
    {
      title: "Clean Architecture",
      icon: "🏗️",
      desc: "Writing scalable, modular, and maintainable JavaScript/React code following strict design patterns and reusable component logic."
    },
    {
      title: "Pixel-Perfect UX",
      icon: "🎨",
      desc: "Crafting fluid, highly intuitive user interfaces with fine-tuned micro-interactions, responsive design, and smooth transitions."
    },
    {
      title: "Speed & Performance",
      icon: "⚡",
      desc: "Optimizing bundle footprint, lazy rendering, and DOM updates to ensure sub-second interactive page loads."
    },
    {
      title: "Full-Stack Synergy",
      icon: "🔌",
      desc: "Bridging frontend elegance with resilient RESTful APIs, Node.js microservices, and reliable database structures."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">

        <div className="section-title-wrapper">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Driven by Quality & Innovation</h2>
          <p className="section-description">Here's a glimpse into my journey, engineering values, and what fuels my passion for building high-impact web products.</p>
        </div>

        <div className="about-grid">

          <div className="glass-card story-card">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', color: 'var(--accent-cyan)' }}>Engineering Philosophy</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', lineHeight: 1.7 }}>I believe great software isn't just about code that works—it's about creating intuitive, accessible, and delighting experiences for real human beings while maintaining pristine internal code quality.</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Whether crafting custom state management flows in React, tuning Webpack/Vite build pipelines, or connecting complex backend endpoints, I focus on reliability, performance, and future-proof architectural foundations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💻</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Frontend Mastery</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>React, Hooks, State & SPA Architecture</div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Full Stack</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Node.js, Express, REST APIs & Databases</div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Optimization</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Core Web Vitals & Lighthouse Scores</div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Problem Solver</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Algorithmic Thinking & Debugging</div>
            </div>
          </div>

        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card pillar-card">
              <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>{pillar.icon}</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', fontFamily: 'var(--font-heading)' }}>{pillar.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
