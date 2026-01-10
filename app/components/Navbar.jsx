"use client";

import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  Circle,
  UtensilsCrossed,
  MapPin,
} from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus"; // Adjust path
import MobileMenu from "./MobileMenu"; // Import it here so it's part of the Nav system
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const liveStatus = useLiveStatus();

  // Internal scroll logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Buffet", href: "/#buffet", icon: <UtensilsCrossed size={14} /> },
    { name: "Location", href: "/#location", icon: <MapPin size={14} /> },
    { name: "Our Story", href: "/about", icon: <Circle size={8} /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[60] transition-all duration-700 ${
          scrolled
            ? "py-3 bg-[#500913]/98 backdrop-blur-xl shadow-2xl border-b border-[#d4af37]/20"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-12 items-center">
          {/* Logo Section */}
          <div className="lg:col-span-3 flex flex-col items-start group cursor-pointer">
            <Link href="/">
              <h1 className="text-xl md:text-2xl tracking-[0.3em] leading-none text-[#d4af37] font-heading transition-all group-hover:tracking-[0.4em]">
                HIMALAYAN
              </h1>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[9px] tracking-[0.5em] text-white/50 font-sans font-light uppercase">
                  Cafe
                </span>
                <div className="h-[1px] w-8 bg-[#d4af37]/20"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center space-x-2 text-[10px] font-black tracking-[0.3em] uppercase text-white/70 hover:text-[#d4af37] transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#d4af37]">
                  {link.icon}
                </span>
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

            {/* Live Status */}
            <div className="flex items-center space-x-3">
              <Circle
                size={6}
                fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
                className={liveStatus.isOpen ? "animate-pulse" : ""}
              />
              <span className="text-[9px] font-sans font-bold tracking-widest text-white/40 uppercase">
                {liveStatus.status}
              </span>
            </div>
          </div>

          {/* Mobile Toggle & Call */}
          <div className="lg:col-span-3 flex justify-end items-center space-x-6">
            <a
              href="tel:+13186003439"
              className="hidden sm:flex items-center group bg-[#d4af37]/5 hover:bg-[#d4af37] border border-[#d4af37]/20 px-5 py-2.5 transition-all duration-500"
            >
              <div className="flex flex-col text-right mr-3">
                <span className="text-[8px] font-black tracking-widest text-[#d4af37] group-hover:text-[#500913] uppercase transition-colors">
                  {liveStatus.service || "Call Now"}
                </span>
                <span className="text-[10px] font-heading text-white group-hover:text-[#500913] transition-colors">
                  318.600.3439
                </span>
              </div>
              <Phone
                size={14}
                className="text-[#d4af37] group-hover:text-[#500913] transition-colors"
              />
            </a>

            <button
              className="lg:hidden text-[#d4af37] p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu integrated */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};

export default Navbar;
