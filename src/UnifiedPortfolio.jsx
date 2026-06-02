import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import About from './AboutMe/About';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

export default function UnifiedPortfolio() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Map pathnames to section IDs
    const pathToId = {
      '/': 'home',
      '/about': 'about',
      '/project': 'projects',
      '/skills': 'skills',
      '/contact': 'contact'
    };

    const sectionId = pathToId[pathname];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <div className="d-flex flex-column gap-5 position-relative">
      {/* Floating Space Glow Ambient Blobs */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      <section id="home" className="min-vh-100 d-flex align-items-center">
        <LandingPage />
      </section>
      
      <section id="about" className="py-5">
        <About />
      </section>
      
      <section id="projects" className="py-5">
        <Project />
      </section>
      
      <section id="skills" className="py-5">
        <Skills />
      </section>
      
      <section id="contact" className="py-5">
        <Contact />
      </section>
    </div>
  );
}
