import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-panel mt-auto rounded-0 border-start-0 border-end-0 border-bottom-0 py-4 px-4 px-md-5">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
            <Link to="/" className="text-decoration-none">
              <h5 className="mb-1 fw-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-secondary)' }}>
                Akshansh Gupta
              </h5>
            </Link>
            <p className="small mb-0 text-secondary">
              Full Stack Developer & Designer.
            </p>
          </div>
          
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-4">
              <Link to="/" className="text-secondary text-decoration-none small hover-text-white transition-all">Home</Link>
              <Link to="/about" className="text-secondary text-decoration-none small hover-text-white transition-all">About</Link>
              <Link to="/project" className="text-secondary text-decoration-none small hover-text-white transition-all">Projects</Link>
              <Link to="/skills" className="text-secondary text-decoration-none small hover-text-white transition-all">Skills</Link>
              <Link to="/contact" className="text-secondary text-decoration-none small hover-text-white transition-all">Contact</Link>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-2">
              <a
                href="https://github.com/akshansh-g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover-text-white btn-icon-glass transition-all"
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'inline-flex'
                }}
              >
                <GitHubIcon fontSize="small" />
              </a>
              <a
                href="https://linkedin.com/in/akshanshgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover-text-white btn-icon-glass transition-all"
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'inline-flex'
                }}
              >
                <LinkedInIcon fontSize="small" />
              </a>
              <a
                href="mailto:akshanshgupta@example.com"
                className="text-secondary hover-text-white btn-icon-glass transition-all"
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'inline-flex'
                }}
              >
                <EmailIcon fontSize="small" />
              </a>
            </div>
            <p className="small mb-0 text-secondary">
              &copy; {currentYear} Akshansh Gupta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Styles local to the footer for hover effects */}
      <style>{`
        .hover-text-white {
          transition: var(--transition-smooth);
        }
        .hover-text-white:hover {
          color: #ffffff !important;
        }
        .btn-icon-glass {
          transition: var(--transition-smooth);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .btn-icon-glass:hover {
          background: hsla(var(--accent-purple), 0.3) !important;
          border-color: hsla(var(--accent-purple), 0.5) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}