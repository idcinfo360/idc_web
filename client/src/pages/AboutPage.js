import React from 'react';
import AboutSection from '../components/AboutSection';
import FoundersSection from '../components/FoundersSection';
import voluntaryDonationBg from '../assets/voluntary-donation-bg.webp';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-background">
        <img 
          src={voluntaryDonationBg} 
          alt="Voluntary Donation Background" 
          className="about-bg-image"
        />
        <div className="about-bg-overlay"></div>
      </div>
      <div className="page-container about-page-content">
        <AboutSection />
        <FoundersSection />
      </div>
    </div>
  );
};

export default AboutPage;