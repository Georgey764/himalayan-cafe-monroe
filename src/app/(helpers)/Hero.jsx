"use client";

import React, { useMemo, useState } from "react";
import {
  Sun,
  Moon,
  MapPin,
  ArrowRight,
  Circle,
  Phone,
  Globe,
  X,
} from "lucide-react";
import { useLiveStatus } from "../../hooks/useLiveStatus";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const liveStatus = useLiveStatus();

  const isWeekend = useMemo(() => {
    const day = new Date().getDay();
    return day === 5 || day === 6;
  }, []);

  const isLunch = liveStatus.service === "LUNCH BUFFET";
  const isDineIn = liveStatus.service === "DINE IN";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-primary">
      {/* Background - Soft & Atmospheric */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/peak.jpg"
          alt="Mountain Peak in Nepal"
          fill
          priority
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
      </div>

      {/* Main Content Container - Respects Top Header Padding */}
      <div className="relative z-10 max-w-4xl w-full space-y-10 md:space-y-12 pt-32 md:pt-40 pb-16 flex flex-col items-center text-center">
        {/* 1. Status Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
            <Circle
              fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
              className={`w-1.5 h-1.5 ${liveStatus.isOpen ? "animate-pulse" : ""}`}
            />
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-accent uppercase">
              {liveStatus.status}
            </span>
          </div>
        </div>

        {/* 2. Main Title */}
        <div className="space-y-4 w-full">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-heading text-white tracking-tight leading-[0.9]">
            Himalayan{" "}
            <span className="text-accent italic font-serif lowercase tracking-tighter">
              Cafe
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/50 font-serif italic max-w-sm md:max-w-lg mx-auto">
            {liveStatus.isOpen
              ? `Currently serving ${liveStatus.service.toLowerCase()} in Monroe.`
              : `Join us next for ${liveStatus.nextEvent}.`}
          </p>
        </div>

        {/* 3. Primary Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none">
          <Link
            href="/menu"
            className="w-full sm:w-auto bg-accent text-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl flex items-center justify-center group"
          >
            Explore Menu
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all text-center cursor-pointer"
          >
            Order Now
          </button>
        </div>

        {/* 4. Minimalist Schedule Bar */}
        <div className="pt-10 md:pt-12 border-t border-white/5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {/* Lunch */}
            <div
              className={`flex flex-col items-center space-y-2 transition-opacity duration-700 ${isLunch ? "opacity-100" : "opacity-30"}`}
            >
              <div className="flex items-center space-x-2 text-accent">
                <Sun className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                  Lunch Buffet
                </span>
              </div>
              <span className="text-xl md:text-2xl font-serif text-white italic">
                11am — 2pm
              </span>
            </div>

            {/* Dinner */}
            <div
              className={`flex flex-col items-center space-y-2 transition-opacity duration-700 ${isDineIn ? "opacity-100" : "opacity-30"} border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0`}
            >
              <div className="flex items-center space-x-2 text-accent">
                <Moon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                  Dinner Service
                </span>
              </div>
              <span className="text-xl md:text-2xl font-serif text-white italic">
                5pm — {isWeekend ? "10pm" : "9pm"}
              </span>
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-white/30">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase whitespace-nowrap">
                Monroe, Louisiana
              </span>
            </div>
            <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase whitespace-nowrap">
              Closed Tuesdays
            </span>
          </div>
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-surface border border-accent/20 max-w-sm md:max-w-md w-full p-6 md:p-10 rounded-[2rem] shadow-2xl space-y-8 animate-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-accent hover:text-white transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3 pt-4">
              <h3 className="text-2xl md:text-3xl font-heading text-white leading-tight">
                How would you like <br className="sm:hidden" /> to order?
              </h3>
              <p className="text-white/50 text-sm md:text-base font-serif italic">
                Choose your preferred method below.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <a
                href="https://order.online/store/-1144213/?delivery=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnEUoTwYsChg9yzPIbLoRJ6P4x5_Di-RGzWeSIbsTyVdnUYJisXvdlEW04vpdX0rmNMmlHdsd2OWLaP3crtG-ngiNcjKvA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-accent text-primary p-5 md:p-6 rounded-2xl hover:bg-white transition-all group active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-left">
                    <span className="block font-black text-[10px] md:text-xs uppercase tracking-widest">
                      Order Online
                    </span>
                    <span className="text-[9px] md:text-[10px] opacity-70">
                      Pickup or Delivery
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+13186003439"
                className="flex items-center justify-between border border-white/10 text-white p-5 md:p-6 rounded-2xl hover:bg-white/5 transition-all group active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-2 md:p-3 rounded-full">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-left">
                    <span className="block font-black text-[10px] md:text-xs uppercase tracking-widest">
                      Call to Order
                    </span>
                    <span className="text-[9px] md:text-[10px] opacity-70">
                      (318) 600-3439
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
