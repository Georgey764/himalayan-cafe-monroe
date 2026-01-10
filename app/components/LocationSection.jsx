import React from "react";
import { Clock, MapPin, Phone, ExternalLink } from "lucide-react";
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
                href="https://maps.app.goo.gl/6sTJAsuh8NvYFVLN7"
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

        {/* Right Side: Hours Card */}
        <div className="bg-[#500913] text-white p-10 md:p-16 shadow-[0_20px_50px_rgba(80,9,19,0.3)] relative overflow-hidden rounded-sm">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <h3 className="text-3xl mb-12 flex items-center font-marcellus relative z-10">
            <Clock className="mr-4 text-[#d4af37]" size={28} /> Service Hours
          </h3>

          <div className="space-y-10 relative z-10">
            <div className="flex justify-between border-b border-white/10 pb-8 items-end">
              <div className="space-y-1">
                <span className="font-black uppercase text-[10px] tracking-[0.3em] text-[#d4af37]">
                  Weekly
                </span>
                <p className="text-xl font-raleway font-bold">Wed — Mon</p>
              </div>
              <div className="text-right space-y-2">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-tighter opacity-50 mb-1">
                    Lunch
                  </span>
                  <p className="text-2xl font-ebgaramond italic text-[#d4af37] leading-none">
                    11:00{" "}
                    <span className="text-sm uppercase not-italic opacity-70">
                      am
                    </span>{" "}
                    — 2:00{" "}
                    <span className="text-sm uppercase not-italic opacity-70">
                      pm
                    </span>
                  </p>
                </div>
                <div className="flex flex-col pt-2">
                  <span className="text-[9px] uppercase tracking-tighter opacity-50 mb-1">
                    Dinner
                  </span>
                  <p className="text-xl font-ebgaramond italic opacity-80 leading-none">
                    5:00{" "}
                    <span className="text-sm uppercase not-italic opacity-70">
                      pm
                    </span>{" "}
                    — 9:00{" "}
                    <span className="text-sm uppercase not-italic opacity-70">
                      pm
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Status Badge */}
          <div className="mt-12 flex items-center justify-between bg-black/30 p-6 border border-white/5">
            <div className="flex items-center space-x-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  liveStatus.isOpen
                    ? "bg-green-500 animate-pulse"
                    : "bg-red-500"
                }`}
              ></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">
                Status
              </span>
            </div>
            <p className="text-lg font-marcellus tracking-[0.2em] text-[#d4af37]">
              {liveStatus.status}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
