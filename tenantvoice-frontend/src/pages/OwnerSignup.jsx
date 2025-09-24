import React, { useState } from 'react';
import './TenantSignup.css';
import logo from '../assets/tenantvoice-logo.png';
import googleLogo from '../assets/google-logo.png';
import facebookLogo from '../assets/facebook-logo.png';
import appleLogo from '../assets/apple-logo.png';

function OwnerSignup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <><div className="top-right-text">
          <span>Looking for property or reviews?</span>
          <a href="/signup-tenant">Sign up as tenant</a>
      </div><div className="signup-container">
              <img src={logo} alt="TenantVoice Logo" className="signup-logo" />
              <h2 className="signup-title">Create account</h2>

              <form className="signup-form">
                  <div className="name-fields">
                      <input type="text" placeholder="First name" required />
                      <input type="text" placeholder="First name" required />
                  </div>
                  <input type="email" placeholder="Email address" required />

                  <div className="password-container">
                      <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password (8 or more characters)"
                          required />
                      <span
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                      >
                          {showPassword ? '🙈' : '👁️'}
                      </span>
                  </div>

                  <select required>
                      <option value="">Country</option>
                      <option value="Australia">Australia</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                  </select>

                  <div className="or-divider">OR</div>

                  <div className="oauth-buttons">
                      <div className="oauth-button">
                          <img src={googleLogo} alt="Google" />
                          Continue with Google
                      </div>
                      <div className="oauth-button">
                          <img src={facebookLogo} alt="Facebook" />
                          Continue with Facebook
                      </div>
                      <div className="oauth-button">
                          <img src={appleLogo} alt="Apple" />
                          Continue with Apple
                      </div>
                  </div>

                  <div className="signup-footer">
                      Already have an account?
                      <a href="/login"> Sign in</a>
                  </div>

                  <button className="signup-btn">Create my account</button>
              </form>
          </div></>
  );
}

export default OwnerSignup;
