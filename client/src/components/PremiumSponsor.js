import React from 'react';
import upprLogo from '../assets/uppr-developer-logo.png';

const PremiumSponsor = () => {
  return (
    <section className="premium-sponsor">
      <div className="container">
        <h2 className="handwriting-title">Premium Partner</h2>
        <div className="premium-sponsor-card">
          <div className="premium-badge">
            <span>
              <span className="premium-star">✨</span>
              PREMIUM SPONSOR
            </span>
          </div>
          <div className="premium-sponsor-content">
            <img 
              src={upprLogo} 
              alt="Uppr Developer" 
              className="premium-sponsor-logo"
            />
            <div className="premium-sponsor-info">
              <h3>Uppr Developer</h3>
              <p>Empowering developers to reach new heights in their careers and technical expertise.</p>
              <a href="#" className="premium-sponsor-link">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSponsor;