import React from 'react';
import './Login.css';
import logo from '../assets/tenantvoice-logo.png';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="TenantVoice Logo" className="logo" />
        <h2>Sign in</h2>
        <input type="email" placeholder="Email address*" className="email-input" />
        <button className="continue-button">Continue</button>
        <p className="create-account">
          Don't have an account? <a href="/signup-tenant">Create account</a>
        </p>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-buttons">
          <button className="social-button">
            <img src={require('../assets/google-logo.png')} alt="Google" className="icon" />
            Continue with Google
          </button>
            <button className="social-button">
            <img src={require('../assets/facebook-logo.png')} alt="Facebook" className="icon" />
            Continue with Facebook
          </button>
            <button className="social-button">
            <img src={require('../assets/apple-logo.png')} alt="Apple" className="icon" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
