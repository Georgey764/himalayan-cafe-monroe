import React from "react";
import { Clock, Utensils } from "lucide-react";
import Image from "next/image";

const BuffetSection = () => {
  return (
    <section
      id="buffet"
      className="py-24 px-6 bg-white text-primary relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          {/* Decorative Label */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-accent font-sans">
              The Buffet Experience
            </span>
          </div>

          {/* Typography using Semantic Classes */}
          <h2 className="text-4xl md:text-6xl font-heading leading-tight text-primary">
            Authentic Himalayan <br />
            <span className="text-accent italic font-serif">
              Lunch Gathering
            </span>
          </h2>

          <p className="text-lg text-primary/80 leading-relaxed font-sans max-w-md">
            Our daily buffet is a curated journey through mountain valleys. We
            rotate selections daily to ensure fresh flavors and traditional
            spice profiles for the{" "}
            <strong className="text-primary">Monroe community</strong>.
          </p>

          {/* Info Box - Static Premium Design */}
          <div className="bg-[#fdfcfa] p-8 border-l-4 border-primary shadow-xl relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Utensils size={40} />
            </div>

            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 flex items-center text-accent font-sans">
              <Clock className="mr-3" size={18} /> Daily Buffet Hours
            </h4>

            <div className="space-y-1">
              <p className="text-4xl font-serif italic text-primary">
                11:00 AM — 2:00 PM
              </p>
              <p className="text-[10px] font-black font-sans tracking-[0.2em] uppercase text-primary/40">
                Wednesday through Monday
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-primary/5">
              <p className="text-xs italic font-serif text-primary/60">
                *Closed every Tuesday for rest
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl rounded-sm border border-accent/10">
            <Image
              src="/images/buffet_one.png"
              alt="Himalayan Lunch Buffet Selection Monroe"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl rounded-sm translate-y-12 border-t-8 border-white bg-primary">
            <Image
              src="/images/buffet_two.avif"
              alt="Authentic Indian and Nepali Buffet Food"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[15%_center] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Decorative element using the Accent Muted variable logic */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-accent/30 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BuffetSection;
