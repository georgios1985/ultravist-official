import React from 'react';
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1f1f1f] flex flex-col p-8 z-50">
      {/* LOGO */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-10 h-10 bg-[#d1ff1a] rounded-xl flex items-center justify-center text-black font-black text-2xl shadow-[0_0_20px_rgba(209,255,26,0.2)]">L</div>
        <span className="text-white font-black text-2xl tracking-tighter">Lumina</span>
      </div>

      {/* LINKS */}
      <div className="flex-1 space-y-2">
        <NavLink to="/" label="Home" active={isActive('/')} />
        <NavLink to="/gallery" label="Gallery" active={isActive('/gallery')} />
        <NavLink to="/dashboard" label="Dashboard" active={isActive('/dashboard')} />
        <NavLink to="/admin" label="Upload" active={isActive('/admin')} />
      </div>

      {/* CREDITS PREVIEW */}
      <div className="mt-auto p-4 bg-[#111] border border-[#1f1f1f] rounded-2xl text-center">
        <div className="text-[#d1ff1a] font-bold text-lg">9,963</div>
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Credits</div>
      </div>
    </nav>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link to={to} className={`block py-3 px-4 rounded-xl text-lg font-bold transition-all ${active ? 'text-[#d1ff1a] bg-[#151515]' : 'text-gray-500 hover:text-white'}`}>
      {label}
    </Link>
  );
}
