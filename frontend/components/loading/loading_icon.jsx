import React from 'react';

const LoadingIcon = () => (
  <div className="loading-container overlay">
    <div className="loading-icon">
      <img src='https://s3.us-east-2.amazonaws.com/feedrss-pro/loading.gif'/>
      <span>loading...</span>
    </div>
  </div>
);

export default LoadingIcon;
