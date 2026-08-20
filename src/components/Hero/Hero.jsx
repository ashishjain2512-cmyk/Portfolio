import React, { useState, useEffect } from 'react';
import { personalDetails } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % personalDetails.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability-pill">
              <span className="dot animate-pulse" />
              <span>Available for New Projects & Roles</span>
            </div>

            <h1>
              Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
            </h1>

            <div className="hero-roles">
              <span className="hero-role-label">I am a</span>
              <span className="gradient-text-alt">{personalDetails.roles[roleIndex]}</span>
            </div>

            <p className="hero-bio">{personalDetails.bio}</p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <span className="cta-arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
              </a>
            </div>

            <div className="stats-grid">
              {personalDetails.stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-card">
                  <div className="gradient-text stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right-side">
            <div className="hero-showcase">
              <div className="showcase-orb orb-one" />
              <div className="showcase-orb orb-two" />
              <div className="showcase-glow" />

              <div className="showcase-content">
                <span className="showcase-tag">Frontend Developer</span>
                <h2>Building clean, fast, and memorable web experiences.</h2>
                <div className="showcase-chips">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>UI/UX</span>
                </div>
                <div className="showcase-metrics">
                  <div>
                    <strong>4+</strong>
                    <span>Projects</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
