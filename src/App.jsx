import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
        <About />
        <Skills />
        <Projects />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
