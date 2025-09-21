import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import AboutSection from '../components/AboutSection';
import FoundersSection from '../components/FoundersSection';
import voluntaryDonationBg from '../assets/voluntary-donation-bg.webp';

const AboutPage = () => {
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Indian Developer Community",
      "alternateName": "IDC",
      "founder": [
        {
          "@type": "Person",
          "name": "Dharmik Gohil",
          "jobTitle": "Co-Founder",
          "description": "Visionary leader driving innovation and community growth in the tech ecosystem."
        },
        {
          "@type": "Person", 
          "name": "Bhavya Butani",
          "jobTitle": "Co-Founder",
          "description": "Strategic mind focused on building bridges between developers and industry."
        },
        {
          "@type": "Person",
          "name": "Kenil Gopani", 
          "jobTitle": "Co-Founder",
          "description": "Technical expert passionate about fostering collaborative developer communities."
        }
      ],
      "description": "India's largest developer community empowering developers through hackathons, learning opportunities, and career advancement.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="about-page-wrapper">
      <SEOHelmet
        title="About IDC - Indian Developer Community | Founded by Dharmik Gohil"
        description="Learn about IDC (Indian Developer Community), India's largest developer community founded by Dharmik Gohil, Bhavya Butani, and Kenil Gopani. Discover our mission to empower Indian developers through hackathons, learning, and career opportunities."
        keywords="About IDC, Indian Developer Community, Dharmik Gohil, Bhavya Butani, Kenil Gopani, Developer Community Founders, Indian Developer Community Story, IDC Mission, Tech Community India"
        url="https://indiandevelopercommunity.in/#/about"
        image="/about-idc-preview.jpg"
        structuredData={aboutPageStructuredData}
      />
      <div className="about-page-background">
        <img 
          src={voluntaryDonationBg} 
          alt="IDC Indian Developer Community - About Us Background showing community collaboration" 
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