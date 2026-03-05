"use client";

import React from "react";
import { Clock, Utensils, Check } from "lucide-react";
import Image from "next/image";

const BuffetSection = () => {
  return (
    <section
      id="buffet"
      className="py-32 px-6 bg-[#FAF9F6] text-primary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Content (Spans 6) */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                <Utensils size={12} className="text-accent" />
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                  The Lunch Gathering
                </span>
              </div>

              <h2 className="text-6xl md:text-7xl font-heading leading-[0.9] text-primary tracking-tighter">
                Our Buffet <br />
                <span className="text-accent italic font-serif lowercase tracking-normal">
                  The daily Gathering.
                </span>
              </h2>

              <p className="text-lg text-primary/70 leading-relaxed font-serif italic max-w-md">
                &quot;A curated journey through the mountain valleys, served
                fresh every afternoon for the Monroe community.&quot;
              </p>
            </div>

            {/* Buffet Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Signature Curries",
                "Fresh Tandoori Naan",
                "Himalayan Salads",
                "Vegetarian Delights",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-accent/20">
                    <Check size={10} className="text-primary" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* The Schedule Card - Elegant & Minimalist */}
            <div className="relative p-10 bg-white border border-primary/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-12 translate-x-12" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center text-accent space-x-2">
                    <Clock size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Buffet Hours
                    </span>
                  </div>
                  <p className="text-4xl font-serif italic text-primary">
                    11am — 2pm
                  </p>
                </div>

                <div className="h-px md:h-12 w-full md:w-px bg-primary/10" />

                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                    Wed — Mon
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    Closed Tuesdays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visuals (Spans 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative grid grid-cols-12 gap-4">
              {/* Main Large Image */}
              <div className="col-span-8 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/buffet/buffet-side-view.avif"
                  alt="Himalayan Buffet top view"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Overlapping Small Image */}
              <div className="col-span-6 col-start-7 -mt-32 relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-[12px] border-[#FAF9F6] group">
                <Image
                  src="/images/buffet/buffet_one.png"
                  alt="Buffet Selection"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Abstract Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuffetSection;
