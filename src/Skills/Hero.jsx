import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import BuildIcon from "@mui/icons-material/Build";
import ScrollReveal from "../ScrollReveal";

export default function Hero() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <CodeIcon fontSize="medium" />,
      accent: "hsl(var(--accent-cyan))",
      skills: [
        { name: "React", tint: "195, 90%, 55%" },
        { name: "JavaScript", tint: "50, 95%, 55%" },
        { name: "HTML5 & CSS3", tint: "15, 85%, 55%" },
        { name: "Bootstrap CSS", tint: "260, 75%, 65%" },
        { name: "MUI Material", tint: "205, 90%, 55%" },
        { name: "TypeScript", tint: "205, 80%, 50%" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <DataObjectIcon fontSize="medium" />,
      accent: "hsl(var(--accent-purple))",
      skills: [
        { name: "Node.js", tint: "140, 60%, 45%" },
        { name: "Express.js", tint: "195, 10%, 50%" },
        { name: "MongoDB", tint: "145, 50%, 45%" },
        { name: "Python", tint: "45, 80%, 45%" },
        { name: "REST APIs", tint: "330, 75%, 55%" },
        { name: "PostgreSQL", tint: "215, 65%, 50%" }
      ]
    },
    {
      title: "Tools & Methodologies",
      icon: <BuildIcon fontSize="medium" />,
      accent: "235, 75%, 55%", // Indigo
      skills: [
        { name: "Git / GitHub", tint: "10, 80%, 55%" },
        { name: "Figma", tint: "0, 75%, 55%" },
        { name: "Java", tint: "25, 85%, 50%" },
        { name: "Docker", tint: "200, 85%, 50%" },
        { name: "Postman", tint: "15, 95%, 60%" }
      ]
    }
  ];

  return (
    <div className="container text-light py-4 mt-2">
      <div className="row g-4 justify-content-center">
        {skillCategories.map((category, index) => {
          const accentColor = category.accent.startsWith('hsl') ? category.accent : `hsl(${category.accent})`;
          const accentColorAlpha = category.accent.startsWith('hsl') ? category.accent.replace(')', ', 0.1)') : `hsla(${category.accent}, 0.1)`;
          
          return (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <ScrollReveal delay={index * 150} duration={800}>
                <div 
                  className="glass-panel h-100 p-4 skill-category-card position-relative overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "20px"
                  }}
                >
                  {/* Glowing border accent */}
                  <div 
                    className="position-absolute top-0 start-0 w-100" 
                    style={{ height: '3px', background: accentColor }}
                  ></div>

                  {/* Header */}
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div 
                      className="category-icon-wrapper p-2.5 rounded d-flex align-items-center justify-content-center"
                      style={{
                        background: accentColorAlpha,
                        color: accentColor,
                        border: `1px solid rgba(255, 255, 255, 0.05)`,
                        borderRadius: '12px'
                      }}
                    >
                      {category.icon}
                    </div>
                    <h5 className="fw-bold mb-0 text-white font-secondary" style={{ fontSize: '1.2rem' }}>
                      {category.title}
                    </h5>
                  </div>

                  {/* Skill List */}
                  <div className="d-flex flex-column gap-3">
                    {category.skills.map((skill, sIndex) => {
                      const skillColor = `hsl(${skill.tint})`;
                      const skillBg = `hsla(${skill.tint}, 0.08)`;
                      const skillBorder = `hsla(${skill.tint}, 0.25)`;

                      return (
                        <div 
                          className="skill-badge-row p-3 rounded d-flex align-items-center justify-content-between position-relative"
                          key={sIndex}
                          style={{
                            background: skillBg,
                            border: `1px solid ${skillBorder}`,
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)'
                          }}
                        >
                          <span className="fw-semibold text-white fs-6 font-secondary">{skill.name}</span>
                          <div 
                            className="skill-dot"
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: skillColor,
                              boxShadow: `0 0 10px ${skillColor}`
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>

      <style>{`
        .skill-category-card {
          transition: var(--transition-smooth);
        }

        .skill-category-card:hover {
          background: rgba(255, 255, 255, 0.04) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-6px);
          box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.4) !important;
        }

        .category-icon-wrapper {
          transition: var(--transition-smooth);
        }

        .skill-category-card:hover .category-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .skill-badge-row {
          cursor: default;
        }

        .skill-badge-row:hover {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
