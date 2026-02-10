import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Navbar() {
  const { credits } = useAuth();
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-[#1f1f1f] flex flex-col p-6 z-50">
      <div className="text-[#d1ff1a] font-bold text-2xl mb-10 tracking-tighter">LUMINA</div>
      <div className="flex flex-col space-y-2">
        <NavLink to="/" icon="fa-house" label="Home" />
        <NavLink to="/gallery" icon="fa-images" label="Gallery" />
        <NavLink to="/dashboard" icon="fa-chart-pie" label="Dashboard" />
        <NavLink to="/admin" icon="fa-upload" label="Admin" />
      </div>
      <div className="mt-auto p-4 bg-[#111] border border-[#1f1f1f] rounded-xl text-center">
        <div className="text-[#d1ff1a] font-bold text-lg">{credits.toLocaleString()}</div>
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Credits</div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, label }) {
  return (
    <Link to={to} className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#111] rounded-lg transition-all">
      <i className={`fa-solid ${icon} w-5`}></i>
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}
