import React from 'react';

export default function HomePage() {
  return (
    <div className="md:pl-64 min-h-screen bg-[#050505] text-white">
      <div className="p-12">
        <div className="h-[450px] rounded-[3.5rem] bg-gradient-to-br from-[#111] via-[#0a0a0a] to-black border border-[#1f1f1f] p-16 flex flex-col justify-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(209,255,26,0.1)_0%,_transparent_70%)]"></div>
          
          <span className="text-[#d1ff1a] font-black text-xs tracking-[0.3em] mb-6 uppercase inline-block">Premium Live Engine V4</span>
          
          <h1 className="text-8xl font-black tracking-tighter mb-10 leading-[0.85] text-white">
            Transform Your <br/><span className="text-[#d1ff1a]">Phone</span>
          </h1>
          
          <div className="flex gap-6">
            <button className="bg-[#d1ff1a] text-black font-black px-12 py-5 rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(209,255,26,0.2)] text-lg uppercase">
              Browse Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
