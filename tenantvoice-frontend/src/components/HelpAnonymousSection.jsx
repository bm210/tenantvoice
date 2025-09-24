import React from 'react';
import './HelpAnonymousSection.css';
import thinkingCharacter from '../assets/help-character.png';
import { Link } from 'react-router-dom';

function HelpAnonymousSection() {
  return (
    <div className="help-anonymous-container">
      <div className="help-box">
        <h2>Have a question about a property?</h2>
        <p>
          Use our chat feature to connect with past and current tenants,
          so you can make informed decisions before renting.
        </p>
        <button className="help-button">Read Reviews About the Property →</button>
        <button className="help-button">Chat with Previous Tenants →</button>
      </div>

      <div className="character-wrapper">
        <img src={thinkingCharacter} alt="Thinking character" className="help-character" />
      </div>

      <div className="anonymous-box">
        <h3>Submit an anonymous review to gain full access.</h3>
        <div className="review-buttons">
        <Link to="/anonymous-review">
          <button className="white-button">Write a review</button>
        </Link>
          <span>OR</span>
          <button className="blue-button">Unlock full access</button>
        </div>
        <p className="login-text">
          Don’t have a review to share? Subscribe to gain full access to the platform.
          Already have an account? <a href="/login">Login Here</a>
        </p>
      </div>
    </div>
  );
}

export default HelpAnonymousSection;
