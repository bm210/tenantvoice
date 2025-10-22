import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinAsATenant.css";
import logo from "../assets/tenantvoice-logo.png";
import { User } from "lucide-react";

function JoinAsATenant() {
  const [selectedRole, setSelectedRole] = useState("tenant");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (selectedRole === "tenant") navigate("/signup-tenant");
    else if (selectedRole === "owner") navigate("/signup-owner");
    else navigate("/login");
  };

  const roles = [
    {
      id: "service",
      title: "Service Provider",
      desc: "Looking for property and reviews",
      icon: <User size={18} />,
    },
    {
      id: "tenant",
      title: "Tenant",
      desc: "Looking for property and reviews",
      icon: <User size={18} />,
    },
    {
      id: "owner",
      title: "Owner",
      desc: "Looking for tenant and managing property",
      icon: <User size={18} />,
    },
  ];

  return (
    <div className="jat-page">
      {/* ===== Logo ===== */}
      <div className="jat-logo-container">
        <img src={logo} alt="TenantVoice Logo" className="jat-logo" />
      </div>

      {/* ===== Title ===== */}
      <h2 className="jat-title">Log in as a tenant or owner</h2>

      {/* ===== Role Selection ===== */}
      <div className="jat-options">
        {roles.map((role) => (
          <label
            key={role.id}
            className={`jat-card ${
              selectedRole === role.id ? "selected" : ""
            }`}
          >
            <div className="jat-icon">{role.icon}</div>
            <div className="jat-texts">
              <span className="jat-role">{role.title}</span>
              <p className="jat-desc">{role.desc}</p>
            </div>
            <input
              type="radio"
              name="role"
              value={role.id}
              checked={selectedRole === role.id}
              onChange={() => setSelectedRole(role.id)}
            />
          </label>
        ))}
      </div>

      {/* ===== Join Button ===== */}
      <button
        className={`jat-button ${
          selectedRole === "tenant" ? "highlight" : ""
        }`}
        onClick={handleJoin}
      >
        {selectedRole === "tenant"
          ? "Join as tenant"
          : selectedRole === "owner"
          ? "Join as owner"
          : "Join as provider"}
      </button>
    </div>
  );
}

export default JoinAsATenant;
