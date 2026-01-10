import React from "react";
import { Clock } from "lucide-react";

const BuffetSection = ({ fontTitle, fontSub, fontBody }) => (
  <section
    id="buffet"
    className="py-24 px-6 bg-[#fdf5e6] text-[#121212] relative overflow-hidden"
  >
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-[1px] bg-[#d4af37]"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] font-black text-[#d4af37]">
            The Buffet Experience
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl" style={fontTitle}>
          Authentic Himalayan <br />
          <span className="text-[#d4af37] italic" style={fontSub}>
            Lunch Gathering
          </span>
        </h2>
        <p className="text-lg opacity-70 leading-relaxed" style={fontBody}>
          Our daily buffet is a curated journey through mountain valleys. We
          rotate selections daily to ensure fresh flavors.
        </p>
        <div className="bg-white p-8 border-l-4 border-[#d4af37] shadow-xl">
          <h4 className="font-bold uppercase tracking-widest text-xs mb-4 flex items-center">
            <Clock className="text-[#d4af37] mr-3" size={18} /> Daily Buffet
            Hours
          </h4>
          <p className="text-2xl italic mb-2" style={fontSub}>
            11:00 AM — 2:00 PM
          </p>
          <p className="text-sm opacity-60">Wed, Thu, Fri, Sat, Sun, Mon</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square overflow-hidden shadow-2xl translate-y-8">
          <img
            src="https://sitarindiancuisines.com/wp-content/uploads/2024/01/Buffet8-1-1.png"
            className="w-full h-full object-cover"
            alt="Buffet"
          />
        </div>
        <div className="aspect-square overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover"
            alt="Buffet"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BuffetSection;
