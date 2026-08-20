import React from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="project-modal-close">✕</button>

        <div style={{ marginBottom: '1.5rem' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>{project.category}</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h2>
        </div>

        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.longDescription || project.description}</p>

        {project.highlights && (
          <div className="key-highlights">
            <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}>Key Technical Highlights</h4>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ lineHeight: 1.6 }}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"> <span>Live Demo</span> ↗</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary"> <span>View Source Code</span> 🐙</a>
        </div>

      </div>
    </div>
  );
}
