import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterPets.css";
import logo from "../assets/tenantvoice-logo.png";

function RenterPets() {
  const navigate = useNavigate();

  const [pets, setPets] = useState({
    dogs: 0,
    cats: 0,
    others: 0,
  });

  const handleSelect = (type, value) => {
    setPets((prev) => ({ ...prev, [type]: value }));
  };

  const handleSave = () => {
    navigate("/renter-profile-info");
  };

  const petOptions = [0, 1, 2, 3, "4+"];

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="tv-header">
        <Link to="/" className="logo-only">
          <img src={logo} alt="TenantVoice Logo" className="logo" />
        </Link>
      </header>

      {/* ===== BANNER ===== */}
      <div className="pets-banner">
        <div className="pets-banner-content">
          <span className="breadcrumb">Renter Profile</span>
          <h1>Pets</h1>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="pets-main">
        <div className="pets-card">
          <p className="pets-desc">
            Let the property manager know if you have pets.
          </p>

          {/* Dogs */}
          <div className="pets-group">
            <label>Dogs</label>
            <div className="pet-options">
              {petOptions.map((num) => (
                <button
                  key={num}
                  className={`pet-btn ${
                    pets.dogs === num ? "active" : ""
                  }`}
                  onClick={() => handleSelect("dogs", num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Cats */}
          <div className="pets-group">
            <label>Cats</label>
            <div className="pet-options">
              {petOptions.map((num) => (
                <button
                  key={num}
                  className={`pet-btn ${
                    pets.cats === num ? "active" : ""
                  }`}
                  onClick={() => handleSelect("cats", num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Other pets */}
          <div className="pets-group">
            <label>Other pets</label>
            <div className="pet-options">
              {petOptions.map((num) => (
                <button
                  key={num}
                  className={`pet-btn ${
                    pets.others === num ? "active" : ""
                  }`}
                  onClick={() => handleSelect("others", num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="form-actions">
            <button className="cancel-btn" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button className="save-btn" onClick={handleSave}>
              Save and back
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default RenterPets;
