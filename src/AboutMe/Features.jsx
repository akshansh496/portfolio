import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from '@mui/icons-material/Palette';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './About.css';

export default function Features() {
  const features = [
    {
      icon: <CodeIcon style={{ fontSize: '26px' }} />,
      title: "Clean Code",
      desc: "Writing maintainable, scalable, and highly efficient code is my primary architectural standard.",
      color: "hsl(var(--accent-purple))"
    },
    {
      icon: <PaletteIcon style={{ fontSize: '26px' }} />,
      title: "Creative Design",
      desc: "Combining clean user experience research with vibrant aesthetic design to craft stunning interfaces.",
      color: "hsl(var(--accent-cyan))"
    },
    {
      icon: <RocketLaunchIcon style={{ fontSize: '26px' }} />,
      title: "Fast Performance",
      desc: "Optimizing code bundles, rendering paths, and assets to deliver lightning-fast response times.",
      color: "235, 75%, 55%" // indigo HSL
    }
  ];

  return (
    <div className="container text-light py-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12 col-md-8">
          <h3 className="fw-bold fs-3" style={{ fontFamily: 'var(--font-secondary)' }}>
            What I Stand For
          </h3>
          <p className="text-secondary small text-uppercase tracking-wider fw-semibold mt-2">
            My development core principles and values
          </p>
        </div>
      </div>
      
      <div className="row g-4">
        {features.map((feat, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="glass-panel text-center p-4 h-100 feature-card position-relative overflow-hidden">
              {/* Glowing back-glow */}
              <div 
                className="feature-glow"
                style={{
                  background: feat.color.startsWith('hsl') ? feat.color : `hsl(${feat.color})`
                }}
              ></div>
              
              {/* Icon Container */}
              <div 
                className="d-inline-flex align-items-center justify-content-center mb-4 icon-wrapper"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: `rgba(255, 255, 255, 0.03)`,
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  color: feat.color.startsWith('hsl') ? feat.color : `hsl(${feat.color})`,
                  boxShadow: `0 8px 20px rgba(0,0,0,0.2)`
                }}
              >
                {feat.icon}
              </div>

              {/* Text */}
              <h5 className="mb-3 fw-bold fs-5" style={{ fontFamily: 'var(--font-secondary)' }}>
                {feat.title}
              </h5>
              <p className="text-secondary mb-0 small" style={{ lineHeight: '1.7' }}>
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .feature-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: var(--transition-smooth);
          z-index: 1;
        }

        .feature-glow {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0;
          transition: var(--transition-smooth);
          z-index: -1;
          pointer-events: none;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-6px);
        }

        .feature-card:hover .feature-glow {
          opacity: 0.25;
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35) !important;
        }

        .icon-wrapper {
          transition: var(--transition-smooth);
        }
      `}</style>
    </div>
  );
}
