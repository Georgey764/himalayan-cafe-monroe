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
  defaultOpen = false,
  index,
}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(defaultOpen);

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
    <div className="mb-4 md:mb-10 w-full">
      {/* --- LEVEL 1: CATEGORY --- */}
      <button
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="cursor-pointer w-full flex items-center justify-between py-5 px-4 border-b border-white/10 active:bg-white/5 transition-colors text-left"
      >
        <div className="min-w-0 flex-1">
          <span className="text-accent text-[10px] font-black tracking-widest uppercase block mb-1">
            Section {index !== undefined ? index + 1 : ""}
          </span>
          <h2
            className={`font-heading uppercase tracking-tighter leading-none break-words ${
              isCategoryOpen
                ? "text-3xl sm:text-5xl md:text-5xl text-white"
                : "text-2xl sm:text-4xl text-white/30"
            }`}
          >
            {category}
          </h2>
        </div>
        <ChevronDown
          size={24}
          className={`ml-4 shrink-0 transition-transform duration-300 ${isCategoryOpen ? "rotate-0 text-accent" : "-rotate-90 text-white/20"}`}
        />
      </button>

      <AnimatePresence>
        {isCategoryOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-black/20"
          >
            <div className="p-3 sm:p-6 space-y-4">
              {Object.entries(subGroups).map(([subTitle, items]) => {
                const isSubOpen = openSections[subTitle];

                return (
                  <div
                    key={subTitle}
                    className="border border-white/5 rounded-2xl overflow-hidden"
                  >
                    {/* --- LEVEL 2: SUB-GROUP --- */}
                    <button
                      onClick={() => toggleSection(subTitle)}
                      className="cursor-pointer w-full flex items-center justify-between p-4 bg-white/[0.03] active:bg-white/[0.08]"
                    >
                      <div className="flex items-center gap-3">
                        <UtensilsCrossed
                          size={16}
                          className={
                            isSubOpen ? "text-accent" : "text-white/20"
                          }
                        />
                        <h3
                          className={`font-serif italic text-lg sm:text-xl ${isSubOpen ? "text-white" : "text-white/40"}`}
                        >
                          {subTitle}
                        </h3>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isSubOpen ? "rotate-180 text-accent" : "text-white/10"}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isSubOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                            {items.map((item) => (
                              <article
                                key={item.id}
                                className="flex flex-col sm:flex-row gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl transition-all"
                              >
                                {/* Image Container - Full width on mobile, square on desktop */}
                                <div className="relative w-full sm:w-28 sm:h-28 h-48 rounded-lg overflow-hidden shrink-0">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-between min-w-0">
                                  <div className="mb-4">
                                    <div className="flex justify-between items-start gap-2 mb-1">
                                      <h4 className="font-heading text-lg text-white uppercase tracking-wide leading-tight">
                                        {item.name}
                                      </h4>
                                      <span className="text-accent font-serif italic text-lg">
                                        ${item.price.toFixed(2)}
                                      </span>
                                    </div>
                                    <p className="text-sm text-white/40 font-serif italic leading-snug">
                                      {item.desc}
                                    </p>
                                  </div>

                                  {/* Action Button - Full width on mobile */}
                                  <div className="mt-auto">
                                    {getItemQty(item.id) === 0 ? (
                                      <button
                                        onClick={() => updateQty(item, 1)}
                                        className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-primary text-xs font-black uppercase tracking-widest active:scale-95 transition-transform"
                                      >
                                        <Plus size={14} strokeWidth={3} />
                                        Add to Order
                                      </button>
                                    ) : (
                                      <div className="flex items-center justify-between sm:justify-start bg-white text-primary rounded-full overflow-hidden w-full sm:w-fit">
                                        <button
                                          onClick={() => updateQty(item, -1)}
                                          className="cursor-pointer p-3 hover:bg-accent transition-colors"
                                        >
                                          <Minus size={16} strokeWidth={3} />
                                        </button>
                                        <span className="px-4 font-black text-sm">
                                          {getItemQty(item.id)}
                                        </span>
                                        <button
                                          onClick={() => updateQty(item, 1)}
                                          className="cursor-pointer p-3 hover:bg-accent transition-colors"
                                        >
                                          <Plus size={16} strokeWidth={3} />
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
