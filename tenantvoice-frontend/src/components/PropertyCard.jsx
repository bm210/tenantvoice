import React from 'react';
import './PropertyCard.css';

function PropertyCard({ image, title, location, bedrooms, bathrooms, price }) {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={title} />
        <span className="label">For Rent</span>
        <span className="favourite" role="img" aria-label="favourite">
          ♡
        </span>
      </div>
      <div className="property-info">
        <h4>{title}</h4>
        <p className="location">{location}</p>
        <div className="details">
          <span>{bedrooms} Bed</span>
          <span>{bathrooms} Bath</span>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

export default PropertyCard;