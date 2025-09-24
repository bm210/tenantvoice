import React from 'react';


import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import GetStartedSection from '../components/GetStartedSection';
import TopRentalsSection from '../components/TopRentalsSection';
import HotPropertiesSection from '../components/HotPropertiesSection';
import AgentsSection from '../components/AgentsSection';
import HelpAnonymousSection from '../components/HelpAnonymousSection';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GetStartedSection />
      <TopRentalsSection />
      <HotPropertiesSection />
      <AgentsSection />
      <HelpAnonymousSection />
      <Footer />
    </div>
  );
}

export default Home;