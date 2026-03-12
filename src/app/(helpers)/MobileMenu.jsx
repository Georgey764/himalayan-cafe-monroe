"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  Phone,
  MapPin,
  Circle,
  Globe,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";
import { useLiveStatus } from "@/hooks/useLiveStatus";

const MobileMenu = ({ setIsMenuOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const liveStatus = useLiveStatus();

  const ONLINE_ORDER_URL =
    "https://order.online/store/-1144213/?delivery=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnGbJPa6QZnm3-nvpnpygb-3W5pIQo_YGlsUoK9LErFZeiAKfBDGaBbnd66odsgHnUfQkmnqDSSJ7RFIEuMyrfhLGaVTlA%3D%3D";

  // Prevent background scrolling when menu is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const navLinks = [
    { label: "Menu", href: "/menu", sub: "Varieties" },
    { label: "Catering", href: "/catering", sub: "Service" },
    { label: "Buffet", href: "/#buffet", sub: "Discover" },
    { label: "Our Story", href: "/about", sub: "About" },
    { label: "Visit Us", href: "/#location", sub: "Location" },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-primary flex flex-col p-8 text-white animate-in fade-in zoom-in-95 duration-300">
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
        aria-hidden="true"
      ></div>

      {/* Header Area */}
      <div className="flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-3">
          <Circle
            size={8}
            fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
            className={liveStatus.isOpen ? "animate-pulse" : ""}
          />
          <span className="text-[10px] font-sans font-black tracking-[0.3em] uppercase text-accent">
            {liveStatus.status}
          </span>
        </div>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-accent p-2 bg-white/5 rounded-full active:scale-90 transition-transform"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="overflow-y-scroll flex-1 pt-24 pb-6 flex flex-col justify-center space-y-10 relative z-10">
        {navLinks.map((link) => (
          <div key={link.label} className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-sans font-bold">
              {link.sub}
            </p>
            <a
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl tracking-widest uppercase font-heading hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Bottom Footer Section */}
      <div className="relative z-10 pt-8 border-t border-white/10 space-y-8">
        <div className="flex flex-col space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-accent font-black">
            {liveStatus.service || "HIMALAYAN CAFE"}
          </span>
          <p className="text-xl font-serif italic text-white/80">
            {liveStatus.nextEvent}
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          {/* UPDATED: TRIGGER MODAL INSTEAD OF DIRECT CALL */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-between bg-accent text-primary px-6 py-4 rounded-sm font-sans font-black text-[10px] uppercase tracking-widest active:bg-white transition-colors cursor-pointer"
          >
            <span>Order Now</span>
            <UtensilsCrossed size={14} />
          </button>

          <div className="flex items-center justify-center space-x-2 opacity-40 text-[9px] uppercase tracking-[0.3em] font-sans font-bold">
            <MapPin size={12} />
            <span>Monroe, Louisiana</span>
          </div>
        </div>
      </div>

      {/* --- ORDER MODAL (HIGHER Z-INDEX) --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-midnight/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-primary border border-accent/20 max-w-sm w-full p-8 rounded-3xl shadow-2xl space-y-6 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-accent/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-heading text-white tracking-wide">
                Ready to eat?
              </h3>
              <p className="text-white/40 font-serif italic text-xs">
                Choose your preferred method.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={ONLINE_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-accent text-primary p-5 rounded-xl hover:bg-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Globe size={20} />
                  <span className="font-black text-[10px] uppercase tracking-[0.1em]">
                    Online Order
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="tel:+13186003439"
                className="flex items-center justify-between border border-white/10 text-white p-5 rounded-xl hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <span className="font-black text-[10px] uppercase tracking-[0.1em]">
                    Call Order
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Background Decor */}
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-16 opacity-5 rotate-90 pointer-events-none select-none"
      >
        <h2 className="font-heading text-8xl whitespace-nowrap tracking-[0.5em] text-white">
          HIMALAYAN
        </h2>
      </div>
    </div>
  );
};

export default MobileMenu;
