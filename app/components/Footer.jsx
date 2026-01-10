import React from "react";
import { Instagram, Facebook } from "lucide-react";

const Footer = ({ fontTitle }) => (
  <footer className="py-24 px-8 bg-[#6d101e] text-white border-t border-white/5">
    <div className="max-w-[1400px] mx-auto text-center">
      <h2
        className="text-3xl tracking-[0.6em] mb-4 text-[#d4af37]"
        style={fontTitle}
      >
        HIMALAYAN CAFE
      </h2>
      <div className="flex justify-center space-x-12 mb-12">
        <a target="_blank" href="https://www.instagram.com/himalayancafe3600/">
          <Instagram
            size={20}
            className="hover:text-[#d4af37] cursor-pointer"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556177723264"
          target="_blank"
        >
          <Facebook size={20} className="hover:text-[#d4af37] cursor-pointer" />
        </a>
      </div>
      <p className="text-[10px] uppercase opacity-20">
        © {new Date().getFullYear()} George Khawas
      </p>
    </div>
  </footer>
);

export default Footer;
