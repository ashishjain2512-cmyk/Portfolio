import React, { useState } from 'react';
import { personalDetails } from '../../data/portfolioData';
import './Contact.css';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (onShowToast) onShowToast('✨ Thank you! Your message has been sent successfully.');
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="section-title-wrapper">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Build Together</h2>
          <p className="section-description">
            Have a project in mind, a job opportunity, or just want to connect? Send a message below!
          </p>
        </div>

        <div className="contact-grid">

          <div className="glass-card contact-info">
            <div>
              <h3>Contact Information</h3>
              <p>I am currently open to full-time engineering positions, contract development, and technical consulting.</p>

              <div className="meta-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="btn-icon">📧</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{personalDetails.email}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="btn-icon">📍</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{personalDetails.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="btn-icon">⚡</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Response Time</div>
                    <div style={{ fontWeight: 600, color: 'var(--accent-emerald)' }}>Within 24 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary full-width-btn"
              >
                <span>{copiedEmail ? 'Copied to Clipboard! ✓' : 'Copy Email Address'}</span>
              </button>

              <div className="social-bar">
                <a href={personalDetails.socials.github} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub">🐙</a>
                <a href={personalDetails.socials.linkedin} target="_blank" rel="noreferrer" className="btn-icon" title="LinkedIn">💼</a>
                <a href={personalDetails.socials.twitter} target="_blank" rel="noreferrer" className="btn-icon" title="Twitter">🐦</a>
                <a href={personalDetails.socials.email} className="btn-icon" title="Email">✉️</a>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Your Name *
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Email Address *
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Subject
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project details or requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary full-width-btn"
                disabled={submitting}
              >
                <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                <span>🚀</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
