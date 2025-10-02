import React from 'react';
import './Header.css';

const Header = ({ currentView, setCurrentView }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <h1>RPH AI Generator</h1>
          <p>Sistem Auto-Generate Rancangan Pengajaran Harian</p>
        </div>
        <nav className="navigation">
          <button 
            className={`nav-btn ${currentView === 'generator' ? 'active' : ''}`}
            onClick={() => setCurrentView('generator')}
          >
            Generator RPH
          </button>
          <button 
            className={`nav-btn ${currentView === 'templates' ? 'active' : ''}`}
            onClick={() => setCurrentView('templates')}
          >
            Templates
          </button>
          <button 
            className={`nav-btn ${currentView === 'history' ? 'active' : ''}`}
            onClick={() => setCurrentView('history')}
          >
            History
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;