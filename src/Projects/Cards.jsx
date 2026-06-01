import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ScrollReveal from '../ScrollReveal';
import './Projects.css';

export default function Cards() {
  const projects = [
    {
      title: "DevFlow - Q&A Platform",
      description: "A comprehensive developer community forum for posting coding questions, voting on answers, tagging categories, and earning reputation points. Features robust search, filter systems, and user profiles.",
      image: "/About_Image.webp",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/akshansh-g/devflow",
      live: "https://devflow-qa.example.com",
      accent: "hsl(var(--accent-purple))"
    },
    {
      title: "Promptopia - AI Prompt Hub",
      description: "An open-source AI prompt sharing platform designed for modern creators to discover, search, and share creative prompts for large language models. Built with advanced user search and tagging features.",
      image: "/About_Image.webp",
      tags: ["React", "Next.js", "MongoDB", "CSS Modules"],
      github: "https://github.com/akshansh-g/promptopia",
      live: "https://promptopia-ai.example.com",
      accent: "hsl(var(--accent-cyan))"
    },
    {
      title: "Imaginify - AI Image SaaS",
      description: "An advanced AI-powered SaaS application offering professional image restoration, background removal, object recoloring, and generative fill. Integrated with cloud processing and credits-based subscriptions.",
      image: "/About_Image.webp",
      tags: ["React", "Node.js", "Cloudinary", "MUI"],
      github: "https://github.com/akshansh-g/imaginify",
      live: "https://imaginify-saas.example.com",
      accent: "235, 75%, 55%" // indigo
    }
  ];

  return (
    <div className="container text-light mt-5 pb-5">
      <div className="row g-4 justify-content-center">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
            <ScrollReveal delay={index * 150} duration={800}>
              <div 
                className="glass-panel w-100 project-card d-flex flex-column overflow-hidden position-relative"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "20px",
                  transition: "var(--transition-smooth)",
                  height: "100%"
                }}
              >
                {/* Card Accent Glow Top Bar */}
                <div 
                  className="position-absolute top-0 start-0 w-100" 
                  style={{ 
                    height: '4px',
                    background: project.accent.startsWith('hsl') ? project.accent : `hsl(${project.accent})`
                  }}
                ></div>

                {/* Image Container */}
                <div className="project-image-wrapper position-relative overflow-hidden" style={{ height: '200px' }}>
                  <img 
                    src={project.image} 
                    className="project-image w-100 h-100 object-fit-cover" 
                    alt={project.title} 
                  />
                  <div className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex gap-3 text-white overlay-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-overlay-icon"
                      >
                        <GitHubIcon />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-overlay-icon"
                      >
                        <LaunchIcon />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <h4 className="fw-bold mb-3 project-title" style={{ fontFamily: 'var(--font-secondary)' }}>
                    {project.title}
                  </h4>
                  
                  <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex}
                        className="badge-tag px-2.5 py-1 rounded text-white font-secondary"
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          letterSpacing: '0.02em'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons (For Mobile/Tablet access when hover overlay is not active) */}
                  <div className="d-flex gap-2 mt-auto col-12 d-md-none">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-glass-secondary btn-sm flex-grow-1 text-center py-2 justify-content-center"
                    >
                      <GitHubIcon fontSize="small" /> Code
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-glass btn-sm flex-grow-1 text-center py-2 justify-content-center"
                      style={{
                        background: project.accent.startsWith('hsl') ? project.accent.replace(')', ', 0.25)') : `hsla(${project.accent}, 0.25)`,
                        borderColor: project.accent.startsWith('hsl') ? project.accent : `hsl(${project.accent})`
                      }}
                    >
                      <LaunchIcon fontSize="small" /> Live
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>

      <style>{`
        .project-card {
          transition: var(--transition-smooth);
        }
        
        .project-card:hover {
          background: rgba(255, 255, 255, 0.04) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-8px);
          box-shadow: 0 15px 35px -5px rgba(0,0,0,0.4) !important;
        }

        .project-image-wrapper {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .project-image {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          filter: brightness(0.85) contrast(1.05);
        }

        .project-card:hover .project-image {
          transform: scale(1.08);
          filter: brightness(0.95);
        }

        /* Overlay Link Styling */
        .image-overlay {
          background: rgba(10, 5, 25, 0.8);
          opacity: 0;
          backdrop-filter: blur(4px);
          transition: var(--transition-smooth);
          z-index: 2;
        }

        .project-card:hover .image-overlay {
          opacity: 1;
        }

        .btn-overlay-icon {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          padding: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          transform: translateY(15px);
        }

        .project-card:hover .btn-overlay-icon {
          transform: translateY(0);
        }

        .btn-overlay-icon:hover {
          background: hsla(var(--accent-purple), 0.35);
          border-color: hsla(var(--accent-purple), 0.6);
          color: #ffffff;
          box-shadow: 0 0 15px hsla(var(--accent-purple), 0.4);
          transform: scale(1.1) translateY(0);
        }

        .badge-tag {
          transition: var(--transition-smooth);
        }

        .project-card:hover .badge-tag {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
        }
        
        .project-title {
          transition: var(--transition-smooth);
        }
        
        .project-card:hover .project-title {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}