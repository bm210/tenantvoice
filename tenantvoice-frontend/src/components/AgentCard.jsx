import React from 'react';
import './AgentCard.css';


function AgentCard({ image, name, properties, rating }) {
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < count ? 'star filled' : 'star'}
          role="img"
          aria-label={i < count ? 'filled star' : 'empty star'}
        >
          {i < count ? '\u2605' : '\u2606'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="agent-card">
      <img src={image} alt={name} className="agent-image" />
      <h4 className="agent-name">{name}</h4>
      <p className="agent-properties">{properties} properties</p>
      <div className="agent-rating">{renderStars(rating)}</div>
    </div>
  );
}

export default AgentCard;