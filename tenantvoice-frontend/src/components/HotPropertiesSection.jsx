import React from 'react';
import './HotPropertiesSection.css';

import propertyImg from '../assets/property-sample.jpg';

const properties = [
  {
    id: 1,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
  {
    id: 2,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
  {
    id: 3,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
  {
    id: 4,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 5,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 6,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 7,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 8,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 9,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 10,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 11,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
    {
    id: 12,
    image: propertyImg,
    rating: 4.3,
    reviews: 6,
    address: '1/23 Random Street, Wentworthville NSW, 2145',
    price: '$650/Week',
    features: '2 Bed · 2 Bath · 1 Car · Avail. immediately',
  },
  
];

function HotPropertiesSection() {
  return (
    <section className="hot-properties-section">
      <h2>
        Hot Properties that are <span className="highlight">available immediately</span>
      </h2>

      <div className="properties-scroll">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="image-container">
              <img src={property.image} alt="Property" className="property-image" />
              <div className="badge">⭐ {property.rating} ({property.reviews})</div>
              <div className="heart">♡</div>
            </div>
            <div className="property-details">
              <p className="address">{property.address}</p>
              <p className="price">{property.price}</p>
              <p className="features">{property.features}</p>
              <a className="view-more" href="/property-detail">View more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotPropertiesSection;
