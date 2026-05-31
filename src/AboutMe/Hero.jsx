import React from "react";
import "./About.css";

export default function Hero() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" }
  ];

  return (
    <div className="container text-light py-5">
      <div className="row align-items-center mt-5 gy-5">
        {/* Profile Image Column */}
        <div className="col-12 col-md-4 d-flex justify-content-center animate-fade-in-left">
          <div className="profile-wrapper">
            <div className="profile-glowing-ring"></div>
            <div className="profile-image-container">
              <img
                src="/Akshansh.png"
                alt="Akshansh Gupta"
                className="profile-img"
              />
            </div>
          </div>
        </div>

        {/* Description Column */}
        <div className="col-12 col-md-8 ps-md-5 animate-fade-in-right">
          <h4 
            className="text-uppercase tracking-wider fs-6 mb-2"
            style={{ 
              color: 'hsl(var(--accent-cyan))',
              fontFamily: 'var(--font-secondary)',
              fontWeight: '600'
            }}
          >
            My Journey
          </h4>
          <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--font-secondary)' }}>
            Passionate About <span className="gradient-text-accent">Problem Solving</span>
          </h2>
          
          <div className="about-text-content">
            <p className="fs-6 mb-4 text-secondary" style={{ lineHeight: '1.8' }}>
              With over 5 years of experience in web development, I specialize
              in creating highly responsive, accessible, and performant applications.
              My journey in technology started with a deep curiosity about how things work under the hood,
              and it has evolved into a lifelong passion for building products that users love.
            </p>
            <p className="fs-6 mb-5 text-secondary" style={{ lineHeight: '1.8' }}>
              I'm committed to continuous learning and staying current with modern engineering practices.
              I thrive in collaborative environments where I can tackle complex architectural challenges,
              mentor other engineers, and build impactful software solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="row g-3">
            {stats.map((stat, i) => (
              <div className="col-12 col-sm-4" key={i}>
                <div className="glass-panel text-center p-3 h-100 stat-card">
                  <h3 
                    className="display-6 fw-extrabold mb-1" 
                    style={{ 
                      color: 'hsl(var(--accent-cyan))', 
                      fontFamily: 'var(--font-secondary)',
                      textShadow: '0 0 10px rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p className="small mb-0 text-uppercase tracking-wider fw-semibold text-secondary">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .profile-wrapper {
          position: relative;
          width: 250px;
          height: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .profile-glowing-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, hsl(var(--accent-purple)), hsl(var(--accent-cyan)));
          opacity: 0.6;
          filter: blur(10px);
          animation: rotate-glow 10s linear infinite;
        }

        .profile-image-container {
          position: relative;
          width: 92%;
          height: 92%;
          border-radius: 50%;
          background: #0b0f2e;
          border: 2px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }
        
        .profile-wrapper:hover .profile-img {
          transform: scale(1.08);
        }

        .profile-wrapper:hover .profile-glowing-ring {
          opacity: 0.95;
          filter: blur(15px);
        }
        
        .stat-card {
          transition: var(--transition-smooth);
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
        }
        
        .stat-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: hsla(var(--accent-cyan), 0.4);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px hsla(var(--accent-cyan), 0.15);
        }

        @keyframes rotate-glow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Entry Animations */
        .animate-fade-in-left {
          opacity: 0;
          animation: fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
