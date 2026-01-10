import React from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen, fontTitle }) => (
  <nav
    className={`fixed w-full z-[60] transition-all duration-500 border-b ${
      scrolled
        ? "py-3 shadow-2xl border-[#d4af37]/20 bg-[#121212]"
        : "py-6 bg-transparent border-transparent"
    }`}
  >
    <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
      <div className="flex flex-col group cursor-pointer">
        <h1
          className="text-xl tracking-[0.4em] leading-none text-[#d4af37]"
          style={fontTitle}
        >
          HIMALAYAN
        </h1>
        <h1
          className="text-xl tracking-[0.4em] mt-1 text-white"
          style={fontTitle}
        >
          CAFE
        </h1>
      </div>

      <div className="hidden lg:flex items-center space-x-10 text-[10px] tracking-[0.2em] uppercase font-bold text-white">
        <a href="#menu" className="hover:text-[#d4af37] transition-colors">
          The Menu
        </a>
        <a href="#buffet" className="hover:text-[#d4af37] transition-colors">
          Buffet Info
        </a>
        <a href="#location" className="hover:text-[#d4af37] transition-colors">
          Location
        </a>
        <a
          href="tel:+13186003439"
          className="bg-[#d4af37] text-white px-6 py-2 hover:bg-white hover:text-[#121212] transition-all duration-300"
        >
          Call Now
        </a>
      </div>

      <button
        className="lg:hidden text-[#d4af37]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>
    </div>
  </nav>
);

export default Navbar;
