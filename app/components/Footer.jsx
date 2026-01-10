import React from "react";
import { Instagram, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 px-6 bg-[#500913] text-white border-t border-white/5 overflow-hidden">
      {/* Background Texture (Carbon Fibre) to match the dashboard boxes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="group mb-12 flex flex-col items-center space-y-2 text-[#d4af37]/40 hover:text-[#d4af37] transition-colors"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em]">
            To the Summit
          </span>
          <div className="p-3 border border-[#d4af37]/20 rounded-full group-hover:border-[#d4af37] transition-all">
            <ArrowUp size={16} />
          </div>
        </button>

        {/* Branding - Mirrored from Navbar */}
        <div className="flex flex-col items-center group cursor-default mb-12">
          <h2 className="text-2xl md:text-3xl tracking-[0.4em] leading-none text-[#d4af37] font-marcellus">
            HIMALAYAN
          </h2>
          <div className="flex items-center space-x-3 mt-2">
            <div className="h-[1px] w-8 bg-[#d4af37]/30"></div>
            <span className="text-[10px] tracking-[0.6em] text-white/40 font-raleway font-light">
              KITCHEN
            </span>
            <div className="h-[1px] w-8 bg-[#d4af37]/30"></div>
          </div>
        </div>

        {/* Social Navigation */}
        <div className="flex items-center space-x-10 mb-16">
          <a
            href="https://www.instagram.com/himalayancafe3600/"
            target="_blank"
            rel="noreferrer"
            className="p-4 border border-white/5 bg-white/5 hover:bg-[#d4af37] hover:text-[#500913] hover:border-[#d4af37] transition-all duration-500 rounded-sm"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556177723264"
            target="_blank"
            rel="noreferrer"
            className="p-4 border border-white/5 bg-white/5 hover:bg-[#d4af37] hover:text-[#500913] hover:border-[#d4af37] transition-all duration-500 rounded-sm"
          >
            <Facebook size={20} />
          </a>
        </div>

        {/* Credits & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-raleway font-bold uppercase tracking-[0.4em] text-white/30">
            © {new Date().getFullYear()} Himalayan Kitchen & Cafe
          </p>

          <div className="flex space-x-8 text-[9px] font-raleway font-bold uppercase tracking-[0.2em] text-white/20">
            <span className="hover:text-[#d4af37] cursor-default transition-colors">
              Authentic Cuisine
            </span>
            <span className="hover:text-[#d4af37] cursor-default transition-colors">
              Monroe, Louisiana
            </span>
          </div>

          <p className="text-[9px] font-raleway font-bold uppercase tracking-[0.4em] text-white/30">
            Designed by <span className="text-white/50">George Khawas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
