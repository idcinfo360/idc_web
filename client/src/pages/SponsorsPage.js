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
        
        <section className="sponsor-benefits">
          <h2>Why Sponsor I.D.C.?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Targeted Reach</h3>
              <p>Connect directly with 500+ active developers and tech enthusiasts across India.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Brand Visibility</h3>
              <p>Get your brand featured in hackathons, events, and community platforms.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Talent Pipeline</h3>
              <p>Early access to emerging talent and potential recruitment opportunities.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovation Support</h3>
              <p>Be part of India's growing tech ecosystem and innovation community.</p>
            </div>
          </div>
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
