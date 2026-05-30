import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header transition background
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy detection
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 160; // offset threshold for trigger sync

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial run to capture state on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", section: "home" },
    { name: "About me", path: "/about", section: "about" },
    { name: "Projects", path: "/project", section: "projects" },
    { name: "Skills", path: "/skills", section: "skills" },
    { name: "Contact", path: "/contact", section: "contact" }
  ];

  return (
    <>
      <nav
        className={`navbar navbar-expand-md fixed-top transition-all ${
          scrolled ? "nav-scrolled" : "nav-top"
        }`}
        style={{
          margin: scrolled ? "10px 20px" : "15px 30px",
          borderRadius: "50px",
          background: scrolled ? "rgba(10, 5, 25, 0.65)" : "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: scrolled ? "1px solid rgba(139, 92, 246, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled ? "0 8px 30px rgba(0, 0, 0, 0.3)" : "none",
          zIndex: 1050,
          transition: "var(--transition-smooth)"
        }}
      >
        <div className="container-fluid px-4 px-md-5">
          <Link 
            className="navbar-brand text-white fw-bold tracking-wide" 
            style={{ 
              textDecoration: 'none',
              fontFamily: 'var(--font-secondary)',
              fontSize: '1.4rem'
            }} 
            to="/"
          >
            Akshansh <span style={{ color: 'hsl(var(--accent-purple))' }}>G.</span>
          </Link>

          <button
            className="navbar-toggler border-0 p-2 text-white"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "50%"
            }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-md-center gap-2 mt-3 mt-md-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    className={`nav-link px-3 py-2 fw-medium rounded-pill text-center transition-all ${
                      activeSection === link.section
                        ? "active-link text-white"
                        : "text-secondary hover-text-white"
                    }`}
                    to={link.path}
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: '0.95rem',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              
              <li className="nav-item ms-md-3 text-center mt-2 mt-md-0">
                <a
                  className="btn-glass btn-sm"
                  href="https://drive.google.com/file/d/1k8sicaXjLmpoLoC_TKhQpX5tFcA4Aa5P/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '8px 20px',
                    fontSize: '0.9rem'
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Styled JSX for local overrides */}
      <style>{`
        .navbar-nav .nav-link {
          transition: var(--transition-smooth);
        }
        .navbar-nav .nav-link.active-link {
          background: hsla(var(--accent-purple), 0.2) !important;
          border: 1px solid hsla(var(--accent-purple), 0.3) !important;
          color: #ffffff !important;
        }
        .navbar-nav .nav-link:not(.active-link):hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.05);
        }
        
        /* Mobile menu responsive styles */
        @media (max-width: 767.98px) {
          .navbar-collapse {
            background: rgba(10, 5, 25, 0.95);
            backdrop-filter: blur(20px);
            margin: 15px -24px -12px -24px;
            padding: 20px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </>
  );
}
