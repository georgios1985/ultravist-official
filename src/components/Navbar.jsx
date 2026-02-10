import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1f1f1f] flex flex-col p-8 z-50 hidden md:flex">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-10 h-10 bg-[#d1ff1a] rounded-xl flex items-center justify-center text-black font-black text-2xl">L</div>
        <span className="text-white font-black text-2xl tracking-tighter">Lumina</span>
      </div>

      <div className="flex-1 space-y-4">
        <Link to="/" className={`block text-lg font-bold ${isActive('/') ? 'text-[#d1ff1a]' : 'text-gray-500'}`}>Home</Link>
        <Link to="/gallery" className={`block text-lg font-bold ${isActive('/gallery') ? 'text-[#d1ff1a]' : 'text-gray-500'}`}>Gallery</Link>
        <Link to="/dashboard" className={`block text-lg font-bold ${isActive('/dashboard') ? 'text-[#d1ff1a]' : 'text-gray-500'}`}>Dashboard</Link>
      </div>
    </nav>
  );
}
