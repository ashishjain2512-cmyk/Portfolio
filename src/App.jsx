import React, { useState, useEffect, Suspense, lazy } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Dynamic Background Particle System */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading content…</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact onShowToast={showToast} />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div style={{ height: 80 }} /> }>
        <Footer />
      </Suspense>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
