import React from "react";
import { X, Phone, MapPin } from "lucide-react";

const MobileMenu = ({ setIsMenuOpen }) => (
  <div className="fixed inset-0 z-[100] bg-[#500913] flex flex-col items-center justify-center p-6 text-white transition-all duration-500">
    {/* Close Button */}
    <button
      onClick={() => setIsMenuOpen(false)}
      className="absolute top-8 right-8 text-[#d4af37] p-2 hover:bg-white/5 rounded-full transition-colors"
      aria-label="Close Menu"
    >
      <X size={32} />
    </button>

    {/* Navigation Links */}
    <nav className="flex flex-col items-center space-y-10 text-center">
      <div className="mb-4">
        <span className="text-[10px] tracking-[0.5em] text-[#d4af37] uppercase font-black font-raleway">
          Exploration
        </span>
      </div>

      <a
        href="#buffet"
        onClick={() => setIsMenuOpen(false)}
        className="text-2xl tracking-[0.2em] uppercase font-marcellus hover:text-[#d4af37] transition-colors"
      >
        Daily Buffet
      </a>
      <a
        href="#location"
        onClick={() => setIsMenuOpen(false)}
        className="text-2xl tracking-[0.2em] uppercase font-marcellus hover:text-[#d4af37] transition-colors"
      >
        Visit Us
      </a>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-[#d4af37]/30 my-4"></div>

      {/* Quick Contact Actions */}
      <div className="flex flex-col items-center space-y-6 pt-4">
        <a
          href="tel:+13186003439"
          className="flex items-center space-x-3 text-[#d4af37] font-ebgaramond italic text-2xl"
        >
          <Phone size={20} className="not-italic" />
          <span>318.600.3439</span>
        </a>

        <a
          href="#location"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center space-x-2 text-sm uppercase tracking-[0.2em] font-raleway opacity-70"
        >
          <MapPin size={16} />
          <span>Monroe, Louisiana</span>
        </a>
      </div>
    </nav>

    {/* Background Branding Decor */}
    <div className="absolute bottom-12 opacity-10 pointer-events-none">
      <h2 className="font-marcellus text-2xl whitespace-nowrap tracking-[0.5em] select-none">
        HIMALAYAN
      </h2>
    </div>
  </div>
);

export default MobileMenu;
