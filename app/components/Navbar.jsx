import React from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  Circle,
  UtensilsCrossed,
  MapPin,
  ClipboardList,
} from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  const liveStatus = useLiveStatus();

  const navLinks = [
    { name: "Buffet", href: "#buffet", icon: <UtensilsCrossed size={14} /> },
    // { name: "Menu", href: "#menu", icon: <ClipboardList size={14} /> },
    { name: "Location", href: "#location", icon: <MapPin size={14} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-[60] transition-all duration-700 ${
        scrolled
          ? "py-3 bg-[#500913]/98 backdrop-blur-xl shadow-2xl border-b border-[#d4af37]/20"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-12 items-center">
        {/* Logo Section (4 Cols) */}
        <div className="lg:col-span-3 flex flex-col items-start group cursor-pointer">
          <h1 className="text-xl md:text-2xl tracking-[0.3em] leading-none text-[#d4af37] font-marcellus transition-all group-hover:tracking-[0.4em]">
            HIMALAYAN
          </h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-[9px] tracking-[0.5em] text-white/50 font-raleway font-light">
              CAFE
            </span>
            <div className="h-[1px] w-8 bg-[#d4af37]/20"></div>
          </div>
        </div>

        {/* Navigation Links (5 Cols) - Desktop Only */}
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

          {/* Vertical Divider */}
          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

          {/* Inline Live Status */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Circle
                size={6}
                fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
                className={liveStatus.isOpen ? "animate-pulse" : ""}
              />
            </div>
            <span className="text-[9px] font-raleway font-bold tracking-widest text-white/40 uppercase">
              {liveStatus.status}
            </span>
          </div>
        </div>

        {/* Action & Mobile Toggle (3 Cols) */}
        <div className="lg:col-span-3 flex justify-end items-center space-x-6">
          <a
            href="tel:+13186003439"
            className="hidden sm:flex items-center group bg-[#d4af37]/5 hover:bg-[#d4af37] border border-[#d4af37]/20 px-5 py-2.5 transition-all duration-500"
          >
            <div className="flex flex-col text-right mr-3">
              <span className="text-[8px] font-black tracking-widest text-[#d4af37] group-hover:text-[#500913] uppercase transition-colors">
                {liveStatus.service || "Contact"}
              </span>
              <span className="text-[10px] font-marcellus text-white group-hover:text-[#500913] transition-colors">
                318.600.3439
              </span>
            </div>
            <Phone
              size={14}
              className="text-[#d4af37] group-hover:text-[#500913] transition-colors"
            />
          </a>

          <button
            className="lg:hidden text-[#d4af37] p-1 transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
