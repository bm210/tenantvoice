import React, { useState } from "react";
import "./MultiStepReviewForm.css";

export default function ReviewFlow() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="review-flow-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step / 5) * 100}%` }} />
      </div>

      <h3 className="review-address">123 Random Australian Road, Wentworthville 2145</h3>

{step === 1 && (
  <section className="review-step step-1">
    <h2>Property Review</h2>
    <p className="review-desc">
      We will ask you to rate some categories of the building with a star rating system (1–5) and also to write a written review about your selected property for other users/potential buyers to see.
    </p>

    <p className="rating-desc">
      How would you rate the property based on the following categories?
    </p>

    <div className="review-box">
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="rating-row">
          <span className="rating-label">Cleanliness</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="star">☆</span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="review-navigation">
      <button className="back-button" onClick={handleBack}>
        ← Back
      </button>
      <button className="submit-button" onClick={handleNext}>
        Submit →
      </button>
    </div>
  </section>
)}


{step === 2 && (
  <section className="review-step step-2">
    <form className="review-form">
      <div className="form-group">
        <label>Title of Review</label>
        <input type="text" placeholder="Title of review" />
      </div>

      <div className="form-group">
        <label>Pros of property</label>
        <textarea placeholder="The features you LIKED about the property" />
      </div>

      <div className="form-group">
        <label>Cons of property</label>
        <textarea placeholder="The features you DID NOT LIKE about the property" />
      </div>

      <div className="form-group">
        <label>Suggestion for owner</label>
        <input type="text" placeholder="What would you like to suggest to property owner" />
    <div className="review-navigation">
      <button className="back-button" onClick={handleBack}>
        ← Back
      </button>
      <button className="submit-button" onClick={handleNext}>
        Submit →
      </button>
    </div>
      </div>
    </form>
  </section>
)}


{step === 3 && (
  <section className="review-step step-3">
    <h2>Property Pricing</h2>
    <p className="review-desc">
      Financial data related to the property is not public information. We use this to determine the rate/percentage in which the landlord raises the rent of the property.
    </p>

    <div className="review-box">
      {[...Array(4)].map((_, idx) => (
        <div key={`pricing-${idx}`} className="form-group">
          <label>Title of Review</label>
          <input type="text" placeholder="Title of review" />
        </div>
      ))}

      <div className="form-group recommend-group">
        <p>Would you recommend this property to someone?</p>
        <div className="radio-options">
          <label>
            <input type="radio" name="recommend" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="recommend" value="no" /> No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Additional Comments</label>
        <input type="text" placeholder="Any final thoughts?" />
      </div>
    </div>
  </section>
)}

{step === 4 && (
  <section className="review-step">
    <h2>Photos (optional)</h2>

    <div className="upload-box">
      <p>Some examples include:</p>
      <ul>
        <li>copy of your rental history</li>
        <li>Photos of your apartment or building</li>
        <li>examples of your landlord/tenant correspondence</li>
        <li>utility bills (remove any sensitive information)</li>
        <li>inspection reports (if applicable)</li>
      </ul>

      <p>
        Please note that any photos you share will be published and attached to your review.<br />
        <strong>
          Please remove or black out any identifiers that you do not want to be share
        </strong>
      </p>

      <div className="upload-controls">
        <input type="file" multiple />
        <p>or</p>
        <button type="button">upload photos</button>
      </div>
    </div>
  </section>
)}

{step === 5 && (
  <section className="review-step">
    <h2>Demographic Info</h2>
    <p>
      TenantVoice is committed to advocating for fair and inclusive renting
      experiences. By sharing optional details about your background—such as
      age, gender, race, or immigration status—you can help us uncover trends
      and address potential discrimination in housing. Your information will
      remain private and will never be linked to your review.
    </p>

    <form className="review-box">
      <p className="section-title">
        Please indicate your ethnic and racial group you identify with?
      </p>
      <div>
        <label><input type="checkbox" name="ethnic-group" /> Aboriginal or Torres Strait Islander</label>
        <label><input type="checkbox" name="ethnic-group" /> Asian/Indian</label>
        <label><input type="checkbox" name="ethnic-group" /> Pacific Islander</label>
        <label><input type="checkbox" name="ethnic-group" /> White</label>
        <input type="text" placeholder="Other?" />
      </div>

      <p className="section-title">Gender</p>
      <div>
        <label><input type="radio" name="gender" /> Male</label>
        <label><input type="radio" name="gender" /> Female</label>
        <label><input type="radio" name="gender" /> Non-Binary</label>
      </div>

      <p className="section-title">What is your date of birth?</p>
      <input type="text" placeholder="DD/MM/YYYY" />

      <div className="grouped-section">
        <p>Are you an Australian/New Zealand Citizen?</p>
        <label><input type="radio" name="citizen" /> Yes</label>
        <label><input type="radio" name="citizen" /> No</label>
      </div>

      <div className="grouped-section">
        <p>Do you have a disability?</p>
        <label><input type="radio" name="disability" /> Yes</label>
        <label><input type="radio" name="disability" /> No</label>
      </div>
    </form>
  </section>
)}

{step === 6 && (
  <div className="form-navigation">
    <button onClick={handleBack} className="back-button"> 
      ← Back
    </button>
    <button className="submit-button">Submit →</button>
  </div>
)}

    </div>
  );
}
