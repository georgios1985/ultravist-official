import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');

  const styles = {
    container: { backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', display: 'flex' },
    sidebar: { width: '260px', borderRight: '1px solid #1f1f1f', padding: '40px', backgroundColor: 'black', display: 'flex', flexDirection: 'column' },
    logoBox: { width: '40px', height: '40px', backgroundColor: '#d1ff1a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: '900', fontSize: '24px' },
    navBtn: (active) => ({ background: 'none', border: 'none', color: active ? '#d1ff1a' : '#666', textAlign: 'left', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px', outline: 'none' }),
    content: { flex: 1, padding: '60px', position: 'relative' },
    hero: { padding: '80px', borderRadius: '40px', background: 'linear-gradient(135deg, #111 0%, #000 100%)', border: '1px solid #1f1f1f' },
    h1: { fontSize: '80px', fontWeight: '900', margin: 0, lineHeight: '0.9', letterSpacing: '-4px' },
    btn: { marginTop: '40px', backgroundColor: '#d1ff1a', color: 'black', border: 'none', padding: '20px 40px', borderRadius: '100px', fontWeight: '900', cursor: 'pointer', fontSize: '16px' }
  };

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '60px' }}>
          <div style={styles.logoBox}>L</div>
          <span style={{ fontSize: '24px', fontWeight: '900' }}>Lumina</span>
        </div>
        <button onClick={() => setPage('home')} style={styles.navBtn(page === 'home')}>Home</button>
        <button onClick={() => setPage('gallery')} style={styles.navBtn(page === 'gallery')}>Gallery</button>
        <button onClick={() => setPage('dashboard')} style={styles.navBtn(page === 'dashboard')}>Dashboard</button>
      </div>

      {/* MAIN */}
      <div style={styles.content}>
        {page === 'home' && (
          <div style={styles.hero}>
            <h1 style={styles.h1}>Transform Your <br /> <span style={{ color: '#d1ff1a' }}>Phone</span></h1>
            <p style={{ color: '#888', fontSize: '20px', marginTop: '30px' }}>Premium Live Wallpapers. V4 Engine Active.</p>
            <button onClick={() => setPage('gallery')} style={styles.btn}>EXPLORE GALLERY</button>
          </div>
        )}
        {page === 'gallery' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <div style={{ height: '300px', backgroundColor: '#111', borderRadius: '20px', border: '1px solid #333' }}></div>
            <div style={{ height: '300px', backgroundColor: '#111', borderRadius: '20px', border: '1px solid #333' }}></div>
            <div style={{ height: '300px', backgroundColor: '#111', borderRadius: '20px', border: '1px solid #333' }}></div>
          </div>
        )}
      </div>
    </div>
  );
}
