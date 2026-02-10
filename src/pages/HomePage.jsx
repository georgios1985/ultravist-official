import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="md:pl-64 min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(209,255,26,0.1)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#d1ff1a]/20 rounded-full mb-8">
          <i className="fa-solid fa-sparkles text-[#d1ff1a]"></i>
          <span className="text-xs font-bold tracking-wider uppercase">Premium Live Wallpapers</span>
        </div>

        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          Transform Your <span className="text-[#d1ff1a]">Phone</span>
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mb-12 font-medium">
          Discover stunning live wallpapers that bring your screen to life. 
          Premium quality, instant downloads, pay only for what you use.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/gallery" className="bg-[#d1ff1a] text-black font-bold px-10 py-5 rounded-full flex items-center gap-3 hover:scale-105 transition-all text-lg shadow-[0_0_30px_rgba(209,255,26,0.3)]">
            BROWSE GALLERY <i className="fa-solid fa-arrow-right"></i>
          </Link>
          <Link to="/credits" className="bg-transparent border-2 border-[#1f1f1f] text-white font-bold px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all text-lg">
            GET 5 FREE CREDITS
          </Link>
        </div>
      </section>

      {/* Featured Wallpapers */}
      <section className="px-8 pb-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2 tracking-tight">Featured Wallpapers</h2>
            <p className="text-gray-500 font-medium text-lg">Hand-picked favorites from our collection</p>
          </div>
          <Link to="/gallery" className="text-gray-400 hover:text-white flex items-center gap-2 font-bold group">
            View All <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <WallpaperCard title="Palm Breeze" img="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600" live />
          <WallpaperCard title="Neon Fluid" img="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600" />
          <WallpaperCard title="Goldfish Zen" img="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600" live />
          <WallpaperCard title="Cosmic Kitten" img="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600" />
        </div>
      </section>
    </div>
  );
}

function WallpaperCard({ title, img, live }) {
  return (
    <div className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#d1ff1a]/50 transition-all cursor-pointer">
      <img src={img} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
      {live && (
        <div className="absolute top-6 left-6 bg-[#d1ff1a] text-black text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div> LIVE
        </div>
      )}
      <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
}
