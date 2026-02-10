import React from 'react';

export default function GalleryPage() {
  const wallpapers = [
    { id: 1, title: "Neon City", cat: "Cyberpunk", price: 5, img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600" },
    { id: 2, title: "Liquid Gold", cat: "Abstract", price: 5, img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600" }
  ];

  return (
    <div className="md:pl-64 p-8 pt-32 min-h-screen bg-[#050505]">
      <h1 className="text-5xl font-black tracking-tighter text-white mb-12">All Wallpapers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wallpapers.map(wall => (
          <div key={wall.id} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-card border border-border hover:border-primary/50 transition-all cursor-pointer">
            <img src={wall.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur text-[#d1ff1a] text-xs font-black px-3 py-1.5 rounded-full border border-white/10">
              {wall.price} CREDITS
            </div>
            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-xl font-bold text-white">{wall.title}</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{wall.cat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
