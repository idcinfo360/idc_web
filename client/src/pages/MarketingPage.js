import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import MarketingBenefits from '../components/MarketingBenefits';
import MarketingForm from '../components/MarketingForm';
import marketingPageBg from '../assets/sponsors-page-bg.jpg';

const MarketingPage = () => {
  const marketingPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IDC Marketing Partnership",
    "description": "Partner with India's fastest growing developer community for marketing opportunities, brand exposure, and developer engagement.",
    "provider": {
      "@type": "Organization",
      "name": "Indian Developer Community",
      "logo": "https://indiandevelopercommunity.in/idc-logo.jpg"
    },
    "serviceType": "Marketing Partnership",
    "areaServed": "India"
  };

  return (
    <div className="marketing-page-wrapper">
      <SEOHelmet
        title="IDC Marketing Partnership | Partner with Indian Developer Community"
        description="Partner with IDC (Indian Developer Community) for marketing opportunities. Reach thousands of Indian developers through our platform. Contact us for brand partnerships, developer engagement, and marketing solutions."
        keywords="IDC Marketing, Developer Community Marketing, Indian Developer Marketing, Tech Marketing India, Developer Audience India, Brand Partnerships Developer Community, Marketing to Developers India"
        url="https://indiandevelopercommunity.in/#/marketing"
        image="/marketing-partnership-preview.jpg"
        structuredData={marketingPageStructuredData}
      />
      <div className="marketing-page-background">
        <img 
          src={marketingPageBg} 
          alt="IDC Marketing Partnership - Mountain landscape representing growth and partnership opportunities with Indian developers" 
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
