import React from "react";
import {
  Clock,
  MapPin,
  Phone,
  ExternalLink,
  Calendar,
  Circle,
} from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const LocationSection = () => {
  const liveStatus = useLiveStatus();

  return (
    <section
      id="location"
      className="py-32 px-6 bg-white text-[#500913] relative"
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

      <div className="max-w-[1200px] items-center mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left Side: Contact Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-marcellus leading-tight">
              Plan Your <br />
              <span className="text-[#d4af37] italic font-ebgaramond">
                Visit
              </span>
            </h2>
            <div className="w-20 h-1 bg-[#d4af37]"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            {/* Address Block */}
            <div className="space-y-3">
              <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[#d4af37]">
                Find Us
              </h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=3600+Desiard+St+Monroe+LA"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <p className="text-xl font-raleway font-bold group-hover:text-[#d4af37] transition-colors">
                  Monroe, Louisiana
                </p>
                <p className="text-sm font-raleway opacity-60 flex items-center mt-1">
                  3600 Desiard St.{" "}
                  <ExternalLink
                    size={12}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </p>
              </a>
            </div>

            {/* Phone Block */}
            <div className="space-y-3">
              <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[#d4af37]">
                Direct Line
              </h4>
              <a
                href="tel:+13186003439"
                className="text-2xl font-ebgaramond italic hover:text-[#d4af37] transition-colors"
              >
                318.600.3439
              </a>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-raleway">
                Tap to call
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Hours Card with Live Feedback */}
        <div className="bg-[#500913] text-white p-10 md:p-16 shadow-[0_20px_50px_rgba(80,9,19,0.3)] relative overflow-hidden rounded-sm">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="flex justify-between items-start relative z-10 mb-12">
            <h3 className="text-3xl flex items-center font-marcellus">
              <Clock className="mr-4 text-[#d4af37]" size={28} /> Service Hours
            </h3>

            {/* Live Indicator Pill */}
            <div
              className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${
                liveStatus.isOpen
                  ? "border-green-500/30 bg-green-500/10 text-green-400"
                  : "border-white/10 bg-white/5 text-white/40"
              }`}
            >
              <Circle
                size={8}
                fill="currentColor"
                className={liveStatus.isOpen ? "animate-pulse" : ""}
              />
              <span>{liveStatus.isOpen ? "Open" : "Closed"}</span>
            </div>
          </div>

          <div className="space-y-10 relative z-10 font-raleway">
            <div className="flex flex-col md:flex-row justify-between border-b border-white/10 pb-8 gap-6">
              <div className="space-y-1">
                <span className="font-black uppercase text-[10px] tracking-[0.3em] text-[#d4af37]">
                  Service Days
                </span>
                <p className="text-xl font-bold">Wednesday — Monday</p>
                <p className="text-xs italic font-ebgaramond opacity-60">
                  *Rest Day: Tuesday
                </p>
              </div>

              <div className="text-right space-y-4">
                <div
                  className={`flex flex-col transition-opacity duration-500 ${
                    liveStatus.service === "LUNCH BUFFET"
                      ? "opacity-100"
                      : "opacity-40"
                  }`}
                >
                  <span className="text-[9px] uppercase tracking-widest mb-1 font-black">
                    Lunch Buffet
                  </span>
                  <p className="text-xl font-ebgaramond italic text-[#d4af37] leading-none">
                    11:00 am — 2:00 pm
                  </p>
                </div>

                <div
                  className={`flex flex-col transition-opacity duration-500 ${
                    liveStatus.service === "DINE IN"
                      ? "opacity-100"
                      : "opacity-40"
                  }`}
                >
                  <span className="text-[9px] uppercase tracking-widest mb-1 font-black">
                    Dinner Dine-In
                  </span>
                  <div className="space-y-1">
                    <p className="text-xl font-ebgaramond italic leading-none">
                      Sun — Thu: <span className="text-[#d4af37]">9:00 pm</span>
                    </p>
                    <p className="text-xl font-ebgaramond italic leading-none">
                      Fri & Sat:{" "}
                      <span className="text-[#d4af37]">10:00 pm</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Status Display Footer */}
          <div className="mt-12 flex flex-col items-center justify-center bg-black/30 p-6 border border-white/5 space-y-2">
            <p className="text-[10px] font-black tracking-[0.4em] text-[#d4af37] uppercase">
              {liveStatus.status}
            </p>
            <p className="text-sm font-marcellus tracking-widest text-white uppercase text-center">
              {liveStatus.nextEvent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
