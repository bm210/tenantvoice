import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/tenantvoice-logo.png';
import searchIcon from '../assets/search-icon.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="TenantVoice logo" className="logo" />
      </div>
      <div className="header-right">
        <div className="search-select-wrapper">
         <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
          <select className="user-type-select" defaultValue="tenant">
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>
        </div>
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/join-tenant" className="signup-button">Sign up</Link>
      </div>
    </header>
  );
}

export default Header;