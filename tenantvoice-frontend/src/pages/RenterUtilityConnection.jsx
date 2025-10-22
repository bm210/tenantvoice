import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterUtilityConnection.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterUtilityConnection() {
  const navigate = useNavigate();
  const [consent, setConsent] = useState(null);

  const handleSave = () => {
    // Placeholder for save logic
    navigate("/renter-profile-info");
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="tv-header">
        <Link to="/" className="logo-only">
          <img src={logo} alt="TenantVoice Logo" className="logo" />
        </Link>
      </header>

      {/* ===== BANNER ===== */}
      <div className="utility-banner">
        <div className="utility-banner-content">
          <span className="breadcrumb">Renter Profile</span>
          <h1>Utility connection service</h1>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="utility-main">
        <div className="utility-card">
          <p className="question">
            Would you like to be contacted about{" "}
            <a href="#" className="link">
              moving or utility connection services
            </a>{" "}
            (for the purposes of arranging your energy plan and other services)
            if your application is successful?
          </p>

          {/* ===== Yes/No Buttons ===== */}
          <div className="options">
            <button
              className={`option-btn ${consent === true ? "active" : ""}`}
              onClick={() => setConsent(true)}
            >
              Yes
            </button>
            <button
              className={`option-btn ${consent === false ? "active" : ""}`}
              onClick={() => setConsent(false)}
            >
              No
            </button>
          </div>

          {/* ===== Info Text ===== */}
          <p className="details">
            If ‘Yes’, the agency managing this property will share your contact
            information with their preferred moving and utility connection
            service. Speak to the agency to find out more about their preferred
            providers.
          </p>

          <p className="details">
            If ‘No’, you won’t be contacted about utilities and connections
            services. However, successful applicants for properties based in
            Victoria may still be contacted for water connection services as per
            Victoria’s State guidelines.
          </p>

          {/* ===== Buttons ===== */}
          <div className="form-actions">
            <button className="cancel-btn" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button className="save-btn" onClick={handleSave}>
              Save and back
            </button>
          </div>

          <Link to="#" className="info-link">
            ℹ️ How this information is used
          </Link>
        </div>
      </main>
    </>
  );
}

export default RenterUtilityConnection;
