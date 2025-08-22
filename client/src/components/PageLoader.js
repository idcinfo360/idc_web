import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = ({ message = 'Loading page...' }) => {
  return (
    <div className="page-loader">
      <LoadingSpinner size="large" message={message} overlay={true} />
    </div>
  );
};

export default PageLoader;
