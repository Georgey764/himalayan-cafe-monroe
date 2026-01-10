import React from "react";
import { X } from "lucide-react";

const MobileMenu = ({ setIsMenuOpen, fontTitle }) => (
  <div className="fixed inset-0 z-[70] bg-[#121212] flex flex-col items-center justify-center space-y-12 text-white">
    <button
      onClick={() => setIsMenuOpen(false)}
      className="absolute top-10 right-10 text-[#d4af37]"
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
  </div>
);

export default MobileMenu;
