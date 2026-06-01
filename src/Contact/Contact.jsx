import React, { useState } from 'react';
import Header from './Header';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScrollReveal from '../ScrollReveal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    // Mock sending process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <>
      <Header />
      <div className="container text-light pb-5 mb-5">
        <div className="row justify-content-center g-4 mt-2">
          
          {/* Contact Details Card */}
          <div className="col-12 col-lg-4">
            <ScrollReveal delay={100} duration={850}>
              <div 
                className="glass-panel p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "20px",
                  height: "100%"
                }}
              >
                <div 
                  className="position-absolute top-0 start-0 w-100" 
                  style={{ height: '3px', background: 'hsl(var(--accent-cyan))' }}
                ></div>

                <div>
                  <h4 className="fw-bold mb-4 font-secondary" style={{ fontSize: '1.3rem' }}>
                    Contact Information
                  </h4>
                  
                  <p className="text-secondary small mb-5" style={{ lineHeight: '1.7' }}>
                    Have an exciting project you want to build or a developer role you are looking to fill? 
                    Feel free to reach out. I am always open to discussing new opportunities and tech challenges.
                  </p>

                  {/* Info Rows */}
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="p-2.5 rounded d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(6, 182, 212, 0.1)',
                          color: 'hsl(var(--accent-cyan))',
                          border: '1px solid rgba(6, 182, 212, 0.15)',
                          borderRadius: '10px'
                        }}
                      >
                        <EmailIcon fontSize="small" />
                      </div>
                      <div>
                        <p className="small text-secondary mb-0 fw-semibold">Email me</p>
                        <a href="mailto:akshanshgupta@example.com" className="text-white text-decoration-none fw-semibold small hover-link">
                          akshanshgupta@example.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="p-2.5 rounded d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(139, 92, 246, 0.1)',
                          color: 'hsl(var(--accent-purple))',
                          border: '1px solid rgba(139, 92, 246, 0.15)',
                          borderRadius: '10px'
                        }}
                      >
                        <LocationOnIcon fontSize="small" />
                      </div>
                      <div>
                        <p className="small text-secondary mb-0 fw-semibold">Location</p>
                        <p className="text-white mb-0 fw-semibold small">
                          New Delhi, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Connections */}
                <div className="mt-5 pt-4 border-top border-secondary border-opacity-10">
                  <p className="text-secondary small text-uppercase tracking-wider fw-bold mb-3">
                    Connect Socially
                  </p>
                  <div className="d-flex gap-3">
                    <a 
                      href="https://github.com/akshansh-g" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-social-btn"
                    >
                      <GitHubIcon />
                    </a>
                    <a 
                      href="https://linkedin.com/in/akshanshgupta" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-social-btn"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form Card */}
          <div className="col-12 col-lg-6">
            <ScrollReveal delay={250} duration={850}>
              <div 
                className="glass-panel p-4 position-relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "20px"
                }}
              >
                <div 
                  className="position-absolute top-0 start-0 w-100" 
                  style={{ height: '3px', background: 'hsl(var(--accent-purple))' }}
                ></div>

                {isSubmitted ? (
                  /* Success Screen */
                  <div className="text-center py-5 d-flex flex-column align-items-center justify-content-center success-state animate-scale-up">
                    <CheckCircleIcon 
                      style={{ 
                        fontSize: '70px', 
                        color: 'hsl(var(--accent-cyan))',
                        filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.35))'
                      }} 
                      className="mb-4"
                    />
                    <h3 className="fw-bold mb-3 font-secondary" style={{ fontSize: '1.6rem' }}>
                      Message Sent!
                    </h3>
                    <p className="text-secondary small max-w-sm mx-auto mb-4" style={{ maxWidth: '350px', lineHeight: '1.7' }}>
                      Thank you so much for reaching out! Your message was delivered successfully. 
                      I'll review it and get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-glass btn-sm mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  /* Form Screen */
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 py-2">
                    <h4 className="fw-bold mb-1 font-secondary" style={{ fontSize: '1.3rem' }}>
                      Send a Message
                    </h4>

                    {error && (
                      <div 
                        className="p-3 small rounded border border-danger text-danger"
                        style={{ background: 'rgba(220, 38, 38, 0.08)' }}
                      >
                        {error}
                      </div>
                    )}

                    <div className="form-group-custom">
                      <label className="small text-secondary fw-semibold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control-custom w-100" 
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group-custom">
                      <label className="small text-secondary fw-semibold mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control-custom w-100" 
                        placeholder="you@example.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group-custom">
                      <label className="small text-secondary fw-semibold mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea 
                        id="message"
                        name="message" 
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control-custom w-100" 
                        placeholder="What would you like to discuss?"
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-glass py-3 col-12 justify-content-center mt-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <SendIcon fontSize="small" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      <style>{`
        .hover-link {
          transition: var(--transition-smooth);
        }
        .hover-link:hover {
          color: hsl(var(--accent-cyan)) !important;
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }
        
        .contact-social-btn {
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          padding: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          text-decoration: none;
        }
        .contact-social-btn:hover {
          color: #ffffff;
          background: hsla(var(--accent-purple), 0.25);
          border-color: hsla(var(--accent-purple), 0.5);
          box-shadow: 0 0 12px hsla(var(--accent-purple), 0.25);
          transform: translateY(-2px);
        }

        /* Custom Form Controls */
        .form-control-custom {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 12px 16px;
          border-radius: 12px;
          outline: none;
          font-family: var(--font-primary);
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        
        .form-control-custom:focus {
          background: rgba(255, 255, 255, 0.04);
          border-color: hsla(var(--accent-purple), 0.5);
          box-shadow: 0 0 15px hsla(var(--accent-purple), 0.15);
        }

        .form-control-custom::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        /* Entry Animations */
        .animate-slide-in-left {
          opacity: 0;
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-in-right {
          opacity: 0;
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-scale-up {
          animation: scaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}