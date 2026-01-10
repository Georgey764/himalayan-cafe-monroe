import React from "react";
import { Phone, MapPin, Circle } from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const Hero = ({ fontTitle, fontSub }) => {
  const liveStatus = useLiveStatus();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#6d101e] z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
          alt="Authentic Spices"
          className="w-full h-full object-cover scale-105 opacity-40"
        />
      </div>

      <div className="relative z-20 w-full max-w-4xl px-6 text-center">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-full h-2 ${
              liveStatus.isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <div className="flex flex-col items-center mb-6 text-white">
            <div
              className={`flex items-center space-x-3 mb-2 px-6 py-1 rounded-full ${
                liveStatus.isOpen
                  ? "bg-green-500/10 text-green-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              <Circle
                size={10}
                fill="currentColor"
                className={liveStatus.isOpen ? "animate-pulse" : ""}
              />
              <span className="text-xl md:text-2xl font-black tracking-[0.3em] uppercase">
                {liveStatus.status}
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-2"
              style={fontTitle}
            >
              {liveStatus.service}
            </h2>
            <p
              className="text-lg md:text-2xl italic opacity-80 text-[#d4af37]"
              style={fontSub}
            >
              {liveStatus.nextEvent}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="tel:+13185550199"
              className="bg-[#d4af37] text-white px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center"
            >
              <Phone size={16} className="mr-3" /> Call to Order
            </a>
            <a
              href="#location"
              className="border border-white/20 text-white px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center"
            >
              Get Directions <MapPin size={16} className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
