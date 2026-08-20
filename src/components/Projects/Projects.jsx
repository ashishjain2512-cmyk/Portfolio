import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal/ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section">
      <div className="container">

        <div className="section-title-wrapper">
          <span className="section-subtitle">Featured Work</span>
          <h2 className="section-title">Projects & Products</h2>
          <p className="section-description">
            A curated showcase of applications I've designed, architected, and deployed.
          </p>
        </div>

        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? 'btn btn-primary' : 'btn btn-secondary'}
              style={{ padding: '0.55rem 1.3rem', fontSize: '0.88rem', borderRadius: '50px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-image" onClick={() => setActiveModalProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                />
                <span className="badge badge-purple" style={{ position: 'absolute', top: '1rem', left: '1rem', backdropFilter: 'blur(10px)' }}>{project.category}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title" onClick={() => setActiveModalProject(project)}>{project.title}</h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>{project.description}</p>

                <div className="project-tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="badge" style={{ fontSize: '0.75rem' }}>{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="badge" style={{ fontSize: '0.75rem' }}>+{project.tags.length - 4}</span>
                  )}
                </div>

                <div className="project-footer">
                  <button onClick={() => setActiveModalProject(project)} style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>View Case Study</span> →
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-icon" title="GitHub Repository">🐙</a>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-icon" title="Live Demo">↗</a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />

      </div>
    </section>
  );
}
