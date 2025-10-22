import React from "react";
import './UserRenterDashboard.css';
import { Link } from "react-router-dom";
import { Bell, Star, User, Menu } from "lucide-react";
import logo from "../assets/tenantvoice-logo.png";


import chatImg from "../assets/dashboard/chat.png";
import savedImg from "../assets/dashboard/saved.png";
import alertImg from "../assets/dashboard/alert.png";
import renterImg from "../assets/dashboard/renter.png";
import rentalImg from "../assets/dashboard/rental.png";
import reviewsImg from "../assets/dashboard/reviews.png";
import settingsImg from "../assets/dashboard/settings.png";
import profileImg from "../assets/dashboard/profile.png";
import listingsImg from "../assets/dashboard/listings.png";
import networkImg from "../assets/dashboard/network.png";
import learningImg from "../assets/dashboard/learning.png";

function UserRenterDashboard() {
  const cards = [
    {
      title: "Messages and Chat",
      desc: "Stay up to date with your home or properties you own.",
      img: chatImg,
    },
    {
      title: "My saved properties",
      desc: "View open times and auctions for properties you’ve saved.",
      img: savedImg,
    },
    {
      title: "Saved searches & alerts",
      desc: "View your saved searches and configure their alerts.",
      img: alertImg,
    },
    {
      title: "Renter Profile",
      desc: "Create or update your Renter Profile.",
      img: renterImg,
    },
    {
      title: "Rental applications",
      desc: "Track the status and view your rental applications.",
      img: rentalImg,
    },
    {
      title: "Ratings & Reviews",
      desc: "View and manage your ratings and reviews.",
      img: reviewsImg,
    },
    {
      title: "Settings",
      desc: "Manage your login details, notifications and privacy settings.",
      img: settingsImg,
    },
    {
      title: "My profile",
      desc: "Manage your personal details and property needs.",
      img: profileImg,
    },
    {
      title: "My rental listings",
      desc: "Create and manage your rental property listings.",
      img: listingsImg,
    },
    {
      title: "My Network",
      desc: "Create and manage your rental property listings.",
      img: networkImg,
    },
    {
      title: "My Learning",
      desc: "Create and manage your rental property listings.",
      img: learningImg,
    },
  ];

  return (
    <>
      {/* ===== Header ===== */}
      <header className="tv-header">
        <div className="tv-header-left">
          <button className="menu-btn">
            <Menu size={22} />
          </button>

          <Link to="/" className="logo-container">
            <img src={logo} alt="TenantVoice Logo" className="logo" />
          </Link>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/agents">Find Agents or Owners</Link>
          </nav>
        </div>

        <div className="tv-header-right">
          <button className="icon-btn">
            <Star size={20} />
          </button>
          <button className="icon-btn">
            <Bell size={20} />
          </button>
          <Link to="/user-profile" className="icon-btn">
            <User size={20} />
          </Link>
          <button className="logout-btn">Log out</button>
        </div>
      </header>

      {/* ===== Dashboard Body ===== */}
      <main className="urd-wrap">
        <div className="urd-header-row">
          <h1 className="urd-page-title">Profile</h1>
        </div>

        <section className="urd-grid">
          {cards.map((card) => (
            <div className="urd-card" key={card.title}>
              <img src={card.img} alt={card.title} className="urd-card-img" />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="tv-footer">
  <div className="tv-footer-content">
    <div className="tv-footer-left">
      <img src={logo} alt="TenantVoice Logo" className="footer-logo" />
      <p className="footer-desc">
        We make renting more transparent and collaborative. We give tenants
        a voice while helping owners build trust and streamline operations.
      </p>

      <div className="newsletter">
        <label htmlFor="newsletter" className="newsletter-label">
          Subscribe to our newsletter
        </label>
        <div className="newsletter-input">
          <input
            type="email"
            id="newsletter"
            placeholder="Your email"
          />
          <button>Subscribe</button>
        </div>
      </div>

      <p className="footer-rights">© 2025 TenantVoice. All rights reserved.</p>
    </div>

    <div className="tv-footer-links">
      <div>
        <h4>Find Rental Homes</h4>
        <Link to="#">Read Reviews</Link>
        <Link to="#">Learning Resources</Link>
        <Link to="/anonymous-review">Submit Reviews</Link>
        <Link to="#">Connect with Owners</Link>
      </div>
      <div>
        <h4>List Property</h4>
        <Link to="#">Property</Link>
        <Link to="#">Management</Link>
        <Link to="#">Tenant Screening</Link>
        <Link to="#">Owner Dashboard</Link>
        <Link to="#">Service Providers</Link>
      </div>
      <div>
        <h4>About Us</h4>
        <Link to="#">Careers</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms of Service</Link>
        <Link to="#">Contact Us</Link>
      </div>
    </div>
  </div>

  <div className="tv-footer-bottom">
    <Link to="#">Privacy Policy</Link>
    <Link to="#">Terms of Service</Link>
    <Link to="#">Cookie Policy</Link>
  </div>
</footer>
    </>
  );
}

export default UserRenterDashboard;
