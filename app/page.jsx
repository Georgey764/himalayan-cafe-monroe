"use client";

import Hero from "./components/Hero";
import BuffetSection from "./components/BuffetSection";
import AboutSection from "./components/AboutSection";
import LocationSection from "./components/LocationSection";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#d4af37] selection:text-white overflow-x-hidden bg-[#6d101e] font-raleway">
      <div className="grain" />
      <Hero />
      <BuffetSection />
      <AboutSection />
      <LocationSection />
    </main>
  );
}
