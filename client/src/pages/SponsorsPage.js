import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import SponsorsGrid from '../components/SponsorsGrid';
import SponsorContactForm from '../components/SponsorContactForm';
import sponsorsPageBg from '../assets/sponsors-page-bg.jpg';

const SponsorsPage = () => {
  const sponsorsPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IDC Sponsors - Support Indian Developer Community",
    "description": "Discover our sponsors supporting IDC (Indian Developer Community). Become a sponsor and support the next generation of Indian developers through hackathons and tech events.",
    "publisher": {
      "@type": "Organization",
      "name": "Indian Developer Community",
      "logo": "https://indiandevelopercommunity.in/idc-logo.jpg"
    }
  };

  return (
    <div className="sponsors-page-wrapper">
      <SEOHelmet
        title="IDC Sponsors | Support Indian Developer Community - Sponsor Tech Events"
        description="Meet our sponsors supporting IDC (Indian Developer Community). Join leading companies sponsoring hackathons, tech events, and developer programs across India. Become a sponsor today!"
        keywords="IDC Sponsors, Developer Community Sponsors, Indian Developer Community Sponsors, Tech Event Sponsors India, Hackathon Sponsors, Developer Program Sponsors, Tech Company Partnerships India"
        url="https://indiandevelopercommunity.in/#/sponsors"
        image="/sponsors-preview.jpg"
        structuredData={sponsorsPageStructuredData}
      />
      <div className="sponsors-page-background">
        <img 
          src={sponsorsPageBg} 
          alt="IDC Sponsors Page - Mountain landscape representing growth and partnership in Indian developer community" 
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
