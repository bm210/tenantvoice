import React from "react";
import { Link } from "react-router-dom";
import "./RenterProfileInfo.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterProfileInfo() {
  return (
    <>
      {/* ===== Header ===== */}
      <header className="tv-header">
        <Link to="/" className="logo-only">
          <img src={logo} alt="TenantVoice Logo" className="logo" />
        </Link>
      </header>

      {/* ===== Main Content ===== */}
      <main className="rpi-main">
        <Link to="/user-profile" className="back-link">
          ← Back to overview
        </Link>

        <div className="rpi-container">
          {/* Left Column */}
          <div className="rpi-left">
            <h1 className="rpi-title">Renter Profile</h1>
            <p className="rpi-subtitle">
              Create your Renter Profile once and reuse it for all your applications.
            </p>

            <section className="rpi-section">
              <h2>Personal</h2>
              <p className="rpi-hint">
                Details to help property managers validate who you are and assess
                your application.
              </p>

              <div className="rpi-list">
                {[
                  "Personal details",
                  "About me",
                  "Address history",
                  "Employment",
                  "Finances",
                  "Identity documents",
                  "Emergency contact",
                ].map((item) => (
                  <button key={item} className="rpi-item">
                    {item} <span>›</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="rpi-section">
              <h2>Household</h2>
              <p className="rpi-hint">
                Details about who you live with, pets & utility preferences. Adding
                these will help owners understand your lifestyle.
              </p>

              <div className="rpi-list">
                {["People", "Pets", "Utility connection service"].map((item) => (
                  <button key={item} className="rpi-item">
                    {item} <span>›</span>
                  </button>
                ))}
              </div>

              <a href="#" className="rpi-link">
                ℹ️ See how information is used
              </a>
            </section>
          </div>

          <div className="rpi-right">
            <div className="rpi-help-box">
              <h3>Manage applications</h3>
              <Link to="#">Manage and view your applications</Link>
              <p className="rpi-help-text">
                How long does your data stay? <br />
                Your data stays saved in your profile. Delete or update anytime.
              </p>
              <Link to="#">Help center →</Link>
            </div>
          </div>
        </div>
      </main>

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

export default RenterProfileInfo;
