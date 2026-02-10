import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="md:pl-64 min-h-screen bg-[#050505] text-white">
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

      {/* Featured Grid */}
      <section className="px-8 pb-32">
        <h2 className="text-4xl font-bold mb-12 tracking-tight text-white">Featured Wallpapers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-card border border-border">
             <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-card border border-border">
             <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
