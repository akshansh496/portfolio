import React from 'react';

export default function Header() {
  return (
    <div className="container text-light text-center mt-5 mb-4 animate-fade-in">
      <h3 className="display-6 fw-bold mb-2" style={{ fontFamily: 'var(--font-secondary)' }}>
        Get In Touch
      </h3>
      <p className="text-secondary small text-uppercase tracking-wider fw-semibold">
        Let's discuss how we can build something amazing together
      </p>
      
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}