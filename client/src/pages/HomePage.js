import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HeadquartersShowcase from '../components/HeadquartersShowcase';
import FocusAreas from '../components/FocusAreas';
import SponsorsGrid from '../components/SponsorsGrid';
import WhatsAppCTA from '../components/WhatsAppCTA';
import PremiumSponsor from '../components/PremiumSponsor';
import landingPageBg from '../assets/landing-page-bg.jpg';

const HomePage = () => {
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indian Developer Community",
    "alternateName": "IDC",
    "url": "https://indiandevelopercommunity.in",
    "logo": "https://indiandevelopercommunity.in/idc-logo.jpg",
    "description": "India's largest developer community empowering developers through hackathons, learning opportunities, and career advancement.",
    "founder": {
      "@type": "Person",
      "name": "Dharmik Gohil",
      "jobTitle": "Founder & CEO"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/indian-developer-community",
      "https://www.instagram.com/indian_developer_community",
      "https://www.youtube.com/c/indiandevelopercommunity"
    ]
  };

  return (
    <div className="landing-page-wrapper">
      <SEOHelmet
        title="IDC - Indian Developer Community | Join India's Largest Developer Community"
        description="Join IDC, India's largest developer community founded by Dharmik Gohil. Connect with Indian developers, participate in hackathons, learn programming, and advance your tech career with thousands of developers across India."
        keywords="Developer Community, IDC, Indian Developer, Indian Developer Community, Developer, Programming, Hackathons, Technology India, Coding Community, Software Development, Tech Community India, Dharmik Gohil, Developer Jobs India, Programming Community"
        url="https://indiandevelopercommunity.in/"
        image="/landing-page-preview.jpg"
        structuredData={homePageStructuredData}
      />
      <div className="landing-page-background">
        <img 
          src={landingPageBg} 
          alt="IDC Indian Developer Community - Abstract flowing background representing innovation and technology" 
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
