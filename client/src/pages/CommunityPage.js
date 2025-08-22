import React, { useState, useEffect } from 'react';
import CommunityHighlights from '../components/CommunityHighlights';
import SubCommunities from '../components/SubCommunities';
import LoadingSpinner from '../components/LoadingSpinner';

const CommunityPage = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!contentLoaded) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <LoadingSpinner size="medium" message="Loading community showcase..." />
      </div>
    );
  }

  return (
  <div className="page-container">
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
  );
};

export default CommunityPage;
