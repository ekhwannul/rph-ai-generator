import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RPH AI Generator</h3>
          <p>Sistem Auto-Generate Rancangan Pengajaran Harian</p>
        </div>
        
        <div className="footer-section">
          <h4>Tech Stack</h4>
          <div className="tech-stack">
            <span>React + Vite</span>
            <span>Node.js</span>
            <span>OpenAI</span>
            <span>Vercel + Render</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Bantuan</h4>
          <p>Email: support@rphgenerator.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RPH AI Generator. Hak Cipta Terpelihara.</p>
      </div>
    </footer>
  );
};

export default Footer;