import React from 'react';

const IconCard = ({ href, icon, title, description, ariaLabel }) => {
  return (
    <a href={href} className="icon-card" aria-label={ariaLabel}>
      <div className="icon">
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
};

export default IconCard;