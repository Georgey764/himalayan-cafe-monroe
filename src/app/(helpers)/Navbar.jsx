"use client";

import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  Circle,
  UtensilsCrossed,
  MapPin,
  BookOpen,
  Users,
} from "lucide-react";
import { useLiveStatus } from "../../hooks/useLiveStatus";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const liveStatus = useLiveStatus();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu", icon: <BookOpen size={14} /> },
    { name: "Buffet", href: "/#buffet", icon: <UtensilsCrossed size={14} /> },
    { name: "Catering", href: "/catering", icon: <Users size={14} /> }, // New Link
    { name: "Location", href: "/#location", icon: <MapPin size={14} /> },
    { name: "Our Story", href: "/about", icon: <Circle size={8} /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[60] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-primary/98 backdrop-blur-xl shadow-2xl border-b border-border-gold"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-12 items-center">
          {/* Logo Section - Span 3 */}
          <div className="lg:col-span-3 flex flex-col items-start group">
            <Link href="/" className="inline-block">
              <h1 className="text-xl md:text-2xl tracking-[0.2em] leading-none text-accent font-heading transition-all group-hover:tracking-[0.3em]">
                HIMALAYAN
              </h1>
              <div className="flex items-center space-x-2 mt-1.5">
                <span className="text-[9px] tracking-[0.4em] text-parchment/50 font-sans font-light uppercase">
                  Cafe
                </span>
                <div className="h-[1px] w-6 bg-accent/20 transition-all group-hover:w-10 group-hover:bg-accent/50"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Links - Span 6 (Increased density to fit all items) */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative flex items-center space-x-2 text-[9px] font-bold tracking-[0.2em] uppercase text-parchment/80 hover:text-accent transition-all whitespace-nowrap"
              >
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent hidden xl:block">
                  {link.icon}
                </span>
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="h-4 w-[1px] bg-parchment/10 mx-1"></div>

            {/* Live Status Pill */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-midnight/30 border border-parchment/5 shrink-0">
              <Circle
                size={6}
                fill={liveStatus.isOpen ? "var(--color-success)" : "#ef4444"}
                className={liveStatus.isOpen ? "animate-pulse" : ""}
              />
              <span className="text-[8px] font-sans font-bold tracking-widest text-parchment/40 uppercase">
                {liveStatus.status === "OPEN NOW" ? "LIVE" : "CLOSED"}
              </span>
            </div>
          </div>

          {/* Mobile Toggle & Call - Span 3 */}
          <div className="lg:col-span-3 flex justify-end items-center space-x-4">
            <a
              href="tel:+13186003439"
              className="hidden xl:flex items-center group bg-accent/5 hover:bg-accent border border-border-gold px-4 py-2 transition-all duration-500 rounded-sm"
            >
              <div className="flex flex-col text-right mr-3">
                <span className="text-[7px] font-black tracking-widest text-accent group-hover:text-primary uppercase transition-colors">
                  {liveStatus.service || "Contact"}
                </span>
                <span className="text-[10px] font-heading text-parchment group-hover:text-primary transition-colors whitespace-nowrap">
                  318.600.3439
                </span>
              </div>
              <Phone
                size={12}
                className="text-accent group-hover:text-primary transition-colors"
              />
            </a>

            <button
              className="lg:hidden text-accent p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};

export default Navbar;
