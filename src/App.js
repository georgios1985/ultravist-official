import React, { useState } from 'react';

// --- DE VOLLEDIGE LUMINA PLATFORM CODE ---
export default function App() {
  const [page, setPage] = useState('home');

  // Sidebar Component
  const Sidebar = () => (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1f1f1f] flex flex-col p-8 z-50">
      <div className="flex items-center gap-3 mb-16 cursor-pointer" onClick={() => setPage('home')}>
        <div className="w-10 h-10 bg-[#d1ff1a] rounded-xl flex items-center justify-center text-black font-black text-2xl shadow-[0_0_20px_rgba(209,255,26,0.3)]">L</div>
        <span className="text-white font-black text-2xl tracking-tighter">Lumina Walls</span>
      </div>
      <div className="flex-1 space-y-6">
        <button onClick={() => setPage('home')} className={`block text-xl font-bold transition-all ${page === 'home' ? 'text-[#d1ff1a] translate-x-2' : 'text-gray-500 hover:text-white'}`}>Home</button>
        <button onClick={() => setPage('gallery')} className={`block text-xl font-bold transition-all ${page === 'gallery' ? 'text-[#d1ff1a] translate-x-2' : 'text-gray-500 hover:text-white'}`}>Gallery</button>
        <button onClick={() => setPage('dashboard')} className={`block text-xl font-bold transition-all ${page === 'dashboard' ? 'text-[#d1ff1a] translate-x-2' : 'text-gray-500 hover:text-white'}`}>Dashboard</button>
      </div>
      <div className="mt-auto pt-8 border-t border-[#1f1f1f]">
        <div className="bg-[#111] p-4 rounded-2xl mb-4 flex justify-between items-center border border-[#d1ff1a]/10">
            <span className="text-[#d1ff1a] font-black">9,963</span>
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Credits</span>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#d1ff1a] selection:text-black">
      <Sidebar />
      
      <main className="md:pl-64 min-h-screen relative">
        {/* HEADER */}
        <header className="h-24 flex items-center justify-between px-12 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-40 border-b border-white/5">
            <h2 className="text-2xl font-black capitalize tracking-tight">{page}</h2>
            <div className="flex gap-4">
                <button className="text-gray-400 font-bold hover:text-white transition-colors">Login</button>
                <button className="bg-[#d1ff1a] text-black font-black px-8 py-3 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(209,255,26,0.2)]">SIGN UP</button>
            </div>
        </header>

        <div className="p-12">
            {/* PAGINA: HOME (De 'Transform Your Phone' stijl) */}
            {page === 'home' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="h-[500px] rounded-[3.5rem] bg-gradient-to-br from-[#111] via-[#0a0a0a] to-black border border-white/5 p-16 flex flex-col justify-center relative overflow-hidden mb-16 shadow-2xl">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(209,255,26,0.12)_0%,_transparent_70%)]"></div>
                        <span className="text-[#d1ff1a] font-black text-xs tracking-[0.3em] mb-6 uppercase inline-block">Premium Live Engine V4</span>
                        <h1 className="text-8xl font-black tracking-tighter mb-10 leading-[0.85] text-white">Transform Your <br/><span className="text-[#d1ff1a]">Phone</span></h1>
                        <div className="flex gap-6">
                            <button onClick={() => setPage('gallery')} className="bg-[#d1ff1a] text-black font-black px-12 py-5 rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(209,255,26,0.2)] text-lg">BROWSE GALLERY</button>
                            <button className="bg-transparent border-2 border-white/10 text-white font-black px-12 py-5 rounded-full hover:bg-white hover:text-black transition-all text-lg">GET CREDITS</button>
                        </div>
                    </div>
                </div>
            )}

            {/* PAGINA: GALLERY */}
            {page === 'gallery' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-in fade-in duration-500">
                    {[
                        { t: "Neon Metropolis", c: "Cyberpunk", i: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800" },
                        { t: "Liquid Gold", c: "Abstract", i: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800" },
                        { t: "Deep Space", c: "Cosmos", i: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800" }
                    ].map((wall, idx) => (
                        <div key={idx} className="aspect-[3/4.5] rounded-[3rem] bg-[#0a0a0a] border border-white/5 overflow-hidden group cursor-pointer hover:border-[#d1ff1a]/40 transition-all shadow-xl">
                            <img src={wall.i} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" alt={wall.t} />
                            <div className="absolute bottom-0 w-full p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-2xl font-black text-white mb-2">{wall.t}</h3>
                                <p className="text-[#d1ff1a] font-black text-sm uppercase tracking-widest">{wall.c} • 5 Credits</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* PAGINA: DASHBOARD */}
            {page === 'dashboard' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in zoom-in-95 duration-500">
                    <div className="bg-[#0a0a0a] border border-white/5 p-12 rounded-[3.5rem] shadow-xl hover:border-[#d1ff1a]/20 transition-all">
                        <h3 className="text-gray-500 font-black text-xs uppercase tracking-widest mb-4">Marketplace Revenue</h3>
                        <div className="text-7xl font-black text-white tracking-tighter">€ 14,250</div>
                        <div className="mt-6 text-[#d1ff1a] font-bold">+12% this month</div>
                    </div>
                    <div className="bg-[#0a0a0a] border border-white/5 p-12 rounded-[3.5rem] shadow-xl hover:border-[#d1ff1a]/20 transition-all">
                        <h3 className="text-gray-500 font-black text-xs uppercase tracking-widest mb-4">Total App Users</h3>
                        <div className="text-7xl font-black text-[#d1ff1a] tracking-tighter">2,405</div>
                        <div className="mt-6 text-gray-400 font-bold">84 currently online</div>
                    </div>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}
