import React from "react";
import "./AnonymousReviewSection.css";
import magnifyingGlass from "../assets/Magnifying.png";
import reviewIllustration from "../assets/anonymous_review.png";
import Header from '../components/Header';



function AnonymousReviewPage() {
  return (
    <>
      <Header />

      <section className="anonymous-review-section">
        <h2>Which property do you want to anonymously review?</h2>

        <div className="search-bar-container">
          <img src={magnifyingGlass} alt="Search" className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="123 Random Australian Road, Wentworthville 2145"
          />
        </div>

        <div className="empty-state">
          <p className="empty-title">Don’t have a review to share at the moment?</p>
          <p className="empty-subtext">
            Subscribe now to gain full access to reviews of property
          </p>
          <button className="subscribe-button">Subscribe</button>
        </div>

        <div className="review-illustration">
          <img src={reviewIllustration} alt="Review Illustration" />
        </div>
      </section>
    </>
  );
}

export default AnonymousReviewPage;
