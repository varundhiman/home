import React from 'react';

const UnderConstruction = ({ title, onBack }) => {
  return (
    <div className="under-construction">
      <div className="construction-content">
        <div className="construction-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        
        <h1>{title}</h1>
        <h2>Under Construction</h2>
        
        <p>This section is currently being built. Check back soon for updates!</p>
        
        <div className="construction-animation">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        
        <button onClick={onBack} className="back-button">
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;