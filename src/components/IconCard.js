import React from 'react';

const IconCard = ({ onClick, icon, title, description, ariaLabel }) => {
  return (
    <div 
      className="icon-card" 
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="icon">
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default IconCard;