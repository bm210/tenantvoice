import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <div className="hero-text">
          <h1>
            <span style={{ color: '#36353C', fontWeight: 750 }}>
              Giving Tenants a Voice,
            </span>{' '}
            <span style={{ color: 'white', fontWeight: 650 }}>
              Building Better Communities
            </span>
          </h1>
          <p>
            <span style={{ color: 'white', fontWeight: 600 }}>
              We make renting more transparent and collaborative by connecting tenants and property managers. Our platform gives tenants a voice while helping owners build trust and streamline operations.
            </span>
          </p>
        </div>
      </div>
      <div className="hero-right" />
    </section>
  );
}

export default HeroSection;
