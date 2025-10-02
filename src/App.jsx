import React, { useState } from 'react';
import RPHGenerator from './components/RPHGenerator';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('generator');

  return (
    <div className="App">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="main-content">
        {currentView === 'generator' && <RPHGenerator />}
        {currentView === 'templates' && (
          <div className="placeholder-section">
            <h2>Template Management</h2>
            <p>Fitur pengurusan template akan datang</p>
          </div>
        )}
        {currentView === 'history' && (
          <div className="placeholder-section">
            <h2>Sejarah RPH</h2>
            <p>Fitur sejarah dan arkib RPH akan datang</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;