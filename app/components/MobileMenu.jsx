import React from "react";
import { X, Phone, MapPin, Circle, ArrowRight } from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const MobileMenu = ({ setIsMenuOpen }) => {
  const liveStatus = useLiveStatus();

  return (
    <div className="fixed inset-0 z-[100] bg-primary flex flex-col p-8 text-white animate-in fade-in duration-300">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Header Area */}
      <div className="flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-3">
          <Circle
            size={8}
            fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
            className={liveStatus.isOpen ? "animate-pulse" : ""}
          />
          <span className="text-[10px] font-sans font-black tracking-[0.3em] uppercase text-accent">
            {liveStatus.isOpen ? "Now Serving" : "Kitchen Closed"}
          </span>
        </div>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-accent p-2 bg-white/5 rounded-full"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center space-y-12 relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-sans font-bold">
            Discover
          </p>
          <a
            href="#buffet"
            onClick={() => setIsMenuOpen(false)}
            className="block text-4xl tracking-widest uppercase font-heading hover:text-accent transition-colors"
          >
            Daily Buffet
          </a>
        </div>

        {/* <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-sans font-bold">
            Menu
          </p>
          <a
            href="#menu"
            onClick={() => setIsMenuOpen(false)}
            className="block text-4xl tracking-widest uppercase font-heading hover:text-accent transition-colors"
          >
            Essentials
          </a>
        </div> */}

        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-sans font-bold">
            About
          </p>
          <a
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-4xl tracking-widest uppercase font-heading hover:text-accent transition-colors"
          >
            Our Story
          </a>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-sans font-bold">
            Location
          </p>
          <a
            href="#location"
            onClick={() => setIsMenuOpen(false)}
            className="block text-4xl tracking-widest uppercase font-heading hover:text-accent transition-colors"
          >
            Sanctuary
          </a>
        </div>
      </nav>

      {/* Bottom Footer Section */}
      <div className="relative z-10 pt-8 border-t border-white/10 space-y-8">
        <div className="flex flex-col space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-accent font-black">
            {liveStatus.isOpen ? liveStatus.service : "Next Opening"}
          </span>
          <p className="text-xl font-serif italic text-white/80">
            {liveStatus.isOpen ? liveStatus.nextEvent : "Wed 11:00 AM"}
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <a
            href="tel:+13186003439"
            className="flex items-center justify-between bg-accent text-primary px-6 py-4 rounded-sm font-sans font-black text-[10px] uppercase tracking-widest"
          >
            <span>Call to Order</span>
            <Phone size={14} />
          </a>

          <div className="flex items-center justify-center space-x-2 opacity-40 text-[9px] uppercase tracking-[0.3em] font-sans font-bold">
            <MapPin size={12} />
            <span>Monroe, Louisiana</span>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-1/4 -right-12 opacity-5 rotate-90 pointer-events-none">
        <h2 className="font-heading text-8xl whitespace-nowrap tracking-[0.5em] select-none text-white">
          HIMALAYAN
        </h2>
      </div>
    </div>
  );
};

export default MobileMenu;
