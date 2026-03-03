"use client";

import React, { useMemo } from "react";
import { Sun, Moon, MapPin, ArrowRight, Circle } from "lucide-react";
import { useLiveStatus } from "../../hooks/useLiveStatus";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const liveStatus = useLiveStatus();

  const isWeekend = useMemo(() => {
    const day = new Date().getDay();
    return day === 5 || day === 6;
  }, []);

  const isLunch = liveStatus.service === "LUNCH BUFFET";
  const isDineIn = liveStatus.service === "DINE IN";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-primary">
      {/* Background - Soft & Atmospheric */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.avif"
          alt="Himalayan Cafe"
          fill
          priority
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
      </div>

      <div className="relative z-10 max-w-4xl w-full space-y-12 top-10">
        {/* 1. Status Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
            <Circle
              size={6}
              fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
              className={liveStatus.isOpen ? "animate-pulse" : ""}
            />
            <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
              {liveStatus.status}
            </span>
          </div>
        </div>

        {/* 2. Main Title */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-heading text-white tracking-tight">
            Himalayan{" "}
            <span className="text-accent italic font-serif lowercase tracking-tighter">
              Cafe
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-serif italic max-w-lg mx-auto">
            {liveStatus.isOpen
              ? `Currently serving ${liveStatus.service.toLowerCase()} in Monroe.`
              : `Join us next for ${liveStatus.nextEvent}.`}
          </p>
        </div>

        {/* 3. Primary Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="w-full sm:w-auto bg-accent text-primary px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl flex items-center justify-center group"
          >
            Explore Menu
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href="tel:+13186003439"
            className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all text-center"
          >
            Order Now
          </a>
        </div>

        {/* 4. Minimalist Schedule Bar */}
        <div className="pt-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {/* Lunch */}
            <div
              className={`flex flex-col items-center space-y-2 transition-opacity duration-700 ${isLunch ? "opacity-100" : "opacity-30"}`}
            >
              <div className="flex items-center space-x-2 text-accent">
                <Sun size={16} />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Lunch Buffet
                </span>
              </div>
              <span className="text-2xl font-serif text-white italic">
                11am — 2pm
              </span>
            </div>

            {/* Dinner */}
            <div
              className={`flex flex-col items-center space-x-2 transition-opacity duration-700 ${isDineIn ? "opacity-100" : "opacity-30"} border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0`}
            >
              <div className="flex items-center space-x-2 text-accent">
                <Moon size={16} />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Dinner Service
                </span>
              </div>
              <span className="text-2xl font-serif text-white italic">
                5pm — {isWeekend ? "10pm" : "9pm"}
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-4 text-white/30">
            <MapPin size={14} />
            <span className="text-[9px] font-black tracking-[0.4em] uppercase">
              Monroe, Louisiana
            </span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-[9px] font-black tracking-[0.4em] uppercase">
              Closed Tuesdays
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
