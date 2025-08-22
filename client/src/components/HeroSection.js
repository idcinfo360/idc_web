import React from 'react';
import logo from '../assets/idc-logo.jpg';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-left">
        <h1><span className="gradient-text">Empowering Developers</span><br />Connecting Innovators</h1>
        <p className="tagline">A nationwide hub for hackathons, learning, careers & collaboration in the Indian Developer Community (I.D.C.).</p>
        <div className="hero-actions">
          <a href="/membership" className="btn primary">Explore Membership</a>
          <a href="/community" className="btn ghost">Community Showcase</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={logo} alt="I.D.C. Logo" className="hero-logo" />
      </div>
    </div>
  </section>
);

export default HeroSection;
