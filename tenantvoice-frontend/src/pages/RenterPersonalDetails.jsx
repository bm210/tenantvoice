import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterPersonalDetails.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterPersonalDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Placeholder save logic
    navigate("/renter-profile-info");
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <>
      {/* ===== Header ===== */}
      <header className="tv-header">
        <Link to="/" className="logo-only">
          <img src={logo} alt="TenantVoice Logo" className="logo" />
        </Link>
      </header>

      {/* ===== Banner ===== */}
      <div className="personal-banner">
        <div className="personal-banner-content">
          <span className="breadcrumb">Renter Profile</span>
          <h1>Personal details</h1>
        </div>
      </div>

      {/* ===== Main ===== */}
      <main className="personal-main">
        <div className="personal-card">
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date of birth</label>
            <div className="dob-row">
              <select
                name="dobDay"
                value={formData.dobDay}
                onChange={handleChange}
              >
                <option value="">Select Date</option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <select
                name="dobMonth"
                value={formData.dobMonth}
                onChange={handleChange}
              >
                <option value="">Select Month</option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                name="dobYear"
                value={formData.dobYear}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Phone number (mobile preferred)</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 0412345678"
            />
            <p className="hint">
              Use numbers only, without spaces or other characters. e.g. 0412345678 or 0294443333
            </p>
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

export default RenterPersonalDetails;
