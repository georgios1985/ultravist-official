import React from 'react';

export default function GalleryPage() {
  const wallpapers = [
    { id: 1, title: "Neon City", cat: "Cyberpunk", price: 5, img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600", live: true },
    { id: 2, title: "Liquid Gold", cat: "Abstract", price: 5, img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600", live: false },
    { id: 3, title: "Deep Space", cat: "Cosmos", price: 10, img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600", live: true },
    { id: 4, title: "Palm Sunset", cat: "Nature", price: 5, img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600", live: true }
  ];

  return (
    <div className="md:pl-64 p-8 pt-32 min-h-screen bg-[#050505]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-white">Full Gallery</h1>
          <p className="text-gray-500 font-medium">Explore and unlock premium art</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Cyberpunk', 'Nature', 'Abstract'].map(cat => (
            <button key={cat} className="px-6 py-2 bg-[#111] border border-[#1f1f1f] rounded-full text-sm font-bold text-gray-400 hover:text-[#d1ff1a] hover:border-[#d1ff1a]/30 transition-all">{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wallpapers.map(wall => (
          <div key={wall.id} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#d1ff1a]/50 transition-all cursor-pointer">
            <img src={wall.img} alt={wall.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md text-[#d1ff1a] text-xs font-black px-3 py-1.5 rounded-full border border-white/10">
              {wall.price} CREDITS
            </div>
            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-xl font-bold text-white">{wall.title}</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{wall.cat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
