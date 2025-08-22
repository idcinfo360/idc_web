import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FocusAreas from '../components/FocusAreas';
import SponsorsGrid from '../components/SponsorsGrid';
import WhatsAppCTA from '../components/WhatsAppCTA';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!contentLoaded) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <LoadingSpinner size="medium" message="Loading homepage content..." />
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <WhatsAppCTA />
      <AboutSection />
      <FocusAreas />
      <SponsorsGrid />
    </>
  );
};

export default HomePage;
