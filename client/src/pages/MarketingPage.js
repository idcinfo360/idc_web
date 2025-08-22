import React, { useState, useEffect } from 'react';
import MarketingBenefits from '../components/MarketingBenefits';
import MarketingForm from '../components/MarketingForm';
import LoadingSpinner from '../components/LoadingSpinner';

const MarketingPage = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  if (!contentLoaded) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <LoadingSpinner size="medium" message="Loading marketing opportunities..." />
      </div>
    );
  }

  return (
  <div className="page-container">
    <section className="page-hero">
      <h1>I.D.C. Marketing Partnership</h1>
      <p>Partner with India's fastest growing developer community</p>
    </section>
    
    <section className="marketing-intro">
      <h2>Why Partner with I.D.C.?</h2>
      <p>
        The Indian Developer Community (I.D.C.) connects you with 10,000+ active developers, 
        tech enthusiasts, and industry professionals across India. Our engaged community offers 
        unparalleled marketing opportunities to showcase your brand to India's most influential 
        tech talent and decision-makers.
      </p>
      <div className="marketing-stats">
        <div className="stat">
          <h3>10,000+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat">
          <h3>750+</h3>
          <p>Events Conducted</p>
        </div>
        <div className="stat">
          <h3>85%</h3>
          <p>Engagement Rate</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Cities Reached</p>
        </div>
      </div>
    </section>

    <MarketingBenefits />
    
    <section className="marketing-form-section">
      <h2>Ready to Partner?</h2>
      <p>Contact us to explore marketing opportunities with I.D.C.</p>
      <MarketingForm />
    </section>
  </div>
  );
};

export default MarketingPage;
