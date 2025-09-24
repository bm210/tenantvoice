import React from 'react';
import './PropertyDetail.css';

import logo from '../assets/tenantvoice-logo.png';
import bedIcon from '../assets/icon1.png';
import bathIcon from '../assets/icon2.png';
import carIcon from '../assets/icon3.png';
import propertySample from '../assets/property-sample.jpg';
import agentProfile from '../assets/agent-profile.png';

/**
 * A full page view for a rental listing. This component follows the same
 * typography, colour palette and spacing rules as the rest of the TenantVoice
 * components. It is organised into several sections: a header with the
 * property address and photo gallery, a content area with a long form
 * description and feature list, a call‑to‑action card for contacting the
 * agent, an nbn® availability section and a final map section.  All
 * measurements, colours and fonts are defined in the accompanying CSS file.
 */
function PropertyDetail() {
  return (
    <div className="property-page">
      {/* Top navigation bar consistent with the rest of the site */}
      <header className="property-header-bar">
        <img src={logo} alt="TenantVoice logo" className="property-logo" />
        <div className="property-auth">
          <a href="/login" className="login-link">Login</a>
          <button className="signup-btn">Sign up</button>
        </div>
      </header>

      {/* Main container for the listing */}
      <main className="property-container">
        {/* Introductory section with address, specs and photos */}
        <section className="property-intro">
          <div className="intro-info">
            <h1 className="property-address">123 Random Street, Wentworthville, NSW 2145</h1>
            <div className="property-specs">
              <span className="spec-item"><img src={bedIcon} alt="Bedrooms" />5</span>
              <span className="spec-item"><img src={bathIcon} alt="Bathrooms" />3</span>
              <span className="spec-item"><img src={carIcon} alt="Car spaces" />2</span>
            </div>
            <div className="property-price">$550–$650&nbsp;/&nbsp;week</div>
          </div>
          <div className="intro-gallery">
            <div className="gallery-main">
              <img src={propertySample} alt="Property" />
              <div className="gallery-overlay">INSERT&nbsp;PHOTOS</div>
            </div>
            <div className="gallery-row">
              <div className="gallery-thumb">
                <img src={propertySample} alt="Property" />
                <div className="gallery-overlay">INSERT&nbsp;PHOTO</div>
              </div>
              <div className="gallery-thumb">
                <img src={propertySample} alt="Property" />
                <div className="gallery-overlay">INSERT&nbsp;PHOTO</div>
              </div>
              <div className="gallery-thumb gallery-more">
                <img src={propertySample} alt="Property" />
                <div className="gallery-overlay">+5</div>
              </div>
            </div>
          </div>
        </section>

        {/* Body split into description and contact card */}
        <section className="property-body">
          <article className="property-description">
            <h2 className="section-title">Spacious Two Bedroom Apartment in the Heart of Wentworthville</h2>
            <p className="section-paragraph">
              Situated in the vibrant centre of Wentworthville, this beautifully presented
              apartment offers a rare opportunity for couples, investors and downsizers. Easy
              access to the train station and Western Motorway means you’re only minutes from
              Parramatta, Westmead and the Sydney CBD. Local shops, gyms and cafes are all
              within walking distance.
            </p>
            <p className="section-paragraph">
              This quality apartment boasts two generous bedrooms with built‑in wardrobes,
              split system air conditioning in the living and dining area and a well‑appointed
              kitchen with gas cooking. The north facing balcony floods the open plan living
              room with natural light.
            </p>
            <ul className="feature-list">
              <li>Two bedrooms both with built‑ins and ensuite to the master</li>
              <li>Modern kitchen with gas cooking, ample cupboard space and breakfast bar</li>
              <li>Light and bright living/dining area flowing out to the balcony</li>
              <li>Internal laundry with dryer</li>
              <li>Single secure car park and intercom entry</li>
              <li>Short walk to Wentworthville train station and Westmead medical precinct</li>
            </ul>
            <p className="disclaimer">
              <strong>Disclaimer:&nbsp;</strong>We have collected the information in this document from sources
              we believe to be reliable, however, we cannot guarantee its accuracy. Interested
              persons should rely on their own enquiries.
            </p>
          </article>
          <aside className="agent-card-wrapper">
            <div className="agent-card">
              <img src={logo} alt="Agency logo" className="agent-logo" />
              <div className="agent-info">
                <h3 className="agent-name">S Rk Realty Pty Ltd</h3>
                <p className="agent-address">34 Station Street, Wentworthville NSW 2145</p>
              </div>
              <img src={agentProfile} alt="Agent" className="agent-photo" />
              <button className="primary-btn">Get in touch</button>
              <button className="secondary-btn">See property</button>
            </div>
          </aside>
        </section>

        {/* nbn availability section */}
        <section className="nbn-section">
          <h2 className="section-title">nbn® availability</h2>
          <div className="nbn-cards">
            <div className="nbn-card">
              <h4>Plan HFC</h4>
              <p>Home Fibre Coaxial available. Check your connection status to confirm.</p>
            </div>
            <div className="nbn-card">
              <h4>Ultra fast speeds</h4>
              <p>Premium plans offering speeds of up to 1000 Mbps may be available.</p>
            </div>
          </div>
        </section>

        {/* Map and affordability section */}
        <section className="affordability-section">
          <h2 className="section-title">Can you afford this property?</h2>
          <p className="section-paragraph">
            Understand your repayments to see if this property is right for you.
          </p>
          <div className="map-container">
            <img src={propertySample} alt="Map" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default PropertyDetail;