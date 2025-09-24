import React from 'react';
import './GetStartedSection.css';

import getStartedIcon from '../assets/getstarted1.png';

const getStartedSteps = [
  {
    icon: getStartedIcon,
    title: 'Set up your renter profile',
    description: 'Want to get matched to properties faster? Get started with a profile.',
    action: 'Create a profile',
  },
  {
    icon: getStartedIcon,
    title: 'Set up your renter profile',
    description: 'Want to get matched to properties faster? Get started with a profile.',
    action: 'Create a profile',
  },
  {
    icon: getStartedIcon,
    title: 'Set up your renter profile',
    description: 'Want to get matched to properties faster? Get started with a profile.',
    action: 'Create a profile',
  },
  {
    icon: getStartedIcon,
    title: 'Set up your renter profile',
    description: 'Want to get matched to properties faster? Get started with a profile.',
    action: 'Create a profile',
  },
];

function GetStartedSection() {
  return (
    <section className="get-started-section">
      <h2>
        While you're here, <span className="highlight">let’s get you set up!</span>
      </h2>
      <div className="get-started-scroll">
        {getStartedSteps.map((step, index) => (
          <div className="get-started-card" key={index}>
            <img src={step.icon} alt={step.title} className="get-started-icon" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <a href="/signup-owner" className="get-started-link">{step.action}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GetStartedSection;
