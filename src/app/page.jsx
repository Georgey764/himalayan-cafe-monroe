"use client";

import Hero from "./(helpers)/Hero";
import BuffetSection from "./(helpers)/BuffetSection";
import AboutSection from "./(helpers)/AboutSection";
import LocationSection from "./(helpers)/LocationSection";
import MenuSection from "./(helpers)/MenuSection";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#d4af37] selection:text-white overflow-x-hidden bg-[#6d101e] font-raleway">
      <div className="grain" />
      <Hero />
      <BuffetSection />
      <AboutSection />
      <MenuSection />
      <LocationSection />
    </main>
  );
}
