import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1f1f1f] hidden md:flex flex-col p-6 z-50">
      <div className="text-[#d1ff1a] font-bold text-2xl mb-10">Lumina</div>
      <div className="space-y-2 flex flex-col">
        <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
        <Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link>
        <Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link>
      </div>
    </nav>
  );
}
