import React from 'react';
import MarketingBenefits from '../components/MarketingBenefits';
import MarketingForm from '../components/MarketingForm';
import marketingPageBg from '../assets/sponsors-page-bg.jpg';

const MarketingPage = () => {
  return (
    <div className="marketing-page-wrapper">
      <div className="marketing-page-background">
        <img 
          src={marketingPageBg} 
          alt="Mountain landscape background" 
          className="marketing-bg-image"
        />
        <div className="marketing-bg-overlay"></div>
      </div>
      <div className="page-container marketing-page-content">
        <section className="page-hero">
          <h1>I.D.C. Marketing Partnership</h1>
          <p>Partner with India's fastest growing developer community</p>
        </section>
        
        

        <MarketingBenefits />
        
        <section className="marketing-form-section">
          <h2>Ready to Partner?</h2>
          <p>Contact us to explore marketing opportunities with I.D.C.</p>
          <MarketingForm />
        </section>
      </div>
    </div>
  );
};

export default MarketingPage;
