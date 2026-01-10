import React from "react";
import { Clock, Utensils } from "lucide-react";

const BuffetSection = () => {
  return (
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
            rotate selections daily to ensure fresh flavors and traditional
            spice profiles.
          </p>

          {/* Info Box - Static Premium Design */}
          <div className="bg-[#fdfcfa] p-8 border-l-4 border-[#500913] shadow-xl relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Utensils size={40} />
            </div>

            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 flex items-center text-[#d4af37]">
              <Clock className="mr-3" size={18} /> Daily Buffet Hours
            </h4>

            <div className="space-y-1">
              <p className="text-4xl font-ebgaramond italic text-[#500913]">
                11:00 AM — 2:00 PM
              </p>
              <p className="text-[10px] font-black font-raleway tracking-[0.2em] uppercase text-[#500913]/40">
                Wednesday through Monday
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#500913]/5">
              <p className="text-xs italic font-ebgaramond text-[#500913]/60">
                *Closed every Tuesday for rest
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-6 relative">
          <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
            <img
              src="https://sitarindiancuisines.com/wp-content/uploads/2024/01/Buffet8-1-1.png"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              alt="Buffet Selection"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm translate-y-12 border-t-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover"
              alt="Himalayan Cuisine"
            />
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-[#d4af37]/30 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BuffetSection;
