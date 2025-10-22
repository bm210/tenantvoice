import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterStateSelection.css";
import logo from "../assets/tenantvoice-logo.png";
import avatar from "../assets/avatar.png";

function RenterProfile() {
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (state) {
      navigate("/state-selection");
    } else {
      alert("Please select your state or territory.");
    }
  };

  const australianStates = [
    "New South Wales",
    "Victoria",
    "Queensland",
    "Western Australia",
    "South Australia",
    "Tasmania",
    "Australian Capital Territory",
    "Northern Territory",
  ];

  return (
    <>
      {/* ===== Header ===== */}
      <header className="tv-header">
        <Link to="/" className="logo-only">
          <img src={logo} alt="TenantVoice Logo" className="logo" />
        </Link>
      </header>

      {/* ===== Body ===== */}
      <main className="rp-main">
        <Link to="/state-selection" className="back-link">← Back to overview</Link>

        <div className="rp-container">
          <img src={avatar} alt="Avatar" className="rp-avatar" />
          <h2>Which is your state or territory?</h2>
          <p>Let us know so we can tailor the Renter Profile to you.</p>

          <select
            className="rp-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select your state</option>
            {australianStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          
          <Link to="/user-profile">
          <button className="rp-button" onClick={handleContinue}>Continue to Profile</button>
          </Link>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="tv-footer">
  <div className="tv-footer-content">
    <div className="tv-footer-left">
      <img src={logo} alt="TenantVoice Logo" className="footer-logo" />
      <p className="footer-desc">
        We make renting more transparent and collaborative. We give tenants
        a voice while helping owners build trust and streamline operations.
      </p>

      <div className="newsletter">
        <label htmlFor="newsletter" className="newsletter-label">
          Subscribe to our newsletter
        </label>
        <div className="newsletter-input">
          <input
            type="email"
            id="newsletter"
            placeholder="Your email"
          />
          <button>Subscribe</button>
        </div>
      </div>

      <p className="footer-rights">© 2025 TenantVoice. All rights reserved.</p>
    </div>

    <div className="tv-footer-links">
      <div>
        <h4>Find Rental Homes</h4>
        <Link to="#">Read Reviews</Link>
        <Link to="#">Learning Resources</Link>
        <Link to="/anonymous-review">Submit Reviews</Link>
        <Link to="#">Connect with Owners</Link>
      </div>
      <div>
        <h4>List Property</h4>
        <Link to="#">Property</Link>
        <Link to="#">Management</Link>
        <Link to="#">Tenant Screening</Link>
        <Link to="#">Owner Dashboard</Link>
        <Link to="#">Service Providers</Link>
      </div>
      <div>
        <h4>About Us</h4>
        <Link to="#">Careers</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms of Service</Link>
        <Link to="#">Contact Us</Link>
      </div>
    </div>
  </div>

  <div className="tv-footer-bottom">
    <Link to="#">Privacy Policy</Link>
    <Link to="#">Terms of Service</Link>
    <Link to="#">Cookie Policy</Link>
  </div>
</footer>
    </>
  );
}

export default RenterProfile;
