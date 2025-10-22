import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Login from './pages/Login';
import TenantSignup from './pages/TenantSignup';
import OwnerSignup from './pages/OwnerSignup';
import AnonymousReviewSection from './pages/AnonymousReviewSection';
import MultiStepReviewForm from './pages/MultiStepReviewForm';
import UserRenterDashboard from './pages/UserRenterDashboard';
import RenterStateSelection from './pages/RenterStateSelection';
import JoinAsATenant from './pages/JoinAsATenant';
import RenterProfileInfo from './pages/RenterProfileInfo';
import RenterEmploymentInfo from './pages/RenterEmploymentInfo';
import RenterAboutMe from './pages/RenterAboutMe';
import RenterPersonalDetails from './pages/RenterPersonalDetails';
import RenterPeople from './pages/RenterPeople';
import RenterAddressHistory from './pages/RenterAddressHistory';
import RenterEmergencyContact from './pages/RenterEmergencyContact';
import RenterPets from './pages/RenterPets';
import RenterUtilityConnection from './pages/RenterUtilityConnection';

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
        <Route path="/user-profile" element={<UserRenterDashboard />} />
        <Route path="/state-selection" element={<RenterStateSelection />} />
        <Route path="/join-tenant" element={<JoinAsATenant />} />
        <Route path="/renter-profile-info" element={<RenterProfileInfo />} />
        <Route path="/renter-employment" element={<RenterEmploymentInfo />} />
        <Route path="/renter-aboutme" element={<RenterAboutMe />} />
        <Route path="/renter-personal" element={<RenterPersonalDetails />} />
        <Route path="/renter-people" element={<RenterPeople />} />
        <Route path="/renter-address-history" element={<RenterAddressHistory />} />
        <Route path="/renter-emergency-contact" element={<RenterEmergencyContact />} />
        <Route path="/renter-pets" element={<RenterPets />} />
        <Route path="/renter-utility-connection" element={<RenterUtilityConnection />} />
      </Routes>
    </Router>
  );
}

export default App;
