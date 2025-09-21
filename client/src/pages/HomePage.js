import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HeadquartersShowcase from '../components/HeadquartersShowcase';
import FocusAreas from '../components/FocusAreas';
import SponsorsGrid from '../components/SponsorsGrid';
import WhatsAppCTA from '../components/WhatsAppCTA';
import PremiumSponsor from '../components/PremiumSponsor';
import landingPageBg from '../assets/landing-page-bg.jpg';

const HomePage = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-background">
        <img 
          src={landingPageBg} 
          alt="Abstract flowing background" 
          className="landing-bg-image"
        />
        <div className="landing-bg-overlay"></div>
      </div>
      <div className="landing-page-content">
        <HeroSection />
        <WhatsAppCTA />
        <PremiumSponsor />
        <AboutSection />
        <HeadquartersShowcase />
        <FocusAreas />
        <SponsorsGrid />
      </div>
    </div>
  );
};

export default HomePage;
