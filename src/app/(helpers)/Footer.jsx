"use client";

import React from "react";
import { Instagram, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-20 px-6 bg-primary text-white border-t border-accent-muted overflow-hidden">
      {/* Background Texture - matches the dashboard feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="group mb-12 flex flex-col items-center space-y-2 text-accent/40 hover:text-accent transition-colors"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em] font-sans">
            To the Summit
          </span>
          <div className="p-3 border border-accent-muted rounded-full group-hover:border-accent transition-all">
            <ArrowUp size={16} />
          </div>
        </button>

        {/* Branding - Using semantic classes */}
        <div className="flex flex-col items-center group cursor-default mb-12">
          <h2 className="text-2xl md:text-3xl tracking-[0.4em] leading-none text-accent font-heading">
            HIMALAYAN
          </h2>
          <div className="flex items-center space-x-3 mt-2">
            <div className="h-[px] w-8 bg-accent-muted"></div>
            <span className="text-[10px] tracking-[0.6em] text-white/40 font-sans font-light uppercase">
              Cafe
            </span>
            <div className="h-[px] w-8 bg-accent-muted"></div>
          </div>
        </div>

        {/* Social Navigation */}
        <div className="flex items-center space-x-10 mb-16">
          <a
            href="https://www.instagram.com/himalayancafe3600/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-white/5 bg-white/5 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500 rounded-sm"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556177723264"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-white/5 bg-white/5 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500 rounded-sm"
          >
            <Facebook size={20} />
          </a>
        </div>

        {/* Credits & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-white/30">
            © {new Date().getFullYear()} Himalayan Cafe
          </p>

          <div className="flex space-x-8 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-white/20">
            <span className="hover:text-accent cursor-default transition-colors">
              Authentic Cuisine
            </span>
            <span className="hover:text-accent cursor-default transition-colors">
              Monroe, Louisiana
            </span>
          </div>

          {/* <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-white/30">
            Designed by <span className="text-white/50">George Khawas</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
