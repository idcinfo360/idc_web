import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import CommunityHighlights from '../components/CommunityHighlights';
import SubCommunities from '../components/SubCommunities';
import communityPageBg from '../assets/sponsors-page-bg.jpg';

const CommunityPage = () => {
  const communityPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indian Developer Community",
    "alternateName": "IDC",
    "description": "India's premier developer community with 10,000+ active developers across 100+ cities. Join hackathons, learn new technologies, and advance your developer career.",
    "memberOf": {
      "@type": "ProfessionalService",
      "name": "Developer Community Network"
    },
    "numberOfEmployees": "10000+",
    "location": {
      "@type": "Place",
      "name": "India",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "20.5937",
        "longitude": "78.9629"
      }
    }
  };

  return (
    <div className="community-page-wrapper">
      <SEOHelmet
        title="IDC Community Showcase | 10,000+ Indian Developers - Join the Movement"
        description="Discover IDC (Indian Developer Community) with 10,000+ active developers across 100+ cities. Join India's largest developer community for hackathons, learning, and career growth. Founded by Dharmik Gohil."
        keywords="IDC Community, Indian Developer Community, Developer Community India, 10000 Developers, Indian Developers, Developer Network India, Tech Community India, Programming Community, Coding Community India"
        url="https://indiandevelopercommunity.in/#/community"
        image="/community-showcase-preview.jpg"
        structuredData={communityPageStructuredData}
      />
      <div className="community-page-background">
        <img 
          src={communityPageBg} 
          alt="IDC Indian Developer Community Showcase - Mountain landscape representing the growth and reach of 10,000+ developers" 
          className="community-bg-image"
        />
        <div className="community-bg-overlay"></div>
      </div>
      <div className="page-container community-page-content">
        <section className="page-hero">
          <h1>Community Showcase</h1>
          <p>Discover the vibrant I.D.C. community with over 10,000+ active users - a thriving ecosystem perfect for brand partnerships and developer engagement</p>
        </section>
        
        <section className="community-stats">
          <div className="container">
            <h2>India's Premier Developer Community</h2>
            <p className="stats-description">Join 10,000+ developers who trust I.D.C. for growth, learning, and career advancement - making us the ideal marketing platform for tech brands</p>
            <div className="stats-row">
              <div className="stat-card">
                <h3>10,000+</h3>
                <p>Active Users</p>
                <span className="stat-highlight">Perfect for Marketing</span>
              </div>
              <div className="stat-card">
                <h3>750+</h3>
                <p>Events Conducted</p>
                <span className="stat-highlight">High Engagement</span>
              </div>
              <div className="stat-card">
                <h3>100+</h3>
                <p>Cities Reached</p>
                <span className="stat-highlight">Pan-India Presence</span>
              </div>
              <div className="stat-card">
                <h3>85%</h3>
                <p>Active Participation</p>
                <span className="stat-highlight">Quality Audience</span>
              </div>
            </div>
            <div className="marketing-callout">
              <h3>📈 Why Brands Choose I.D.C. for Marketing</h3>
              <p>Our 10,000+ active developer community represents India's most engaged tech professionals - from students to senior developers. Partner with us to reach decision-makers, early adopters, and influential developers who drive technology choices in their organizations.</p>
            </div>
          </div>
        </section>
        <CommunityHighlights />
        <SubCommunities />
      </div>
    </div>
  );
};

export default CommunityPage;
