"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BuffetSection from "./components/BuffetSection";
import MenuSection from "./components/MenuSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Styling Objects for consistent typography
  const fontTitle = { fontFamily: "'Marcellus', serif" };
  const fontSub = { fontFamily: "'EB Garamond', serif" };
  const fontBody = { fontFamily: "'Raleway', sans-serif" };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen selection:bg-[#d4af37] selection:text-white overflow-x-hidden bg-[#6d101e]"
      style={fontBody}
    >
      <div className="grain" />

      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        fontTitle={fontTitle}
      />

      {isMenuOpen && (
        <MobileMenu setIsMenuOpen={setIsMenuOpen} fontTitle={fontTitle} />
      )}

      <Hero fontTitle={fontTitle} fontSub={fontSub} />

      <BuffetSection
        fontTitle={fontTitle}
        fontSub={fontSub}
        fontBody={fontBody}
      />

      <MenuSection fontTitle={fontTitle} fontSub={fontSub} />

      <LocationSection
        fontTitle={fontTitle}
        fontSub={fontSub}
        fontBody={fontBody}
      />

      <Footer fontTitle={fontTitle} />
    </main>
  );
}
