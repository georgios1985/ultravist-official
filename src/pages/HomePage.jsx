import React from 'react';

export default function HomePage() {
  return (
    <div className="md:pl-64 min-h-screen bg-[#050505] text-white p-12">
      <div className="h-[400px] rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-[#1f1f1f] p-16 flex flex-col justify-center relative overflow-hidden">
        <h1 className="text-7xl font-black tracking-tighter mb-6 leading-none text-white">
          Transform Your <br/><span className="text-[#d1ff1a]">Phone</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-md">The premium 8K wallpaper engine for your mobile device.</p>
      </div>
    </div>
  );
}
