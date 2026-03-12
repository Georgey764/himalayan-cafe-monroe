"use client";

import React, { useState } from "react";
import {
  Plus,
  Minus,
  ChevronDown,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuListing({
  cart,
  category,
  subGroups,
  updateQty,
  defaultOpen = false, // Use this instead of index
  index,
}) {
  // 1. Initialize Category open state based on the prop
  const [isCategoryOpen, setIsCategoryOpen] = useState(defaultOpen);

  // 2. Initialize the first sub-section as open only if the category itself is open
  const [openSections, setOpenSections] = useState(() => {
    const keys = Object.keys(subGroups);
    if (defaultOpen && keys.length > 0) {
      return { [keys[0]]: true };
    }
    return {};
  });

  const toggleSection = (subTitle) => {
    setOpenSections((prev) => ({
      ...prev,
      [subTitle]: !prev[subTitle],
    }));
  };

  const getItemQty = (id) => cart.find((i) => i.id === id)?.qty || 0;

  return (
    <div className="mb-10">
      {/* --- LEVEL 1: CATEGORY ACCORDION --- */}
      <button
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="cursor-pointer w-full flex items-center justify-between group py-8 px-2 border-b-2 border-white/5 transition-all"
      >
        <div className="flex flex-col items-start text-left">
          <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-2 opacity-60">
            Category {index + 1}
          </span>
          <div className="relative">
            <h2
              className={`font-heading text-6xl md:text-7xl uppercase tracking-tighter transition-all duration-500 ${
                isCategoryOpen
                  ? "text-white"
                  : "text-white/20 group-hover:text-white/40"
              }`}
            >
              {category}
            </h2>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isCategoryOpen ? 0 : -90 }}
          className={isCategoryOpen ? "text-accent" : "text-white/10"}
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isCategoryOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-16 space-y-6">
              {Object.entries(subGroups).map(([subTitle, items]) => {
                const isSubOpen = openSections[subTitle];

                return (
                  <div
                    key={subTitle}
                    className=" bg-white/[0.02] rounded-3xl overflow-hidden border border-white/5"
                  >
                    {/* --- LEVEL 2: SUB-GROUP --- */}
                    <button
                      onClick={() => toggleSection(subTitle)}
                      className={`cursor-pointer w-full flex items-center justify-between p-6 transition-all ${
                        isSubOpen ? "bg-white/[0.03]" : "hover:bg-white/[0.01]"
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <div
                          className={`p-3 rounded-xl transition-all duration-500 ${
                            isSubOpen
                              ? "bg-accent text-primary"
                              : "bg-white/5 text-white/20"
                          }`}
                        >
                          <UtensilsCrossed size={20} />
                        </div>
                        <div className="text-left">
                          <h3
                            className={`font-serif italic text-2xl transition-colors ${
                              isSubOpen ? "text-white" : "text-white/40"
                            }`}
                          >
                            {subTitle}
                          </h3>
                          <p className="text-[10px] uppercase tracking-widest text-accent font-bold mt-1">
                            {items.length} Curated Dishes
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center gap-4 ${isSubOpen ? "text-accent" : "text-white/10"}`}
                      >
                        <span className="hidden md:block text-[10px] font-black uppercase tracking-widest">
                          {isSubOpen ? "Close Section" : "View Items"}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-500 ${isSubOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isSubOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                            {items.map((item) => (
                              <article
                                key={item.id}
                                className="group relative flex gap-6 p-5 bg-midnight/40 border border-white/5 rounded-2xl hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-500"
                              >
                                <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-2xl bg-black shrink-0 shadow-2xl">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                  <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-heading text-xl text-white uppercase tracking-tight group-hover:text-accent transition-colors">
                                      {item.name}
                                    </h4>
                                    <span className="text-accent font-serif italic text-xl">
                                      ${item.price.toFixed(2)}
                                    </span>
                                  </div>

                                  <p className="font-serif italic text-sm text-white/40 line-clamp-2 leading-snug mb-5">
                                    {item.desc}
                                  </p>

                                  <div className="flex justify-start">
                                    {getItemQty(item.id) === 0 ? (
                                      <button
                                        onClick={() => updateQty(item, 1)}
                                        className="flex items-center gap-3 px-8 py-2.5 rounded-full bg-accent text-primary text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg active:scale-95"
                                      >
                                        <Plus size={14} strokeWidth={3} />
                                        Add to Cart
                                      </button>
                                    ) : (
                                      <div className="flex items-center bg-white text-primary rounded-full shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
                                        <button
                                          onClick={() => updateQty(item, -1)}
                                          className="px-4 py-2 hover:bg-accent transition-colors"
                                        >
                                          <Minus size={14} strokeWidth={3} />
                                        </button>
                                        <span className="w-10 text-center text-sm font-black border-x border-primary/10">
                                          {getItemQty(item.id)}
                                        </span>
                                        <button
                                          onClick={() => updateQty(item, 1)}
                                          className="px-4 py-2 hover:bg-accent transition-colors"
                                        >
                                          <Plus size={14} strokeWidth={3} />
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
