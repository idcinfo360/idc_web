import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const PageTransition = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading when route changes
    setLoading(true);
    setShowProgressBar(true);
    
    // Hide progress bar after animation
    const progressTimer = setTimeout(() => {
      setShowProgressBar(false);
    }, 800);
    
    // Hide full loader
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(loaderTimer);
    };
  }, [location.pathname]);

  const getPageName = () => {
    const path = location.pathname;
    switch(path) {
      case '/': return 'Home';
      case '/about': return 'About Us';
      case '/sponsors': return 'Sponsors';
      case '/marketing': return 'Marketing';
      case '/community': return 'Community';
      default: return 'Page';
    }
  };

  return (
    <>
      {showProgressBar && <div className="loading-progress-bar" />}
      
      {loading ? (
        <div className="page-transition-loader">
          <div className="loading-content">
            <LoadingSpinner size="large" />
            <p className="loading-message">Loading {getPageName()}...</p>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="page-content-wrapper">
          {children}
        </div>
      )}
    </>
  );
};

export default PageTransition;
