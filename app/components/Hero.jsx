import React from "react";
import {
  Clock,
  Sun,
  Moon,
  Circle,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const Hero = () => {
  const liveStatus = useLiveStatus();
  const isLunch = liveStatus.service === "LUNCH BUFFET";
  const isDineIn = liveStatus.service === "DINE IN";

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-28 overflow-hidden bg-[#500913]">
      {/* Background with Depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
          alt="Authentic Spices"
          className="w-full h-full object-cover scale-105 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#500913] via-transparent to-[#500913] lg:bg-gradient-to-r lg:from-[#500913] lg:via-[#500913]/85 lg:to-transparent"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Branding & Status */}
        <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="relative flex items-center justify-center">
                <Circle
                  size={8}
                  fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
                  className={liveStatus.isOpen ? "animate-pulse" : ""}
                />
                {liveStatus.isOpen && (
                  <Circle
                    size={18}
                    className="absolute animate-ping opacity-30 text-green-500"
                  />
                )}
              </div>
              <span className="font-raleway text-[11px] font-black tracking-[0.5em] text-[#d4af37] uppercase">
                {liveStatus.status}
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-marcellus text-white leading-[0.9]">
              Himalayan{" "}
              <span className="text-[#d4af37] block mt-4 lg:mt-0">Kitchen</span>
            </h1>

            <p className="text-xl md:text-2xl font-ebgaramond italic text-white/80 max-w-lg mx-auto lg:mx-0">
              {liveStatus.isOpen
                ? `Currently serving our ${liveStatus.service.toLowerCase()}`
                : liveStatus.nextEvent}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a
              href="tel:+13186003439"
              className="w-full sm:w-auto bg-[#d4af37] text-[#500913] px-10 py-5 font-raleway text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
            >
              Order Now
            </a>
            <a
              href="#location"
              className="group flex items-center space-x-3 text-white font-raleway text-[11px] font-black uppercase tracking-widest"
            >
              <MapPin size={16} className="text-[#d4af37]" />
              <span className="border-b border-white/20 group-hover:border-[#d4af37] transition-all pb-1">
                Monroe, LA
              </span>
            </a>
          </div>
        </div>

        {/* Right: The Service Timeline Box */}
        <div className="lg:col-span-5">
          <div className="bg-black/40 backdrop-blur-2xl p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden">
            <h3 className="text-lg mb-12 font-marcellus text-white/40 flex items-center tracking-[0.3em] uppercase">
              <Clock className="mr-4 text-[#d4af37]" size={20} /> Today's
              Schedule
            </h3>

            <div className="space-y-12">
              {/* Lunch Service */}
              <div
                className={`transition-all duration-700 ${
                  isLunch ? "opacity-100 scale-105" : "opacity-30"
                }`}
              >
                <div className="flex justify-between items-end mb-4 font-raleway uppercase tracking-widest">
                  <div className="flex items-center space-x-3">
                    <Sun size={18} className="text-[#d4af37]" />
                    <span className="text-[11px] font-black text-white">
                      Lunch Buffet
                    </span>
                  </div>
                  <span className="text-2xl font-ebgaramond italic text-[#d4af37] normal-case tracking-normal">
                    11 am — 2 pm
                  </span>
                </div>
                <div className="h-[2px] w-full bg-white/10 rounded-full">
                  <div
                    className={`h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37] ${
                      isLunch ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Dinner Service */}
              <div
                className={`transition-all duration-700 ${
                  isDineIn ? "opacity-100 scale-105" : "opacity-30"
                }`}
              >
                <div className="flex justify-between items-end mb-4 font-raleway uppercase tracking-widest">
                  <div className="flex items-center space-x-3">
                    <Moon size={18} className="text-[#d4af37]" />
                    <span className="text-[11px] font-black text-white">
                      Dine-In Dinner
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-ebgaramond italic text-[#d4af37] normal-case tracking-normal leading-none block">
                      5 pm — 9 pm
                    </span>
                    <span className="text-[9px] text-[#d4af37]/60 block mt-1">
                      Fri & Sat: 10 pm Close
                    </span>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-white/10 rounded-full">
                  <div
                    className={`h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37] ${
                      isDineIn ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Smart Status Bar */}
            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
                {liveStatus.isOpen ? "Now Serving" : "Kitchen Status"}
              </span>
              <span
                className={`text-xs font-marcellus tracking-[0.1em] uppercase ${
                  liveStatus.isOpen ? "text-[#d4af37]" : "text-white/60"
                }`}
              >
                {liveStatus.isOpen ? liveStatus.service : "Closed Now"}
              </span>
            </div>
          </div>

          <p className="mt-6 text-center text-white/30 font-raleway text-[9px] uppercase tracking-[0.5em]">
            Wed — Mon | Closed Tuesdays
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
