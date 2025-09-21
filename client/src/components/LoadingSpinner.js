import React from 'react';

const LoadingSpinner = ({ size = 'medium', message = 'Loading...', overlay = false }) => {
  if (overlay) {
    return (
      <div className="simple-loading-overlay">
        <div className="simple-spinner"></div>
        {message && <p className="simple-loading-text">{message}</p>}
      </div>
    );
  }

  return (
    <div className="simple-loading-container">
      <div className="simple-spinner"></div>
      {message && <p className="simple-loading-text">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
