import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Login from './pages/Login';
import TenantSignup from './pages/TenantSignup';
import OwnerSignup from './pages/OwnerSignup';
import AnonymousReviewSection from './pages/AnonymousReviewSection';
import MultiStepReviewForm from './pages/MultiStepReviewForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-detail" element={<PropertyDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup-tenant" element={<TenantSignup />} />
        <Route path="/signup-owner" element={<OwnerSignup />} />
        <Route path="/anonymous-review" element={<AnonymousReviewSection />} />
        <Route path="/review-form" element={<MultiStepReviewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
