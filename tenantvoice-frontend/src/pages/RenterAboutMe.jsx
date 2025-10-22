import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterAboutMe.css";
import logo from "../assets/tenantvoice-logo.png";
import { Upload } from "lucide-react";

function RenterAboutMe() {
  const [aboutText, setAboutText] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = () => {
    // Handle save logic (placeholder)
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
      <div className="aboutme-banner">
        <div className="aboutme-banner-content">
          <span className="rpi-breadcrumb">Renter Profile</span>
          <h1>About me</h1>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="aboutme-main">
        <div className="aboutme-card">
          <section className="aboutme-section">
            <h2>Introduce yourself</h2>
            <p className="aboutme-desc">
              Share with the agent and landlord why you are the best fit for the
              property.
            </p>

            <textarea
              className="aboutme-textarea"
              placeholder="Include details about yourself, any hobbies and why you want this property."
              maxLength={3000}
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
            />

            <div className="aboutme-charcount">
              {aboutText.length}/3000
            </div>

            <div className="aboutme-tip">
              <span className="info-icon">ℹ️</span>
              To stand out, provide a few extra details about yourself. Not sure
              how to write an ‘about me’?{" "}
              <Link to="#" className="tip-link">
                View our how to guide.
              </Link>
            </div>
          </section>

          <section className="aboutme-section">
            <h3>Optional supporting documents</h3>
            <p className="aboutme-desc">
              Attach any supporting document you’d like e.g. letters of
              recommendation, tenant ledgers or company guarantees.
            </p>

            <label className="file-upload-box">
              <Upload size={18} />
              <span>
                {file ? file.name : "Upload a file"}
              </span>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".gif,.jpg,.jpeg,.png,.heic,.pdf"
              />
            </label>

            <p className="file-note">
              Max. 10MB – GIF, JPG, JPEG, PNG, HEIC, PDF
            </p>
          </section>

          <div className="aboutme-actions">
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

export default RenterAboutMe;
