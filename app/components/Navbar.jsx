import React from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => (
  <nav
    className={`fixed w-full z-[60] transition-all duration-500 border-b ${
      scrolled
        ? "py-3 shadow-2xl border-[#d4af37]/20 bg-[#500913]"
        : "py-6 bg-transparent border-transparent"
    }`}
  >
    <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
      {/* Brand Logo - Uses marcellus from global CSS */}
      <div className="flex flex-col group cursor-pointer">
        <h1 className="text-xl tracking-[0.4em] leading-none text-[#d4af37] font-marcellus">
          HIMALAYAN
        </h1>
        <h1 className="text-xl tracking-[0.4em] mt-1 text-white font-marcellus">
          CAFE
        </h1>
      </div>

      {/* Desktop Navigation - Uses Raleway for UI elements */}
      <div className="hidden lg:flex items-center space-x-10 text-[10px] tracking-[0.3em] uppercase font-black text-white font-raleway">
        {/* <a href="#menu" className="hover:text-[#d4af37] transition-colors">
          The Menu
        </a> */}
        <a href="#buffet" className="hover:text-[#d4af37] transition-colors">
          Buffet Info
        </a>
        <a href="#location" className="hover:text-[#d4af37] transition-colors">
          Location
        </a>
        <a
          href="tel:+13186003439"
          className="bg-[#d4af37] text-[#500913] px-6 py-2.5 hover:bg-white hover:text-[#500913] transition-all duration-300 shadow-lg"
        >
          Call Now
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden text-[#d4af37] p-2 hover:bg-white/5 rounded-full transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
      </button>
    </div>
  </nav>
);

export default Navbar;
