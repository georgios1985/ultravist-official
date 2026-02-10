import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

export function Navbar() {
  const location = useLocation();
  const { credits } = useAuth();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1f1f1f] flex flex-col p-8 z-50 hidden md:flex">
      <Link to="/" className="flex items-center gap-3 mb-16">
        <div className="w-10 h-10 bg-[#d1ff1a] rounded-xl flex items-center justify-center text-black font-black text-2xl">L</div>
        <span className="text-white font-black text-2xl tracking-tighter">Lumina Walls</span>
      </Link>

      <div className="flex-1 space-y-2">
        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-6">Explore</p>
        <NavLink to="/" label="Home" active={isActive('/')} />
        <NavLink to="/gallery" label="Gallery" active={isActive('/gallery')} />
        <NavLink to="/credits" label="Credits" active={isActive('/credits')} />
        
        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mt-12 mb-6">Personal</p>
        <NavLink to="/dashboard" label="Dashboard" active={isActive('/dashboard')} />
        <NavLink to="/settings" label="Settings" active={isActive('/settings')} />
      </div>

      <div className="mt-auto pt-8 border-t border-[#1f1f1f]">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-3 mb-4 flex justify-between items-center">
            <span className="text-[#d1ff1a] font-bold">{credits.toLocaleString()}</span>
            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Credits</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Link to="/login" className="text-sm font-bold text-gray-400 hover:text-white">Login</Link>
          <Link to="/register" className="bg-[#d1ff1a] text-black text-sm font-black px-6 py-2.5 rounded-full hover:scale-105 transition-all">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link to={to} className={`block py-2 text-lg font-bold transition-all ${active ? 'text-[#d1ff1a]' : 'text-gray-500 hover:text-white'}`}>
      {label}
    </Link>
  );
}
