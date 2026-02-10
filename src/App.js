import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">ULTRAVIST <span className="badge">8K</span></div>
        <div className="menu"><span>Gallery</span><span>Live Walls</span><button className="btn-gold">Login</button></div>
      </nav>
      <header className="hero">
        <h1>Elevate Your Vision</h1>
        <p>Experience AI-Generated Perfection in 8K Quality</p>
        <div className="search-area">
          <input type="text" placeholder="Search for 8K masterpieces..." />
          <button className="btn-generate">Generate</button>
        </div>
      </header>
      <div className="preview-grid">
        <div className="card">AI Engine Loading...</div>
        <div className="card">Premium 8K Slot</div>
        <div className="card">Live Wallpaper Slot</div>
        <div className="card">AI Masterpiece</div>
      </div>
    </div>
  );
}

export default App;