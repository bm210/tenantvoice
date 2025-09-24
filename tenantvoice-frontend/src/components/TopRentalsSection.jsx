import React from 'react';
import './TopRentalsSection.css';
import bgImage from '../assets/toprentals-bg.png';
import searchIcon from '../assets/search-icon.png'; 

function TopRentalsSection() {
  return (
    <section className="top-rentals-section">
      <h2>
        <span className="highlight">Top Rentals in Sydney</span>, Find Your Home Today!
      </h2>

      <div
        className="rentals-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="rentals-content">
          <div className="tabs">
            <button className="active">Rent a Property</button>
            <button>Read Reviews</button>
            <button>Service Providers</button>
          </div>

          <div className="search-bar">
            <div className="search-input-wrapper">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input
                type="text"
                placeholder="Search Suburbs, Postcode or State"
              />
            </div>

            <button className="filter-btn">☰ Filter</button>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopRentalsSection;
