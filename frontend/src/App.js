import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', display: 'flex' }}>
      {/* SIDEBAR */}
      <div style={{ width: '260px', borderRight: '1px solid #1f1f1f', padding: '40px', backgroundColor: 'black' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '60px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#d1ff1a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'black', fontWeight: '900', fontSize: '24px', paddingLeft: '8px' }}>L</div>
          <span style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px' }}>Lumina</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', color: page === 'home' ? '#d1ff1a' : '#666', textAlign: 'left', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>Home</button>
          <button onClick={() => setPage('gallery')} style={{ background: 'none', border: 'none', color: page === 'gallery' ? '#d1ff1a' : '#666', textAlign: 'left', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>Gallery</button>
          <button onClick={() => setPage('dashboard')} style={{ background: 'none', border: 'none', color: page === 'dashboard' ? '#d1ff1a' : '#666', textAlign: 'left', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>Dashboard</button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, padding: '60px' }}>
        {page === 'home' && (
          <div style={{ padding: '80px', borderRadius: '40px', background: 'linear-gradient(135deg, #111 0%, #000 100%)', border: '1px solid #1f1f1f', position: 'relative', overflow: 'hidden' }}>
            <h1 style={{ fontSize: '80px', fontWeight: '900', margin: 0, lineHeight: '0.9', letterSpacing: '-4px' }}>
              Transform Your <br />
              <span style={{ color: '#d1ff1a' }}>Phone</span>
            </h1>
            <p style={{ color: '#888', fontSize: '20px', marginTop: '30px', maxWidth: '400px' }}>Premium 8K Live Wallpapers. Download now and customize your world.</p>
            <button onClick={() => setPage('gallery')} style={{ marginTop: '40px', backgroundColor: '#d1ff1a', color: 'black', border: 'none', padding: '20px 40px', borderRadius: '100px', fontWeight: '900', cursor: 'pointer', fontSize: '16px' }}>EXPLORE GALLERY</button>
          </div>
        )}

        {page === 'gallery' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ aspectRatio: '3/4', backgroundColor: '#111', borderRadius: '30px', border: '1px solid #1f1f1f', overflow: 'hidden' }}>
                 <div style={{ height: '100%', width: '100%', background: `url(https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400) center/cover` }}></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
