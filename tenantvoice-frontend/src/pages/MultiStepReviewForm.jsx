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


  <div className="progress-container">
  <h3 className="progress-label">123 Random Australian Road, Wentworthville 2145</h3>
  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: `${(step / 5) * 100}%` }}
    />
  </div>
</div>


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
        Next →
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
      </div>

      <div className="review-navigation">
        <button type="button" className="back-button" onClick={handleBack}>
          ← Back
        </button>
        <button type="button" className="submit-button" onClick={handleNext}>
          Next →
        </button>
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

    <form className="review-form">
      {/* Block 1 */}
      <div className="review-box">
        <div className="form-group">
          <label>Title of Review</label>
          <input type="text" placeholder="Title of review" />
        </div>
      </div>

      {/* Block 2 */}
      <div className="review-box">
        <div className="form-group">
          <label>Title of Review</label>
          <input type="text" placeholder="Title of review" />
        </div>
      </div>

      {/* Block 3 */}
      <div className="review-box">
        <div className="form-group">
          <label>Title of Review</label>
          <input type="text" placeholder="Title of review" />
        </div>
      </div>

      {/* Block 4 */}
      <div className="review-box">
        <div className="form-group">
          <label>Title of Review</label>
          <input type="text" placeholder="Title of review" />
        </div>
      </div>

      {/* Block 5 */}
        <div className="recommendation-group">
          <label>Would you recommend this property to someone?</label>
          <div className="radio-options">
            <label><input type="radio" name="recommend5" /> Yes</label>
            <label><input type="radio" name="recommend5" /> No</label>
          </div>
        </div>

      {/* Block 6 */}
        <div className="recommendation-group">
          <label>Would you recommend this property to someone?</label>
          <div className="radio-options">
            <label><input type="radio" name="recommend5" /> Yes</label>
            <label><input type="radio" name="recommend5" /> No</label>
          </div>
        </div>

      {/* Block 7 */}
      <div className="review-box">
        <div className="form-group">
          <label>Title of Review</label>
          <input type="text" placeholder="Title of review" />
        </div>
      </div>

      {/* Block 8 */}
        <div className="recommendation-group">
          <label>Would you recommend this property to someone?</label>
          <div className="radio-options">
            <label><input type="radio" name="recommend5" /> Yes</label>
            <label><input type="radio" name="recommend5" /> No</label>
          </div>
        </div>

      {/* Block 9 */}
      <div className="review-box">
        <div className="form-group">
          <label>Title of Review</label>
          <input type="text" placeholder="Title of review" />
        </div>
      </div>

      <div className="review-navigation">
        <button className="back-button" onClick={handleBack}>← Back</button>
        <button className="submit-button" onClick={handleNext}>Next →</button>
      </div>
    </form>
  </section>
)}



{step === 4 && (
  <section className="review-step step-4">
    <div className="upload-box">
      <h2>Photos (optional)</h2>

      <p className="examples-label">Some examples include:</p>
      <ul className="examples-list">
        <li>copy of your rental history</li>
        <li>Photos of your apartment or building</li>
        <li>examples of your landlord/tenant correspondence</li>
        <li>utility bills (remove any sensitive information)</li>
        <li>inspection reports (if applicable)</li>
      </ul>

      <p className="upload-warning">
        Please note that any photos you share will be published and attached to your review.
        <br />
        <strong>Please remove or black out any identifiers that you do not want to be share</strong>
      </p>

      <div className="upload-controls">
        <span className="drag-hint">Drag and drop files to upload</span>
        <span className="upload-separator">or</span>
        <button type="button" className="upload-button">upload photos</button>
        <input type="file" multiple hidden />
      </div>
    </div>

    <div className="review-navigation">
      <button className="back-button" onClick={handleBack}>
        ← Back
      </button>
      <button className="submit-button" onClick={handleNext}>
        Next →
      </button>
    </div>
  </section>
)}



{step === 5 && (
  <section className="review-step step-5">
    <h2>Demographic Info</h2>
    <p className="step-description">
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
      <div className="input-group">
        <label><input type="checkbox" name="ethnic-group" /> Aboriginal or Torres Strait Islander</label>
        <label><input type="checkbox" name="ethnic-group" /> Asian/Indian</label>
        <label><input type="checkbox" name="ethnic-group" /> Pacific Islander</label>
        <label><input type="checkbox" name="ethnic-group" /> White</label>
        <input type="text" placeholder="Other?" className="text-input" />
      </div>

      <p className="section-title">Gender</p>
      <div className="input-group">
        <label><input type="radio" name="gender" /> Male</label>
        <label><input type="radio" name="gender" /> Female</label>
        <label><input type="radio" name="gender" /> Non-Binary</label>
      </div>

      <p className="section-title">What is your date of birth?</p>
      <input type="text" placeholder="DD/MM/YYYY" className="text-input" />

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

    </div>
  );
}
