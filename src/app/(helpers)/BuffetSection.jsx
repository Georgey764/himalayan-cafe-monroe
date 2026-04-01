"use client";

import React, { useState, useMemo } from "react";
import {
  Clock,
  Utensils,
  Check,
  X,
  Calendar,
  ArrowRight,
  Sparkles,
  RefreshCcw,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BUFFET_DATA = {
  weekday: {
    title: "The Weekday Gathering",
    days: "Monday — Thursday (Except Tuesday)",
    regulars: [
      { name: "Butter Chicken", cat: "main-entrees" },
      { name: "Chicken Tandoori", cat: "main-entrees" },
      { name: "Chicken Curry", cat: "main-entrees" },
      { name: "Chicken Chilli", cat: "main-entrees" },
      { name: "Veg Noodles", cat: "main-entrees" },
      { name: "Mix Veg Pakoda", cat: "appetizers" },
      { name: "Aaloo Baji", cat: "appetizers" },
      { name: "Butter Naan", cat: "sides" },
      { name: "Rice Pudding", cat: "desserts" },
      { name: "Gulab Jamun", cat: "desserts" },
    ],
    rotating:
      "Creamy Delights, Seasonal Veggie Curries, and Crispy Vegetable Frys.",
    rotatingDesc:
      "Our kitchen prepares a rotating selection of slow-simmered vegetable specialties that change based on the freshest seasonal produce.",
  },
  weekend: {
    title: "The Weekend Feast",
    days: "Friday — Sunday",
    regulars: [
      { name: "Goat Curry", cat: "main-entrees" },
      { name: "Paneer Tikka Masala", cat: "main-entrees" },
      { name: "Boneless Chicken Biryani", cat: "main-entrees" },
      { name: "Mango Chicken", cat: "main-entrees" },
      { name: "Chicken Roast Fry", cat: "main-entrees" },
      { name: "Chicken Lollipop", cat: "appetizers" },
      { name: "Masala Dosa", cat: "appetizers" },
      { name: "Gobi Manchurian", cat: "appetizers" },
      { name: "Butter Naan", cat: "sides" },
      { name: "Bread Pudding", cat: "desserts" },
    ],
    rotating:
      "Okra, Eggplant, Aloo & Cauliflower (Frys & Curries), plus Long Squash Specialties.",
    rotatingDesc:
      "Our weekend 'Change Menu' features chef-selected preparations of farm-fresh Okra and Eggplant served as both crisp dry-frys and rich curries.",
  },
};

const BuffetSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Logic: Monday(1)-Thursday(4) = Weekday | Fri(5), Sat(6), Sun(0) = Weekend
  const menuConfig = useMemo(() => {
    const day = new Date().getDay();
    const isWeekend = [0, 5, 6].includes(day);
    return isWeekend ? BUFFET_DATA.weekend : BUFFET_DATA.weekday;
  }, []);

  const formatImgPath = (item) => {
    const fileName = item.name.toLowerCase().replace(/ /g, "-");
    return `/images/menu/${item.cat}/${fileName}.jpg`;
  };

  return (
    <section
      id="buffet"
      className="py-20 md:py-32 px-4 md:px-6 bg-[#FAF9F6] text-primary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* --- LEFT: MAIN DISPLAY --- */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-3 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                <Utensils className="w-3.5 h-3.5 text-accent" />
                <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                  Current Selection
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading leading-[0.9] text-primary tracking-tighter uppercase">
                {menuConfig.title}
              </h2>
              <p className="text-accent font-serif italic text-xl md:text-2xl">
                {menuConfig.days} • 11:00am — 2:00pm
              </p>
            </div>

            {/* THE REGULAR LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
              {menuConfig.regulars.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b border-primary/5 pb-2 group"
                >
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <Check className="w-3 h-3 text-accent opacity-40" />
                </div>
              ))}
            </div>

            {/* ROTATING CALLOUT */}
            <div className="p-6 md:p-8 bg-primary text-white rounded-[2rem] shadow-xl relative overflow-hidden">
              <Sparkles className="absolute top-4 right-4 w-12 h-12 text-accent/10" />
              <div className="relative z-10 space-y-3">
                <h4 className="text-accent font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                  <RefreshCcw className="w-3 h-3" /> Rotating Daily Specials
                </h4>
                <p className="text-lg md:text-xl font-serif italic leading-snug">
                  &ldquo;{menuConfig.rotating}&rdquo;
                </p>
                <p className="text-white/40 text-[10px] md:text-xs leading-relaxed max-w-lg">
                  {menuConfig.rotatingDesc}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-accent transition-colors cursor-pointer"
            >
              Explore Full Weekly Schedule{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* --- RIGHT: FOOD VISUALS --- */}
          <div className="lg:col-span-5">
            <div className="relative space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-[10px] border-white"
              >
                <Image
                  src={formatImgPath(menuConfig.regulars[0])}
                  alt="Buffet Special"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video w-[120%] -ml-[10%] rounded-[2rem] overflow-hidden shadow-xl z-10 brightness-90"
              >
                <Image
                  src={formatImgPath(
                    menuConfig.regulars[menuConfig.regulars.length - 1],
                  )}
                  alt="Dessert Selection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- WEEKLY MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#FAF9F6] w-full max-w-5xl max-h-[85vh] rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-20 p-2 bg-primary text-white rounded-full hover:bg-accent transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-y-auto p-8 md:p-16">
                <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-6xl font-heading text-primary uppercase tracking-tighter">
                    Full Weekly Menu
                  </h3>
                  <p className="text-accent font-serif italic text-sm mt-2">
                    Closed Tuesdays
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                  {/* MODAL: WEEKDAY SECTION */}
                  <div className="space-y-8">
                    <div className="border-b border-primary/10 pb-4">
                      <h5 className="font-heading text-3xl text-primary">
                        Mon — Thu
                      </h5>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                        Weekday Gathering
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {BUFFET_DATA.weekday.regulars.map((i) => (
                        <li
                          key={i.name}
                          className="text-[10px] font-bold uppercase tracking-widest text-primary/40 flex items-center gap-3"
                        >
                          <div className="w-1 h-1 bg-accent rounded-full shrink-0" />{" "}
                          {i.name}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm">
                      <p className="text-accent font-black text-[9px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <RefreshCcw className="w-3 h-3" /> Rotating Specials
                      </p>
                      <p className="text-xs font-serif italic text-primary/70">
                        {BUFFET_DATA.weekday.rotating}
                      </p>
                    </div>
                  </div>

                  {/* MODAL: WEEKEND SECTION */}
                  <div className="space-y-8">
                    <div className="border-b border-primary/10 pb-4">
                      <h5 className="font-heading text-3xl text-primary">
                        Fri — Sun
                      </h5>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                        The Weekend Feast
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {BUFFET_DATA.weekend.regulars.map((i) => (
                        <li
                          key={i.name}
                          className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-3"
                        >
                          <Check className="w-3 h-3 text-accent shrink-0" />{" "}
                          {i.name}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-primary text-white p-6 rounded-2xl shadow-lg">
                      <p className="text-accent font-black text-[9px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <RefreshCcw className="w-3 h-3" /> Weekend Changes
                      </p>
                      <p className="text-xs font-serif italic text-white/80">
                        {BUFFET_DATA.weekend.rotating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BuffetSection;
