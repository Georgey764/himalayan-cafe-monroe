"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, MoveRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left: The Visual Story (Spans 6) */}
          <div className="lg:col-span-6 relative">
            {/* Main Image */}
            <div className="relative z-10 w-4/5 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
              <Image
                src="/images/interior.webp"
                alt="Himalayan Cafe Interior"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Secondary Overlapping Image (The Food/Detail) */}
            <div className="absolute -bottom-12 -right-4 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-primary z-20 hidden md:block group/small">
              <Image
                src="/images/menu/momo-dumplings/chicken-steam-momo.jpg"
                alt="Hand-folded Momos"
                fill
                className="object-cover transition-transform duration-700 group-hover/small:scale-110"
              />
            </div>

            {/* Decorative Heritage Badge */}
            <div className="absolute top-12 -left-8 z-20 bg-accent p-6 rounded-full shadow-xl -rotate-12 hidden lg:flex flex-col items-center justify-center w-32 h-32">
              <span className="text-primary font-heading text-2xl leading-none">
                10+
              </span>
              <span className="text-primary font-sans text-[8px] font-black uppercase tracking-tighter text-center">
                Years in
                <br />
                Monroe
              </span>
            </div>
          </div>

          {/* Right: The Narrative (Spans 6) */}
          <div className="lg:col-span-6 lg:pl-12 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent/60">
                <div className="h-px w-8 bg-accent/30" />
                <span className="font-sans tracking-[0.4em] uppercase text-[10px] font-black">
                  Our Heritage
                </span>
              </div>

              <h2 className="font-heading text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter">
                From the Peaks <br />
                <span className="text-accent italic font-serif lowercase tracking-normal">
                  to the Bayou.
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <Quote
                  className="absolute -top-6 -left-8 text-accent/10"
                  size={60}
                />
                <p className="font-serif text-xl md:text-2xl text-white/80 leading-relaxed italic relative z-10">
                  Located on Desiard Street, Himalayan Cafe is more than a
                  restaurant—it is a cultural bridge.
                </p>
              </div>

              <div className="space-y-6 text-white/50 font-sans text-sm md:text-base leading-loose max-w-xl">
                <p>
                  Since 2014, we have brought the aromatic warmth of Nepal and
                  the bold traditions of India to the heart of{" "}
                  <strong>Monroe, Louisiana</strong>. What started as a dream to
                  share our family recipes has become a staple for the ULM
                  community and local food explorers alike.
                </p>
                <p>
                  Every spice is hand-selected, every Momo is hand-folded, and
                  every curry is simmered with the same patience practiced in
                  the high altitudes of our homeland.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent"
              >
                <span className="relative">
                  Discover Our Full Story
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
                </span>
                <div className="p-3 rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-primary transition-all">
                  <MoveRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
