import React from 'react';
import './AgentsSection.css';
import agentPhoto from '../assets/agent-profile.png';
import magnifyingIcon from '../assets/Magnifying.png';

const agents = [
  {
    name: 'Jane Smith',
    role: 'Owner',
    location: 'Based in Sydney',
    rating: '4.4/5',
    reviews: '(32 reviews)',
    photo: agentPhoto,
  },

    {
    name: 'Jane Smith',
    role: 'Owner',
    location: 'Based in Sydney',
    rating: '4.4/5',
    reviews: '(32 reviews)',
    photo: agentPhoto,
  },

    {
    name: 'Jane Smith',
    role: 'Owner',
    location: 'Based in Sydney',
    rating: '4.4/5',
    reviews: '(32 reviews)',
    photo: agentPhoto,
  },

    {
    name: 'Jane Smith',
    role: 'Owner',
    location: 'Based in Sydney',
    rating: '4.4/5',
    reviews: '(32 reviews)',
    photo: agentPhoto,
  },

    {
    name: 'Jane Smith',
    role: 'Owner',
    location: 'Based in Sydney',
    rating: '4.4/5',
    reviews: '(32 reviews)',
    photo: agentPhoto,
  },

    {
    name: 'Jane Smith',
    role: 'Owner',
    location: 'Based in Sydney',
    rating: '4.4/5',
    reviews: '(32 reviews)',
    photo: agentPhoto,
  },

    {
    name: 'Jane Smith',
    role: 'Owner',
    location: 'Based in Sydney',
    rating: '4.4/5',
    reviews: '(32 reviews)',
    photo: agentPhoto,
  },

  
];

function AgentsSection() {
  return (
    <section className="agents-section">
      <h2>
      </h2>
      <div className="agents-scroll"
      
  >
        <div className="agent-card search-card">
          <div className="search-card-header">
            <img src={magnifyingIcon} alt="Search Icon" className="search-icon-img" />
            <h3>Find local owners</h3>
            </div>
            <p>Enter a postcode to find the best and most trusted owners near you.</p>
            <input type="text" placeholder=" type postcode" />
            <button className="find-btn">Find owners</button>
          </div>

        {agents.map((agent, index) => (
          <div className="agent-card" key={index}>
            <img src={agent.photo} alt={agent.name} className="agent-photo" />
            <h3>{agent.name}</h3>
            <p className="role">{agent.role}</p>
            <p className="location">{agent.location}</p>
            <p className="rating">
              ⭐ {agent.rating} <span className="reviews">{agent.reviews}</span>
            </p>
            <button className="see-more-btn">See more</button>
          </div>
        ))}
      </div>
    </section>
  );
}



export default AgentsSection;
