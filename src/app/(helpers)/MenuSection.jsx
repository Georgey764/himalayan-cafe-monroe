"use client";

import React from "react";
import { Star, ArrowRight, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURED_ITEMS = [
  {
    id: "01",
    name: "Kothey Momo",
    price: "$10.99",
    tag: "Signature Dish",
    image: "/images/menu/momo-dumplings/kothey-momo.jpg",
    desc: "Hand-pleated dumplings, pan-seared to a golden crisp. Served with our signature charred tomato and sesame chutney.",
  },
  {
    id: "02",
    name: "Chicken Thali",
    price: "$17.99",
    tag: "Chef's Special",
    image: "/images/menu/main-entrees/chicken-thali.jpg",
    desc: "A complete Himalayan feast. Slow-cooked chicken curry served with yellow dal, seasonal greens, and aromatic basmati.",
  },
];

export default function FeaturedShowcase() {
  return (
    <section className="py-32 px-6 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header: Editorial Style */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="flex items-center gap-3 text-accent/60">
            <div className="h-px w-8 bg-accent/30" />
            <Star size={14} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              The Selection
            </span>
            <div className="h-px w-8 bg-accent/30" />
          </div>
          <h2 className="font-heading text-6xl md:text-8xl text-white tracking-tighter uppercase">
            Chef&apos;s{" "}
            <span className="text-accent italic font-serif lowercase tracking-normal">
              Favorites
            </span>
          </h2>
        </div>

        {/* Featured Items: Alternating Layout */}
        <div className="space-y-32 md:space-y-48">
          {FEATURED_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-24`}
            >
              {/* Image Column */}
              <div className="relative w-full md:w-3/5 group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Large Background Number */}
                <span className="absolute -top-12 -left-12 text-[12rem] font-heading text-white/[0.03] select-none leading-none z-0">
                  {item.id}
                </span>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-2/5 space-y-8 relative z-10">
                <div className="space-y-4">
                  <span className="inline-block text-[10px] font-black text-accent uppercase tracking-[0.3em] px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                    {item.tag}
                  </span>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <h3 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <span className="font-serif text-2xl text-accent italic">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-serif text-lg md:text-xl text-white/50 leading-relaxed italic">
                    &quot;{item.desc}&quot;
                  </p>
                </div>

                <Link
                  href="/menu"
                  className="inline-flex items-center gap-4 text-white hover:text-accent transition-colors group/link"
                >
                  <div className="p-3 rounded-full border border-white/10 group-hover/link:border-accent transition-colors">
                    <Utensils size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    View in Menu
                  </span>
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-2 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-col items-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] mb-10">
            Curated Daily by our Chefs
          </p>
          <Link
            href="/menu"
            className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/10 hover:border-accent transition-colors"
          >
            <span className="relative z-10 text-white group-hover:text-primary font-black text-[10px] uppercase tracking-[0.4em] transition-colors">
              Full Culinary Gallery
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
