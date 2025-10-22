import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterEmergencyContact.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterEmergencyContact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const relationships = [
    "Parent",
    "Sibling",
    "Friend",
    "Relative",
    "Partner",
    "Colleague",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Save logic placeholder
    navigate("/renter-profile-info");
  };

  return (
    <>
      {/* ===== Header ===== */}
      <header className="tv-header">
        <Link to="/" className="logo-only">
          <img src={logo} alt="TenantVoice Logo" className="logo" />
        </Link>
      </header>

      {/* ===== Banner ===== */}
      <div className="emergency-banner">
        <div className="emergency-banner-content">
          <span className="breadcrumb">Renter Profile</span>
          <h1>Emergency contact</h1>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <main className="emergency-main">
        <div className="emergency-card">
          <p className="desc">
            The real estate agency requires an emergency contact who will not be living with you
            in case of an emergency or if you are unreachable during your tenancy.
          </p>
          <p className="desc-sub">
            You must have this person's consent to provide their personal information and to be
            contacted by the relevant agency.
          </p>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Relationship to you</label>
            <select
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
            >
              <option value="">Please select</option>
              {relationships.map((rel) => (
                <option key={rel} value={rel}>
                  {rel}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Mobile number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 0412345678"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            <p className="hint">
              Contact details will only be used by the relevant agency in an emergency or if you
              are unreachable.
            </p>
          </div>

          <div className="form-group">
            <label>Confirm email address</label>
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              placeholder="Re-enter email address"
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

export default RenterEmergencyContact;
