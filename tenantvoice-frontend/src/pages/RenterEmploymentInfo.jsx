import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterEmploymentInfo.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterEmploymentInfo() {
  const [notEmployed, setNotEmployed] = useState(false);
  const [employmentType, setEmploymentType] = useState("");
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

      {/* ===== PAGE TITLE BAR ===== */}
      <div className="employment-banner">
        <div className="employment-banner-content">
          <span className="rpi-breadcrumb">Renter Profile</span>
          <h1>Employment</h1>
        </div>
      </div>

      {/* ===== MAIN FORM ===== */}
      <main className="employment-main">
        <div className="employment-card">
          <h2>Employment</h2>
          <p className="employment-desc">
            Add your current employment information and help verify your details
            with a valid reference.
          </p>

          <div className="employment-field">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={notEmployed}
                onChange={(e) => setNotEmployed(e.target.checked)}
              />
              I am currently not employed
            </label>
          </div>

          <div className="employment-field">
            <label htmlFor="employmentType">What’s the employment type?</label>
            <select
              id="employmentType"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              disabled={notEmployed}
            >
              <option value="">Select</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="casual">Casual</option>
              <option value="contractor">Contractor</option>
              <option value="self-employed">Self-employed</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="employment-actions">
            <button className="cancel-btn" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button className="save-btn" onClick={handleSave}>
              Save and back
            </button>
          </div>

          <Link to="#" className="employment-link">
            ℹ️ How this information is used
          </Link>
        </div>
      </main>
    </>
  );
}

export default RenterEmploymentInfo;
