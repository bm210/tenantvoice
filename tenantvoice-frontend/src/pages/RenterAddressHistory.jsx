import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterAddressHistory.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterAddressHistory() {
  const [address, setAddress] = useState("");
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
      <div className="address-banner">
        <div className="address-banner-content">
          <span className="breadcrumb">Renter Profile</span>
          <h1>Address history</h1>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="address-main">
        <div className="address-card">
          <p className="address-desc">
            Add two or more years of your most recent address history and help verify
            your details with a valid reference.
          </p>
          <p className="address-subtext">
            Your history could include living with parents or the property you own.
          </p>

          <div className="form-group">
            <label>Current address</label>
            <input
              type="text"
              placeholder="Add current address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

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

export default RenterAddressHistory;
