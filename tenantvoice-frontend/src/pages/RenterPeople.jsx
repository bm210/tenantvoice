import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterPeople.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterPeople() {
  const [livingWithOthers, setLivingWithOthers] = useState(null);
  const navigate = useNavigate();

  const handleSave = () => {
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
      <div className="people-banner">
        <div className="people-banner-content">
          <span className="breadcrumb">Renter Profile</span>
          <h1>People</h1>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="people-main">
        <div className="people-card">
          <p className="question">
            Will you live with other occupants who are not on the lease?
          </p>

          <div className="options">
            <button
              className={`option-btn ${
                livingWithOthers === true ? "active" : ""
              }`}
              onClick={() => setLivingWithOthers(true)}
            >
              Yes
            </button>
            <button
              className={`option-btn ${
                livingWithOthers === false ? "active" : ""
              }`}
              onClick={() => setLivingWithOthers(false)}
            >
              No
            </button>
          </div>

          <div className="people-actions">
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

export default RenterPeople;
