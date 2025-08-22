import React from 'react';

const LoadingSpinner = ({ size = 'medium', message = 'Loading...', overlay = false }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium', 
    large: 'spinner-large'
  };

  if (overlay) {
    return (
      <div className="loading-overlay">
        <div className="loading-content">
          <div className={`loading-spinner ${sizeClasses[size]}`}>
            <div className="spinner"></div>
          </div>
          {message && <p className="loading-message">{message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="loading-container">
      <div className={`loading-spinner ${sizeClasses[size]}`}>
        <div className="spinner"></div>
      </div>
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
