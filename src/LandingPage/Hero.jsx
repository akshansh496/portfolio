import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from '@mui/icons-material/Code';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function Hero() {
  const coreSkills = [
    { name: "React", color: "190, 90%, 50%" },
    { name: "Node.js", color: "140, 60%, 45%" },
    { name: "Express.js", color: "200, 15%, 50%" },
    { name: "MongoDB", color: "145, 50%, 45%" },
    { name: "Java", color: "25, 80%, 50%" }
  ];

  return (
    <div className="container text-light py-5">
      <div className="row align-items-center min-vh-75 mt-4">
        {/* Floating Code Icon (Left Column on large screen) */}
        <div className="col-lg-2 d-none d-lg-flex justify-content-center">
          <div className="animate-float" style={{ opacity: 0.25 }}>
            <CodeIcon style={{ fontSize: '100px', color: 'hsl(var(--accent-purple))' }} />
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="col-12 col-lg-8 text-center px-4">
          {/* Badge */}
          <div className="d-inline-block mb-4 animate-fade-in">
            <span 
              className="px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2"
              style={{ 
                background: "rgba(255, 255, 255, 0.04)", 
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: '#fff',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}
            >
              <AutoAwesomeIcon style={{ fontSize: '14px', color: 'hsl(var(--accent-cyan))' }} />
              Open to New Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="display-4 fw-extrabold mb-3 tracking-tight animate-fade-in-up">
            Hello, I'm <span className="gradient-text-accent glow-text">Akshansh Gupta</span>
          </h1>

          <h2 
            className="display-6 mb-4 fw-bold animate-fade-in-up" 
            style={{ 
              fontFamily: 'var(--font-secondary)',
              animationDelay: '0.1s' 
            }}
          >
            A Passionate <span className="gradient-text-cyan">Full Stack Developer</span>
          </h2>

          {/* Description */}
          <p 
            className="lead fs-5 text-secondary mx-auto mb-5 animate-fade-in-up" 
            style={{ 
              maxWidth: '650px',
              animationDelay: '0.2s',
              lineHeight: '1.7' 
            }}
          >
            I craft beautiful, high-performance, and user-centric digital experiences. 
            Passionate about building scalable applications and transforming complex ideas into clean, functional code.
          </p>

          {/* Actions */}
          <div 
            className="d-flex flex-wrap justify-content-center gap-3 mb-5 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link to="/project" className="btn-glass px-4 py-3">
              View my work <ArrowForwardIcon fontSize="small" />
            </Link>
            <Link to="/contact" className="btn-glass-secondary px-4 py-3">
              Contact me
            </Link>
          </div>

          {/* Social Links */}
          <div 
            className="d-flex justify-content-center gap-3 mb-5 animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            <a 
              href="https://github.com/akshansh-g" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
            >
              <GitHubIcon />
            </a>
            <a 
              href="https://linkedin.com/in/akshanshgupta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="mailto:akshanshgupta@example.com" 
              className="social-icon-btn"
            >
              <EmailIcon />
            </a>
          </div>

          {/* Core Skills Chips */}
          <div 
            className="mt-5 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-secondary small fw-bold text-uppercase tracking-wider mb-3">
              Core Stack
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {coreSkills.map((skill) => (
                <span 
                  key={skill.name}
                  className="skill-badge px-3 py-2 rounded-pill font-secondary text-white"
                  style={{
                    background: `rgba(${skill.color}, 0.1)`,
                    border: `1px solid rgba(${skill.color}, 0.25)`,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Bolt Icon (Right Column on large screen) */}
        <div className="col-lg-2 d-none d-lg-flex justify-content-center">
          <div className="animate-float" style={{ opacity: 0.25, animationDelay: '1.5s' }}>
            <ElectricBoltIcon style={{ fontSize: '100px', color: 'hsl(var(--accent-cyan))' }} />
          </div>
        </div>
      </div>

      <style>{`
        .social-icon-btn {
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          padding: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          text-decoration: none;
        }
        .social-icon-btn:hover {
          color: #ffffff;
          background: hsla(var(--accent-purple), 0.25);
          border-color: hsla(var(--accent-purple), 0.5);
          box-shadow: 0 0 15px hsla(var(--accent-purple), 0.3);
          transform: translateY(-3px);
        }
        .skill-badge:hover {
          background: hsla(var(--accent-purple), 0.2) !important;
          border-color: hsla(var(--accent-purple), 0.5) !important;
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
        }
        
        /* Keyframe animations */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
