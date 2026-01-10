"use client";

import React from "react";
import { Clock, Sun, Moon, Circle, MapPin } from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";
import Image from "next/image";

const Hero = () => {
  const liveStatus = useLiveStatus();
  const isLunch = liveStatus.service === "LUNCH BUFFET";
  const isDineIn = liveStatus.service === "DINE IN";

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-28 overflow-hidden bg-primary">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.avif"
          alt="Authentic Spices"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 opacity-40 transition-transform duration-1000"
        />

        {/* Layered Gradient Overlay using semantic primary color */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/20 to-primary lg:bg-gradient-to-r lg:from-primary lg:via-primary/80 lg:to-transparent" />
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
              <span className="font-sans text-[11px] font-black tracking-[0.5em] text-accent uppercase">
                {liveStatus.status}
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-white leading-[0.9]">
              Himalayan{" "}
              <span className="text-accent block mt-4 lg:mt-0">Cafe</span>
            </h1>

            <p className="text-xl md:text-2xl font-serif italic text-white/80 max-w-lg mx-auto lg:mx-0">
              {liveStatus.isOpen
                ? `Currently serving our ${liveStatus.service.toLowerCase()}`
                : liveStatus.nextEvent}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a
              href="tel:+13186003439"
              className="w-full sm:w-auto bg-accent text-primary px-10 py-5 font-sans text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
            >
              Order Now
            </a>
            <a
              href="#location"
              className="group flex items-center space-x-3 text-white font-sans text-[11px] font-black uppercase tracking-widest"
            >
              <MapPin size={16} className="text-accent" />
              <span className="border-b border-white/20 group-hover:border-accent transition-all pb-1">
                Monroe, LA
              </span>
            </a>
          </div>
        </div>

        {/* Right: The Service Timeline Box */}
        <div className="lg:col-span-5 z-20">
          <div className="bg-black/40 backdrop-blur-2xl p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden">
            <h3 className="text-lg mb-12 font-heading text-white/40 flex items-center tracking-[0.3em] uppercase">
              <Clock className="mr-4 text-accent" size={20} /> Today&apos;s
              Schedule
            </h3>

            <div className="space-y-12">
              {/* Lunch Service */}
              <div
                className={`transition-all duration-700 ${
                  isLunch ? "opacity-100 scale-105" : "opacity-30"
                }`}
              >
                <div className="flex justify-between items-end mb-4 font-sans uppercase tracking-widest">
                  <div className="flex items-center space-x-3">
                    <Sun size={18} className="text-accent" />
                    <span className="text-[11px] font-black text-white">
                      Lunch Buffet
                    </span>
                  </div>
                  <span className="text-2xl font-serif italic text-accent normal-case tracking-normal">
                    11 am — 2 pm
                  </span>
                </div>
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-accent transition-all duration-1000 shadow-[0_0_10px_#d4af37] ${
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
                <div className="flex justify-between items-end mb-4 font-sans uppercase tracking-widest">
                  <div className="flex items-center space-x-3">
                    <Moon size={18} className="text-accent" />
                    <span className="text-[11px] font-black text-white">
                      Dine-In Dinner
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-serif italic text-accent normal-case tracking-normal leading-none block">
                      5 pm — 9 pm
                    </span>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-accent transition-all duration-1000 shadow-[0_0_10px_#d4af37] ${
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
                className={`text-xs font-heading tracking-[0.1em] uppercase ${
                  liveStatus.isOpen ? "text-accent" : "text-white/60"
                }`}
              >
                {liveStatus.isOpen ? liveStatus.service : "Closed Now"}
              </span>
            </div>
          </div>

          <p className="mt-6 text-center text-white/30 font-sans text-[9px] uppercase tracking-[0.5em]">
            Wed — Mon | Closed Tuesdays
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
