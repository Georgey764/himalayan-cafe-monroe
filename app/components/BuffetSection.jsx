import React from "react";
import { Clock } from "lucide-react";

const BuffetSection = () => (
  <section
    id="buffet"
    className="py-24 px-6 bg-white text-[#500913] relative overflow-hidden"
  >
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        {/* Decorative Label */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-[1px] bg-[#d4af37]"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] font-black text-[#d4af37]">
            The Buffet Experience
          </span>
        </div>

        {/* Typography */}
        <h2 className="text-4xl md:text-6xl font-marcellus leading-tight text-[#500913]">
          Authentic Himalayan <br />
          <span className="text-[#d4af37] italic font-ebgaramond">
            Lunch Gathering
          </span>
        </h2>

        <p className="text-lg text-[#500913]/80 leading-relaxed font-raleway max-w-md">
          Our daily buffet is a curated journey through mountain valleys. We
          rotate selections daily to ensure fresh flavors.
        </p>

        {/* Info Box - Light Cream background to stand out from pure white */}
        <div className="bg-[#fdfcfa] p-8 border-l-4 border-[#500913] shadow-lg">
          <h4 className="font-bold uppercase tracking-widest text-xs mb-4 flex items-center text-[#d4af37]">
            <Clock className="mr-3" size={18} /> Daily Buffet Hours
          </h4>
          <p className="text-3xl font-ebgaramond italic mb-2 text-[#500913]">
            11:00 AM — 2:00 PM
          </p>
          <p className="text-sm opacity-60 font-raleway text-[#500913]">
            Wed, Thu, Fri, Sat, Sun, Mon
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-6 relative">
        <div className="aspect-[4/5] overflow-hidden shadow-xl rounded-sm">
          <img
            src="https://sitarindiancuisines.com/wp-content/uploads/2024/01/Buffet8-1-1.png"
            className="w-full h-full object-cover"
            alt="Buffet Selection"
          />
        </div>
        <div className="aspect-[4/5] overflow-hidden shadow-xl rounded-sm translate-y-12 border-t-8 border-white">
          <img
            src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover"
            alt="Himalayan Cuisine"
          />
        </div>

        {/* Decorative element to fill white space */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-[#d4af37]/30 -z-10"></div>
      </div>
    </div>
  </section>
);

export default BuffetSection;
