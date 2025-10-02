import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h3>AI Sedang Menjana RPH Anda...</h3>
      <p>Sistem sedang menganalisis keperluan dan menghasilkan rancangan pengajaran yang optimum</p>
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;