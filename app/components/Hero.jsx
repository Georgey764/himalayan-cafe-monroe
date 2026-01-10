import React from "react";
import { Phone, MapPin, Circle } from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const Hero = () => {
  const liveStatus = useLiveStatus();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#500913]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#500913] z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
          alt="Authentic Spices"
          className="w-full h-full object-cover scale-105 opacity-50"
        />
      </div>

      <div className="relative z-20 w-full max-w-4xl px-6 text-center">
        {/* Main Status Card */}
        <div className="bg-black/40 backdrop-blur-xl border border-[#d4af37]/20 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Top Status Bar */}
          <div
            className={`absolute top-0 left-0 w-full h-1.5 transition-colors duration-500 ${
              liveStatus.isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>

          <div className="flex flex-col items-center mb-6">
            {/* Live Indicator Pill */}
            <div
              className={`flex items-center space-x-3 mb-6 px-5 py-1.5 rounded-full border ${
                liveStatus.isOpen
                  ? "bg-green-500/10 border-green-500/20 text-green-400"
                  : "bg-red-500/10 border-red-500/20 text-red-400"
              }`}
            >
              <Circle
                size={8}
                fill="currentColor"
                className={liveStatus.isOpen ? "animate-pulse" : ""}
              />
              <span className="text-sm md:text-base font-bold tracking-[0.4em] uppercase font-raleway">
                {liveStatus.status}
              </span>
            </div>

            {/* Dynamic Titles using Theme Fonts */}
            <h1 className="text-3xl md:text-6xl lg:text-6xl leading-tight mb-3 text-white font-marcellus">
              {liveStatus.service}
            </h1>

            <p className="text-xl md:text-3xl italic text-[#d4af37] font-ebgaramond">
              {liveStatus.nextEvent}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="tel:+13185550199"
              className="bg-[#d4af37] hover:bg-[#c19b2e] text-[#500913] px-10 py-5 font-black tracking-[0.2em] uppercase text-xs flex items-center justify-center transition-all duration-300 shadow-xl"
            >
              <Phone size={16} className="mr-3" /> Call to Order
            </a>

            <a
              href="#location"
              className="border border-white/30 hover:bg-white/10 text-white px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center transition-all duration-300"
            >
              Get Directions <MapPin size={16} className="ml-3" />
            </a>
          </div>
        </div>

        {/* Subtle Decorative Sub-text */}
        <p className="mt-8 text-white/40 text-[10px] uppercase tracking-[0.5em] font-raleway">
          Experience the Heights of Himalayan Flavor
        </p>
      </div>
    </section>
  );
};

export default Hero;
