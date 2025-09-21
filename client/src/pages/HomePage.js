import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FocusAreas from '../components/FocusAreas';
import SponsorsGrid from '../components/SponsorsGrid';
import WhatsAppCTA from '../components/WhatsAppCTA';
import PremiumSponsor from '../components/PremiumSponsor';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatsAppCTA />
      <PremiumSponsor />
      <AboutSection />
      <FocusAreas />
      <SponsorsGrid />
    </>
  );
};

export default HomePage;
