import React from 'react';
import './FeaturesSection.css';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';

const features = [
  {
    icon: icon1,
    title: 'Find a Tenant or Owner',
    description: 'List your rental property and connect with qualified renters or owners quickly and easily.',
  },
  {
    icon: icon2,
    title: 'List Your Rental',
    description: 'Advertise and manage your personal property with a seamless and user-friendly process.',
  },
  {
    icon: icon3,
    title: 'Read Property Reviews',
    description: 'Get real feedback and chat with current or previous tenants to make smarter rental choices.',
  },
  {
    icon: icon4,
    title: 'Service Providers',
    description: 'Access a network of co-hosts, traders, real estate agents, tax agents, accountants etc.',
  },
  {
    icon: icon5,
    title: 'Request Home Services',
    description: 'Access a trusted network of professionals for property maintenance and repairs.',
  },
  {
    icon: icon6,
    title: 'Connect with Experts',
    description: 'Get in touch with real estate agents, property managers, and industry professionals for guidance.',
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>
        TenantVoice – <span className="highlight">Empowering</span> Tenants,{' '}
        <span className="highlight">Simplifying</span> Rentals
      </h2>
      <p className="features-description">
        At TenantVoice, we bridge the gap between tenants and owners, making renting more fair, collaborative, and stress-free. Whether you're searching for a rental, managing a property, or need expert support, our platform gives you the tools to make informed decisions and build better rental relationships.
      </p>

      <div className="features-cards-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img
            src={feature.icon}
            alt={feature.title}
            className="feature-icon"
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;