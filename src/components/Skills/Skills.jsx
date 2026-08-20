import React, { useState } from 'react';
import { skillsData } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const filteredData = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">

        <div className="section-title-wrapper">
          <span className="section-subtitle">Skills & Expertise</span>
          <h2 className="section-title">Technical Proficiency</h2>
          <p className="section-description">A comprehensive overview of my core technology stack, frameworks, and developer tools.</p>
        </div>

        <div className="skills-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? 'btn btn-primary' : 'btn btn-secondary'}
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', borderRadius: '50px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredData.map((categoryObj, cIdx) => (
            <div key={cIdx} className="glass-card skills-card">
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)' }}>
                <span>{categoryObj.category}</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {categoryObj.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{skill.icon}</span> {skill.name}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>{skill.level}%</span>
                    </div>

                    <div className="progress-bar"><div style={{ width: `${skill.level}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
