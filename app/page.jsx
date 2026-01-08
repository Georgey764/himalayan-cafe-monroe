"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Menu as MenuIcon,
  X,
  ArrowRight,
  Utensils,
  Leaf,
  Instagram,
  Facebook,
  Clock,
  Circle,
  ChefHat,
  ChevronRight,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [liveStatus, setLiveStatus] = useState({
    isOpen: false,
    status: "Checking...",
    service: "",
    nextEvent: "",
  });

  const colors = {
    bg: "#6d101e", // Primary Burgundy
    gold: "#d4af37", // Primary Gold
    white: "#ffffff",
    slate: "#121212", // Deepest Black
    cream: "#fdf5e6", // Rich Cream
    accent: "#4a0b14", // Shadow Burgundy
  };

  // Enhanced Status Logic
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 (Sun) to 6 (Sat)
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      const formatNextTime = (h) => {
        return h > 12 ? `${h - 12}:00 PM` : `${h}:00 AM`;
      };

      // Closed on Tuesday (2)
      if (day === 2) {
        setLiveStatus({
          isOpen: false,
          status: "CLOSED TODAY",
          service: "We Rest on Tuesdays",
          nextEvent: "Opening Wednesday at 11:00 AM",
        });
        return;
      }

      // Lunch Slot: 11:00 AM - 2:00 PM (Buffet & Dining)
      if (currentTime >= 11 && currentTime < 14) {
        setLiveStatus({
          isOpen: true,
          status: "OPEN NOW",
          service: "LUNCH BUFFET + DINE-IN",
          nextEvent: "Buffet ends at 2:00 PM",
        });
        return;
      }

      // Dinner Slot: 5:00 PM - 9:00 PM (10:00 PM on Fri/Sat)
      let closeTime = 21;
      if (day === 5 || day === 6) closeTime = 22;

      if (currentTime >= 17 && currentTime < closeTime) {
        setLiveStatus({
          isOpen: true,
          status: "OPEN NOW",
          service: "DINING ONLY (No Buffet)",
          nextEvent: `Kitchen closes at ${formatNextTime(closeTime)}`,
        });
        return;
      }

      // If between Lunch and Dinner
      if (currentTime >= 14 && currentTime < 17) {
        setLiveStatus({
          isOpen: false,
          status: "CLOSED NOW",
          service: "Preparing for Dinner",
          nextEvent: "Dinner Service starts at 5:00 PM",
        });
        return;
      }

      // Late night / Early morning
      let nextDayStatus = "Opening today at 11:00 AM";
      if (currentTime >= closeTime) {
        const nextDay = (day + 1) % 7;
        nextDayStatus =
          nextDay === 2
            ? "Opening Wednesday at 11:00 AM"
            : "Opening tomorrow at 11:00 AM";
      }

      setLiveStatus({
        isOpen: false,
        status: "CLOSED NOW",
        service: "See You Soon",
        nextEvent: nextDayStatus,
      });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      category: "Indian Classics",
      items: [
        {
          name: "Butter Chicken",
          price: "18",
          desc: "Creamy tomato gravy with tender clay-oven chicken.",
        },
        {
          name: "Paneer Tikka Masala",
          price: "16",
          desc: "Grilled cottage cheese in a vibrant spiced sauce.",
        },
        {
          name: "Garlic Naan",
          price: "4",
          desc: "Freshly baked in the tandoor with garlic infusion.",
        },
      ],
    },
    {
      category: "Nepali Soul Food",
      items: [
        {
          name: "Steamed Momos",
          price: "14",
          desc: "Hand-folded dumplings with mountain spices.",
        },
        {
          name: "Thakali Thali",
          price: "32",
          desc: "Traditional platter of lentils, pickles, and rice.",
        },
      ],
    },
  ];

  const fontTitle = { fontFamily: "'Marcellus', serif" };
  const fontSub = { fontFamily: "'EB Garamond', serif" };
  const fontBody = { fontFamily: "'Raleway', sans-serif" };

  return (
    <div
      className="min-h-screen text-white selection:bg-gold selection:text-white overflow-x-hidden"
      style={{ backgroundColor: colors.bg, ...fontBody }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=EB+Garamond:ital,wght@0,400..800;1,100..800&family=Raleway:wght@100..900&display=swap');
          html { scroll-behavior: smooth; }
          .grain::before {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: url("https://grainy-gradients.vercel.app/noise.svg");
            opacity: 0.04;
            pointer-events: none;
            z-index: 100;
          }
        `}
      </style>

      <div className="grain" />

      {/* Consistent Navigation with Dynamic Background */}
      <nav
        className={`fixed w-full z-[60] transition-all duration-500 border-b ${
          scrolled
            ? "py-3 shadow-2xl border-gold/20 bg-[#121212]"
            : "py-6 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <h1
              className="text-xl tracking-[0.4em] leading-none"
              style={{ ...fontTitle, color: colors.gold }}
            >
              HIMALAYAN
            </h1>
            <h1
              className="text-xl tracking-[0.4em] mt-1"
              style={{ ...fontTitle }}
            >
              CAFE
            </h1>
          </div>

          <div className="hidden lg:flex items-center space-x-10 text-[10px] tracking-[0.2em] uppercase font-bold">
            <a href="#menu" className="hover:text-gold transition-colors">
              The Menu
            </a>
            <a href="#buffet" className="hover:text-gold transition-colors">
              Buffet Info
            </a>
            <a href="#location" className="hover:text-gold transition-colors">
              Location
            </a>
            <a
              href="tel:+13185550199"
              className="bg-gold text-white px-6 py-2 hover:bg-white hover:text-slate transition-all duration-300"
            >
              Call Now
            </a>
          </div>

          <button
            className="lg:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* High-Scannability Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Visual Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate/80 via-transparent to-[#6d101e] z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
            alt="Authentic Spices"
            className="w-full h-full object-cover scale-105 opacity-40"
          />
        </div>

        {/* Real-Time Status Card */}
        <div className="relative z-20 w-full max-w-4xl px-6 text-center">
          <div className="mb-4 inline-flex items-center space-x-2 bg-slate/60 backdrop-blur-xl px-4 py-2 border border-white/10 rounded-full">
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">
              Monroe, Louisiana
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div
              className={`absolute top-0 left-0 w-full h-2 ${
                liveStatus.isOpen ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>

            <div className="flex flex-col items-center mb-6">
              <div
                className={`flex items-center space-x-3 mb-2 px-6 py-1 rounded-full ${
                  liveStatus.isOpen
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                <Circle
                  size={10}
                  fill="currentColor"
                  className={liveStatus.isOpen ? "animate-pulse" : ""}
                />
                <span className="text-xl md:text-2xl font-black tracking-[0.3em] uppercase">
                  {liveStatus.status}
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-2"
                style={fontTitle}
              >
                {liveStatus.service}
              </h2>
              <p
                className="text-lg md:text-2xl italic opacity-80 text-gold"
                style={fontSub}
              >
                {liveStatus.nextEvent}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="tel:+13185550199"
                className="bg-gold text-white px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-slate transition-all flex items-center justify-center"
              >
                <Phone size={16} className="mr-3" /> Call to Order
              </a>
              <a
                href="#location"
                className="border border-white/20 px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs hover:bg-gold hover:border-gold transition-all flex items-center justify-center"
              >
                Get Directions <MapPin size={16} className="ml-3" />
              </a>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4">
              Serving Three Traditions
            </p>
            <h3
              className="text-2xl md:text-4xl tracking-widest opacity-80"
              style={fontTitle}
            >
              INDIAN • NEPALI • INDO-CHINESE
            </h3>
          </div>
        </div>
      </section>

      {/* Buffet Clarity Section */}
      <section
        id="buffet"
        className="py-24 px-6 bg-cream text-slate relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] font-black text-gold">
                The Buffet Experience
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl" style={fontTitle}>
              Authentic Himalayan <br />
              <span className="text-gold italic" style={fontSub}>
                Lunch Gathering
              </span>
            </h2>
            <p className="text-lg opacity-70 leading-relaxed" style={fontBody}>
              Our daily buffet is a curated journey through the mountain
              valleys. We rotate our selections daily to ensure you experience
              the full breadth of South Asian flavors.
            </p>
            <div className="bg-white p-8 border-l-4 border-gold shadow-xl">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 flex items-center">
                <Clock className="text-gold mr-3" size={18} /> Daily Buffet
                Hours
              </h4>
              <p className="text-2xl italic mb-2" style={fontSub}>
                11:00 AM — 2:00 PM
              </p>
              <p className="text-sm opacity-60">Wed, Thu, Fri, Sat, Sun, Mon</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden shadow-2xl translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b547b4de5?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover"
                alt="Buffet Item"
              />
            </div>
            <div className="aspect-square overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover"
                alt="Buffet Item"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu & Cuisine Trinities */}
      <section id="menu" className="py-32 px-6 bg-slate">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl mb-6" style={fontTitle}>
              Essential <span className="text-gold">Plates</span>
            </h2>
            <p className="text-sm tracking-[0.3em] uppercase opacity-40">
              Available for All-Day Dining
            </p>
          </div>

          <div className="space-y-24">
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center mb-12">
                  <span className="text-gold text-sm tracking-[0.5em] uppercase font-bold mr-8">{`0${
                    idx + 1
                  }`}</span>
                  <h3
                    className="text-2xl tracking-[0.3em] uppercase"
                    style={fontTitle}
                  >
                    {section.category}
                  </h3>
                  <div className="flex-1 h-[1px] bg-white/5 ml-8"></div>
                </div>
                <div className="grid gap-y-12">
                  {section.items.map((item, i) => (
                    <div key={i} className="group relative">
                      <div className="flex justify-between items-end mb-4">
                        <div className="space-y-1">
                          <h4
                            className="text-xl md:text-2xl group-hover:text-gold transition-all"
                            style={fontTitle}
                          >
                            {item.name}
                          </h4>
                          <p
                            className="text-sm opacity-50 italic"
                            style={fontSub}
                          >
                            {item.desc}
                          </p>
                        </div>
                        <span className="text-xl text-gold" style={fontTitle}>
                          ${item.price}
                        </span>
                      </div>
                      <div className="h-[1px] w-full bg-white/5 group-hover:bg-gold/30 transition-all"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Hours & Contact - Fixed Background to Rich Cream */}
      <section id="location" className="py-32 px-6 bg-[#fdf5e6] text-slate">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl" style={fontTitle}>
              Plan Your <br />
              <span className="text-gold italic" style={fontSub}>
                Visit
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-gold">
                  Location
                </h4>
                <p
                  className="text-lg leading-relaxed font-semibold"
                  style={fontBody}
                >
                  Monroe, Louisiana
                  <br />
                  <span className="text-sm opacity-60 font-medium tracking-wide">
                    123 Everest View Blvd
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center text-gold font-bold text-xs uppercase tracking-widest group border-b border-gold/20 pb-1"
                >
                  Open in Maps{" "}
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform ml-2"
                  />
                </a>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-gold">
                  Contact
                </h4>
                <p
                  className="text-lg leading-relaxed font-bold"
                  style={fontBody}
                >
                  +1 (318) 555-0199
                </p>
                <p className="text-sm opacity-60">Direct Line for Inquiries</p>
              </div>
            </div>
          </div>

          <div className="bg-[#121212] text-white p-10 md:p-16 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h3 className="text-3xl mb-12 flex items-center" style={fontTitle}>
              <Clock className="mr-4 text-gold" /> Service Hours
            </h3>

            <div className="space-y-8">
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <span className="font-bold tracking-widest uppercase text-xs">
                  Wed — Mon
                </span>
                <div className="text-right">
                  <p className="text-gold italic text-lg" style={fontSub}>
                    Lunch: 11:00 AM — 2:00 PM
                  </p>
                  <p className="opacity-70 italic text-lg" style={fontSub}>
                    Dinner: 5:00 PM — 9:00 PM*
                  </p>
                  <p className="text-[10px] opacity-40 mt-2">
                    *Fri & Sat close at 10:00 PM
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center text-red-400">
                <span className="font-bold tracking-widest uppercase text-xs">
                  Tuesday
                </span>
                <span className="italic text-lg" style={fontSub}>
                  Closed for Rest
                </span>
              </div>
            </div>

            <div className="mt-16 text-center border border-white/10 p-6">
              <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-2">
                Current Status
              </p>
              <p className="text-2xl font-bold tracking-widest text-gold uppercase">
                {liveStatus.status}: {liveStatus.service}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 bg-[#6d101e] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="mb-12">
            <h2
              className="text-3xl tracking-[0.6em] mb-2"
              style={{ ...fontTitle, color: colors.gold }}
            >
              HIMALAYAN CAFE
            </h2>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">
              The Spirit of Monroe
            </p>
          </div>
          <div className="flex justify-center space-x-12 mb-12">
            <Instagram
              size={20}
              className="hover:text-gold transition-colors cursor-pointer"
            />
            <Facebook
              size={20}
              className="hover:text-gold transition-colors cursor-pointer"
            />
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-20">
            © {new Date().getFullYear()} Heritage Dining • Handcrafted in
            Louisiana
          </p>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[70] bg-slate flex flex-col items-center justify-center space-y-12 animate-in fade-in duration-500">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-10 right-10 text-gold"
          >
            <X size={40} />
          </button>
          <a
            href="#menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl tracking-widest uppercase"
            style={fontTitle}
          >
            Menu
          </a>
          <a
            href="#buffet"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl tracking-widest uppercase"
            style={fontTitle}
          >
            Buffet
          </a>
          <a
            href="#location"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl tracking-widest uppercase"
            style={fontTitle}
          >
            Visit
          </a>
          <a
            href="tel:+13185550199"
            className="bg-gold text-white px-12 py-4 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Call Us
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
