"use client";

import React, { useState, useMemo } from "react";
import { Leaf, Wheat, ShoppingBag, Star, Ban } from "lucide-react";
import MenuListing from "@/components/MenuListing";
import CartDrawer from "./(helper)/CartDrawer";
import FilterToggle from "./(helper)/FilterToggle";
import { MENU_DATA } from "@/data/menuData";

export default function HimalayanMenu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filters, setFilters] = useState({
    vegan: false,
    gf: false,
    nutFree: false,
  });
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const updateQty = (item, delta) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        const newQty = existing.qty + delta;
        return newQty <= 0
          ? prev.filter((i) => i.id !== item.id)
          : prev.map((i) => (i.id === item.id ? { ...i, qty: newQty } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const nestedMenu = useMemo(() => {
    const filtered = MENU_DATA.filter((item) => {
      const matchesCat =
        activeCategory === "All" || item.category === activeCategory;
      return (
        matchesCat &&
        (!filters.vegan || item.isVegan) &&
        (!filters.gf || item.isGF) &&
        (!filters.nutFree || item.isNutFree)
      );
    });

    const groups = {};
    filtered.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = {};
      if (!groups[item.category][item.subCategory])
        groups[item.category][item.subCategory] = [];
      groups[item.category][item.subCategory].push(item);
    });
    return groups;
  }, [activeCategory, filters]);

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-primary text-parchment min-h-screen font-sans selection:bg-accent selection:text-primary">
      {/* Refined Header */}
      <header className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <Star
            className="mx-auto text-accent/40 animate-pulse"
            size={14}
            fill="currentColor"
          />
          <h1 className="font-heading text-6xl md:text-8xl text-white tracking-tighter uppercase leading-none">
            The{" "}
            <span className="text-accent italic font-serif lowercase tracking-normal">
              Menu
            </span>
          </h1>
          <p className="font-serif italic text-lg text-white/40 tracking-[0.2em] uppercase">
            Monroe, Louisiana
          </p>
        </div>
        <div className="font-mono px-12 pt-12 text-secondary">
          The menu displayed here is tentative and may not accurately reflect
          the final offerings, as the website is currently under refinement.
          Please refer to it only for a general idea of pricing.
        </div>
      </header>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[60px] md:top-[68px] z-40 bg-primary/80 backdrop-blur-2xl border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <nav className="flex items-center space-x-8 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              "All",
              "Appetizers",
              "Main Entrees",
              "Momo (Dumplings)",
              "Sides",
              "Desserts",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  scrollToTop();
                }}
                className={`text-[12px] font-black uppercase tracking-[0.3em] transition-all relative py-2 whitespace-nowrap ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-white/30 hover:text-white"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center text-12 space-x-3">
            <FilterToggle
              label="Vegan"
              active={filters.vegan}
              onClick={() => setFilters((f) => ({ ...f, vegan: !f.vegan }))}
              icon={<Leaf size={12} />}
            />
            <FilterToggle
              label="GF"
              active={filters.gf}
              onClick={() => setFilters((f) => ({ ...f, gf: !f.gf }))}
              icon={<Wheat size={12} />}
            />
            <FilterToggle
              label="Nut Free"
              active={filters.nutFree}
              onClick={() => setFilters((f) => ({ ...f, nutFree: !f.nutFree }))}
              icon={<Ban size={12} />}
            />
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {Object.entries(nestedMenu).length > 0 ? (
          Object.entries(nestedMenu).map(([category, subGroups]) => (
            <MenuListing
              key={category}
              cart={cart}
              category={category}
              subGroups={subGroups}
              updateQty={updateQty}
            />
          ))
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
            <p className="font-serif italic text-white/30">
              No items match your selected filters.
            </p>
          </div>
        )}
      </main>

      {/* Modern FAB */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-accent text-primary h-16 px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 hover:scale-105 active:scale-95 transition-all"
        >
          <div className="relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cart.reduce((a, b) => a + b.qty, 0)}
            </span>
          </div>
          <span className="font-bold text-xs uppercase tracking-widest">
            View Selection
          </span>
        </button>
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        subtotal={subtotal}
        updateQty={updateQty}
      />
    </div>
  );
}
