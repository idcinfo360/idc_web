import React from 'react';
import SponsorsGrid from '../components/SponsorsGrid';
import SponsorContactForm from '../components/SponsorContactForm';
import sponsorsPageBg from '../assets/sponsors-page-bg.jpg';

const SponsorsPage = () => {
  return (
    <div className="sponsors-page-wrapper">
      <div className="sponsors-page-background">
        <img 
          src={sponsorsPageBg} 
          alt="Mountain landscape background" 
          className="sponsors-bg-image"
        />
        <div className="sponsors-bg-overlay"></div>
      </div>
      <div className="page-container sponsors-page-content">
        <section className="page-hero">
          <h1>Our Sponsors</h1>
          <p>Supporting I.D.C. and the Indian Developer Community</p>
        </section>
        
        

        <SponsorsGrid />
        
        <section className="sponsor-form-section">
          <h2>Become a Sponsor</h2>
          <p>Join hands with I.D.C. to support the next generation of Indian developers</p>
          <SponsorContactForm />
        </section>
      </div>
    </div>
  );
};

export default SponsorsPage;
