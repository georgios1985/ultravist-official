import React, { useState } from 'react';

// --- DE VOLLEDIGE LUMINA PLATFORM CODE (DASHBOARD + GALLERY + ADMIN) ---

export default function App() {
  const [page, setPage] = useState('home');
  const [credits] = useState(9963);

  // --- COMPONENT: NAVBAR ---
  const Navbar = () => (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1f1f1f] flex flex-col p-8 z-50 hidden md:flex">
      <div className="flex items-center gap-3 mb-16 cursor-pointer" onClick={() => setPage('home')}>
        <div className="w-10 h-10 bg-[#d1ff1a] rounded-xl flex items-center justify-center text-black font-black text-2xl">L</div>
        <span className="text-white font-black text-2xl tracking-tighter">Lumina Walls</span>
      </div>
      <div className="flex-1 space-y-4">
        <button onClick={() => setPage('home')} className={`block text-lg font-bold ${page === 'home' ? 'text-[#d1ff1a]' : 'text-gray-500'}`}>Home</button>
        <button onClick={() => setPage('gallery')} className={`block text-lg font-bold ${page === 'gallery' ? 'text-[#d1ff1a]' : 'text-gray-500'}`}>Gallery</button>
        <button onClick={() => setPage('dashboard')} className={`block text-lg font-bold ${page === 'dashboard' ? 'text-[#d1ff1a]' : 'text-gray-500'}`}>Dashboard</button>
        <button onClick={() => setPage('admin')} className={`block text-lg font-bold ${page === 'admin' ? 'text-[#d1ff1a]' : 'text-gray-500'}`}>Admin Upload</button>
      </div>
      <div className="mt-auto pt-8 border-t border-[#1f1f1f]">
        <div className="bg-[#111] p-3 rounded-lg mb-4 flex justify-between">
            <span className="text-[#d1ff1a] font-bold">{credits.toLocaleString()}</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase">Credits</span>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans">
      <Navbar />
      
      <main className="md:pl-64">
        {/* HEADER */}
        <header className="h-20 border-b border-[#1f1f1f] flex items-center justify-between px-8 bg-[#050505]/90 backdrop-blur sticky top-0 z-40">
            <h2 className="text-xl font-bold capitalize">{page}</h2>
            <button className="bg-[#d1ff1a] text-black font-bold px-6 py-2 rounded-full text-sm">Login</button>
        </header>

        <div className="p-8">
            {/* PAGINA: HOME */}
            {page === 'home' && (
                <section className="animate-in fade-in duration-500">
                    <div className="h-[400px] rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-[#1f1f1f] p-12 flex flex-col justify-center relative overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_rgba(209,255,26,0.15)_0%,_transparent_70%)]"></div>
                        <span className="text-[#d1ff1a] font-black text-sm tracking-[0.2em] mb-4 uppercase">Lumina V4 Engine</span>
                        <h1 className="text-7xl font-black tracking-tighter mb-6 leading-none">Transform Your <br/><span className="text-[#d1ff1a]">Phone</span></h1>
                        <button onClick={() => setPage('gallery')} className="bg-white text-black font-bold px-8 py-4 rounded-full w-fit hover:scale-105 transition-all">EXPLORE GALLERY</button>
                    </div>
                </section>
            )}

            {/* PAGINA: GALLERY */}
            {page === 'gallery' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-[3/4] rounded-[2.5rem] bg-[#0a0a0a] border border-[#1f1f1f] overflow-hidden group cursor-pointer hover:border-[#d1ff1a]/50 transition-all">
                            <div className="h-full w-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                                <i className="fa-solid fa-image text-4xl text-gray-700"></i>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* PAGINA: DASHBOARD */}
            {page === 'dashboard' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-10 rounded-3xl">
                        <h3 className="text-gray-500 font-bold text-sm uppercase mb-2">Total Revenue</h3>
                        <div className="text-5xl font-black text-white">€ 14,250</div>
                    </div>
                    <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-10 rounded-3xl">
                        <h3 className="text-gray-500 font-bold text-sm uppercase mb-2">Active Users</h3>
                        <div className="text-5xl font-black text-[#d1ff1a]">2,405</div>
                    </div>
                </div>
            )}

            {/* PAGINA: ADMIN */}
            {page === 'admin' && (
                <div className="max-w-2xl bg-[#0a0a0a] border border-[#1f1f1f] p-12 rounded-[3rem]">
                    <h2 className="text-3xl font-black mb-8">Upload Wallpaper</h2>
                    <div className="border-2 border-dashed border-[#1f1f1f] h-64 rounded-3xl flex flex-col items-center justify-center text-gray-500 hover:border-[#d1ff1a] hover:bg-[#111] cursor-pointer transition-all">
                        <i className="fa-solid fa-cloud-arrow-up text-5xl mb-4"></i>
                        <span className="font-bold">Select File</span>
                    </div>
                    <button className="w-full bg-[#d1ff1a] text-black font-bold py-5 rounded-2xl mt-8">PUBLISH TO STORE</button>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}
